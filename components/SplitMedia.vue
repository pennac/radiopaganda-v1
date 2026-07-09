<script setup>
// Layout riutilizzabile a due blocchi: media (video/loop) + testo/CTA.
// Mobile: stack verticale, testo sopra, media sotto (reverse: media sopra, testo sotto).
// Desktop (>=900px): riga orizzontale, media a sinistra, testo a destra (reverse: invertito).
// Il blocco testo sta sempre su sfondo bianco -> testo nero (mai bianco su bianco).
defineProps({
  // hero = true: occupa tutta l'altezza viewport (usato in Home).
  // hero = false: altezza naturale del contenuto (usato in pagine interne).
  hero: { type: Boolean, default: false },
  // allineamento verticale del blocco testo: 'center' (hero, testi brevi)
  // o 'start' (sezioni con testo lungo, es. canzoni con testo/lyrics).
  align: { type: String, default: 'center' },
  // reverse = true: inverte l'ordine su entrambi i breakpoint — mobile media
  // sopra/testo sotto, desktop media a destra/testo a sinistra (usato in
  // /test: domande e risultato).
  reverse: { type: Boolean, default: false },
})
</script>

<template>
  <section
    class="split-media"
    :class="{
      'split-media--hero': hero,
      'split-media--align-start': align === 'start',
      'split-media--reverse': reverse,
    }"
  >
    <div class="split-media__media">
      <slot name="media" />
    </div>
    <div class="split-media__content">
      <div class="split-media__text">
        <slot />
      </div>
      <div v-if="$slots.cta" class="split-media__cta">
        <slot name="cta" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.split-media {
  display: flex;
  flex-direction: column;
}

/* ── Mobile: testo sopra, media sotto ── */
/* Il blocco media non impone un'altezza propria: la variante hero la fissa
   esplicitamente (min-height), le sezioni non-hero si affidano all'aspect-ratio
   già definito dal componente video figlio (es. SongVideo è 16:9). */
.split-media__media {
  order: 2;
  position: relative;
  width: 100%;
  background: var(--rp-black);
  overflow: hidden;
}
/* Solo se video/img sono figli diretti (es. hero Home): componenti come
   SongVideo gestiscono da soli il proprio video interno e non vanno toccati
   qui, altrimenti confliggono con il loro object-fit/aspect-ratio. */
.split-media__media > :deep(video),
.split-media__media > :deep(img) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.split-media__content {
  order: 1;
  background: var(--rp-white);
  padding: 56px 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}

.split-media__text { color: var(--rp-black); }
.split-media__cta { display: flex; }

.split-media--align-start .split-media__content {
  justify-content: flex-start;
}

/* ── Reverse: mobile media sopra, testo sotto ── */
.split-media--reverse .split-media__media { order: 1; }
.split-media--reverse .split-media__content { order: 2; }

/* ── Desktop: media sinistra, testo destra ── */
@media (min-width: 900px) {
  .split-media {
    flex-direction: row;
    align-items: stretch;
  }
  .split-media__media {
    order: 1;
    flex: 1 1 50%;
    aspect-ratio: auto;
    display: flex;
    align-items: center;
  }
  .split-media__content {
    order: 2;
    flex: 1 1 50%;
    padding: 64px;
  }

  /* Reverse su desktop: media a destra, testo a sinistra. */
  .split-media--reverse .split-media__media { order: 2; }
  .split-media--reverse .split-media__content { order: 1; }
}

/* ── Variante hero: piena altezza viewport (Home) ── */
.split-media--hero {
  min-height: 100vh;
}
.split-media--hero .split-media__media {
  min-height: 50vh;
}
@media (min-width: 900px) {
  .split-media--hero .split-media__media,
  .split-media--hero .split-media__content {
    min-height: 100vh;
  }
}
</style>
