<script setup>
const { bannerVisible, state, acceptAll, rejectAll, savePreferences } = useConsent()
const localePath = useLocalePath()
const { locale } = useI18n()

const expanded = ref(false)
const draftAnalytics = ref(state.value.analytics)
const draftMarketing = ref(state.value.marketing)

watch(bannerVisible, (visible) => {
  if (visible) {
    expanded.value = false
    draftAnalytics.value = state.value.analytics
    draftMarketing.value = state.value.marketing
  }
})

const t = computed(() => ({
  it: {
    text: 'Usiamo cookie tecnici necessari e, solo con il tuo consenso, cookie di analisi e marketing per capire come vieni classificato.',
    link: 'Cookie Policy',
    reject: 'Rifiuta',
    customize: 'Personalizza',
    accept: 'Accetta tutto',
    save: 'Salva preferenze',
    necessary: 'Necessari',
    necessaryNote: 'Sempre attivi — indispensabili per il funzionamento del sito.',
    analytics: 'Analytics',
    analyticsNote: 'Google Analytics 4, per capire come viene usato il sito.',
    marketing: 'Marketing',
    marketingNote: 'Google Ads / remarketing.',
  },
  en: {
    text: 'We use necessary technical cookies and, only with your consent, analytics and marketing cookies to understand how you get classified.',
    link: 'Cookie Policy',
    reject: 'Reject',
    customize: 'Customize',
    accept: 'Accept all',
    save: 'Save preferences',
    necessary: 'Necessary',
    necessaryNote: 'Always active — required for the site to work.',
    analytics: 'Analytics',
    analyticsNote: 'Google Analytics 4, to understand how the site is used.',
    marketing: 'Marketing',
    marketingNote: 'Google Ads / remarketing.',
  },
  es: {
    text: 'Usamos cookies técnicas necesarias y, solo con tu consentimiento, cookies de análisis y marketing para entender cómo eres clasificado.',
    link: 'Política de Cookies',
    reject: 'Rechazar',
    customize: 'Personalizar',
    accept: 'Aceptar todo',
    save: 'Guardar preferencias',
    necessary: 'Necesarias',
    necessaryNote: 'Siempre activas — imprescindibles para el funcionamiento del sitio.',
    analytics: 'Analytics',
    analyticsNote: 'Google Analytics 4, para entender cómo se usa el sitio.',
    marketing: 'Marketing',
    marketingNote: 'Google Ads / remarketing.',
  },
}[locale.value] || {}))

function save() {
  savePreferences({ analytics: draftAnalytics.value, marketing: draftMarketing.value })
}
</script>

<template>
  <div v-if="bannerVisible" class="cookie-banner" role="dialog" aria-modal="false" aria-label="Cookie">
    <div class="cookie-banner__inner">
      <p class="cookie-banner__text">
        {{ t.text }}
        <NuxtLink :to="localePath('/cookie')" class="cookie-banner__link">{{ t.link }}</NuxtLink>
      </p>

      <div v-if="expanded" class="cookie-banner__prefs">
        <div class="pref">
          <div class="pref__head">
            <span class="pref__name">{{ t.necessary }}</span>
            <span class="pref__toggle pref__toggle--locked" aria-hidden="true"></span>
          </div>
          <p class="pref__note">{{ t.necessaryNote }}</p>
        </div>

        <div class="pref">
          <div class="pref__head">
            <span class="pref__name">{{ t.analytics }}</span>
            <button
              type="button"
              class="pref__toggle"
              :class="{ 'pref__toggle--on': draftAnalytics }"
              role="switch"
              :aria-checked="draftAnalytics"
              @click="draftAnalytics = !draftAnalytics"
            />
          </div>
          <p class="pref__note">{{ t.analyticsNote }}</p>
        </div>

        <div class="pref">
          <div class="pref__head">
            <span class="pref__name">{{ t.marketing }}</span>
            <button
              type="button"
              class="pref__toggle"
              :class="{ 'pref__toggle--on': draftMarketing }"
              role="switch"
              :aria-checked="draftMarketing"
              @click="draftMarketing = !draftMarketing"
            />
          </div>
          <p class="pref__note">{{ t.marketingNote }}</p>
        </div>
      </div>

      <div class="cookie-banner__actions">
        <template v-if="!expanded">
          <button type="button" class="cb-btn" @click="rejectAll">{{ t.reject }}</button>
          <button type="button" class="cb-btn" @click="expanded = true">{{ t.customize }}</button>
          <button type="button" class="cb-btn cb-btn--primary" @click="acceptAll">{{ t.accept }}</button>
        </template>
        <template v-else>
          <button type="button" class="cb-btn cb-btn--primary" @click="save">{{ t.save }}</button>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  background: var(--rp-black);
  border-top: 1px solid var(--rp-ice);
  padding: 24px 32px;
}

.cookie-banner__inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.cookie-banner__text {
  flex: 1 1 380px;
  font-family: var(--font-text);
  font-size: 14px;
  line-height: 1.5;
  color: var(--rp-ice);
  opacity: 0.85;
}

.cookie-banner__link {
  color: var(--rp-ice);
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-left: 6px;
  white-space: nowrap;
}

.cookie-banner__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.cb-btn {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--rp-black);
  background: var(--rp-ice);
  opacity: 0.85;
  padding: 12px 20px;
  border: 1px solid var(--rp-ice);
  transition: opacity 0.2s, background 0.2s, color 0.2s;
  white-space: nowrap;
}
.cb-btn:hover { opacity: 1; }

.cb-btn--primary {
  background: var(--rp-red);
  border-color: var(--rp-red);
  color: var(--rp-white);
  opacity: 1;
}
.cb-btn--primary:hover { opacity: 0.85; }

.cookie-banner__prefs {
  flex: 1 1 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.pref__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pref__name {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--rp-white);
}

.pref__note {
  font-family: var(--font-text);
  font-size: 12px;
  line-height: 1.4;
  color: var(--rp-ice);
  opacity: 0.6;
  margin-top: 6px;
}

.pref__toggle {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  transition: background 0.2s;
  flex-shrink: 0;
}
.pref__toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--rp-white);
  transition: transform 0.2s;
}
.pref__toggle--on { background: var(--rp-white); }
.pref__toggle--on::after { background: var(--rp-black); }
.pref__toggle--on::after { transform: translateX(16px); }
.pref__toggle--locked { background: rgba(255, 255, 255, 0.15); cursor: not-allowed; }
.pref__toggle--locked::after { transform: translateX(16px); background: rgba(255, 255, 255, 0.6); }

@media (max-width: 600px) {
  .cookie-banner { padding: 20px; }
  .cookie-banner__actions { width: 100%; }
  .cb-btn { flex: 1; text-align: center; }
}
</style>
