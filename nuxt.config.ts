// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],

  // ── Variabili d'ambiente pubbliche ─────────────────────────────
  runtimeConfig: {
    public: {
      gtmId:          process.env.GTM_ID          ?? '',
      plausibleDomain: process.env.PLAUSIBLE_DOMAIN ?? '',
      beehiivPubId:   process.env.BEEHIIV_PUBLICATION_ID ?? '',
      siteUrl:        process.env.SITE_URL         ?? 'https://radiopaganda.com',
    },
  },

  i18n: {
    restructureDir: false,
    langDir: 'i18n',
    locales: [
      { code: 'it', name: 'Italiano', language: 'it-IT', file: 'it.json' },
      { code: 'en', name: 'English',  language: 'en-US', file: 'en.json' },
      { code: 'es', name: 'Español',  language: 'es-ES', file: 'es.json' },
    ],
    defaultLocale: 'it',
    strategy: 'prefix_except_default',
    // Necessario perché useLocaleHead() (app.vue) generi URL assoluti corretti
    // nei tag hreflang alternate — senza baseUrl userebbe URL relativi, non
    // validi per i motori di ricerca.
    baseUrl: process.env.SITE_URL ?? 'https://radiopaganda.com',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'rp_locale',
      redirectOn: 'root',
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    // Firma visiva del progetto (già usata nel burger menu) riportata su ogni
    // cambio pagina: un flicker VHS breve invece di un cut secco. Le classi
    // .page-enter-active/.page-leave-active sono in assets/css/main.css
    // (globali, non scoped: il wrapper di NuxtPage non ha un componente
    // proprio a cui agganciare stili scoped).
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'RADIOPAGANDA — Applied Sociological Studies',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Applied Sociological Studies. On You.' },
        { property: 'og:title', content: 'RADIOPAGANDA' },
        { property: 'og:description', content: 'Applied Sociological Studies. On You.' },
        { property: 'og:image', content: '/og-image.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@100;300;400;500;700;900&family=IBM+Plex+Mono:wght@400&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      script: [
        // Google Consent Mode v2 — default "denied" per tutti i segnali, impostato
        // in <head> prima di qualsiasi script GTM/GA. plugins/gtm.client.ts e
        // composables/useConsent.ts aggiornano questo stato dopo la scelta
        // dell'utente nel banner cookie (components/CookieBanner.client.vue).
        // Non rimuovere né spostare: deve restare il primo script eseguito.
        {
          key: 'consent-mode-default',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `,
          tagPosition: 'head',
        },
      ],
    },
  },

  compatibilityDate: '2024-11-01',
})
