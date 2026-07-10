<script setup>
import { getOrder } from '~/data/bestiario'
import { capitolo0 } from '~/data/capitolo0'
import { parseLyrics } from '~/utils/lyrics'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const order = getOrder(route.params.ordine)
if (!order) {
  throw createError({ statusCode: 404, statusMessage: 'Ordine non trovato' })
}

const t = computed(() => ({
  title: order.title[locale.value] || order.title.it,
  subtitle: order.subtitle[locale.value] || order.subtitle.it,
  description: order.description[locale.value] || order.description.it,
}))

const ui = computed(() => ({
  it: {
    back: '← BESTIARIO',
    speciesLabel: 'SPECIE CLASSIFICATE',
    listen: 'ASCOLTA',
    listenHint: 'ASCOLTA →',
    songLabel: "LA CANZONE DELL'ORDINE",
    listenManifesto: 'ASCOLTA NEL MANIFESTO →',
  },
  en: {
    back: '← BESTIARY',
    speciesLabel: 'CLASSIFIED SPECIES',
    listen: 'LISTEN',
    listenHint: 'LISTEN →',
    songLabel: "THE ORDER'S SONG",
    listenManifesto: 'LISTEN IN THE MANIFESTO →',
  },
  es: {
    back: '← BESTIARIO',
    speciesLabel: 'ESPECIES CLASIFICADAS',
    listen: 'ESCUCHA',
    listenHint: 'ESCUCHA →',
    songLabel: 'LA CANCIÓN DE LA ORDEN',
    listenManifesto: 'ESCUCHA EN EL MANIFIESTO →',
  },
}[locale.value] || {}))

useHead({
  title: `${order.name} — Bestiario — RADIOPAGANDA`,
  meta: computed(() => [
    { name: 'description', content: t.value.description },
    { property: 'og:description', content: t.value.description },
  ]),
})

// Le specie non hanno più una pagina propria: tutte le info (sottotitolo,
// descrizione, carta exemplar) vivono dentro la card, che si espande on-click
// (details/summary, stesso pattern nativo già usato per i testi delle canzoni).
function nameFor(sp) { return sp.name[locale.value] || sp.name.it }
function subtitleFor(sp) { return sp.subtitle[locale.value] || sp.subtitle.it }
function descriptionFor(sp) { return sp.description[locale.value] || sp.description.it }
function cardFor(sp) { return sp.card[locale.value] || sp.card.it }

// Canzone di Capitolo 0 collegata a questo ordine (via orderSlug), con testo e significato.
const lyricsLabel = computed(() => ({ it: 'TESTO', en: 'LYRICS', es: 'LETRA' }[locale.value] || 'TESTO'))
const song = computed(() => capitolo0.songs.find((s) => s.orderSlug === order.slug))
const songTitle = computed(() => song.value?.title?.[locale.value] || song.value?.title?.it)
const songSignificato = computed(() => song.value?.significato?.[locale.value] || song.value?.significato?.it)
// Loop muto decorativo (stesso file usato in /capitoli/0), non il video reale
// della canzone: SongVideo lo mostra comunque senza audio (muted hardcoded),
// quindi qui basta il file leggero — l'audio reale vive solo nell'embed
// YouTube (vedi /canzoni).
const songCoverSrc = computed(() => song.value?.coverSrc || null)
const songYoutubeId = computed(() => song.value?.youtubeId?.[locale.value] || song.value?.youtubeId?.it || null)
const songLyrics = computed(() => (song.value ? parseLyrics(song.value.lyrics[locale.value] || song.value.lyrics.it) : []))

// Reveal a comparsa quando la griglia entra in viewport: le card partono
// leggermente traslate/trasparenti e si assestano a cascata (stagger via CSS).
const gridEl = ref(null)
const gridVisible = ref(false)
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        gridVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (gridEl.value) observer.observe(gridEl.value)
})
</script>

<template>
  <div class="ordine">
    <div class="ordine__inner">
      <NuxtLink :to="localePath('/bestiario')" class="ordine__back">{{ ui.back }}</NuxtLink>

      <div class="ordine__head">
        <span class="ordine__num">{{ String(order.number).padStart(2, '0') }} / 07</span>
        <h1 class="ordine__name">{{ order.name }}</h1>
        <h2 class="ordine__title">{{ t.title }}</h2>
        <p class="ordine__subtitle">{{ t.subtitle }}</p>
      </div>

      <div class="ordine__description">
        <p v-for="(par, i) in t.description" :key="i">{{ par }}</p>
      </div>

      <div class="ordine__species">
        <p class="ordine__species-label">{{ ui.speciesLabel }}</p>
        <div ref="gridEl" class="species-grid" :class="{ 'is-visible': gridVisible }">
          <details v-for="sp in order.species" :id="sp.slug" :key="sp.slug" class="species-card">
            <summary class="species-card__summary">
              <SpeciesCardVideo v-if="sp.video" :src="sp.video" :title="nameFor(sp)" />
              <div class="species-card__overlay" />
              <span class="species-card__ejemplar">EJEMPLAR {{ sp.ejemplar }}</span>
              <span class="species-card__name">{{ nameFor(sp) }}</span>
              <span class="species-card__latin">{{ sp.latin }}</span>
            </summary>

            <div class="species-card__expanded">
              <p class="species-card__subtitle">{{ subtitleFor(sp) }}</p>
              <div class="species-card__description">
                <p v-for="(par, i) in descriptionFor(sp)" :key="i">{{ par }}</p>
              </div>
              <div class="species-card__claim">
                <p class="species-card__claim-hook">{{ cardFor(sp).hook }}</p>
                <p class="species-card__claim-inst">{{ cardFor(sp).inst }}</p>
                <p class="species-card__claim-cta">{{ cardFor(sp).cta }}</p>
              </div>
            </div>
          </details>
        </div>
      </div>

      <SplitMedia v-if="song" align="start" class="ordine__song">
        <template #media>
          <NuxtLink
            :to="localePath('/manifesto') + '#' + order.slug"
            class="ordine__song-cover-link"
            :aria-label="`${ui.listen}: ${songTitle}`"
          >
            <SongVideo :src="songCoverSrc" :youtube-id="songYoutubeId" :title="songTitle" />
            <span class="ordine__song-cover-hint">{{ ui.listenHint }}</span>
          </NuxtLink>
        </template>

        <p class="ordine__song-label">{{ ui.songLabel }}</p>
        <h2 class="ordine__song-title">{{ songTitle }}</h2>
        <blockquote class="ordine__song-significato">{{ songSignificato }}</blockquote>

        <details class="song__lyrics">
          <summary>{{ lyricsLabel }}</summary>
          <div class="song__lyrics-body">
            <div v-for="(section, i) in songLyrics" :key="i" class="lyrics-section">
              <p v-if="section.header" class="lyrics-section__header">{{ section.header }}</p>
              <p v-for="(line, j) in section.lines" :key="j" class="lyrics-section__line">{{ line }}</p>
            </div>
          </div>
        </details>

        <template #cta>
          <NuxtLink :to="localePath('/manifesto') + '#' + order.slug" class="ordine__song-link">
            {{ ui.listenManifesto }}
          </NuxtLink>
        </template>
      </SplitMedia>
    </div>
  </div>
</template>

<style scoped>
.ordine {
  min-height: 100vh;
  padding: calc(var(--nav-h) + 60px) 32px 100px;
}

.ordine__inner { max-width: 900px; margin: 0 auto; }

.ordine__back {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-bottom: 48px;
  transition: opacity 0.2s;
}
.ordine__back:hover { opacity: 1; }

.ordine__head { margin-bottom: 48px; }

.ordine__num {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--rp-black);
  opacity: 0.4;
}

.ordine__name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(40px, 8vw, 96px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
  margin-top: 12px;
}

.ordine__title {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-black);
  opacity: 0.5;
  margin-top: 12px;
}

.ordine__subtitle {
  font-family: var(--font-text);
  font-size: 19px;
  font-style: italic;
  color: var(--rp-black);
  opacity: 0.7;
  margin-top: 16px;
}

.ordine__description {
  padding-top: 40px;
  margin-bottom: 72px;
  border-top: 1px solid var(--rp-ice);
}
.ordine__description p {
  font-family: var(--font-text);
  font-size: 17px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.85;
  max-width: 640px;
}
.ordine__description p + p { margin-top: 16px; }

.ordine__species-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  opacity: 0.3;
  margin-bottom: 24px;
}

/* Mobile: riga a scorrimento con snap (formato "stories"). align-items:flex-start
   evita che le card sorelle si stirino quando una si espande. */
.species-grid {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 6px;
  -webkit-overflow-scrolling: touch;
  mask-image: linear-gradient(90deg, #000 92%, transparent 100%);
}

.species-card {
  flex: 0 0 56vw;
  max-width: 220px;
  scroll-snap-align: start;
  scroll-margin-top: calc(var(--nav-h) + 24px);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.species-grid.is-visible .species-card { opacity: 1; transform: translateY(0); }
.species-grid.is-visible .species-card:nth-child(1) { transition-delay: 0.02s; }
.species-grid.is-visible .species-card:nth-child(2) { transition-delay: 0.08s; }
.species-grid.is-visible .species-card:nth-child(3) { transition-delay: 0.14s; }

/* Il preview cliccabile: qui vivono aspect-ratio, video e overlay. */
.species-card__summary {
  position: relative;
  overflow: hidden;
  aspect-ratio: 828 / 1108;
  background: var(--rp-black);
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  cursor: pointer;
  list-style: none;
}
.species-card__summary::-webkit-details-marker { display: none; }

/* Desktop: griglia normale, preview sempre nello stesso formato. */
@media (min-width: 900px) {
  .species-grid {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1px;
    background: var(--rp-ice);
    border: 1px solid var(--rp-ice);
    overflow: visible;
    mask-image: none;
  }
  .species-card { flex: none; max-width: none; }
  .species-card__summary { padding: 24px 22px; }
}

.species-card__summary :deep(.species-card-video__el) {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.species-card:hover .species-card__summary :deep(.species-card-video__el) {
  transform: scale(1.07);
}

.species-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.88) 100%);
  transition: background 0.2s;
}
.species-card:hover .species-card__overlay { background: rgba(0, 0, 0, 0.4); }

.species-card__ejemplar {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--rp-white);
  opacity: 0.75;
}

.species-card__name {
  position: relative;
  z-index: 2;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--rp-white);
}

.species-card__latin {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-style: italic;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.75;
}

/* Contenuto espanso: sfondo bianco, testo nero, come il resto del sito. */
.species-card__expanded {
  background: var(--rp-white);
  border: 1px solid var(--rp-ice);
  border-top: none;
  padding: 20px;
}

.species-card__subtitle {
  font-family: var(--font-text);
  font-style: italic;
  font-size: 14px;
  color: var(--rp-black);
  opacity: 0.7;
  margin-bottom: 14px;
}

.species-card__description {
  margin-bottom: 18px;
}
.species-card__description p {
  font-family: var(--font-text);
  font-size: 14px;
  line-height: 1.55;
  color: var(--rp-black);
  opacity: 0.85;
}
.species-card__description p + p { margin-top: 10px; }

.species-card__claim {
  background: var(--rp-black);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.species-card__claim-hook {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--rp-white);
}

.species-card__claim-inst {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.7;
}

.species-card__claim-cta {
  font-family: var(--font-mono);
  font-style: italic;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.75;
}

.ordine__song {
  margin-top: 88px;
  border-top: 1px solid var(--rp-ice);
  padding-top: 56px;
}

.ordine__song-label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-bottom: 12px;
}

.ordine__song-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(28px, 5vw, 44px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--rp-black);
}

.ordine__song-significato {
  font-family: var(--font-text);
  font-style: italic;
  font-size: 16px;
  line-height: 1.55;
  color: var(--rp-black);
  opacity: 0.8;
  border-left: 2px solid var(--rp-black);
  padding-left: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.song__lyrics summary {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--rp-black);
  opacity: 0.5;
  cursor: pointer;
  padding: 8px 0;
}
.song__lyrics summary:hover { opacity: 1; }

.song__lyrics-body { padding-top: 16px; }

.lyrics-section { margin-bottom: 20px; }
.lyrics-section:last-child { margin-bottom: 0; }

.lyrics-section__header {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp-black);
  opacity: 0.35;
  margin-bottom: 6px;
}

.lyrics-section__line {
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.5;
  color: var(--rp-black);
  opacity: 0.85;
}

.ordine__song-link {
  display: inline-block;
  margin-top: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--rp-black);
  opacity: 0.6;
  transition: opacity 0.2s;
}
.ordine__song-link:hover { opacity: 1; }

/* Cover cliccabile verso la traccia in /manifesto: stesso pattern usato in
   precedenza in /capitoli/0 (pagina ora eliminata). Hint visibile solo on
   hover/focus per non sporcare il loop muto decorativo di default. */
.ordine__song-cover-link {
  display: block;
  position: relative;
}
.ordine__song-cover-hint {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rp-white);
  background: rgba(13, 13, 15, 0.6);
  backdrop-filter: blur(4px);
  padding: 8px 14px;
  border-radius: 999px;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.2s, transform 0.2s;
  pointer-events: none;
}
.ordine__song-cover-link:hover .ordine__song-cover-hint,
.ordine__song-cover-link:focus-visible .ordine__song-cover-hint {
  opacity: 1;
  transform: translateY(0);
}
</style>
