// Espone la preferenza di sistema "riduci il movimento" come ref reattivo.
// Usato per non autoplayare/loopare i video di sfondo (griglie, cover, hero)
// quando l'utente ha attivato questa impostazione — le animazioni CSS sono
// già neutralizzate globalmente in assets/css/main.css, ma l'autoplay video
// è un attributo HTML/JS e va gestito qui separatamente.
export function useReducedMotion() {
  const prefersReduced = ref(false)

  if (import.meta.client) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReduced.value = mq.matches

    const handler = (e) => {
      prefersReduced.value = e.matches
    }
    mq.addEventListener?.('change', handler)
    onBeforeUnmount(() => mq.removeEventListener?.('change', handler))
  }

  return prefersReduced
}
