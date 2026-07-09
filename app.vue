<script setup>
// Font preload è in nuxt.config.ts (head.link)
const localePath = useLocalePath()
const { openPreferences } = useConsent()

// SEO trilingue: html lang corretto + tag hreflang alternate (it/en/es +
// x-default) per ogni pagina, generati automaticamente da @nuxtjs/i18n in
// base a i18n.baseUrl (nuxt.config.ts). Senza questo, Google vede le 3
// lingue come contenuto duplicato invece che traduzioni della stessa pagina.
const i18nHead = useLocaleHead({ addSeoAttributes: true })
useHead({
  htmlAttrs: computed(() => ({ lang: i18nHead.value.htmlAttrs?.lang })),
  link: computed(() => i18nHead.value.link ?? []),
  meta: computed(() => i18nHead.value.meta ?? []),
})
</script>

<template>
  <div>
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <footer class="footer">
      <div class="footer__inner">
        <span class="wordmark">
          <span class="wordmark__radio">RADIO</span><span class="wordmark__paganda">PAGANDA</span>
        </span>

        <nav class="footer__nav" aria-label="Footer">
          <NuxtLink :to="localePath('/bestiario')" class="footer__nav-link">{{ $t('nav.bestiario') }}</NuxtLink>
          <NuxtLink :to="localePath('/manifesto')" class="footer__nav-link">{{ $t('nav.manifesto') }}</NuxtLink>
          <NuxtLink :to="localePath('/test')" class="footer__nav-link">{{ $t('nav.test') }}</NuxtLink>
          <NuxtLink :to="localePath('/progetto')" class="footer__nav-link">{{ $t('nav.progetto') }}</NuxtLink>
        </nav>

        <a
          href="https://instagram.com/radiopaganda"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__social"
        >{{ $t('footer.social') }}</a>

        <span class="footer__claim">{{ $t('footer.claim') }}</span>

        <nav class="footer__nav footer__nav--legal" aria-label="Legal">
          <NuxtLink :to="localePath('/privacy')" class="footer__nav-link">{{ $t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('/cookie')" class="footer__nav-link">{{ $t('footer.cookiePolicy') }}</NuxtLink>
          <button type="button" class="footer__nav-link footer__nav-link--btn" @click="openPreferences">
            {{ $t('footer.cookiePrefs') }}
          </button>
        </nav>

        <span class="footer__legal">{{ $t('footer.legal') }}</span>
      </div>
    </footer>
    <CookieBanner />
  </div>
</template>

<style scoped>
.footer {
  background: var(--rp-black);
  color: var(--rp-ice);
  padding: 48px 32px;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
}

.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 8px;
}

.footer__nav-link {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-ice);
  opacity: 0.6;
  transition: opacity 0.2s;
}
.footer__nav-link:hover { opacity: 1; }

.footer__nav--legal {
  margin-top: 0;
  gap: 16px;
}

.footer__nav-link--btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
}

.footer__social {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-ice);
  opacity: 0.6;
  transition: opacity 0.2s;
}
.footer__social:hover { opacity: 1; }

.footer__claim {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.4;
  margin-top: 8px;
}

.footer__legal {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.06em;
  opacity: 0.2;
  line-height: 1.6;
}
</style>
