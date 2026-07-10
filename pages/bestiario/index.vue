<script setup>
import { orders } from '~/data/bestiario'

const localePath = useLocalePath()
const { locale } = useI18n()
const seoDescription = {
  it: 'Sette Ordini, trentacinque specie. Il bestiario che classifica chi comanda, chi parla, chi lavora, chi consuma, chi si crede libero.',
  en: 'Seven Orders, thirty-five species. The bestiary that classifies who rules, who speaks, who works, who consumes, who thinks they are free.',
  es: 'Siete Órdenes, treinta y cinco especies. El bestiario que clasifica a quien manda, quien habla, quien trabaja, quien consume, quien se cree libre.',
}
useHead({
  title: 'Bestiario — RADIOPAGANDA',
  meta: computed(() => [
    { name: 'description', content: seoDescription[locale.value] || seoDescription.it },
    { property: 'og:description', content: seoDescription[locale.value] || seoDescription.it },
  ]),
})

const ui = computed(() => ({
  it: {
    label: 'BESTIARIO',
    title: '7 ORDINI',
    intro: 'Sette Ordini. Ognuno raccoglie chi, nel sistema, gioca lo stesso ruolo — chi comanda, chi parla, chi lavora, chi consuma, chi crede di scappare, chi combatte per la tribù, chi resta invisibile. Ogni Ordine si divide in specie: archetipi precisi, non caricature generiche. Scegli un Ordine per conoscere le sue specie.',
    ctaSongs: 'Ascolta le canzoni di Capitolo 0',
  },
  en: {
    label: 'BESTIARY',
    title: '7 ORDERS',
    intro: 'Seven Orders. Each one gathers those who play the same role in the system — those who rule, those who speak, those who work, those who consume, those who think they escape, those who fight for the tribe, those who stay invisible. Each Order is split into species: precise archetypes, not generic caricatures. Pick an Order to meet its species.',
    ctaSongs: 'Listen to the Chapter 0 songs',
  },
  es: {
    label: 'BESTIARIO',
    title: '7 ÓRDENES',
    intro: 'Siete Órdenes. Cada una reúne a quienes, en el sistema, juegan el mismo papel — quienes mandan, quienes hablan, quienes trabajan, quienes consumen, quienes creen escapar, quienes luchan por la tribu, quienes permanecen invisibles. Cada Orden se divide en especies: arquetipos precisos, no caricaturas genéricas. Elige una Orden para conocer sus especies.',
    ctaSongs: 'Escucha las canciones del Capítulo 0',
  },
}[locale.value] || {}))

function claimFor(order) {
  return order.claim[locale.value] || order.claim.it
}

// Reveal a comparsa quando la griglia entra in viewport (stesso pattern
// della griglia specie, per coerenza in tutto il Bestiario).
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
    { threshold: 0.1 }
  )
  if (gridEl.value) observer.observe(gridEl.value)
})
</script>

<template>
  <div class="bestiario">
    <div class="bestiario__inner">
      <p class="bestiario__label">{{ ui.label }}</p>
      <h1 class="bestiario__title">{{ ui.title }}</h1>
      <p class="bestiario__intro">{{ ui.intro }}</p>
      <div ref="gridEl" class="orders-grid" :class="{ 'is-visible': gridVisible }">
        <NuxtLink
          v-for="order in orders"
          :key="order.slug"
          :to="localePath(`/bestiario/${order.slug}`)"
          class="order-card"
        >
          <SpeciesCardVideo v-if="order.video" :src="order.video" :title="order.name" />
          <div class="order-card__overlay" />
          <div class="order-card__head">
            <span class="order-card__num">{{ String(order.number).padStart(2, '0') }}</span>
            <span class="order-card__name">{{ order.name }}</span>
          </div>
          <p class="order-card__hook">{{ claimFor(order).hook }}</p>
          <div class="order-card__more">
            <p class="order-card__inst">{{ claimFor(order).inst }}</p>
            <p class="order-card__cta">{{ claimFor(order).cta }}</p>
          </div>
        </NuxtLink>
      </div>

      <NuxtLink :to="localePath('/manifesto')" class="bestiario__songs-cta">
        {{ ui.ctaSongs }} →
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.bestiario {
  min-height: 100vh;
  padding: calc(var(--nav-h) + 60px) 32px 80px;
}

.bestiario__inner { max-width: 1100px; margin: 0 auto; }

.bestiario__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  opacity: 0.3;
  margin-bottom: 24px;
}

.bestiario__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(48px, 10vw, 120px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
  margin-bottom: 24px;
}

.bestiario__intro {
  font-family: var(--font-text);
  font-size: 17px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.8;
  max-width: 640px;
  margin-bottom: 56px;
}

.bestiario__songs-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 56px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-black);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--rp-black);
  transition: color 0.2s, border-color 0.2s;
}
.bestiario__songs-cta:hover {
  color: var(--rp-red);
  border-color: var(--rp-red);
}

/* Mobile: riga a scorrimento con snap, card sempre quadrate. */
.orders-grid {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 6px;
  -webkit-overflow-scrolling: touch;
  mask-image: linear-gradient(90deg, #000 92%, transparent 100%);
}

.order-card {
  position: relative;
  overflow: hidden;
  flex: 0 0 68vw;
  max-width: 280px;
  aspect-ratio: 1;
  scroll-snap-align: start;
  background: var(--rp-black);
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.orders-grid.is-visible .order-card { opacity: 1; transform: translateY(0); }
.orders-grid.is-visible .order-card:nth-child(1) { transition-delay: 0.02s; }
.orders-grid.is-visible .order-card:nth-child(2) { transition-delay: 0.07s; }
.orders-grid.is-visible .order-card:nth-child(3) { transition-delay: 0.12s; }
.orders-grid.is-visible .order-card:nth-child(4) { transition-delay: 0.17s; }
.orders-grid.is-visible .order-card:nth-child(5) { transition-delay: 0.22s; }
.orders-grid.is-visible .order-card:nth-child(6) { transition-delay: 0.27s; }
.orders-grid.is-visible .order-card:nth-child(7) { transition-delay: 0.32s; }

/* Desktop: griglia normale, card sempre quadrate. */
@media (min-width: 900px) {
  .orders-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1px;
    background: var(--rp-ice);
    border: 1px solid var(--rp-ice);
    overflow: visible;
    mask-image: none;
  }
  .order-card {
    flex: none;
    max-width: none;
  }
}

.order-card :deep(.species-card-video__el) {
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.order-card:hover :deep(.species-card-video__el) {
  transform: scale(1.07);
}

/* Inst + cta: dettaglio extra visibile solo su hover (desktop). In mobile
   restano nascosti — il formato quadrato privilegia nome + hook, il resto
   si scopre aprendo la pagina dell'ordine. */
.order-card__more {
  position: relative;
  z-index: 2;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
}
@media (hover: hover) {
  .order-card:hover .order-card__more {
    max-height: 80px;
    opacity: 1;
  }
}

.order-card__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.88) 100%);
  transition: background 0.2s;
}
.order-card:hover .order-card__overlay { background: rgba(0, 0, 0, 0.4); }

.order-card__head {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.order-card__num {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--rp-white);
  opacity: 0.75;
}

.order-card__name {
  position: relative;
  z-index: 2;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--rp-white);
}

.order-card__hook {
  position: relative;
  z-index: 2;
  font-family: var(--font-text);
  font-size: 16px;
  line-height: 1.4;
  color: var(--rp-white);
}

.order-card__inst {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--rp-white);
  opacity: 0.7;
}

.order-card__cta {
  position: relative;
  z-index: 2;
  font-family: var(--font-mono);
  font-style: italic;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--rp-white);
  opacity: 0.7;
}
</style>
