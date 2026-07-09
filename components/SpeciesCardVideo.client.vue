<script setup>
// Video di sfondo per le card specie (griglia Bestiario / Classificazione).
// Carica il video solo quando la card entra in viewport (IntersectionObserver)
// e lo mette in pausa quando esce: nessuno spreco di banda per card fuori schermo,
// nessun click richiesto (loop muto, coerente con l'uso "preview" di una card).
const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: '' },
})

const containerEl = ref(null)
const videoEl = ref(null)
const loaded = ref(false)
let observer = null

// Con "riduci il movimento" attivo, una griglia intera di video autoplay
// contemporanei è esattamente il tipo di movimento che l'utente ha chiesto
// di evitare: carichiamo comunque il frame (via preload) ma non lo mandiamo
// mai in play.
const prefersReducedMotion = useReducedMotion()

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loaded.value = true
        if (prefersReducedMotion.value) return
        nextTick(() => {
          videoEl.value?.play?.().catch(() => {})
        })
      } else {
        videoEl.value?.pause?.()
      }
    },
    { threshold: 0.3 }
  )
  if (containerEl.value) observer.observe(containerEl.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div ref="containerEl" class="species-card-video">
    <video
      v-if="loaded"
      ref="videoEl"
      class="species-card-video__el"
      :src="src"
      :title="title"
      muted
      loop
      playsinline
      preload="none"
    />
  </div>
</template>

<style scoped>
.species-card-video {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.species-card-video__el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
