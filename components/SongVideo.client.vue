<script setup>
// Video di una canzone di Capitolo 0. Preferisce un file locale self-hosted
// (public/videos/capitolo0/Cover-canzoni/*.mp4) se presente; altrimenti usa
// l'embed YouTube (gated on-click, vedi YouTubeEmbed.client.vue); altrimenti
// placeholder.
// I file locali sono cover in loop senza audio (stile "canvas"): autoplay,
// muto, loop, senza controlli — non un player interattivo.
const props = defineProps({
  src: { type: String, default: null },
  youtubeId: { type: String, default: null },
  title: { type: String, required: true },
  // Proporzione reale del video sorgente (mai forzata a un quadrato):
  // passata da data/capitolo0.js (videoRatio) per ogni canzone/manifesto.
  // Fallback: 3:4, il rapporto più comune tra gli asset del progetto.
  ratio: { type: String, default: '828 / 1108' },
})

// "Riduci il movimento": niente autoplay, il video resta fermo sul primo
// frame invece di partire in loop da solo.
const prefersReducedMotion = useReducedMotion()

const { locale } = useI18n()
const videoComingSoon = computed(() => ({
  it: 'VIDEO IN ARRIVO',
  en: 'VIDEO COMING SOON',
  es: 'VÍDEO PRÓXIMAMENTE',
}[locale.value] || 'VIDEO IN ARRIVO'))
</script>

<template>
  <div class="song-video" :style="{ aspectRatio: ratio }">
    <video
      v-if="src"
      class="song-video__native"
      :src="src"
      :title="title"
      :autoplay="!prefersReducedMotion"
      muted
      loop
      preload="auto"
      playsinline
    />
    <YouTubeEmbed v-else-if="youtubeId" :id="youtubeId" :title="title" />
    <div v-else class="song-video__placeholder">
      <span class="song-video__placeholder-label">{{ videoComingSoon }}</span>
    </div>
  </div>
</template>

<style scoped>
.song-video {
  position: relative;
  width: 100%;
  background: var(--rp-black);
  overflow: hidden;
}

.song-video__native {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: var(--rp-black);
}

.song-video__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--rp-ice);
}

.song-video__placeholder-label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  color: var(--rp-white);
  opacity: 0.3;
}
</style>
