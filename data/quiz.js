// RADIOPAGANDA — Quiz di classificazione.
// 6 domande, 4 risposte ciascuna. Ogni risposta assegna punti (weights) a uno
// o più dei 7 Ordini (slug in data/bestiario.js). L'Ordine con il punteggio
// totale più alto vince; a parità vince il primo per numero d'Ordine.
// La specie (una delle 3 dell'Ordine vincente) è estratta sommando gli indici
// (0-3) di tutte le risposte scelte e facendo il modulo 3 — una piccola messa
// in scena di precisione pseudo-scientifica, coerente col tono del progetto:
// il sistema non ti chiede se sei d'accordo con l'ultima cifra.

export const quizQuestions = [
  {
    id: 'q1',
    video: '/videos/card-quiz/q1-criceto.mp4',
    text: {
      it: 'Il tuo capo ti chiede uno straordinario dell\'ultimo minuto. Cosa fai?',
      en: 'Your boss asks for last-minute overtime. What do you do?',
      es: 'Tu jefe te pide una hora extra de última hora. ¿Qué haces?',
    },
    answers: [
      {
        text: {
          it: 'Accetto. Dire di no non è mai stata un\'opzione.',
          en: "I accept. Saying no was never really an option.",
          es: 'Acepto. Decir que no nunca fue una opción.',
        },
        weights: { labor: 3, submersi: 1 },
      },
      {
        text: {
          it: 'Rifiuto, e lo racconto a tutti sui social.',
          en: 'I refuse, and tell everyone about it online.',
          es: 'Me niego, y se lo cuento a todos en redes.',
        },
        weights: { crucesignati: 3, fama: 1 },
      },
      {
        text: {
          it: 'Accetto, ma calcolo già come sfruttarlo per la prossima promozione.',
          en: "I accept, but I'm already calculating how to use it for my next promotion.",
          es: 'Acepto, pero ya calculo cómo usarlo para mi próximo ascenso.',
        },
        weights: { potestas: 3, massa: 1 },
      },
      {
        text: {
          it: 'Rispondo con un meme e continuo a scrollare.',
          en: 'I reply with a meme and keep scrolling.',
          es: 'Respondo con un meme y sigo scrolleando.',
        },
        weights: { massa: 3, rebelles: 1 },
      },
    ],
  },
  {
    id: 'q2',
    video: '/videos/card-quiz/q2-volpe.mp4',
    text: {
      it: 'Ti succede qualcosa di bello. La prima cosa che fai è:',
      en: 'Something good happens to you. The first thing you do is:',
      es: 'Te pasa algo bueno. Lo primero que haces es:',
    },
    answers: [
      {
        text: {
          it: 'Lo documento. Meglio se in verticale.',
          en: 'Document it. Preferably vertical format.',
          es: 'Documentarlo. Mejor en vertical.',
        },
        weights: { fama: 3, massa: 1 },
      },
      {
        text: {
          it: 'Lo tengo per me. Chi se ne accorge non conta.',
          en: "Keep it to myself. Whoever notices doesn't matter.",
          es: 'Guardármelo. Quien se entere no importa.',
        },
        weights: { submersi: 3 },
      },
      {
        text: {
          it: 'Penso a come sfruttarlo per il mio brand personale.',
          en: 'Think about how to leverage it for my personal brand.',
          es: 'Pensar cómo aprovecharlo para mi marca personal.',
        },
        weights: { potestas: 2, fama: 2 },
      },
      {
        text: {
          it: 'Lo trasformo subito in una missione più grande.',
          en: 'Turn it immediately into a bigger mission.',
          es: 'Convertirlo enseguida en una misión más grande.',
        },
        weights: { rebelles: 2, crucesignati: 2 },
      },
    ],
  },
  {
    id: 'q3',
    video: '/videos/card-quiz/q3-lupo.mp4',
    text: {
      it: 'Qualcuno online non è d\'accordo con te. Cosa pensi davvero?',
      en: "Someone online disagrees with you. What do you actually think?",
      es: 'Alguien en internet no está de acuerdo contigo. ¿Qué piensas de verdad?',
    },
    answers: [
      {
        text: {
          it: 'Ha bisogno di essere illuminato. Per fortuna ci sono io.',
          en: "They need to be enlightened. Luckily, I'm here.",
          es: 'Necesita ser iluminado. Por suerte, aquí estoy yo.',
        },
        weights: { crucesignati: 3, fama: 1 },
      },
      {
        text: {
          it: 'Probabilmente ha ragione, ma non ho tempo di controllare.',
          en: "They're probably right, but I don't have time to check.",
          es: 'Probablemente tiene razón, pero no tengo tiempo de comprobarlo.',
        },
        weights: { massa: 3 },
      },
      {
        text: {
          it: 'È un problema di sistema, non suo. Ma va corretto comunque.',
          en: "It's a system problem, not theirs. But it still needs fixing.",
          es: 'Es un problema del sistema, no suyo. Pero igual hay que corregirlo.',
        },
        weights: { potestas: 2, crucesignati: 1 },
      },
      {
        text: {
          it: 'Non lo so. Ho disattivato le notifiche da mesi.',
          en: "I don't know. I turned off notifications months ago.",
          es: 'No lo sé. Desactivé las notificaciones hace meses.',
        },
        weights: { rebelles: 2, submersi: 1 },
      },
    ],
  },
  {
    id: 'q4',
    video: '/videos/card-quiz/q4-bradipo.mp4',
    text: {
      it: 'Non fai nulla per un\'ora intera. Come ti senti?',
      en: 'You do nothing for a whole hour. How do you feel?',
      es: 'No haces nada durante una hora entera. ¿Cómo te sientes?',
    },
    answers: [
      {
        text: {
          it: 'In colpa. Sto perdendo tempo produttivo.',
          en: "Guilty. I'm wasting productive time.",
          es: 'Culpable. Estoy perdiendo tiempo productivo.',
        },
        weights: { labor: 3 },
      },
      {
        text: {
          it: 'Bene, ma controllo comunque le notifiche ogni due minuti.',
          en: 'Fine, but I still check notifications every two minutes.',
          es: 'Bien, pero igual reviso las notificaciones cada dos minutos.',
        },
        weights: { massa: 3 },
      },
      {
        text: {
          it: 'Sospettoso. Il riposo di solito precede un taglio del personale.',
          en: 'Suspicious. Rest usually comes right before layoffs.',
          es: 'Con sospecha. El descanso suele preceder a un recorte de personal.',
        },
        weights: { submersi: 3 },
      },
      {
        text: {
          it: 'È il mio momento per pianificare la prossima mossa.',
          en: "It's my moment to plan the next move.",
          es: 'Es mi momento para planear el próximo movimiento.',
        },
        weights: { potestas: 3, fama: 1 },
      },
    ],
  },
  {
    id: 'q5',
    video: '/videos/card-quiz/q5-tigre.mp4',
    text: {
      it: 'Hai messo via un po\' di soldi. Cosa ne fai?',
      en: "You've saved up some money. What do you do with it?",
      es: 'Has ahorrado algo de dinero. ¿Qué haces con él?',
    },
    answers: [
      {
        text: {
          it: 'Li investo in me stesso: corso, coach, ritiro, integratori.',
          en: 'Invest it in myself: a course, a coach, a retreat, supplements.',
          es: 'Lo invierto en mí mismo: un curso, un coach, un retiro, suplementos.',
        },
        weights: { rebelles: 3, fama: 1 },
      },
      {
        text: {
          it: 'Li rimetto subito in circolo: un progetto, un rischio calcolato.',
          en: 'Put it right back into circulation: a project, a calculated risk.',
          es: 'Lo pongo de nuevo en circulación: un proyecto, un riesgo calculado.',
        },
        weights: { potestas: 3 },
      },
      {
        text: {
          it: 'Li do a qualcuno che ne ha più bisogno di me.',
          en: 'Give it to someone who needs it more than I do.',
          es: 'Se lo doy a alguien que lo necesita más que yo.',
        },
        weights: { submersi: 3 },
      },
      {
        text: {
          it: 'Non li ho messi via. Non me lo posso permettere.',
          en: "I haven't saved anything. I can't afford to.",
          es: 'No he ahorrado nada. No puedo permitírmelo.',
        },
        weights: { labor: 2, massa: 1 },
      },
    ],
  },
  {
    id: 'q6',
    video: '/videos/card-quiz/q6-maiale.mp4',
    text: {
      it: 'Ultima domanda, per il fascicolo. Una parola per descriverti:',
      en: 'Last question, for the file. One word to describe yourself:',
      es: 'Última pregunta, para el expediente. Una palabra para describirte:',
    },
    answers: [
      {
        text: { it: 'Necessario.', en: 'Necessary.', es: 'Necesario.' },
        weights: { submersi: 2, labor: 1 },
      },
      {
        text: { it: 'Efficiente.', en: 'Efficient.', es: 'Eficiente.' },
        weights: { potestas: 2, massa: 1 },
      },
      {
        text: { it: 'Autentico.', en: 'Authentic.', es: 'Auténtico.' },
        weights: { rebelles: 2, crucesignati: 1 },
      },
      {
        text: { it: 'Visibile.', en: 'Visible.', es: 'Visible.' },
        weights: { fama: 2, crucesignati: 1 },
      },
    ],
  },
]
