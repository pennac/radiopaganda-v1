<script setup>
const { locale } = useI18n()
const localePath = useLocalePath()
useHead({
  title: 'Privacy Policy — RADIOPAGANDA',
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})

const content = {
  it: {
    label: 'PRIVACY POLICY',
    title: 'PRIVACY',
    updated: 'Ultimo aggiornamento: luglio 2026',
    sections: [
      {
        h: '1. Titolare del trattamento',
        p: [
          'Il titolare del trattamento dei dati raccolti tramite questo sito è raggiungibile all\'indirizzo email: paolo@pennac.me.',
          'Radiopaganda resta pubblicamente anonima per coerenza con la propria natura editoriale; l\'indirizzo sopra indicato è il canale attraverso cui esercitare i diritti descritti in questa informativa.',
        ],
      },
      {
        h: '2. Quali dati trattiamo',
        p: [],
        subsections: [
          {
            h: '2.1 Dati tecnici di navigazione',
            p: ['Il nostro hosting provider (Netlify, Inc.) raccoglie automaticamente dati tecnici standard (indirizzo IP, tipo di browser, pagine visitate, orario di accesso) necessari al funzionamento e alla sicurezza del sito. Base giuridica: legittimo interesse.'],
          },
          {
            h: '2.2 Cookie di analisi — Google Analytics 4',
            p: ['Se acconsenti, utilizziamo Google Analytics 4 (tramite Google Tag Manager) per capire come viene usato il sito, in forma aggregata. Base giuridica: consenso, revocabile in qualsiasi momento dalle preferenze cookie in fondo al sito.'],
          },
          {
            h: '2.3 Cookie di marketing — Google Ads / remarketing',
            p: ['Se acconsenti, utilizziamo Google Ads per campagne pubblicitarie e remarketing. Base giuridica: consenso.'],
          },
          {
            h: '2.4 Analisi senza cookie — Plausible',
            p: ['Usiamo anche Plausible Analytics, uno strumento che non utilizza cookie e non raccoglie dati personali identificabili: le statistiche sono aggregate e anonime. Non richiede consenso.'],
          },
          {
            h: '2.5 Classificazione (Bestiario)',
            p: ['Quando scegli il tuo ordine e la tua specie nella sezione di classificazione, registriamo solo un contatore aggregato e anonimo (quante persone hanno scelto ciascuna specie). Non salviamo nessun dato che ti identifichi insieme a questa scelta.'],
          },
          {
            h: '2.6 Contenuti YouTube',
            p: ['Nella pagina Capitolo 0 alcuni video sono ospitati su YouTube. Il video non si carica automaticamente: solo cliccando "Carica il video" attivi l\'embed e, da quel momento, si applica l\'informativa privacy di Google/YouTube.'],
          },
          {
            h: '2.7 Newsletter (se attiva)',
            p: ['Se in futuro attiveremo un\'iscrizione via email, il tuo indirizzo sarà trattato con il tuo consenso esplicito e gestito dal fornitore terzo che useremo per l\'invio. Riceverai un\'informativa dedicata al momento dell\'iscrizione.'],
          },
        ],
      },
      {
        h: '3. Con chi condividiamo i dati',
        p: ['I dati possono essere trattati da fornitori terzi che agiscono come responsabili del trattamento: Netlify, Inc. (hosting), Google LLC (Analytics, Ads, YouTube), Plausible Insights OÜ (analisi senza cookie). Alcuni fornitori hanno sede negli Stati Uniti: il trasferimento avviene sulla base di clausole contrattuali standard o di altri meccanismi previsti dal GDPR per garantire un livello di protezione adeguato.'],
      },
      {
        h: '4. Per quanto tempo conserviamo i dati',
        p: ['La tua scelta sui cookie viene ricordata per 6 mesi, dopodiché ti verrà richiesta di nuovo. I contatori di classificazione sono conservati in forma aggregata e anonima senza una scadenza definita, perché non permettono di risalire a nessuna persona.'],
      },
      {
        h: '5. I tuoi diritti',
        p: ['Hai diritto di:'],
        list: [
          'accedere ai tuoi dati personali',
          'chiederne la rettifica o la cancellazione',
          'limitarne il trattamento',
          'opporti al trattamento',
          'richiederne la portabilità',
          'proporre reclamo alla tua autorità di controllo (in Italia, il Garante per la protezione dei dati personali)',
        ],
        pAfter: ['Per esercitare questi diritti scrivi a paolo@pennac.me.'],
      },
      {
        h: '6. Minori',
        p: ['Il sito ha un tono satirico rivolto a un pubblico adulto e non è pensato per raccogliere consapevolmente dati di minori di 16 anni.'],
      },
      {
        h: '7. Modifiche a questa informativa',
        p: ['Possiamo aggiornare questa informativa nel tempo. La data dell\'ultimo aggiornamento è indicata in cima alla pagina.'],
      },
    ],
  },
  en: {
    label: 'PRIVACY POLICY',
    title: 'PRIVACY',
    updated: 'Last updated: July 2026',
    sections: [
      {
        h: '1. Data controller',
        p: [
          'The controller for the data collected through this site can be reached at: paolo@pennac.me.',
          'Radiopaganda remains publicly anonymous, consistent with its editorial nature; the address above is the channel through which you can exercise the rights described in this notice.',
        ],
      },
      {
        h: '2. What data we process',
        p: [],
        subsections: [
          {
            h: '2.1 Technical browsing data',
            p: ['Our hosting provider (Netlify, Inc.) automatically collects standard technical data (IP address, browser type, pages visited, access time) necessary for the site to function and stay secure. Legal basis: legitimate interest.'],
          },
          {
            h: '2.2 Analytics cookies — Google Analytics 4',
            p: ['If you consent, we use Google Analytics 4 (via Google Tag Manager) to understand how the site is used, in aggregate form. Legal basis: consent, revocable at any time from the cookie preferences at the bottom of the site.'],
          },
          {
            h: '2.3 Marketing cookies — Google Ads / remarketing',
            p: ['If you consent, we use Google Ads for advertising campaigns and remarketing. Legal basis: consent.'],
          },
          {
            h: '2.4 Cookieless analytics — Plausible',
            p: ['We also use Plausible Analytics, a tool that uses no cookies and collects no identifiable personal data: statistics are aggregate and anonymous. No consent required.'],
          },
          {
            h: '2.5 Classification (Bestiary)',
            p: ['When you choose your order and species in the classification section, we only record an aggregate, anonymous counter (how many people chose each species). We store no data that identifies you together with this choice.'],
          },
          {
            h: '2.6 YouTube content',
            p: ['On the Chapter 0 page, some videos are hosted on YouTube. The video does not load automatically: only by clicking "Load video" do you activate the embed, and from that moment Google/YouTube\'s privacy notice applies.'],
          },
          {
            h: '2.7 Newsletter (if active)',
            p: ['If we activate an email sign-up in the future, your address will be processed with your explicit consent and managed by the third-party provider we use for sending. You will receive a dedicated notice when you subscribe.'],
          },
        ],
      },
      {
        h: '3. Who we share data with',
        p: ['Data may be processed by third-party providers acting as data processors: Netlify, Inc. (hosting), Google LLC (Analytics, Ads, YouTube), Plausible Insights OÜ (cookieless analytics). Some providers are based in the United States: transfers rely on standard contractual clauses or other GDPR-recognized mechanisms to ensure an adequate level of protection.'],
      },
      {
        h: '4. How long we keep data',
        p: ['Your cookie choice is remembered for 6 months, after which it will be asked again. Classification counters are kept in aggregate, anonymous form with no defined expiry, since they cannot be traced back to any individual.'],
      },
      {
        h: '5. Your rights',
        p: ['You have the right to:'],
        list: [
          'access your personal data',
          'request rectification or erasure',
          'restrict processing',
          'object to processing',
          'request data portability',
          'lodge a complaint with your supervisory authority',
        ],
        pAfter: ['To exercise these rights, write to paolo@pennac.me.'],
      },
      {
        h: '6. Minors',
        p: ['The site has a satirical tone aimed at an adult audience and is not intended to knowingly collect data from anyone under 16.'],
      },
      {
        h: '7. Changes to this notice',
        p: ['We may update this notice over time. The last-updated date is shown at the top of the page.'],
      },
    ],
  },
  es: {
    label: 'POLÍTICA DE PRIVACIDAD',
    title: 'PRIVACIDAD',
    updated: 'Última actualización: julio de 2026',
    sections: [
      {
        h: '1. Responsable del tratamiento',
        p: [
          'El responsable del tratamiento de los datos recogidos a través de este sitio puede contactarse en: paolo@pennac.me.',
          'Radiopaganda se mantiene públicamente anónima, coherente con su naturaleza editorial; la dirección indicada arriba es el canal para ejercer los derechos descritos en este aviso.',
        ],
      },
      {
        h: '2. Qué datos tratamos',
        p: [],
        subsections: [
          {
            h: '2.1 Datos técnicos de navegación',
            p: ['Nuestro proveedor de hosting (Netlify, Inc.) recoge automáticamente datos técnicos estándar (dirección IP, tipo de navegador, páginas visitadas, hora de acceso) necesarios para el funcionamiento y la seguridad del sitio. Base jurídica: interés legítimo.'],
          },
          {
            h: '2.2 Cookies de análisis — Google Analytics 4',
            p: ['Si consientes, usamos Google Analytics 4 (a través de Google Tag Manager) para entender cómo se usa el sitio, de forma agregada. Base jurídica: consentimiento, revocable en cualquier momento desde las preferencias de cookies al pie del sitio.'],
          },
          {
            h: '2.3 Cookies de marketing — Google Ads / remarketing',
            p: ['Si consientes, usamos Google Ads para campañas publicitarias y remarketing. Base jurídica: consentimiento.'],
          },
          {
            h: '2.4 Análisis sin cookies — Plausible',
            p: ['También usamos Plausible Analytics, una herramienta que no usa cookies y no recoge datos personales identificables: las estadísticas son agregadas y anónimas. No requiere consentimiento.'],
          },
          {
            h: '2.5 Clasificación (Bestiario)',
            p: ['Cuando eliges tu orden y tu especie en la sección de clasificación, registramos solo un contador agregado y anónimo (cuántas personas eligieron cada especie). No guardamos ningún dato que te identifique junto a esta elección.'],
          },
          {
            h: '2.6 Contenido de YouTube',
            p: ['En la página del Capítulo 0 algunos videos están alojados en YouTube. El video no se carga automáticamente: solo al hacer clic en "Cargar el video" activas el embed y, desde ese momento, se aplica el aviso de privacidad de Google/YouTube.'],
          },
          {
            h: '2.7 Newsletter (si está activa)',
            p: ['Si en el futuro activamos una suscripción por email, tu dirección será tratada con tu consentimiento explícito y gestionada por el proveedor externo que usemos para el envío. Recibirás un aviso específico al suscribirte.'],
          },
        ],
      },
      {
        h: '3. Con quién compartimos los datos',
        p: ['Los datos pueden ser tratados por proveedores externos que actúan como encargados del tratamiento: Netlify, Inc. (hosting), Google LLC (Analytics, Ads, YouTube), Plausible Insights OÜ (análisis sin cookies). Algunos proveedores tienen sede en Estados Unidos: la transferencia se basa en cláusulas contractuales estándar u otros mecanismos reconocidos por el RGPD para garantizar un nivel de protección adecuado.'],
      },
      {
        h: '4. Durante cuánto tiempo conservamos los datos',
        p: ['Tu elección sobre cookies se recuerda durante 6 meses, tras los cuales se te volverá a preguntar. Los contadores de clasificación se conservan de forma agregada y anónima sin un plazo definido, ya que no permiten identificar a ninguna persona.'],
      },
      {
        h: '5. Tus derechos',
        p: ['Tienes derecho a:'],
        list: [
          'acceder a tus datos personales',
          'solicitar su rectificación o supresión',
          'limitar su tratamiento',
          'oponerte al tratamiento',
          'solicitar la portabilidad de tus datos',
          'presentar una reclamación ante tu autoridad de control',
        ],
        pAfter: ['Para ejercer estos derechos, escribe a paolo@pennac.me.'],
      },
      {
        h: '6. Menores',
        p: ['El sitio tiene un tono satírico dirigido a un público adulto y no está pensado para recoger conscientemente datos de menores de 16 años.'],
      },
      {
        h: '7. Cambios en este aviso',
        p: ['Podemos actualizar este aviso con el tiempo. La fecha de la última actualización se indica en la parte superior de la página.'],
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

      <section v-for="(s, i) in page.sections" :key="i" class="legal__section">
        <h2 class="legal__h2">{{ s.h }}</h2>
        <p v-for="(par, j) in s.p" :key="j" class="legal__p">{{ par }}</p>

        <div v-if="s.subsections">
          <div v-for="(sub, k) in s.subsections" :key="k" class="legal__sub">
            <h3 class="legal__h3">{{ sub.h }}</h3>
            <p v-for="(par, j) in sub.p" :key="j" class="legal__p">{{ par }}</p>
          </div>
        </div>

        <ul v-if="s.list" class="legal__list">
          <li v-for="(item, j) in s.list" :key="j">{{ item }}</li>
        </ul>
        <p v-for="(par, j) in s.pAfter" :key="'after' + j" class="legal__p">{{ par }}</p>
      </section>

      <NuxtLink :to="localePath('/cookie')" class="legal__cross-link">Cookie Policy →</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.legal {
  min-height: 100vh;
  padding: calc(var(--nav-h) + 60px) 32px 120px;
}

.legal__inner { max-width: 700px; margin: 0 auto; }

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
  margin-bottom: 64px;
}

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
  margin-bottom: 16px;
}

.legal__sub { margin-top: 20px; }

.legal__h3 {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--rp-black);
  opacity: 0.6;
  margin-bottom: 8px;
}

.legal__p {
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.85;
}
.legal__p + .legal__p { margin-top: 12px; }

.legal__list {
  margin: 12px 0 0 0;
  padding-left: 20px;
  font-family: var(--font-text);
  font-size: 15px;
  line-height: 1.7;
  color: var(--rp-black);
  opacity: 0.85;
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
</style>
