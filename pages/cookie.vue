<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
const { openPreferences } = useConsent()
useHead({
  title: 'Cookie Policy — RADIOPAGANDA',
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const content = {
  it: {
    label: 'COOKIE POLICY',
    title: 'COOKIE',
    updated: 'Ultimo aggiornamento: luglio 2026',
    intro: 'Questa pagina elenca i cookie e le tecnologie simili usati su questo sito, raggruppati per categoria. Puoi cambiare la tua scelta in qualsiasi momento dal pulsante qui sotto.',
    prefsBtn: 'Gestisci le preferenze cookie',
    categories: [
      {
        name: 'Necessari',
        desc: 'Sempre attivi. Servono a far funzionare il sito e a ricordare le tue scelte (es. lingua, preferenze cookie). Non richiedono consenso.',
        cookies: [
          { name: 'rp_consent', provider: 'Radiopaganda (prima parte)', purpose: 'Ricorda la tua scelta su analytics/marketing', duration: '6 mesi' },
          { name: 'rp_locale', provider: 'Radiopaganda (prima parte)', purpose: 'Ricorda la lingua scelta (IT/EN/ES)', duration: '1 anno' },
        ],
      },
      {
        name: 'Analytics',
        desc: 'Attivi solo se acconsenti. Google Analytics 4, caricato tramite Google Tag Manager, per capire in forma aggregata come viene usato il sito.',
        cookies: [
          { name: '_ga, _ga_*', provider: 'Google LLC', purpose: 'Distingue gli utenti per le statistiche aggregate', duration: 'fino a 2 anni' },
          { name: '_gid', provider: 'Google LLC', purpose: 'Distingue gli utenti nelle 24 ore', duration: '24 ore' },
        ],
      },
      {
        name: 'Marketing',
        desc: 'Attivi solo se acconsenti. Google Ads, per campagne pubblicitarie e remarketing.',
        cookies: [
          { name: '_gcl_au, IDE, test_cookie', provider: 'Google LLC', purpose: 'Misurazione conversioni e remarketing pubblicitario', duration: 'fino a 3 mesi' },
        ],
      },
      {
        name: 'Contenuti embeddati (on-click)',
        desc: 'I video YouTube nella pagina Capitolo 0 non si caricano automaticamente. Solo cliccando "Carica il video" attivi l\'embed: da quel momento YouTube/Google può impostare i propri cookie secondo la propria informativa.',
        cookies: [],
      },
      {
        name: 'Analisi senza cookie',
        desc: 'Usiamo anche Plausible Analytics per statistiche aggregate: non imposta cookie e non richiede consenso.',
        cookies: [],
      },
    ],
  },
  en: {
    label: 'COOKIE POLICY',
    title: 'COOKIES',
    updated: 'Last updated: July 2026',
    intro: 'This page lists the cookies and similar technologies used on this site, grouped by category. You can change your choice at any time using the button below.',
    prefsBtn: 'Manage cookie preferences',
    categories: [
      {
        name: 'Necessary',
        desc: 'Always active. Needed for the site to work and to remember your choices (e.g. language, cookie preferences). No consent required.',
        cookies: [
          { name: 'rp_consent', provider: 'Radiopaganda (first-party)', purpose: 'Remembers your analytics/marketing choice', duration: '6 months' },
          { name: 'rp_locale', provider: 'Radiopaganda (first-party)', purpose: 'Remembers your chosen language (IT/EN/ES)', duration: '1 year' },
        ],
      },
      {
        name: 'Analytics',
        desc: 'Active only if you consent. Google Analytics 4, loaded via Google Tag Manager, to understand in aggregate how the site is used.',
        cookies: [
          { name: '_ga, _ga_*', provider: 'Google LLC', purpose: 'Distinguishes users for aggregate statistics', duration: 'up to 2 years' },
          { name: '_gid', provider: 'Google LLC', purpose: 'Distinguishes users within 24 hours', duration: '24 hours' },
        ],
      },
      {
        name: 'Marketing',
        desc: 'Active only if you consent. Google Ads, for advertising campaigns and remarketing.',
        cookies: [
          { name: '_gcl_au, IDE, test_cookie', provider: 'Google LLC', purpose: 'Conversion measurement and ad remarketing', duration: 'up to 3 months' },
        ],
      },
      {
        name: 'Embedded content (on-click)',
        desc: 'YouTube videos on the Chapter 0 page do not load automatically. Only by clicking "Load video" do you activate the embed: from that moment YouTube/Google may set its own cookies per its own notice.',
        cookies: [],
      },
      {
        name: 'Cookieless analytics',
        desc: 'We also use Plausible Analytics for aggregate statistics: it sets no cookies and requires no consent.',
        cookies: [],
      },
    ],
  },
  es: {
    label: 'POLÍTICA DE COOKIES',
    title: 'COOKIES',
    updated: 'Última actualización: julio de 2026',
    intro: 'Esta página enumera las cookies y tecnologías similares usadas en este sitio, agrupadas por categoría. Puedes cambiar tu elección en cualquier momento con el botón de abajo.',
    prefsBtn: 'Gestionar preferencias de cookies',
    categories: [
      {
        name: 'Necesarias',
        desc: 'Siempre activas. Sirven para que el sitio funcione y para recordar tus elecciones (p. ej. idioma, preferencias de cookies). No requieren consentimiento.',
        cookies: [
          { name: 'rp_consent', provider: 'Radiopaganda (propia)', purpose: 'Recuerda tu elección sobre analytics/marketing', duration: '6 meses' },
          { name: 'rp_locale', provider: 'Radiopaganda (propia)', purpose: 'Recuerda el idioma elegido (IT/EN/ES)', duration: '1 año' },
        ],
      },
      {
        name: 'Analytics',
        desc: 'Activas solo si consientes. Google Analytics 4, cargado mediante Google Tag Manager, para entender de forma agregada cómo se usa el sitio.',
        cookies: [
          { name: '_ga, _ga_*', provider: 'Google LLC', purpose: 'Distingue usuarios para estadísticas agregadas', duration: 'hasta 2 años' },
          { name: '_gid', provider: 'Google LLC', purpose: 'Distingue usuarios durante 24 horas', duration: '24 horas' },
        ],
      },
      {
        name: 'Marketing',
        desc: 'Activas solo si consientes. Google Ads, para campañas publicitarias y remarketing.',
        cookies: [
          { name: '_gcl_au, IDE, test_cookie', provider: 'Google LLC', purpose: 'Medición de conversiones y remarketing publicitario', duration: 'hasta 3 meses' },
        ],
      },
      {
        name: 'Contenido incrustado (al hacer clic)',
        desc: 'Los videos de YouTube en la página del Capítulo 0 no se cargan automáticamente. Solo al hacer clic en "Cargar el video" activas el embed: desde ese momento YouTube/Google puede establecer sus propias cookies según su propio aviso.',
        cookies: [],
      },
      {
        name: 'Análisis sin cookies',
        desc: 'También usamos Plausible Analytics para estadísticas agregadas: no establece cookies y no requiere consentimiento.',
        cookies: [],
      },
    ],
  },
}

const page = computed(() => content[locale.value] || content.it)
</script>

<template>
  <div class="legal">
    <div class="legal__inner">
      <p class="legal__label">{{ page.label }}</p>
      <h1 class="legal__title">{{ page.title }}</h1>
      <p class="legal__updated">{{ page.updated }}</p>
      <p class="legal__intro">{{ page.intro }}</p>

      <button type="button" class="legal__prefs-btn" @click="openPreferences">{{ page.prefsBtn }}</button>

      <section v-for="(cat, i) in page.categories" :key="i" class="legal__section">
        <h2 class="legal__h2">{{ cat.name }}</h2>
        <p class="legal__p">{{ cat.desc }}</p>

        <div v-if="cat.cookies.length" class="cookie-table">
          <div v-for="(c, j) in cat.cookies" :key="j" class="cookie-row">
            <span class="cookie-row__name">{{ c.name }}</span>
            <span class="cookie-row__provider">{{ c.provider }}</span>
            <span class="cookie-row__purpose">{{ c.purpose }}</span>
            <span class="cookie-row__duration">{{ c.duration }}</span>
          </div>
        </div>
      </section>

      <NuxtLink :to="localePath('/privacy')" class="legal__cross-link">Privacy Policy →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.legal {
  min-height: 100vh;
  padding: calc(var(--nav-h) + 60px) 32px 120px;
}

.legal__inner { max-width: 760px; margin: 0 auto; }

.legal__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rp-black);
  opacity: 0.3;
  margin-bottom: 24px;
}

.legal__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(40px, 8vw, 80px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
  margin-bottom: 12px;
}

.legal__updated {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--rp-black);
  opacity: 0.4;
  margin-bottom: 24px;
}

.legal__intro {
  font-family: var(--font-text);
  font-size: 16px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.8;
  max-width: 560px;
  margin-bottom: 32px;
}

.legal__prefs-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp-white);
  background: var(--rp-black);
  padding: 14px 24px;
  margin-bottom: 64px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.legal__prefs-btn:hover { opacity: 0.8; }

.legal__section {
  padding-top: 32px;
  margin-top: 32px;
  border-top: 1px solid var(--rp-ice);
}
.legal__section:first-of-type { padding-top: 0; margin-top: 0; border-top: none; }

.legal__h2 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(20px, 3vw, 28px);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--rp-black);
  margin-bottom: 12px;
}

.legal__p {
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.85;
}

.cookie-table {
  margin-top: 20px;
  border-top: 1px solid var(--rp-ice);
}

.cookie-row {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr) 2fr minmax(80px, auto);
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--rp-ice);
}

.cookie-row__name {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--rp-black);
}

.cookie-row__provider,
.cookie-row__purpose,
.cookie-row__duration {
  font-family: var(--font-text);
  font-size: 13px;
  color: var(--rp-black);
  opacity: 0.7;
}

.legal__cross-link {
  display: inline-block;
  margin-top: 64px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-black);
  opacity: 0.5;
}
.legal__cross-link:hover { opacity: 1; }

@media (max-width: 640px) {
  .cookie-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
