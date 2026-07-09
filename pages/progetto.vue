<script setup>
const { locale } = useI18n()
const seoDescription = {
  it: 'Cosa è Radiopaganda, perché esiste, come funziona e chi lo fa — il progetto spiegato fuori dal personaggio istituzionale.',
  en: 'What Radiopaganda is, why it exists, how it works and who makes it — the project explained outside the institutional character.',
  es: 'Qué es Radiopaganda, por qué existe, cómo funciona y quién lo hace — el proyecto explicado fuera del personaje institucional.',
}
useHead({
  title: 'Progetto — RADIOPAGANDA',
  meta: computed(() => [
    { name: 'description', content: seoDescription[locale.value] || seoDescription.it },
    { property: 'og:description', content: seoDescription[locale.value] || seoDescription.it },
  ]),
})

// Video loop per punto (estetica V4: lattice nero + vernice bianca + parete
// istituzionale). Stesso video per IT/EN/ES. Quadrati 960x960, ~5s, in
// public/videos/card-progetto/.
const sectionVideos = {
  '01': '/videos/card-progetto/p1-polipo-revela.mp4',
  '02': '/videos/card-progetto/p2-iena-necesidad.mp4',
  '03': '/videos/card-progetto/p3-corvo-clasificado.mp4',
  '04': '/videos/card-progetto/p4-pinguino-anonimo.mp4',
}

const content = {
  it: {
    title: 'PROGETTO',
    sections: [
      {
        n: '01',
        h: 'Cosa è Radiopaganda',
        p: [
          'Radiopaganda è un progetto artistico e sociale che analizza come la propaganda moderna modella i comportamenti umani.',
          'Ispirato ad Animal Farm di George Orwell, adatta il bestiario ai giorni nostri. La globalizzazione ha moltiplicato le specie. I social network ne hanno create di nuove. La fattoria è diventata il pianeta. Il recinto è diventato uno schermo.',
          'Le specie indossano maschere animali. Non per nascondersi — per mostrarsi. La maschera rivela quello che il volto sociale nasconde.',
          'Ogni specie è un comportamento reale. Un modo in cui la propaganda ci plasma, ci muove, ci usa. Abbiamo mappato la società in Ordini e specie. Non per giudicare. Per riconoscere.',
          'Non è satira politica. Non si schiera. Studia il meccanismo.',
        ],
      },
      {
        n: '02',
        h: 'Perché esiste',
        p: [
          'Nel 2020 il mondo si è fermato. Gli schermi no.',
          'In quel periodo abbiamo osservato qualcosa che già esisteva ma che il lockdown ha reso impossibile ignorare: la propaganda non aveva bisogno di soldati, manifesti o dittatori. Bastava una notifica. Un algoritmo. Un bisogno creato al momento giusto.',
          'Radiopaganda nasce da quella osservazione. Non per dare risposte. Per fare le domande che il sistema preferisce che tu non faccia.',
        ],
      },
      {
        n: '03',
        h: 'Come funziona',
        p: [
          'Ogni capitolo affronta un tema — un meccanismo della propaganda moderna. Lo analizza attraverso il bestiario: come quel meccanismo agisce su ogni Ordine, su ogni specie.',
          'Il bestiario cresce nel tempo. Le specie si aggiungono. Gli Ordini si espandono. La classificazione non è mai definitiva — come la propaganda stessa.',
        ],
      },
      {
        n: '04',
        h: 'Chi lo fa',
        p: [
          'Radiopaganda è anonima. Chi la gestisce non si rivela — non per mistero, ma per coerenza. Un progetto che analizza i meccanismi dell\'identità costruita non ha bisogno di un volto.',
          'Quello che possiamo dire: Radiopaganda è interamente realizzata con intelligenza artificiale. Testi, immagini, animazioni, musica. L\'AI come strumento di analisi della società che l\'AI stessa contribuisce a plasmare. Anche questo fa parte del progetto.',
        ],
      },
    ],
  },
  en: {
    title: 'PROJECT',
    sections: [
      {
        n: '01',
        h: 'What Radiopaganda is',
        p: [
          'Radiopaganda is an artistic and social project that analyzes how modern propaganda shapes human behavior.',
          "Inspired by George Orwell's Animal Farm, it adapts the bestiary to the present day. Globalization multiplied the species. Social networks created new ones. The farm became the planet. The fence became a screen.",
          'The species wear animal masks. Not to hide — to reveal. The mask shows what the social face conceals.',
          'Each species is a real behavior. A way propaganda shapes us, moves us, uses us. We have mapped society into Orders and species. Not to judge. To recognize.',
          'This is not political satire. It takes no side. It studies the mechanism.',
        ],
      },
      {
        n: '02',
        h: 'Why it exists',
        p: [
          "In 2020 the world stopped. The screens didn't.",
          "In that time we observed something that already existed but that lockdown made impossible to ignore: propaganda no longer needed soldiers, posters, or dictators. A notification was enough. An algorithm. A need created at the right moment.",
          "Radiopaganda was born from that observation. Not to give answers. To ask the questions the system prefers you don't ask.",
        ],
      },
      {
        n: '03',
        h: 'How it works',
        p: [
          'Each chapter tackles a theme — a mechanism of modern propaganda. It analyzes it through the bestiary: how that mechanism acts on each Order, on each species.',
          'The bestiary grows over time. Species are added. Orders expand. The classification is never final — like propaganda itself.',
        ],
      },
      {
        n: '04',
        h: 'Who makes it',
        p: [
          "Radiopaganda is anonymous. Whoever runs it doesn't reveal themselves — not for mystery, but for coherence. A project that analyzes the mechanisms of constructed identity doesn't need a face.",
          'What we can say: Radiopaganda is made entirely with artificial intelligence. Text, images, animation, music. AI as a tool to analyze the society that AI itself helps shape. This too is part of the project.',
        ],
      },
    ],
  },
  es: {
    title: 'PROYECTO',
    sections: [
      {
        n: '01',
        h: 'Qué es Radiopaganda',
        p: [
          'Radiopaganda es un proyecto artístico y social que analiza cómo la propaganda moderna moldea el comportamiento humano.',
          'Inspirado en Rebelión en la granja de George Orwell, adapta el bestiario a nuestros días. La globalización multiplicó las especies. Las redes sociales crearon otras nuevas. La granja se convirtió en el planeta. El cercado se convirtió en una pantalla.',
          'Las especies llevan máscaras de animales. No para esconderse — para mostrarse. La máscara revela lo que el rostro social oculta.',
          'Cada especie es un comportamiento real. Una forma en que la propaganda nos moldea, nos mueve, nos usa. Hemos mapeado la sociedad en Órdenes y especies. No para juzgar. Para reconocer.',
          'No es sátira política. No toma partido. Estudia el mecanismo.',
        ],
      },
      {
        n: '02',
        h: 'Por qué existe',
        p: [
          'En 2020 el mundo se detuvo. Las pantallas no.',
          'En ese periodo observamos algo que ya existía pero que el confinamiento hizo imposible ignorar: la propaganda ya no necesitaba soldados, carteles ni dictadores. Bastaba una notificación. Un algoritmo. Una necesidad creada en el momento justo.',
          'Radiopaganda nace de esa observación. No para dar respuestas. Para hacer las preguntas que el sistema prefiere que no hagas.',
        ],
      },
      {
        n: '03',
        h: 'Cómo funciona',
        p: [
          'Cada capítulo aborda un tema — un mecanismo de la propaganda moderna. Lo analiza a través del bestiario: cómo ese mecanismo actúa sobre cada Orden, sobre cada especie.',
          'El bestiario crece con el tiempo. Se añaden especies. Los Órdenes se expanden. La clasificación nunca es definitiva — como la propaganda misma.',
        ],
      },
      {
        n: '04',
        h: 'Quién lo hace',
        p: [
          'Radiopaganda es anónima. Quien la gestiona no se revela — no por misterio, sino por coherencia. Un proyecto que analiza los mecanismos de la identidad construida no necesita un rostro.',
          'Lo que podemos decir: Radiopaganda está realizada íntegramente con inteligencia artificial. Textos, imágenes, animaciones, música. La IA como herramienta de análisis de la sociedad que la propia IA contribuye a moldear. Esto también forma parte del proyecto.',
        ],
      },
    ],
  },
}

const page = computed(() => content[locale.value] || content.it)

// "Riduci il movimento": niente autoplay. Inoltre, come nelle griglie
// bestiario e in /canzoni, mettiamo in pausa i loop quando escono dallo
// schermo — 4 video full-loop che girano sempre anche fuori vista sprecano
// banda inutilmente.
const prefersReducedMotion = useReducedMotion()

const videoRefs = {}
function setVideoRef(key, el) {
  if (el) videoRefs[key] = el
}

const sectionRefs = {}
function setSectionRef(key, el) {
  if (!el) return
  sectionRefs[key] = el.$el ?? el
}

// Reveal-on-scroll: una volta apparsa, una sezione resta visibile (non si
// nasconde più rientrando/uscendo) — stesso comportamento delle griglie
// bestiario. Indipendente da prefers-reduced-motion: il contenuto deve
// comunque comparire, solo senza animazione (già gestito dalla regola
// globale in main.css che azzera le transition-duration).
const revealedSteps = reactive(new Set())

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const key = entry.target.dataset.stepKey
        if (entry.isIntersecting) {
          revealedSteps.add(key)
          if (!prefersReducedMotion.value) videoRefs[key]?.play?.().catch(() => {})
        } else if (!prefersReducedMotion.value) {
          videoRefs[key]?.pause?.()
        }
      }
    },
    { threshold: 0.2 }
  )
  Object.entries(sectionRefs).forEach(([key, el]) => {
    el.dataset.stepKey = key
    observer.observe(el)
  })
})
onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="progetto">
    <div class="progetto__intro">
      <p class="progetto__label">{{ $t('nav.progetto').toUpperCase() }}</p>
      <h1 class="progetto__title">{{ page.title }}</h1>
    </div>

    <SplitMedia
      v-for="(s, i) in page.sections"
      :key="s.n"
      :ref="(el) => setSectionRef(s.n, el)"
      align="start"
      class="progetto-step"
      :class="{ 'progetto-step--visible': revealedSteps.has(s.n) }"
      :reverse="i % 2 === 1"
    >
      <template #media>
        <video
          :ref="(el) => setVideoRef(s.n, el)"
          :key="sectionVideos[s.n]"
          :src="sectionVideos[s.n]"
          :autoplay="!prefersReducedMotion"
          muted
          loop
          playsinline
          preload="auto"
        />
      </template>

      <div class="progetto__section-head">
        <span class="progetto__num">{{ s.n }}</span>
        <h2 class="progetto__h2">{{ s.h }}</h2>
      </div>
      <p v-for="(par, i2) in s.p" :key="i2" class="progetto__p">{{ par }}</p>
    </SplitMedia>
  </div>
</template>

<style scoped>
.progetto {
  padding-top: var(--nav-h);
}

.progetto__intro {
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 32px 40px;
}

.progetto__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  color: var(--rp-black);
  opacity: 0.3;
  margin-bottom: 24px;
}

.progetto__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(48px, 9vw, 96px);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--rp-black);
}

/* Fix: SplitMedia (non-hero) non impone un'altezza al blocco media — il video
   è position:absolute (non contribuisce altezza al flusso), quindi su mobile
   il blocco collasserebbe a 0px. Diamo un aspect-ratio esplicito 1:1,
   coerente con le dimensioni reali dei video (quadrati 960x960). */
.progetto-step :deep(.split-media__media) {
  aspect-ratio: 1;
}
@media (min-width: 900px) {
  .progetto-step :deep(.split-media__media) {
    aspect-ratio: auto;
    min-height: 480px;
  }
}

/* Mobile: il video sta sempre prima del testo, indipendentemente dal
   `reverse` (che su questa pagina alterna solo il lato desktop). Il prop
   reverse di SplitMedia accoppia mobile+desktop, quindi qui forziamo
   l'ordine mobile a prescindere dal valore di reverse. */
@media (max-width: 899px) {
  .progetto-step :deep(.split-media__media) {
    order: 1;
  }
  .progetto-step :deep(.split-media__content) {
    order: 2;
  }
}

.progetto-step + .progetto-step {
  border-top: 1px solid var(--rp-ice);
}

/* Reveal on scroll: stesso trattamento delle card del bestiario — fade-up
   una volta sola quando la sezione entra in vista, poi resta visibile. */
.progetto-step {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.progetto-step--visible {
  opacity: 1;
  transform: translateY(0);
}

.progetto__section-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 24px;
}

.progetto__num {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--rp-black);
  opacity: 0.4;
}

.progetto__h2 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(22px, 3vw, 32px);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: var(--rp-black);
}

.progetto__p {
  font-family: var(--font-text);
  font-size: 17px;
  line-height: 1.6;
  color: var(--rp-black);
  opacity: 0.85;
  max-width: 620px;
}

.progetto__p + .progetto__p { margin-top: 16px; }
</style>
