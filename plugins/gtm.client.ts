// Google Tag Manager — NON carica più incondizionatamente.
// GTM ospita GA4 e Google Ads/remarketing: entrambi richiedono consenso
// preventivo (GDPR/ePrivacy). Il caricamento reale avviene in useConsent()
// (utils/gtm.js), chiamato solo dopo una scelta esplicita dell'utente nel
// banner cookie, o qui al mount per i visitatori di ritorno che hanno già
// deciso in una sessione precedente (cookie rp_consent già presente).
export default defineNuxtPlugin(() => {
  const { restoreOnLoad } = useConsent()
  restoreOnLoad()
})
