<script setup>
// Burger menu: hamburger -> X con glitch VHS, pannello nero fullscreen con i
// 4 link di navigazione (stessi del footer), numerati stile dossier.
// Extra giocosi: timbro "EJEMPLAR" al hover, contatore live delle
// classificazioni totali (letto da /api/classify via GET, senza incrementare
// nulla), mirino che segue il cursore mentre il menu è aperto.
// .client.vue: il menu non serve in SSR e usa mousemove/fetch solo lato client.
const localePath = useLocalePath()
const { t } = useI18n()

const isOpen = ref(false)

const links = computed(() => [
  { to: localePath('/progetto'), label: t('nav.progetto') },
  { to: localePath('/bestiario'), label: t('nav.bestiario') },
  { to: localePath('/manifesto'), label: t('nav.manifesto') },
  { to: localePath('/test'), label: t('nav.test') },
])

// Numeri finti fissi per il timbro EJEMPLAR on-hover (deterministici, non
// random ad ogni render — è un dettaglio scenico, non un dato vero).
const ejemplarNumbers = ['014', '027', '003', '019', '035']

const total = ref(null)
async function fetchTotal() {
  try {
    const res = await fetch('/api/classify')
    if (!res.ok) throw new Error('stats request failed')
    const data = await res.json()
    total.value = data.total ?? null
  } catch {
    total.value = null
  }
}

// Stagger reveal dei link gestito a mano (non con le classi automatiche di
// <Transition>, che Vue rimuove a fine animazione — i link sparirebbero a
// menu aperto se l'opacità finale dipendesse da quelle classi).
const linksVisible = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    fetchTotal()
    nextTick(() => requestAnimationFrame(() => { linksVisible.value = true }))
  } else {
    linksVisible.value = false
  }
}
function close() {
  isOpen.value = false
  linksVisible.value = false
}

// Mirino che segue il cursore, attivo solo mentre il menu è aperto.
const reticleEl = ref(null)
function onMouseMove(e) {
  if (!reticleEl.value) return
  reticleEl.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
}
watch(isOpen, (open) => {
  if (open) {
    window.addEventListener('mousemove', onMouseMove)
    document.body.style.overflow = 'hidden'
  } else {
    window.removeEventListener('mousemove', onMouseMove)
    document.body.style.overflow = ''
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.body.style.overflow = ''
})

const route = useRoute()
watch(() => route.fullPath, close)
</script>

<template>
  <div class="burger">
    <button
      type="button"
      class="burger__btn"
      :class="{ 'burger__btn--open': isOpen }"
      :aria-label="isOpen ? t('nav.menuClose') : t('nav.menuOpen')"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="burger__line" />
      <span class="burger__line" />
      <span class="burger__dot" aria-hidden="true" />
    </button>

    <Teleport to="body">
      <Transition name="burger-panel">
        <div v-if="isOpen" class="burger-panel" @click.self="close">
          <div ref="reticleEl" class="burger-panel__reticle" aria-hidden="true" />

          <nav class="burger-panel__nav" :class="{ 'burger-panel__nav--visible': linksVisible }">
            <NuxtLink
              v-for="(link, i) in links"
              :key="link.to"
              :to="link.to"
              class="burger-panel__link"
              :style="{ transitionDelay: `${0.05 + i * 0.06}s` }"
            >
              <span class="burger-panel__num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="burger-panel__label">{{ link.label }}</span>
              <span class="burger-panel__stamp">EJEMPLAR {{ ejemplarNumbers[i] }}</span>
            </NuxtLink>
          </nav>

          <p v-if="total !== null" class="burger-panel__counter">
            {{ t('nav.menuCounter') }}: {{ total.toLocaleString() }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.burger {
  justify-self: start;
}

.burger__btn {
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
}

.burger__line {
  width: 22px;
  height: 2px;
  background: var(--rp-black);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s;
}

.burger__btn--open .burger__line:first-child {
  transform: translateY(4px) rotate(45deg);
}
.burger__btn--open .burger__line:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

/* Pallino "on air" a riposo — stesso motivo del CTA principale in Home,
   coerenza visiva: il sistema è sempre acceso, anche col menu chiuso. */
.burger__dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--rp-red);
  animation: burger-dot-pulse 1.8s ease-in-out infinite;
  transition: opacity 0.2s;
}
.burger__btn--open .burger__dot {
  opacity: 0;
  animation: none;
}

@keyframes burger-dot-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.75); }
}

/* ── Pannello fullscreen ── */
.burger-panel {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--rp-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 32px 60px;
  cursor: default;
}

/* Glitch VHS all'apertura: un rapido doppio flicker + scan-line che scorre
   una volta, coerente con l'estetica tracking-error del progetto. */
.burger-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
  transform: translateY(-100%);
  pointer-events: none;
  animation: burger-scan 0.5s ease-out;
}

@keyframes burger-scan {
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}

.burger-panel-enter-active {
  animation: burger-flicker 0.25s steps(4);
}
.burger-panel-leave-active {
  transition: opacity 0.15s ease;
}
.burger-panel-leave-to {
  opacity: 0;
}

@keyframes burger-flicker {
  0% { opacity: 0; }
  25% { opacity: 1; }
  40% { opacity: 0.3; }
  60% { opacity: 1; }
  100% { opacity: 1; }
}

/* ── Mirino cursore ── */
.burger-panel__reticle {
  position: fixed;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: -14px 0 0 -14px;
  border: 1px solid var(--rp-red);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}
.burger-panel__reticle::before,
.burger-panel__reticle::after {
  content: '';
  position: absolute;
  background: var(--rp-red);
}
.burger-panel__reticle::before {
  top: 50%; left: -5px; right: -5px;
  height: 1px;
  transform: translateY(-50%);
}
.burger-panel__reticle::after {
  left: 50%; top: -5px; bottom: -5px;
  width: 1px;
  transform: translateX(-50%);
}
@media (hover: none) {
  .burger-panel__reticle { display: none; }
}

/* ── Nav links ── */
.burger-panel__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 900px;
}

.burger-panel__link {
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 10px 0;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.burger-panel__nav--visible .burger-panel__link {
  opacity: 1;
  transform: translateY(0);
}

.burger-panel__num {
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.1em;
  color: var(--rp-red);
  opacity: 0.8;
}

.burger-panel__label {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(32px, 8vw, 88px);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  color: var(--rp-white);
  transition: color 0.2s;
}
.burger-panel__link:hover .burger-panel__label,
.burger-panel__link:focus-visible .burger-panel__label {
  color: var(--rp-red);
}

.burger-panel__stamp {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rp-red);
  border: 1px solid var(--rp-red);
  padding: 3px 8px;
  transform: rotate(-4deg);
  opacity: 0;
  transition: opacity 0.2s;
  white-space: nowrap;
}
.burger-panel__link:hover .burger-panel__stamp,
.burger-panel__link:focus-visible .burger-panel__stamp {
  opacity: 1;
}
@media (max-width: 640px) {
  .burger-panel__stamp { display: none; }
}

.burger-panel__counter {
  position: absolute;
  bottom: 28px;
  left: 32px;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rp-white);
  opacity: 0.4;
}
</style>
