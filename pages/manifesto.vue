<script setup>
// Pagina "Manifesto": scroll fullscreen in stile Reels/Shorts — apertura
// narrativa, canzone manifesto (Approvazione) e sette canzoni, una per
// Ordine, una per schermata. Autoplay muto (unica opzione compatibile coi
// browser); tasto per attivare l'audio per singola schermata (monta l'embed
// YouTube unlisted); IntersectionObserver mette in play/pausa il loop della
// schermata attiva. Erede di /canzoni + /capitoli/0 (entrambe eliminate):
// unica pagina per l'intero album di Capitolo 0.
import { capitolo0 } from '~/data/capitolo0'
import { getOrder } from '~/data/bestiario'
import { parseLyrics } from '~/utils/lyrics'

const { locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const seoDescription = {
  it: 'Il manifesto di Radiopaganda: apertura narrativa, la canzone manifesto e sette canzoni, una per Ordine, con audio in italiano, inglese e spagnolo.',
  en: "Radiopaganda's manifesto: opening narration, the manifesto song and seven songs, one per Order, with audio in Italian, English and Spanish.",
  es: 'El manifiesto de Radiopaganda: apertura narrativa, la canción manifiesto y siete canciones, una por Orden, con audio en italiano, inglés y español.',
}
useHead({
  title: 'Manifesto — RADIOPAGANDA',
  meta: computed(() => [
    { name: 'description', content: seoDescription[locale.value] || seoDescription.it },
    { property: 'og:description', content: seoDescription[locale.value] || seoDescription.it },
  ]),
})

const lyricsLabel = computed(() => ({ it: 'TESTO', en: 'LYRICS', es: 'LETRA' }[locale.value] || 'TESTO'))
const soundLabel = computed(() => ({
  it: { on: 'AUDIO ATTIVO', off: 'ATTIVA AUDIO' },
  en: { on: 'SOUND ON', off: 'TAP FOR SOUND' },
  es: { on: 'SONIDO ACTIVO', off: 'ACTIVAR SONIDO' },
}[locale.value] || { on: 'SOUND ON', off: 'TAP FOR SOUND' }))
const videoComingSoon = computed(() => ({
  it: 'VIDEO IN ARRIVO',
  en: 'VIDEO COMING SOON',
  es: 'VÍDEO PRÓXIMAMENTE',
}[locale.value] || 'VIDEO IN ARRIVO'))

// Nota: qui NON leggiamo videoSrc (i file reali delle canzoni, pesanti,
// self-hosted) — /manifesto mostra di default lo stesso loop muto decorativo
// usato nelle pagine ordine (coverSrc) e sostituisce l'audio reale con
// l'embed YouTube unlisted al tap su "ATTIVA AUDIO".
const tracks = computed(() => {
  const manifesto = capitolo0.manifesto
  const list = [
    // Apertura narrativa (ex testo hero /capitoli/0): prima schermata, sfondo
    // = cover dell'intero album, nessun audio da attivare.
    {
      slug: '__intro',
      title: capitolo0.subtitle[locale.value] || capitolo0.subtitle.it,
      eyebrow: null,
      order: null,
      coverSrc: manifesto.albumCoverSrc || null,
      youtubeId: null,
      significato: null,
      lyrics: null,
      introStanzas: capitolo0.intro[locale.value] || capitolo0.intro.it,
    },
    {
      slug: manifesto.slug,
      title: manifesto.title[locale.value] || manifesto.title.it,
      eyebrow: `00 · ${manifesto.title[locale.value] || manifesto.title.it}`,
      order: null,
      coverSrc: manifesto.coverSrc || null,
      youtubeId: manifesto.youtubeId?.[locale.value] || manifesto.youtubeId?.it || null,
      significato: manifesto.significato[locale.value] || manifesto.significato.it,
      lyrics: parseLyrics(manifesto.lyrics[locale.value] || manifesto.lyrics.it),
      introStanzas: null,
    },
    ...capitolo0.songs.map((song) => ({
      slug: song.slug,
      title: song.title[locale.value] || song.title.it,
      eyebrow: null,
      order: getOrder(song.orderSlug),
      coverSrc: song.coverSrc || null,
      youtubeId: song.youtubeId?.[locale.value] || song.youtubeId?.it || null,
      significato: song.significato[locale.value] || song.significato.it,
      lyrics: parseLyrics(song.lyrics[locale.value] || song.lyrics.it),
      introStanzas: null,
    })),
  ]
  return list
})

// Riferimenti al <video> del loop muto decorativo (solo per le tracce che al
// momento NON hanno l'embed YouTube attivo — vedi ytActiveSlug sotto).
const videoRefs = {}
function setVideoRef(slug, el) {
  if (el) videoRefs[slug] = el
  else delete videoRefs[slug]
}

// Slug della traccia il cui embed YouTube è montato e in riproduzione (audio
// reale). Le altre tracce restano sul loro loop muto decorativo (coverSrc).
// Il tap stesso su "ATTIVA AUDIO" soddisfa sia lo sblocco autoplay del
// browser sia il consenso GDPR per il contenuto esterno YouTube (vedi prop
// autoload di YouTubeEmbed) — un unico gesto, non due gate separati.
const ytActiveSlug = ref(null)

// Al primo tap sull'audio "sblocchiamo" l'ascolto per l'intera sessione: da
// quel momento, scorrendo, l'embed YouTube segue automaticamente la
// schermata attiva senza dover ritoccare il pulsante ogni volta. Su alcuni
// browser l'autoplay-con-audio dell'iframe potrebbe comunque essere bloccato
// scorrendo senza un nuovo click diretto sull'iframe stesso: in quel caso la
// traccia resta silenziosa finché non si tocca di nuovo "ATTIVA AUDIO" —
// degradazione singola per traccia, stessa UX del tap iniziale.
const soundUnlocked = ref(false)

// "Riduci il movimento": i video restano fermi sul primo frame, lo scroll
// cambia comunque schermata/testo/audio-toggle ma non fa partire il loop.
const prefersReducedMotion = useReducedMotion()

function toggleSound(slug) {
  if (ytActiveSlug.value === slug) {
    // Secondo tap sulla stessa traccia: torna al loop muto decorativo.
    ytActiveSlug.value = null
    return
  }
  ytActiveSlug.value = slug
  soundUnlocked.value = true
}

const sectionEls = {}
function setSectionRef(slug, el) {
  if (el) sectionEls[slug] = el
}

// Traccia attiva (sezione più in vista) — pilota: pallini di progressione,
// reveal del titolo, evidenziazione rossa persistente dell'Ordine.
const activeSlug = ref(tracks.value[0]?.slug || null)

// Hint "scorri" mostrato solo sulla primissima schermata, finché l'utente
// non ha ancora scrollato una volta.
const hasScrolledOnce = ref(false)

function scrollToTrack(slug) {
  sectionEls[slug]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const slug = entry.target.dataset.slug
        if (entry.isIntersecting) {
          activeSlug.value = slug
          if (slug !== tracks.value[0]?.slug) hasScrolledOnce.value = true
          // Una volta sbloccato l'audio, la traccia che entra in vista attiva
          // da sola il proprio embed YouTube — segue lo scroll senza dover
          // ritoccare il pulsante ogni volta (v. nota su ytActiveSlug sopra).
          if (soundUnlocked.value) {
            const track = tracks.value.find((t) => t.slug === slug)
            if (track?.youtubeId) ytActiveSlug.value = slug
          }
          if (!prefersReducedMotion.value) videoRefs[slug]?.play?.().catch(() => {})
        } else {
          videoRefs[slug]?.pause?.()
          // Uscendo dalla vista, se questa era la traccia con audio attivo,
          // torna al loop muto: evita più embed YouTube montati insieme.
          if (ytActiveSlug.value === slug) ytActiveSlug.value = null
        }
      }
    },
    { threshold: 0.6 }
  )
  Object.values(sectionEls).forEach((el) => observer.observe(el))

  // Se si arriva con un hash (#slug, es. dal CTA della Carta Exemplar in
  // /test o dalla card ordine nel Bestiario), il salto nativo del browser
  // non è affidabile: .manifesto è essa stessa il contenitore di scroll
  // (overflow-y + scroll-snap), non la finestra — Nuxt/il browser tentano di
  // scrollare il documento, non questo contenitore interno. Lo facciamo a
  // mano non appena le sezioni sono montate.
  const targetSlug = route.hash?.replace('#', '')
  if (targetSlug && sectionEls[targetSlug]) {
    nextTick(() => {
      sectionEls[targetSlug]?.scrollIntoView({ behavior: 'auto', block: 'start' })
    })
  }
})
onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="manifesto">
    <!-- Pallini di progressione: uno per traccia, quello attivo si accende
         di rosso; tap salta direttamente a quella schermata. -->
    <nav class="manifesto__dots" aria-label="Tracce">
      <button
        v-for="track in tracks"
        :key="track.slug"
        type="button"
        class="manifesto__dot"
        :class="{ 'manifesto__dot--active': activeSlug === track.slug }"
        :aria-label="track.title"
        @click="scrollToTrack(track.slug)"
      />
    </nav>

    <section
      v-for="(track, i) in tracks"
      :key="track.slug"
      :id="track.slug"
      :ref="(el) => setSectionRef(track.slug, el)"
      :data-slug="track.slug"
      class="track"
    >
      <YouTubeEmbed
        v-if="ytActiveSlug === track.slug && track.youtubeId"
        class="track__yt"
        fill
        autoload
        :id="track.youtubeId"
        :title="track.title"
      />
      <video
        v-else-if="track.coverSrc"
        :ref="(el) => setVideoRef(track.slug, el)"
        class="track__video"
        :src="track.coverSrc"
        :autoplay="!prefersReducedMotion"
        muted
        loop
        playsinline
        preload="metadata"
      />
      <div v-else class="track__placeholder">
        <span class="track__placeholder-label">{{ videoComingSoon }}</span>
      </div>
      <div class="track__overlay" />

      <button
        v-if="track.youtubeId"
        type="button"
        class="track__sound"
        @click="toggleSound(track.slug)"
      >
        {{ ytActiveSlug === track.slug ? soundLabel.on : soundLabel.off }}
      </button>

      <div class="track__content" :class="{ 'track__content--active': activeSlug === track.slug }">
        <span v-if="track.order" class="track__eyebrow">
          <NuxtLink
            :to="localePath(`/bestiario/${track.order.slug}`)"
            class="track__order-link"
            :class="{ 'track__order-link--active': activeSlug === track.slug }"
          >
            {{ String(track.order.number).padStart(2, '0') }} · {{ track.order.name }}
          </NuxtLink>
        </span>
        <span v-else-if="track.eyebrow" class="track__eyebrow">{{ track.eyebrow }}</span>

        <h2 class="track__title">{{ track.title }}</h2>

        <div v-if="track.introStanzas" class="track__intro">
          <p v-for="(stanza, si) in track.introStanzas" :key="si" class="track__intro-stanza">
            <span v-for="(line, li) in stanza" :key="li" class="track__intro-line">{{ line }}</span>
          </p>
        </div>
        <template v-else>
          <blockquote class="track__significato">{{ track.significato }}</blockquote>

          <details class="track__lyrics">
            <summary>{{ lyricsLabel }}</summary>
            <div class="track__lyrics-body">
              <div v-for="(section, i2) in track.lyrics" :key="i2" class="lyrics-section">
                <p v-if="section.header" class="lyrics-section__header">{{ section.header }}</p>
                <p v-for="(line, j) in section.lines" :key="j" class="lyrics-section__line">{{ line }}</p>
              </div>
            </div>
          </details>
        </template>
      </div>

      <!-- Hint di scroll: solo sulla primissima schermata, sparisce al primo scroll. -->
      <div v-if="i === 0" class="track__scroll-hint" :class="{ 'track__scroll-hint--hidden': hasScrolledOnce }">
        <span class="track__scroll-hint-arrow">↓</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.manifesto {
  height: 100vh;
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  background: var(--rp-black);
}

.track {
  position: relative;
  height: 100vh;
  height: 100dvh;
  scroll-snap-align: start;
  scroll-margin-top: 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.track__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.track__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--rp-black);
}
.track__placeholder-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--rp-white);
  opacity: 0.3;
}

.track__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.92) 100%);
  /* Puramente decorativo (gradiente per leggibilità testo): non deve
     intercettare i tap. Senza questo, su mobile il pulsante play interno di
     YouTube (che appare quando l'autoplay con audio viene bloccato da iOS
     nonostante il tap su "ATTIVA AUDIO") risultava irraggiungibile — il tap
     veniva "mangiato" da questo div invece di arrivare all'iframe sotto. */
  pointer-events: none;
}

.track__sound {
  position: absolute;
  top: calc(var(--nav-h) + 20px);
  right: 20px;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rp-white);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.track__content {
  position: relative;
  z-index: 2;
  padding: 32px 24px 48px;
  max-width: 620px;
}

.track__eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  color: var(--rp-white);
  opacity: 0.6;
  margin-bottom: 12px;
}
.track__order-link { color: inherit; transition: color 0.3s, opacity 0.3s; }
.track__order-link:hover { color: var(--rp-red); opacity: 1; }
/* Nod "ambientale" all'Ordine: mentre questa è la traccia attiva, il suo
   nome resta acceso in rosso (non solo in hover) — coerente con la regola
   del progetto di riservare il rosso ai momenti di verdetto/identità. */
.track__order-link--active { color: var(--rp-red); opacity: 1; }

.track__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(32px, 8vw, 56px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--rp-white);
  margin-bottom: 16px;
}

/* Reveal sfalsato: il blocco testo entra con un piccolo slide-up quando la
   sua schermata diventa quella attiva (non è semplicemente sempre lì fermo). */
.track__content {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.track__content--active {
  opacity: 1;
  transform: translateY(0);
}

.track__significato {
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.5;
  color: var(--rp-white);
  opacity: 0.85;
  margin-bottom: 16px;
}

/* Apertura narrativa (prima schermata): stesse strofe di prima /capitoli/0,
   ma in bianco su fondo scuro invece che nero su bianco. */
.track__intro {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.track__intro-stanza {
  display: flex;
  flex-direction: column;
  font-family: var(--font-text);
  font-style: italic;
  font-size: clamp(14px, 2vw, 17px);
  line-height: 1.6;
  color: var(--rp-white);
  opacity: 0.85;
}

.track__lyrics {
  color: var(--rp-white);
}
.track__lyrics summary {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  color: var(--rp-white);
  opacity: 0.7;
  cursor: pointer;
  list-style: none;
}
.track__lyrics summary::-webkit-details-marker { display: none; }
.track__lyrics summary:hover { opacity: 1; }

.track__lyrics-body {
  margin-top: 16px;
  max-height: 40vh;
  overflow-y: auto;
  padding-right: 8px;
}

.lyrics-section { margin-bottom: 16px; }
.lyrics-section__header {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rp-red);
  opacity: 0.8;
  margin-bottom: 6px;
}
.lyrics-section__line {
  font-family: var(--font-text);
  font-size: 14px;
  line-height: 1.5;
  color: var(--rp-white);
  opacity: 0.85;
}

@media (min-width: 900px) {
  .track__content { padding: 48px 64px 72px; }
}

/* ── Pallini di progressione ── */
.manifesto__dots {
  position: fixed;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.manifesto__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  transition: background 0.25s, transform 0.25s;
  padding: 6px;
  background-clip: content-box;
}
.manifesto__dot:hover { background: rgba(255, 255, 255, 0.6); background-clip: content-box; }
.manifesto__dot--active {
  background: var(--rp-red);
  background-clip: content-box;
  transform: scale(1.35);
}

@media (min-width: 900px) {
  .manifesto__dots { right: 24px; }
}

/* ── Hint di scroll (prima schermata) ── */
.track__scroll-hint {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  z-index: 2;
  opacity: 1;
  transition: opacity 0.4s;
  pointer-events: none;
}
.track__scroll-hint--hidden { opacity: 0; }

.track__scroll-hint-arrow {
  display: inline-block;
  font-size: 20px;
  color: var(--rp-white);
  opacity: 0.6;
  animation: scroll-hint-bounce 1.6s ease-in-out infinite;
}

@keyframes scroll-hint-bounce {
  0%, 100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(8px); opacity: 1; }
}
</style>
