<script setup>
// Hero Home: layout a due blocchi (SplitMedia), impilato su ogni breakpoint —
// video sopra, testo sotto (reverse inverte l'ordine mobile di default di
// SplitMedia; l'override :deep() qui sotto forza la colonna anche su
// desktop, al posto della riga affiancata di default del componente).
// Il video è il loop ambientale home-loop.mp4 (8s, muto, autoplay).
const { t, locale } = useI18n()
const localePath = useLocalePath()

const seoDescription = {
  it: 'Radiopaganda classifica la specie umana in 7 Ordini e 35 specie. Non vuole il tuo consenso: vuole la tua approvazione.',
  en: 'Radiopaganda classifies the human species into 7 Orders and 35 species. It does not want your consent: it wants your approval.',
  es: 'Radiopaganda clasifica a la especie humana en 7 Órdenes y 35 especies. No quiere tu consentimiento: quiere tu aprobación.',
}
useHead({
  title: 'RADIOPAGANDA',
  meta: computed(() => [
    { name: 'description', content: seoDescription[locale.value] || seoDescription.it },
    { property: 'og:description', content: seoDescription[locale.value] || seoDescription.it },
  ]),
})

const manifesto = {
  it: [
    'Non vuole il tuo consenso.',
    'Vuole la tua approvazione.',
    'Ha già scelto la tua specie.',
  ],
  en: [
    "It doesn't want your consent.",
    'It wants your approval.',
    'It has already chosen your species.',
  ],
  es: [
    'No quiere tu consentimiento.',
    'Quiere tu aprobación.',
    'Ya ha elegido tu especie.',
  ],
}

const lines = computed(() => manifesto[locale.value] || manifesto.it)

const rootEl = ref(null)
const prefersReducedMotion = useReducedMotion()

// Loop delle 3 frasi hero: una alla volta, cambio a intervalli regolari.
// Transizione = firma glitch VHS già usata nel burger menu e nelle
// transizioni di pagina (flicker a scatti + scan-line), non una nuova
// animazione — coerenza scelta esplicitamente da Pennac.
const currentLineIndex = ref(0)
let lineInterval = null

onMounted(async () => {
  // Import dinamico: gsap deve caricarsi solo lato client. Un import statico
  // in cima al file verrebbe eseguito anche in SSR e mandava in 500 la Home
  // (prima viveva dentro HomeLoop.client.vue, mai renderizzato server-side).
  const { gsap } = await import('gsap')

  // "Riduci il movimento": niente loop, niente glitch — le 3 frasi restano
  // impilate e ferme (vedi ramo v-if="prefersReducedMotion" nel template).
  if (prefersReducedMotion.value) return

  const lineEl = rootEl.value?.querySelector('.home-hero__line')
  const ctaEl = rootEl.value?.querySelector('.home-hero__cta')

  // gsap.from() invece di set()+to(): se un target manca o qualcosa fallisce
  // a metà, il testo resta comunque visibile di default (niente opacity:0
  // "bloccata" — questo era il bug che rendeva invisibili i testi in home).
  if (lineEl) {
    gsap.timeline({ delay: 0.2 })
      .from(lineEl, { opacity: 0, y: 16, duration: 0.7, ease: 'power2.out' })
      .from(ctaEl, { opacity: 0, duration: 0.5 }, '-=0.2')
  }

  // Il loop parte dopo l'ingresso iniziale (~1.2s), per non sovrapporre il
  // primo cambio frase al fade-up GSAP di apertura.
  lineInterval = setInterval(() => {
    currentLineIndex.value = (currentLineIndex.value + 1) % lines.value.length
  }, 2800)
})

onBeforeUnmount(() => {
  if (lineInterval) clearInterval(lineInterval)
})
</script>

<template>
  <div ref="rootEl" class="home">
    <SplitMedia hero reverse>
      <template #media>
        <video
          class="home-hero__video"
          src="/videos/home-loop.mp4"
          :autoplay="!prefersReducedMotion"
          muted
          loop
          playsinline
          preload="auto"
        />
      </template>

      <p class="home-hero__eyebrow">APPLIED SOCIOLOGICAL STUDIES. ON YOU.</p>

      <!-- "Riduci il movimento": le 3 frasi restano impilate e ferme, come
           in origine — nessun loop, nessun glitch. -->
      <div v-if="prefersReducedMotion" class="home-hero__lines-static">
        <p v-for="(line, i) in lines" :key="i" class="home-hero__line">{{ line }}</p>
      </div>

      <!-- Loop: una frase alla volta, cambio con la firma glitch VHS del
           sito (flicker a scatti), non un semplice crossfade. -->
      <div v-else class="home-hero__stage">
        <Transition name="hero-line" mode="out-in">
          <p :key="currentLineIndex" class="home-hero__line">{{ lines[currentLineIndex] }}</p>
        </Transition>
      </div>

      <template #cta>
        <div class="home-cta-group home-hero__cta">
          <NuxtLink :to="localePath('/test')" class="home-cta">
            <span class="home-cta__dot" aria-hidden="true"></span>
            <span class="home-cta__label">{{ t('home.cta') }}</span>
            <span class="home-cta__arrow" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </template>
    </SplitMedia>
  </div>
</template>

<style scoped>
.home { min-height: 100vh; }

/* Forza il layout impilato (video sopra, testo sotto) anche su desktop:
   SplitMedia di default passa a riga affiancata da 900px in su, qui invece
   vogliamo la stessa colonna del mobile su ogni breakpoint. */
@media (min-width: 900px) {
  .home :deep(.split-media) { flex-direction: column; }
  .home :deep(.split-media__media) {
    flex: none;
    min-height: 60vh;
  }
  .home :deep(.split-media__content) {
    flex: none;
    min-height: auto;
  }
}

.home-hero__video {
  width: 100%;
  height: 100%;
}

.home-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-bottom: 24px;
}

.home-hero__line {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(28px, 4.4vw, 52px);
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--rp-black);
}
/* Respiro tra le tre affermazioni (ramo statico, reduced-motion): ognuna è
   la sua frase, non un blocco unico. */
.home-hero__line:not(:last-child) {
  margin-bottom: 0.5em;
}

/* ── Loop frasi hero: una alla volta, firma glitch VHS del sito ── */
.home-hero__stage {
  position: relative;
  /* Riserva spazio per 2 righe alla dimensione massima: la frase più lunga
     va a capo su mobile, senza questo il CTA sotto "salterebbe" ad ogni
     cambio frase. */
  min-height: calc(2.3 * clamp(28px, 4.4vw, 52px));
  display: flex;
  align-items: flex-start;
}

/* Flicker a scatti in entrata/uscita — stessa firma di .page-enter-active/
   .burger-panel-enter-active, non una nuova animazione. */
.hero-line-enter-active {
  animation: hero-line-flicker-in 0.22s steps(4);
}
.hero-line-leave-active {
  animation: hero-line-flicker-out 0.16s steps(3);
}
@keyframes hero-line-flicker-in {
  0% { opacity: 0; }
  25% { opacity: 1; }
  40% { opacity: 0.25; }
  60% { opacity: 1; }
  100% { opacity: 1; }
}
@keyframes hero-line-flicker-out {
  0% { opacity: 1; }
  40% { opacity: 0.3; }
  70% { opacity: 1; }
  100% { opacity: 0; }
}

/* Gruppo dei due CTA: quiz (primario) + Capitolo 0 (secondario). */
.home-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

/* CTA "on air": pill nera con pallino rosso pulsante, richiama l'estetica
   da diretta radiofonica. Al hover si accende di rosso e la freccia scatta. */
.home-cta {
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 26px;
  border-radius: 999px;
  background: var(--rp-black);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp-white);
  transition: background 0.25s ease, transform 0.25s ease;
}
.home-cta:hover {
  background: var(--rp-red);
  transform: translateY(-2px);
}

.home-cta__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--rp-red);
  flex-shrink: 0;
  animation: home-cta-pulse 1.8s ease-in-out infinite;
}
.home-cta:hover .home-cta__dot {
  background: var(--rp-white);
  animation: none;
}

.home-cta__arrow {
  transition: transform 0.25s ease;
}
.home-cta:hover .home-cta__arrow { transform: translateX(4px); }

@keyframes home-cta-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.75); }
}
</style>
