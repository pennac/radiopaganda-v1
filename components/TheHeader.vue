<script setup>
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

// Il logo animato (loop 5s) viene usato solo in home per non appesantire
// ogni pagina con un video autoplay; sulle altre pagine resta il PNG statico.
const isHome = computed(() => route.path === localePath('/'))
const prefersReducedMotion = useReducedMotion()
</script>

<template>
  <header class="header">
    <TheBurgerMenu />

    <!-- Logo, centrato: la nav è stata rimossa dall'header (resta nel footer) -->
    <NuxtLink :to="localePath('/')" class="header__logo" aria-label="Radiopaganda home">
      <video
        v-if="isHome && !prefersReducedMotion"
        class="header__logo-media"
        src="/images/asset/logo.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      />
      <img v-else class="header__logo-media" src="/images/asset/logo.png" alt="Radiopaganda" width="36" height="36" />
    </NuxtLink>

    <!-- Lang switcher -->
    <div class="lang-switcher" role="navigation" aria-label="Language">
      <template v-for="loc in locales" :key="loc.code">
        <NuxtLink
          :to="switchLocalePath(loc.code)"
          :class="['lang-btn', { 'lang-btn--active': locale === loc.code }]"
        >{{ loc.code.toUpperCase() }}</NuxtLink>
        <span class="lang-sep" aria-hidden="true">·</span>
      </template>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 32px;
  /* Trasparente sopra lo scrollytelling, poi bianco sulle pagine interne */
  mix-blend-mode: normal;
}

/* Su pagine bianche aggiungi sfondo */
.header--solid {
  background: var(--rp-white);
  border-bottom: 1px solid var(--rp-ice);
}

.header__logo {
  display: flex;
  justify-self: center;
}

.header__logo-media {
  width: 36px;
  height: 36px;
  object-fit: contain;
  border-radius: 50%;
}

.lang-switcher {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-self: end;
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--rp-black);
  opacity: 0.25;
  transition: opacity 0.2s;
}
.lang-btn--active { opacity: 1; }
.lang-btn:hover   { opacity: 0.7; }

.lang-sep {
  font-size: 10px;
  color: var(--rp-black);
  opacity: 0.15;
}
/* Rimuovi l'ultimo separatore */
.lang-sep:last-child { display: none; }

@media (max-width: 600px) {
  .header { padding: 0 20px; }
}
</style>
