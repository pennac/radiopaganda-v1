// Plausible Analytics — privacy-first, no cookie, no GDPR banner richiesto
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const domain = config.public.plausibleDomain

  if (!domain) return

  const script = document.createElement('script')
  script.defer = true
  script.setAttribute('data-domain', domain)
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
})
