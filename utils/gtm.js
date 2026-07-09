// Iniezione tag Google idempotente — chiamata solo dopo che l'utente ha dato
// consenso (analytics e/o marketing), mai al caricamento incondizionato della
// pagina. Vedi composables/useConsent.ts e plugins/gtm.client.ts.
//
// Il progetto non ha un container GTM classico (formato GTM-XXXXXXX)
// accessibile sull'account Google in uso — ha invece un "Google tag" (formato
// GT-XXXXXXXX) già collegato alla proprietà GA4 esistente. Supportiamo
// entrambi i formati in base al prefisso dell'ID, così se in futuro viene
// creato un container GTM classico basta cambiare la variabile d'ambiente
// GTM_ID, senza toccare questo file:
// - GTM-XXXXXXX → container classico: script async + <noscript><iframe> di
//   fallback (pattern gtm.js standard).
// - qualsiasi altro formato (GT-XXXXXXXX, o un Measurement ID GA4 G-XXXXXXXXXX
//   usato direttamente senza Google tag) → gtag.js diretto, nessun container,
//   nessun fallback noscript necessario (richiede comunque JS per funzionare).
let injected = false

export function loadGtmScript(gtmId) {
  if (injected) return
  if (!gtmId || gtmId === 'GTM-XXXXXXX' || gtmId === 'GT-XXXXXXXX') return
  if (typeof document === 'undefined') return

  injected = true

  if (gtmId.startsWith('GTM-')) {
    const script = document.createElement('script')
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `
    document.head.appendChild(script)

    const noscript = document.createElement('noscript')
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.body.prepend(noscript)
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', gtmId)
}
