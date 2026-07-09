<script setup>
// Embed per i video del canale YouTube Radiopaganda (unlisted finché il
// capitolo non è pubblico). Usa youtube-nocookie.com per ridurre al minimo
// branding/suggerimenti esterni, coerente con l'estetica del sito.
//
// Conformità: l'iframe NON viene caricato automaticamente. Anche su
// youtube-nocookie.com, caricare l'iframe invia dati (IP, user agent) a
// Google prima di qualsiasi scelta dell'utente — click-to-load è lo standard
// per contenuti embeddati di terze parti sotto GDPR/ePrivacy, indipendente
// dal banner cookie (che copre GA4/Ads via GTM, non gli embed).
const props = defineProps({
  id: { type: String, default: null },
  title: { type: String, required: true },
  // fill: riempie il contenitore genitore (position:absolute inset:0, niente
  // aspect-ratio forzato a 16:9) — per usi full-bleed come /canzoni, dove il
  // video sostituisce uno sfondo a schermo intero invece di stare in un box.
  fill: { type: Boolean, default: false },
  // autoload: salta il gate "Carica il video" interno e monta subito
  // l'iframe. Da usare SOLO quando il genitore monta questo componente in
  // risposta a un tap esplicito dell'utente (es. "ATTIVA AUDIO" in
  // /canzoni): quel tap è già il consenso richiesto, un secondo gate qui
  // sarebbe ridondante.
  autoload: { type: Boolean, default: false },
})

const { locale } = useI18n()
const loaded = ref(false)

const embedUrl = computed(() =>
  props.id
    ? `https://www.youtube-nocookie.com/embed/${props.id}?rel=0&modestbranding=1&color=white&autoplay=1`
    : null
)

const t = computed(() => ({
  it: { load: 'Carica il video', note: 'Contenuto esterno da YouTube — verranno inviati dati a Google.' },
  en: { load: 'Load video', note: 'External content from YouTube — data will be sent to Google.' },
  es: { load: 'Cargar el video', note: 'Contenido externo de YouTube — se enviarán datos a Google.' },
}[locale.value] || {}))
</script>

<template>
  <div class="yt-embed" :class="{ 'yt-embed--fill': fill }">
    <iframe
      v-if="embedUrl && (loaded || autoload)"
      class="yt-embed__frame"
      :src="embedUrl"
      :title="title"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <button v-else-if="embedUrl" type="button" class="yt-embed__gate" @click="loaded = true">
      <span class="yt-embed__gate-play" aria-hidden="true">▶</span>
      <span class="yt-embed__gate-label">{{ t.load }}</span>
      <span class="yt-embed__gate-note">{{ t.note }}</span>
    </button>
    <div v-else class="yt-embed__placeholder">
      <span class="yt-embed__placeholder-label">VIDEO IN ARRIVO</span>
    </div>
  </div>
</template>

<style scoped>
.yt-embed {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--rp-black);
  overflow: hidden;
}

.yt-embed--fill {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
}

.yt-embed__frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.yt-embed__gate {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--rp-black);
  border: 1px solid var(--rp-ice);
  cursor: pointer;
  transition: background 0.2s;
}
.yt-embed__gate:hover { background: #1a1a1c; }

.yt-embed__gate-play {
  font-size: 22px;
  color: var(--rp-red);
}

.yt-embed__gate-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--rp-white);
}

.yt-embed__gate-note {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.35;
  max-width: 260px;
  text-align: center;
}

.yt-embed__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--rp-ice);
}

.yt-embed__placeholder-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--rp-white);
  opacity: 0.3;
}
</style>
