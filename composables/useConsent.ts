// Stato di consenso cookie (GDPR/ePrivacy) — categorie: necessari (sempre attivi),
// analytics (Google Analytics 4 via GTM), marketing (Google Ads/remarketing via GTM).
// Persistito in un cookie di prima parte, 6 mesi, poi richiesto di nuovo.
// Aggiorna Google Consent Mode v2 (gtag) e carica GTM solo se richiesto.
import { loadGtmScript } from '~/utils/gtm'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export interface ConsentState {
  analytics: boolean
  marketing: boolean
  decided: boolean
  ts: number
}

const SIX_MONTHS = 60 * 60 * 24 * 180

export function useConsent() {
  const consent = useCookie<ConsentState | null>('rp_consent', {
    maxAge: SIX_MONTHS,
    sameSite: 'lax',
    default: () => null,
  })

  // Controlla se il banner deve riaprirsi manualmente (link "Preferenze cookie"
  // nel footer), indipendentemente dal fatto che una scelta sia già salvata.
  const forceOpen = useState('rp_consent_force_open', () => false)

  const hasDecided = computed(() => !!consent.value?.decided)
  const state = computed<Pick<ConsentState, 'analytics' | 'marketing'>>(() => ({
    analytics: consent.value?.analytics ?? false,
    marketing: consent.value?.marketing ?? false,
  }))
  const bannerVisible = computed(() => forceOpen.value || !hasDecided.value)

  function updateGtagConsent(next: { analytics: boolean; marketing: boolean }) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
    window.gtag('consent', 'update', {
      analytics_storage: next.analytics ? 'granted' : 'denied',
      ad_storage: next.marketing ? 'granted' : 'denied',
      ad_user_data: next.marketing ? 'granted' : 'denied',
      ad_personalization: next.marketing ? 'granted' : 'denied',
    })
  }

  function maybeLoadGtm(next: { analytics: boolean; marketing: boolean }) {
    if (!next.analytics && !next.marketing) return
    const config = useRuntimeConfig()
    loadGtmScript(config.public.gtmId)
  }

  function apply(next: { analytics: boolean; marketing: boolean }) {
    consent.value = { ...next, decided: true, ts: Date.now() }
    updateGtagConsent(next)
    maybeLoadGtm(next)
    forceOpen.value = false
  }

  function acceptAll() {
    apply({ analytics: true, marketing: true })
  }

  function rejectAll() {
    apply({ analytics: false, marketing: false })
  }

  function savePreferences(prefs: { analytics: boolean; marketing: boolean }) {
    apply(prefs)
  }

  // Visitatore di ritorno con consenso già salvato: riallinea gtag e carica GTM
  // senza mostrare di nuovo il banner. Da chiamare una volta all'avvio dell'app.
  function restoreOnLoad() {
    if (hasDecided.value) {
      updateGtagConsent(state.value)
      maybeLoadGtm(state.value)
    }
  }

  function openPreferences() {
    forceOpen.value = true
  }

  return {
    hasDecided,
    state,
    bannerVisible,
    acceptAll,
    rejectAll,
    savePreferences,
    restoreOnLoad,
    openPreferences,
  }
}
