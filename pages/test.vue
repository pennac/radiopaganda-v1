<script setup>
import { orders, getOrder } from '~/data/bestiario'
import { quizQuestions } from '~/data/quiz'

const localePath = useLocalePath()
const { locale } = useI18n()
const seoDescription = {
  it: 'Il sistema ha delle domande. Scopri a quale specie appartieni tra i 7 Ordini di Radiopaganda — la classificazione è permanente.',
  en: 'The system has some questions. Find out which species you belong to among Radiopaganda\'s 7 Orders — the classification is permanent.',
  es: 'El sistema tiene preguntas. Descubre a qué especie perteneces entre las 7 Órdenes de Radiopaganda — la clasificación es permanente.',
}
useHead({
  title: 'Classificazione — RADIOPAGANDA',
  meta: computed(() => [
    { name: 'description', content: seoDescription[locale.value] || seoDescription.it },
    { property: 'og:description', content: seoDescription[locale.value] || seoDescription.it },
  ]),
})

const ui = computed(() => ({
  it: {
    label: 'CLASSIFICAZIONE',
    intro: 'Il sistema ha delle domande. Rispondi con sincerità: tanto lo sa già.',
    start: 'Inizia',
    questionOf: (n, total) => `DOMANDA ${n} / ${total}`,
    back: '← Indietro',
    permanent: 'CLASSIFICAZIONE PERMANENTE',
    viewInBestiario: 'Vedi nel Bestiario',
    listenSong: "Ascolta la canzone dell'ordine",
    restart: 'Ricomincia',
    stat: (n) => `Già classificati come te: ${n}.`,
    processing: 'CLASSIFICAZIONE IN CORSO',
    processingSub: 'Analisi del comportamento. Non serve fare nulla.',
  },
  en: {
    label: 'CLASSIFICATION',
    intro: 'The system has some questions. Answer honestly: it already knows anyway.',
    start: 'Start',
    questionOf: (n, total) => `QUESTION ${n} / ${total}`,
    back: '← Back',
    permanent: 'PERMANENT CLASSIFICATION',
    viewInBestiario: 'View in the Bestiary',
    listenSong: "Listen to the order's song",
    restart: 'Start over',
    stat: (n) => `Already classified like you: ${n}.`,
    processing: 'CLASSIFICATION IN PROGRESS',
    processingSub: 'Behavioral analysis. There is nothing you need to do.',
  },
  es: {
    label: 'CLASIFICACIÓN',
    intro: 'El sistema tiene algunas preguntas. Responde con sinceridad: total, ya lo sabe.',
    start: 'Empezar',
    questionOf: (n, total) => `PREGUNTA ${n} / ${total}`,
    back: '← Atrás',
    permanent: 'CLASIFICACIÓN PERMANENTE',
    viewInBestiario: 'Ver en el Bestiario',
    listenSong: 'Escucha la canción de la orden',
    restart: 'Empezar de nuevo',
    stat: (n) => `Ya clasificados como tú: ${n}.`,
    processing: 'CLASIFICACIÓN EN CURSO',
    processingSub: 'Análisis del comportamiento. No hace falta que hagas nada.',
  },
}[locale.value] || {}))

// "Riduci il movimento": i video di sfondo restano fermi sul primo frame.
const prefersReducedMotion = useReducedMotion()

// step: 'intro' -> 'quiz' -> 'result'
const step = ref('intro')
const currentIndex = ref(0)
const selectedAnswers = ref([]) // indice risposta scelta per ogni domanda

const selectedOrderSlug = ref(null)
const selectedSpeciesSlug = ref(null)
const speciesCount = ref(null)

const selectedOrder = computed(() => getOrder(selectedOrderSlug.value))
const selectedSpecies = computed(() =>
  selectedOrder.value?.species.find((s) => s.slug === selectedSpeciesSlug.value)
)

const currentQuestion = computed(() => quizQuestions[currentIndex.value])
const totalQuestions = quizQuestions.length
const progressPct = computed(() => Math.round((currentIndex.value / totalQuestions) * 100))

function questionText(q) {
  return q.text[locale.value] || q.text.it
}
function answerText(a) {
  return a.text[locale.value] || a.text.it
}
function claimFor(entry) {
  return entry.claim[locale.value] || entry.claim.it
}
function cardFor(species) {
  return species.card[locale.value] || species.card.it
}
function nameFor(entry) {
  return entry.name[locale.value] || entry.name.it
}
function subtitleFor(sp) {
  return sp.subtitle[locale.value] || sp.subtitle.it
}
function descriptionFor(sp) {
  return sp.description[locale.value] || sp.description.it
}

function startQuiz() {
  step.value = 'quiz'
  currentIndex.value = 0
  selectedAnswers.value = []
}

function goBack() {
  if (currentIndex.value > 0) currentIndex.value--
}

function selectAnswer(answerIndex) {
  selectedAnswers.value[currentIndex.value] = answerIndex
  if (currentIndex.value < totalQuestions - 1) {
    currentIndex.value++
  } else {
    computeResult()
  }
}

// Il sistema estrae l'Ordine con il punteggio più alto sommando i pesi delle
// risposte scelte; la specie (una delle 3 dell'Ordine) è determinata dalla
// somma degli indici di risposta, modulo 3 — precisione pseudo-scientifica,
// coerente col tono dell'Istituto: non ti chiede se sei d'accordo con l'ultima cifra.
async function computeResult() {
  const totals = Object.fromEntries(orders.map((o) => [o.slug, 0]))
  selectedAnswers.value.forEach((answerIdx, qIdx) => {
    const weights = quizQuestions[qIdx].answers[answerIdx].weights
    for (const slug in weights) {
      if (slug in totals) totals[slug] += weights[slug]
    }
  })

  let winningSlug = orders[0].slug
  let maxScore = -Infinity
  for (const o of orders) {
    if (totals[o.slug] > maxScore) {
      maxScore = totals[o.slug]
      winningSlug = o.slug
    }
  }
  const order = getOrder(winningSlug)
  const indexSum = selectedAnswers.value.reduce((sum, idx) => sum + idx, 0)
  const species = order.species[indexSum % order.species.length]

  selectedOrderSlug.value = winningSlug
  selectedSpeciesSlug.value = species.slug
  speciesCount.value = null

  // Breve momento di "elaborazione" prima del verdetto — dà peso al momento
  // di conversione più importante del sito invece di uno scambio istantaneo.
  // Saltato del tutto se l'utente ha chiesto di ridurre il movimento.
  step.value = 'processing'
  if (!prefersReducedMotion.value) {
    await new Promise((resolve) => setTimeout(resolve, 1400))
  }
  step.value = 'result'

  // La persistenza su Netlify Blobs è un arricchimento (contatore pubblico),
  // non un requisito bloccante: se la function non risponde (dev locale senza
  // Netlify, funzione non ancora deployata) la Carta Exemplar si mostra comunque.
  try {
    const res = await fetch('/api/classify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderSlug: winningSlug,
        speciesSlug: species.slug,
      }),
    })
    if (!res.ok) throw new Error('classify request failed')
    const data = await res.json()
    speciesCount.value = data.speciesCount ?? null
  } catch {
    speciesCount.value = null
  }
}

function reset() {
  step.value = 'intro'
  currentIndex.value = 0
  selectedAnswers.value = []
  selectedOrderSlug.value = null
  selectedSpeciesSlug.value = null
  speciesCount.value = null
}
</script>

<template>
  <div class="test">
    <!-- STEP 0: intro -->
    <SplitMedia v-if="step === 'intro'" reverse class="test-step test-step--square">
      <template #media>
        <video
          class="test-step__video"
          src="/videos/card-quiz/q0-polipo.mp4"
          :autoplay="!prefersReducedMotion"
          muted
          loop
          playsinline
          preload="auto"
        />
      </template>
      <p class="test__label">{{ ui.label }}</p>
      <h1 class="test__title">{{ ui.intro }}</h1>
      <template #cta>
        <button type="button" class="intro__start" @click="startQuiz">
          {{ ui.start }} →
        </button>
      </template>
    </SplitMedia>

    <!-- STEP 1: quiz, una domanda alla volta -->
    <SplitMedia v-else-if="step === 'quiz'" reverse align="start" class="test-step test-step--square">
      <template #media>
        <video
          v-if="currentQuestion.video"
          :key="currentQuestion.id"
          class="test-step__video"
          :src="currentQuestion.video"
          :autoplay="!prefersReducedMotion"
          muted
          loop
          playsinline
          preload="auto"
        />
      </template>
      <p class="test__label">{{ ui.label }}</p>
      <div class="quiz__progress">
        <div class="quiz__progress-bar" :style="{ width: progressPct + '%' }" />
      </div>
      <div class="quiz__head">
        <button
          v-if="currentIndex > 0"
          type="button"
          class="test__back"
          @click="goBack"
        >
          {{ ui.back }}
        </button>
        <span class="quiz__count">{{ ui.questionOf(currentIndex + 1, totalQuestions) }}</span>
      </div>
      <h1 class="quiz__question">{{ questionText(currentQuestion) }}</h1>
      <div class="quiz__answers">
        <button
          v-for="(a, i) in currentQuestion.answers"
          :key="i"
          type="button"
          class="quiz__answer"
          @click="selectAnswer(i)"
        >
          {{ answerText(a) }}
        </button>
      </div>
    </SplitMedia>

    <!-- STEP 1.5: elaborazione — breve beat prima del verdetto -->
    <div v-else-if="step === 'processing'" class="processing">
      <div class="processing__scan" aria-hidden="true" />
      <p class="processing__label">{{ ui.processing }}</p>
      <p class="processing__sub">{{ ui.processingSub }}</p>
    </div>

    <!-- STEP 2: Carta Exemplar -->
    <SplitMedia
      v-else-if="step === 'result' && selectedOrder && selectedSpecies"
      reverse
      align="start"
      class="test-step test-step--portrait"
    >
      <template #media>
        <video
          v-if="selectedSpecies.video"
          class="test-step__video"
          :src="selectedSpecies.video"
          :autoplay="!prefersReducedMotion"
          muted
          loop
          playsinline
          preload="auto"
        />
      </template>

      <p class="result__eyebrow">{{ ui.permanent }}</p>
      <p class="result__ejemplar">EJEMPLAR {{ selectedSpecies.ejemplar }}</p>
      <h1 class="result__name">{{ nameFor(selectedSpecies) }}</h1>
      <p class="result__latin">{{ selectedSpecies.latin }}</p>
      <p class="result__order">{{ selectedOrder.name }} — {{ subtitleFor(selectedSpecies) }}</p>
      <p v-for="(para, i) in descriptionFor(selectedSpecies)" :key="i" class="result__description">
        {{ para }}
      </p>

      <template #cta>
        <div class="result__cta-block">
          <div class="result__card">
            <p class="result__hook">{{ cardFor(selectedSpecies).hook }}</p>
            <p class="result__inst">{{ cardFor(selectedSpecies).inst }}</p>
            <p class="result__claim">{{ cardFor(selectedSpecies).cta }}</p>
          </div>

          <p v-if="speciesCount !== null" class="result__stat">{{ ui.stat(speciesCount) }}</p>

          <NuxtLink
            :to="localePath('/manifesto') + '#' + selectedOrder.slug"
            class="result__song-cta"
          >
            {{ ui.listenSong }}
            <span class="result__song-cta-arrow" aria-hidden="true">→</span>
          </NuxtLink>

          <div class="result__actions">
            <NuxtLink
              :to="localePath(`/bestiario/${selectedOrder.slug}`) + '#' + selectedSpeciesSlug"
              class="result__link"
            >
              {{ ui.viewInBestiario }}
            </NuxtLink>
            <button type="button" class="result__link result__link--reset" @click="reset">
              {{ ui.restart }}
            </button>
          </div>
        </div>
      </template>
    </SplitMedia>
  </div>
</template>

<style scoped>
.test {
  min-height: 100vh;
  padding-top: var(--nav-h);
}

/* ── STEP 1.5: elaborazione ── */
.processing {
  min-height: 100vh;
  padding-top: var(--nav-h);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-align: center;
  background: var(--rp-black);
  position: relative;
  overflow: hidden;
}

.processing__scan {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(217, 0, 0, 0.25) 50%, transparent 100%);
  transform: translateY(-100%);
  animation: processing-scan 1.4s linear infinite;
  pointer-events: none;
}

@keyframes processing-scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.processing__label {
  position: relative;
  z-index: 1;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.2em;
  color: var(--rp-white);
  animation: processing-pulse 1.1s ease-in-out infinite;
}

@keyframes processing-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.processing__sub {
  position: relative;
  z-index: 1;
  font-family: var(--font-text);
  font-size: 13px;
  color: var(--rp-white);
  opacity: 0.4;
  max-width: 320px;
}

/* Il video delle domande/intro è su fondo bianco (v5 white-sweep): sovrascrivo
   lo sfondo nero di default del blocco media di SplitMedia. */
.test-step :deep(.split-media__media) {
  background: var(--rp-white);
}

/* Fix: SplitMedia (non-hero) non impone un'altezza al blocco media — il video
   è position:absolute (non contribuisce altezza al flusso), quindi su mobile
   il blocco collassava a 0px ed era invisibile. Diamo un aspect-ratio esplicito,
   coerente con le dimensioni reali dei video (quadrati 960x960 per intro/quiz,
   ritratto 828x1108 per il video specie del risultato). */
.test-step--square :deep(.split-media__media) {
  aspect-ratio: 1;
}
.test-step--portrait :deep(.split-media__media) {
  aspect-ratio: 828 / 1108;
}
@media (min-width: 900px) {
  .test-step--square :deep(.split-media__media),
  .test-step--portrait :deep(.split-media__media) {
    aspect-ratio: auto;
    min-height: 480px;
  }
}

.test__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rp-black);
  opacity: 0.3;
  margin-bottom: 24px;
}

.test__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(32px, 5.5vw, 56px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--rp-black);
}

.test__back {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rp-black);
  opacity: 0.4;
  transition: opacity 0.2s;
}
.test__back:hover { opacity: 1; }

.intro__start {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--rp-black);
  color: var(--rp-white);
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 16px 28px;
  transition: background 0.2s, transform 0.2s;
}
.intro__start:hover { background: var(--rp-red); transform: translateX(4px); }

/* ── Quiz ── */
.quiz__progress {
  width: 100%;
  height: 2px;
  background: var(--rp-ice);
  margin-bottom: 32px;
}
.quiz__progress-bar {
  height: 100%;
  background: var(--rp-red);
  transition: width 0.3s ease;
}

.quiz__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  min-height: 16px;
}

.quiz__count {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-left: auto;
}

.quiz__question {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(26px, 4.5vw, 40px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--rp-black);
  margin-bottom: 32px;
}

.quiz__answers {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--rp-ice);
  border: 1px solid var(--rp-ice);
}

.quiz__answer {
  background: var(--rp-white);
  color: var(--rp-black);
  font-family: var(--font-text);
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
  padding: 20px 24px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, padding-left 0.15s;
}
.quiz__answer:hover {
  background: var(--rp-black);
  color: var(--rp-white);
  padding-left: 30px;
}

/* Carta Exemplar */
.result__eyebrow {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-bottom: 24px;
}

.result__ejemplar {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--rp-black);
  opacity: 0.5;
}

.result__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(38px, 6.5vw, 68px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
  margin-top: 8px;
}

.result__latin {
  font-family: var(--font-mono);
  font-style: italic;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-top: 10px;
}

.result__order {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--rp-black);
  opacity: 0.5;
  margin-top: 6px;
}

.result__description {
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.8;
  margin-top: 16px;
}

.result__cta-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.result__card {
  background: var(--rp-black);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.result__hook {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(18px, 2.6vw, 24px);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--rp-white);
}

.result__inst {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.5;
}

.result__claim {
  font-family: var(--font-mono);
  font-style: italic;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--rp-red);
}

.result__stat {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--rp-black);
  opacity: 0.5;
}

/* CTA canzone: momento di conversione verso l'album, non un link ricorrente
   come gli altri due — pill nera con hover rosso, stesso pattern dei CTA
   home (.home-cta), coerente con la regola "rosso solo per verdetto/CTA
   principali" invece di un rosso statico che competerebbe con .result__claim. */
.result__song-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
  background: var(--rp-black);
  color: var(--rp-white);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 16px 26px;
  border-radius: 999px;
  transition: background 0.25s ease, transform 0.25s ease;
}
.result__song-cta:hover {
  background: var(--rp-red);
  transform: translateY(-2px);
}
.result__song-cta-arrow {
  transition: transform 0.25s ease;
}
.result__song-cta:hover .result__song-cta-arrow {
  transform: translateX(4px);
}

.result__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.result__link {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-black);
  opacity: 0.6;
  transition: opacity 0.2s;
}
.result__link:hover { opacity: 1; }
.result__link--reset { color: var(--rp-black); opacity: 0.6; }
</style>
