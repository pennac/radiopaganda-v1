// RADIOPAGANDA — Bestiario: 7 Ordini × 3 specie di lancio (21 totali).
// Fonte contenuti lunghi (descrizioni): radiopaganda-ordini-e-specie.md (IT originale, EN/ES tradotti).
// Fonte claim corti (hook/istituzionale/cta): radiopaganda-bestiario-card-ordini.md e radiopaganda-bestiario-card-claims.md.

export const orders = [
  {
    slug: 'potestas',
    video: '/videos/card-ordini/potestas.mp4',
    number: 1,
    name: 'POTESTAS',
    title: { it: 'IL POTERE', en: 'THE POWER', es: 'EL PODER' },
    subtitle: {
      it: 'Chi produce la realtà degli altri',
      en: "Those who produce others' reality",
      es: 'Quienes producen la realidad de los demás',
    },
    description: {
      it: [
        'Esiste chi non subisce la propaganda. La produce.',
        "Il Potere non si impone con la forza. Si installa. Nei sistemi che usi, nelle piattaforme che frequenti, nei bisogni che credi tuoi. Non ha bisogno di convincerti. Ha bisogno che tu non ti accorga.",
        'Questo è il primo Ordine. Non il più numeroso. Il più necessario.',
      ],
      en: [
        "Some don't suffer propaganda. They produce it.",
        "Power doesn't impose itself by force. It installs itself. In the systems you use, the platforms you frequent, the needs you believe are your own. It doesn't need to convince you. It needs you not to notice.",
        'This is the first Order. Not the most numerous. The most necessary.',
      ],
      es: [
        'Hay quien no sufre la propaganda. La produce.',
        'El Poder no se impone por la fuerza. Se instala. En los sistemas que usas, en las plataformas que frecuentas, en las necesidades que crees tuyas. No necesita convencerte. Necesita que no te des cuenta.',
        'Este es el primer Orden. No el más numeroso. El más necesario.',
      ],
    },
    claim: {
      it: { hook: 'Alcuni sono nati in alto. E hanno imparato a non guardare in basso.', inst: "Trasmissione dell'Ordine Potestas avviata. Tre specie classificate.", cta: 'Applaudi piano.' },
      en: { hook: 'Some were born at the top. And learned never to look down.', inst: 'Transmission of Order Potestas initiated. Three species classified.', cta: 'Applaud quietly.' },
      es: { hook: 'Algunos nacieron arriba. Y aprendieron a no mirar abajo.', inst: 'Iniciamos transmisión de la Orden Potestas. Tres especies clasificadas.', cta: 'Aplaude bajo.' },
    },
    species: [
      {
        slug: 'maiale',
        video: '/videos/card-specie/maiale.mp4',
        ejemplar: '001',
        latin: 'SUS SAPIENS',
        name: { it: 'MAIALE', en: 'PIG', es: 'CERDO' },
        subtitle: {
          it: 'Il detentore del potere politico e corporativo',
          en: 'Holder of political and corporate power',
          es: 'El detentor del poder político y corporativo',
        },
        description: {
          it: [
            "Il Maiale non è arrivato al vertice per caso. Ha imparato prima degli altri che le regole esistono per chi le scrive.",
            'Si presenta come leader, visionario, rappresentante del bene comune. Parla di valori mentre firma contratti. Parla di sacrifici mentre i sacrifici li fanno gli altri.',
            "Il suo strumento non è la violenza. È la normalità. Fa sembrare ovvio quello che è una scelta. Fa sembrare naturale quello che è un privilegio.",
          ],
          en: [
            "The Pig didn't reach the top by chance. He learned before everyone else that rules exist for those who write them.",
            'He presents himself as a leader, a visionary, a representative of the common good. He talks about values while signing contracts. He talks about sacrifice while others make it.',
            "His tool isn't violence. It's normality. He makes a choice look obvious. He makes a privilege look natural.",
          ],
          es: [
            'El Cerdo no llegó a la cima por casualidad. Aprendió antes que los demás que las reglas existen para quien las escribe.',
            'Se presenta como líder, visionario, representante del bien común. Habla de valores mientras firma contratos. Habla de sacrificios mientras los sacrificios los hacen otros.',
            'Su herramienta no es la violencia. Es la normalidad. Hace que parezca obvio lo que es una elección. Hace que parezca natural lo que es un privilegio.',
          ],
        },
        card: {
          it: { hook: 'Alcuni firmano. Altri accettano quello che è stato firmato.', inst: "EJEMPLAR 001 — SUS SAPIENS. L'Istituto conferma la sua classificazione al vertice produttivo.", cta: 'Applaudi piano.' },
          en: { hook: "Some sign. Others accept what's been signed.", inst: 'EJEMPLAR 001 — SUS SAPIENS. The Institute confirms his classification at the productive summit.', cta: 'Applaud quietly.' },
          es: { hook: 'Algunos firman. Otros aceptan lo firmado.', inst: 'EJEMPLAR 001 — SUS SAPIENS. La Agencia confirma su clasificación al vértice productivo.', cta: 'Aplaude bajo.' },
        },
      },
      {
        slug: 'polipo',
        video: '/videos/card-specie/polipo.mp4',
        ejemplar: '002',
        latin: 'OCTOPUS VIGILANS',
        name: { it: 'POLIPO', en: 'OCTOPUS', es: 'PULPO' },
        subtitle: {
          it: 'Il capitalismo della sorveglianza. Big Tech.',
          en: 'Surveillance capitalism. Big Tech.',
          es: 'El capitalismo de la vigilancia. Big Tech.',
        },
        description: {
          it: [
            'Il Polipo non ti controlla. Ti serve. È questa la sua perfezione.',
            'Ti offre connessione, informazione, intrattenimento. In cambio registra ogni click, ogni pausa, ogni esitazione. Non vuole sapere cosa pensi. Vuole sapere cosa stai per pensare.',
            "I suoi tentacoli non si vedono. Sono l'interfaccia che usi, l'algoritmo che ti conosce meglio di chi ti ama, la notifica che arriva sempre nel momento giusto. Non ha bisogno di entrare nella tua vita. Sei tu che lo inviti ogni mattina.",
          ],
          en: [
            "The Octopus doesn't control you. It serves you. That's its perfection.",
            "It offers you connection, information, entertainment. In exchange it records every click, every pause, every hesitation. It doesn't want to know what you think. It wants to know what you're about to think.",
            "Its tentacles are invisible. They're the interface you use, the algorithm that knows you better than the people who love you, the notification that always arrives at the right moment. It doesn't need to enter your life. You invite it in every morning.",
          ],
          es: [
            'El Pulpo no te controla. Te sirve. Esa es su perfección.',
            'Te ofrece conexión, información, entretenimiento. A cambio registra cada clic, cada pausa, cada duda. No quiere saber qué piensas. Quiere saber qué estás a punto de pensar.',
            'Sus tentáculos no se ven. Son la interfaz que usas, el algoritmo que te conoce mejor que quienes te quieren, la notificación que siempre llega en el momento justo. No necesita entrar en tu vida. Eres tú quien lo invita cada mañana.',
          ],
        },
        card: {
          it: { hook: 'Non ti osserva. Ti ricorda meglio di quanto faresti tu.', inst: "EJEMPLAR 002 — OCTOPUS VIGILANS. L'Istituto archivia il tuo comportamento per affetto.", cta: 'Continua a scrollare.' },
          en: { hook: "It doesn't watch you. It remembers you better than you would yourself.", inst: 'EJEMPLAR 002 — OCTOPUS VIGILANS. The Institute archives your behavior out of care.', cta: 'Keep scrolling.' },
          es: { hook: 'No te observa. Te recuerda mejor de lo que tú lo harías.', inst: 'EJEMPLAR 002 — OCTOPUS VIGILANS. La Agencia archiva tu comportamiento por amor.', cta: 'Sigue scrolleando.' },
        },
      },
      {
        slug: 'squalo',
        video: '/videos/card-specie/squalo.mp4',
        ejemplar: '003',
        latin: 'CARCHARODON LIQUIDANS',
        name: { it: 'SQUALO', en: 'SHARK', es: 'TIBURÓN' },
        subtitle: {
          it: 'La finanza estrattiva. Private equity.',
          en: 'Extractive finance. Private equity.',
          es: 'Las finanzas extractivas. Private equity.',
        },
        description: {
          it: [
            'Lo Squalo non produce niente. Questo è il suo talento.',
            'Compra, taglia, rivende. Entra in un\'azienda come un chirurgo e ne esce come un turista. Nel mezzo: licenziamenti chiamati "ottimizzazione", tagli chiamati "efficienza", debiti scaricati su chi il debito non lo ha contratto.',
            'Non è crudeltà. È matematica. Il sistema non lo punisce perché il sistema lo ha progettato. Lo Squalo non viola le regole. È la regola.',
          ],
          en: [
            'The Shark produces nothing. That\'s its talent.',
            'It buys, cuts, resells. It enters a company like a surgeon and leaves like a tourist. In between: layoffs called "optimization," cuts called "efficiency," debt dumped on those who never took it on.',
            "It's not cruelty. It's math. The system doesn't punish it because the system designed it. The Shark doesn't break the rules. It is the rule.",
          ],
          es: [
            'El Tiburón no produce nada. Ese es su talento.',
            'Compra, corta, revende. Entra en una empresa como un cirujano y sale como un turista. En medio: despidos llamados "optimización," recortes llamados "eficiencia," deudas descargadas sobre quien nunca las contrajo.',
            'No es crueldad. Es matemática. El sistema no lo castiga porque el sistema lo diseñó. El Tiburón no viola las reglas. Es la regla.',
          ],
        },
        card: {
          it: { hook: 'Non è personale. È solo efficienza.', inst: "EJEMPLAR 003 — CARCHARODON LIQUIDANS. L'Istituto certifica il rendimento trimestrale.", cta: 'Ottimizza o sparisci.' },
          en: { hook: "It's not personal. It's just efficiency.", inst: 'EJEMPLAR 003 — CARCHARODON LIQUIDANS. The Institute certifies quarterly performance.', cta: 'Optimize or disappear.' },
          es: { hook: 'No es personal. Es solo eficiencia.', inst: 'EJEMPLAR 003 — CARCHARODON LIQUIDANS. La Agencia certifica el rendimiento por trimestre.', cta: 'Optimiza o desaparece.' },
        },
      },
    ],
  },

  {
    slug: 'fama',
    video: '/videos/card-ordini/fama.mp4',
    number: 2,
    name: 'FAMA',
    title: { it: 'LA VOCE', en: 'THE VOICE', es: 'LA VOZ' },
    subtitle: {
      it: 'Chi traduce e amplifica la propaganda — consapevolmente o no',
      en: 'Those who translate and amplify propaganda — knowingly or not',
      es: 'Quienes traducen y amplifican la propaganda — a sabiendas o no',
    },
    description: {
      it: [
        'Il Potere ha bisogno di intermediari. Persone che parlino, spieghino, convincano. Che diano un volto umano a meccanismi che umani non sono.',
        'La Voce non è sempre consapevole del suo ruolo. A volte crede davvero in quello che dice. Questo la rende più efficace, non più innocente.',
        'Senza la Voce la propaganda resta muta. Con la Voce diventa cultura.',
      ],
      en: [
        "Power needs intermediaries. People who speak, explain, convince. Who give a human face to mechanisms that aren't human.",
        "The Voice isn't always aware of its role. Sometimes it truly believes what it says. That makes it more effective, not more innocent.",
        'Without the Voice, propaganda stays mute. With the Voice, it becomes culture.',
      ],
      es: [
        'El Poder necesita intermediarios. Personas que hablen, expliquen, convenzan. Que den un rostro humano a mecanismos que no lo son.',
        'La Voz no siempre es consciente de su papel. A veces cree de verdad lo que dice. Eso la hace más eficaz, no más inocente.',
        'Sin la Voz, la propaganda permanece muda. Con la Voz, se vuelve cultura.',
      ],
    },
    claim: {
      it: { hook: 'Ti dicono cosa pensare. E tu li ringrazi.', inst: "Trasmissione dell'Ordine Fama avviata. Tre specie classificate.", cta: 'Sintonizzati.' },
      en: { hook: 'They tell you what to think. And you thank them for it.', inst: 'Transmission of Order Fama initiated. Three species classified.', cta: 'Tune in.' },
      es: { hook: 'Te dicen qué pensar. Y tú les das las gracias.', inst: 'Iniciamos transmisión de la Orden Fama. Tres especies clasificadas.', cta: 'Sintonízate.' },
    },
    species: [
      {
        slug: 'volpe',
        video: '/videos/card-specie/volpe.mp4',
        ejemplar: '007',
        latin: 'VULPES MAGISTRA',
        name: { it: 'VOLPE', en: 'FOX', es: 'ZORRO' },
        subtitle: {
          it: 'Il persuasore. Life coach, guru, influencer.',
          en: 'The persuader. Life coach, guru, influencer.',
          es: 'El persuasor. Life coach, gurú, influencer.',
        },
        description: {
          it: [
            'La Volpe ha trovato il problema che ti affligge. Per coincidenza, ha anche la soluzione.',
            'Si presenta come qualcuno che ce l\'ha fatta. Condivide il suo percorso, le sue abitudini, i suoi strumenti. Non vende prodotti — vende versioni migliori di te. E tu compri perché il bisogno che senti è reale, anche se è stato creato da qualcun altro.',
            'La sua forza è la vicinanza. Non parla dall\'alto. Ti parla come un amico che sa qualcosa che tu non sai ancora. Questo la rende impossibile da ignorare e difficile da criticare.',
          ],
          en: [
            'The Fox found the problem afflicting you. Coincidentally, it also has the solution.',
            "It presents itself as someone who made it. It shares its journey, its habits, its tools. It doesn't sell products — it sells better versions of you. And you buy because the need you feel is real, even if someone else created it.",
            "Its strength is closeness. It doesn't speak from above. It speaks to you like a friend who knows something you don't yet. That makes it impossible to ignore and hard to criticize.",
          ],
          es: [
            'El Zorro encontró el problema que te aqueja. Casualmente, también tiene la solución.',
            'Se presenta como alguien que lo logró. Comparte su camino, sus hábitos, sus herramientas. No vende productos — vende versiones mejores de ti. Y tú compras porque la necesidad que sientes es real, aunque la haya creado otro.',
            'Su fuerza es la cercanía. No habla desde arriba. Te habla como un amigo que sabe algo que tú aún no sabes. Eso lo hace imposible de ignorar y difícil de criticar.',
          ],
        },
        card: {
          it: { hook: 'La tua mattina inizia alle 5. Il tuo fallimento è iniziato svegliandoti tardi.', inst: "EJEMPLAR 007 — VULPES MAGISTRA. L'Istituto certifica il metodo infallibile di questa settimana.", cta: 'Compra il corso prima della versione 2.' },
          en: { hook: 'Your morning starts at 5. Your failure started when you woke up late.', inst: "EJEMPLAR 007 — VULPES MAGISTRA. The Institute certifies this week's infallible method.", cta: 'Buy the course before version 2.' },
          es: { hook: 'Tu mañana empieza a las 5. Tu fracaso empezó al despertar tarde.', inst: 'EJEMPLAR 007 — VULPES MAGISTRA. La Agencia certifica el método infalible esta semana.', cta: 'Compra el curso antes que la versión 2.' },
        },
      },
      {
        slug: 'iena',
        video: '/videos/card-specie/iena.mp4',
        ejemplar: '010',
        latin: 'CROCUTA INDIGNATA',
        name: { it: 'IENA', en: 'HYENA', es: 'HIENA' },
        subtitle: {
          it: "Il mercante dell'indignazione. Outrage influencer, rage-baiter.",
          en: 'The outrage merchant. Outrage influencer, rage-baiter.',
          es: 'El mercader de la indignación. Outrage influencer, rage-baiter.',
        },
        description: {
          it: [
            "L'Iena non ha opinioni. Ha nemici.",
            "Costruisce la sua audience sull'odio altrui. Trova il conflitto, lo amplifica, ci vive sopra. Non le interessa avere ragione — le interessa che tu sia abbastanza arrabbiato da condividere, commentare, tornare domani.",
            "Il suo prodotto non è l'informazione. È l'attivazione emotiva. E l'algoritmo la premia ogni volta, perché la rabbia genera più engagement della verità. L'Iena non ha creato questo sistema. Lo ha semplicemente capito prima degli altri.",
          ],
          en: [
            'The Hyena has no opinions. It has enemies.',
            "It builds its audience on others' hatred. It finds conflict, amplifies it, lives off it. It doesn't care about being right — it cares about you being angry enough to share, comment, come back tomorrow.",
            "Its product isn't information. It's emotional activation. And the algorithm rewards it every time, because rage generates more engagement than truth. The Hyena didn't create this system. It just understood it before everyone else.",
          ],
          es: [
            'La Hiena no tiene opiniones. Tiene enemigos.',
            'Construye su audiencia sobre el odio ajeno. Encuentra el conflicto, lo amplifica, vive de él. No le interesa tener razón — le interesa que estés lo bastante enfadado como para compartir, comentar, volver mañana.',
            'Su producto no es la información. Es la activación emocional. Y el algoritmo la premia cada vez, porque la rabia genera más engagement que la verdad. La Hiena no creó este sistema. Simplemente lo entendió antes que los demás.',
          ],
        },
        card: {
          it: { hook: 'Ogni giorno una crisi nuova. Ogni crisi lo stesso ratio.', inst: "EJEMPLAR 010 — CROCUTA INDIGNATA. L'Istituto certifica l'indignazione necessaria del trimestre.", cta: 'Condividi prima di leggere.' },
          en: { hook: 'Every day a new crisis. Every crisis the same ratio.', inst: "EJEMPLAR 010 — CROCUTA INDIGNATA. The Institute certifies this quarter's necessary outrage.", cta: 'Share before reading.' },
          es: { hook: 'Cada día una crisis nueva. Cada crisis el mismo ratio.', inst: 'EJEMPLAR 010 — CROCUTA INDIGNATA. La Agencia certifica la indignación necesaria del trimestre.', cta: 'Comparte antes de leer.' },
        },
      },
      {
        slug: 'corvo',
        video: '/videos/card-specie/corvo.mp4',
        ejemplar: '008',
        latin: 'CORVUS PROPHETA',
        name: { it: 'CORVO', en: 'RAVEN', es: 'CUERVO' },
        subtitle: {
          it: 'Il validatore intellettuale. Giornalista embedded, accademico di sistema.',
          en: 'The intellectual validator. Embedded journalist, system academic.',
          es: 'El validador intelectual. Periodista embedded, académico de sistema.',
        },
        description: {
          it: [
            'Il Corvo è il più pericoloso della Voce. Perché sembra indipendente.',
            'Cita fonti, usa dati, mantiene un tono misurato. Non urla come l\'Iena, non seduce come la Volpe. Ragiona. E questo gli dà un\'autorità che gli altri non hanno — la credibilità di chi non sembra vendere niente.',
            'Ma il Corvo opera dentro istituzioni che hanno interessi. Sceglie quali domande fare e quali evitare. Non mente — seleziona. E la selezione, fatta con abbastanza eleganza, è la forma più raffinata di propaganda.',
          ],
          en: [
            "The Raven is the most dangerous of the Voice. Because it seems independent.",
            "It cites sources, uses data, keeps a measured tone. It doesn't shout like the Hyena, doesn't seduce like the Fox. It reasons. And that gives it an authority the others don't have — the credibility of someone who doesn't seem to be selling anything.",
            "But the Raven operates inside institutions with interests. It chooses which questions to ask and which to avoid. It doesn't lie — it selects. And selection, done with enough elegance, is the most refined form of propaganda.",
          ],
          es: [
            'El Cuervo es el más peligroso de la Voz. Porque parece independiente.',
            'Cita fuentes, usa datos, mantiene un tono mesurado. No grita como la Hiena, no seduce como el Zorro. Razona. Y eso le da una autoridad que los demás no tienen — la credibilidad de quien no parece vender nada.',
            'Pero el Cuervo opera dentro de instituciones con intereses. Elige qué preguntas hacer y cuáles evitar. No miente — selecciona. Y la selección, hecha con suficiente elegancia, es la forma más refinada de propaganda.',
          ],
        },
        card: {
          it: { hook: "Quello che chiedi è quello che meriti. Quello che meriti è quello che l'universo ti manda.", inst: "EJEMPLAR 008 — CORVUS PROPHETA. L'Istituto trasmette la frequenza della manifestazione.", cta: 'Prega con il portafoglio.' },
          en: { hook: 'What you ask for is what you deserve. What you deserve is what the universe sends you.', inst: 'EJEMPLAR 008 — CORVUS PROPHETA. The Institute broadcasts the frequency of manifestation.', cta: 'Pray with your wallet.' },
          es: { hook: 'Lo que pides es lo que mereces. Lo que mereces es lo que el universo te envía.', inst: 'EJEMPLAR 008 — CORVUS PROPHETA. La Agencia transmite la frecuencia de manifestación.', cta: 'Reza con la billetera.' },
        },
      },
    ],
  },

  {
    slug: 'labor',
    video: '/videos/card-ordini/labor.mp4',
    number: 3,
    name: 'LABOR',
    title: { it: 'IL LAVORO', en: 'LABOR', es: 'EL TRABAJO' },
    subtitle: {
      it: 'Chi esegue e si immola',
      en: 'Those who execute and sacrifice themselves',
      es: 'Quienes ejecutan y se inmolan',
    },
    description: {
      it: [
        'Il Lavoro è stato venduto come libertà. Più produci, più vali. Più vali, più sei libero. La catena è diventata un curriculum.',
        'Questo Ordine non è sfruttato con la forza. È convinto. Crede nel progetto, nel processo, nel sacrificio come investimento. Lavora più degli altri perché pensa che sia la differenza tra chi ce la fa e chi no.',
        'Il sistema non potrebbe funzionare senza di loro. E loro non lo sanno.',
      ],
      en: [
        "Labor was sold as freedom. The more you produce, the more you're worth. The more you're worth, the freer you are. The chain became a résumé.",
        "This Order isn't exploited by force. It's convinced. It believes in the project, the process, sacrifice as investment. It works harder than others because it thinks that's the difference between making it and not.",
        "The system couldn't function without them. And they don't know it.",
      ],
      es: [
        'El Trabajo se vendió como libertad. Cuanto más produces, más vales. Cuanto más vales, más libre eres. La cadena se convirtió en currículum.',
        'Este Orden no es explotado por la fuerza. Está convencido. Cree en el proyecto, en el proceso, en el sacrificio como inversión. Trabaja más que los demás porque piensa que ahí está la diferencia entre lograrlo o no.',
        'El sistema no podría funcionar sin ellos. Y ellos no lo saben.',
      ],
    },
    claim: {
      it: { hook: 'Lavorano per qualcosa. Che non arriverà mai.', inst: "Trasmissione dell'Ordine Labor avviata. Tre specie classificate.", cta: 'Continua a produrre.' },
      en: { hook: 'They work for something. That will never arrive.', inst: 'Transmission of Order Labor initiated. Three species classified.', cta: 'Keep producing.' },
      es: { hook: 'Trabajan por algo. Que nunca llegará.', inst: 'Iniciamos transmisión de la Orden Labor. Tres especies clasificadas.', cta: 'Sigue produciendo.' },
    },
    species: [
      {
        slug: 'cavalla',
        video: '/videos/card-specie/cavalla.mp4',
        ejemplar: '012',
        latin: 'EQUUS DILIGENS',
        name: { it: 'CAVALLA', en: 'MARE', es: 'YEGUA' },
        subtitle: {
          it: 'La lavoratrice instancabile. Boxer.',
          en: 'The tireless worker. Boxer.',
          es: 'La trabajadora incansable. Boxer.',
        },
        description: {
          it: [
            'La Cavalla è la specie più onesta del bestiario. Lavora davvero. Si impegna davvero. Crede davvero che il sacrificio verrà ripagato.',
            'Si alza prima degli altri, resta dopo gli altri, fa più degli altri. Ha interiorizzato la hustle culture come etica personale — non come imposizione, come scelta. Questo è il meccanismo. La catena più solida è quella che ti sei messa da sola.',
            'Orwell la chiamava Boxer. Alla fine lo mandarono al macello. Lui continuava a dire che avrebbe lavorato di più.',
          ],
          en: [
            'The Mare is the most honest species in the bestiary. She really works. She really tries. She really believes the sacrifice will be repaid.',
            'She rises before the others, stays after the others, does more than the others. She has internalized hustle culture as personal ethics — not as an imposition, as a choice. That\'s the mechanism. The strongest chain is the one you put on yourself.',
            "Orwell called her Boxer. In the end they sent him to the knacker. He kept saying he'd work harder.",
          ],
          es: [
            'La Yegua es la especie más honesta del bestiario. Trabaja de verdad. Se esfuerza de verdad. Cree de verdad que el sacrificio será recompensado.',
            'Se levanta antes que los demás, se queda después que los demás, hace más que los demás. Ha interiorizado la cultura hustle como ética personal — no como imposición, como elección. Ese es el mecanismo. La cadena más sólida es la que te pones tú misma.',
            'Orwell lo llamó Boxer. Al final lo mandaron al matadero. Él seguía diciendo que trabajaría más.',
          ],
        },
        card: {
          it: { hook: 'Te lo meriti. Dopo il prossimo turno extra.', inst: "EJEMPLAR 012 — EQUUS DILIGENS. L'Istituto certifica la quota produttiva settimanale.", cta: 'Continua a correre.' },
          en: { hook: 'You deserve it. After the next extra shift.', inst: 'EJEMPLAR 012 — EQUUS DILIGENS. The Institute certifies the weekly production quota.', cta: 'Keep running.' },
          es: { hook: 'Te lo mereces. Después del próximo turno extra.', inst: 'EJEMPLAR 012 — EQUUS DILIGENS. La Agencia certifica la cuota productiva semanal.', cta: 'Sigue corriendo.' },
        },
      },
      {
        slug: 'criceto',
        video: '/videos/card-specie/criceto.mp4',
        ejemplar: '017',
        latin: 'CRICETUS LABORIOSUS',
        name: { it: 'CRICETO', en: 'HAMSTER', es: 'HÁMSTER' },
        subtitle: {
          it: "L'office worker burnout.",
          en: 'The burned-out office worker.',
          es: 'El office worker quemado.',
        },
        description: {
          it: [
            'Il Criceto corre. Non sa dove arriva, ma corre.',
            'Ha ottimizzato ogni ora della sua giornata. Ha le app giuste, il sistema di produttività giusto, la routine mattutina giusta. È esausto in modo organizzato. Il suo burnout è schedulato tra una riunione e l\'altra.',
            'La ruota non è una prigione. È una scelta di stile di vita. Almeno così gli è stato detto. Almeno così continua a credere.',
          ],
          en: [
            "The Hamster runs. It doesn't know where it's going, but it runs.",
            "It has optimized every hour of its day. It has the right apps, the right productivity system, the right morning routine. It's exhausted in an organized way. Its burnout is scheduled between one meeting and the next.",
            "The wheel isn't a prison. It's a lifestyle choice. At least that's what it was told. At least that's what it keeps believing.",
          ],
          es: [
            'El Hámster corre. No sabe adónde llega, pero corre.',
            'Ha optimizado cada hora de su día. Tiene las apps correctas, el sistema de productividad correcto, la rutina matutina correcta. Está exhausto de forma organizada. Su burnout está agendado entre una reunión y otra.',
            'La rueda no es una prisión. Es una elección de estilo de vida. Al menos eso le dijeron. Al menos eso sigue creyendo.',
          ],
        },
        card: {
          it: { hook: "Un'altra riunione. Una riunione che poteva essere una mail.", inst: "EJEMPLAR 017 — CRICETUS LABORIOSUS. L'Istituto certifica la produttività simulata del trimestre.", cta: 'Non dimenticare i KPI.' },
          en: { hook: "One more meeting. A meeting that could've been an email.", inst: "EJEMPLAR 017 — CRICETUS LABORIOSUS. The Institute certifies this quarter's simulated productivity.", cta: "Don't forget your KPIs." },
          es: { hook: 'Una reunión más. Una reunión que podía ser un email.', inst: 'EJEMPLAR 017 — CRICETUS LABORIOSUS. La Agencia certifica la productividad simulada del trimestre.', cta: 'No olvides los KPI.' },
        },
      },
      {
        slug: 'colibri',
        video: '/videos/card-specie/colibri.mp4',
        ejemplar: '016',
        latin: 'TROCHILUS DILIGENS',
        name: { it: 'COLIBRÌ', en: 'HUMMINGBIRD', es: 'COLIBRÍ' },
        subtitle: {
          it: 'Il lavoratore della gig economy.',
          en: 'The gig economy worker.',
          es: 'El trabajador de la gig economy.',
        },
        description: {
          it: [
            "Il Colibrì è sempre in movimento. Consegna, trasporta, esegue. Un'app decide dove andare, un algoritmo decide quanto vale il suo tempo.",
            "Gli è stato detto che è un lavoratore autonomo. Che ha flessibilità. Che è il padrone del suo tempo. In realtà non ha contratto, non ha tutele, non ha futuro pensionistico. Ha una valutazione a stelle.",
            'La precarietà è stata ribattezzata libertà. È il rebranding più riuscito del capitalismo contemporaneo.',
          ],
          en: [
            "The Hummingbird is always moving. Delivers, transports, executes. An app decides where to go, an algorithm decides what its time is worth.",
            "It's been told it's self-employed. That it has flexibility. That it's the master of its own time. In reality it has no contract, no protections, no pension. It has a star rating.",
            "Precarity has been rebranded as freedom. It's contemporary capitalism's most successful rebrand.",
          ],
          es: [
            'El Colibrí siempre está en movimiento. Entrega, transporta, ejecuta. Una app decide adónde ir, un algoritmo decide cuánto vale su tiempo.',
            'Le han dicho que es autónomo. Que tiene flexibilidad. Que es dueño de su tiempo. En realidad no tiene contrato, no tiene protecciones, no tiene jubilación. Tiene una valoración de estrellas.',
            'La precariedad ha sido rebautizada como libertad. Es el rebranding más exitoso del capitalismo contemporáneo.',
          ],
        },
        card: {
          it: { hook: 'È capo di sé stesso. Per 4,50 più mancia.', inst: "EJEMPLAR 016 — TROCHILUS DILIGENS. L'Istituto conferma la flessibilità come libertà.", cta: 'Accetta l\'ordine. Cinque stelle.' },
          en: { hook: "He's his own boss. For 4.50 plus tip.", inst: 'EJEMPLAR 016 — TROCHILUS DILIGENS. The Institute confirms flexibility as freedom.', cta: 'Accept the order. Five stars.' },
          es: { hook: 'Es su propio jefe. Por 4,50 más propina.', inst: 'EJEMPLAR 016 — TROCHILUS DILIGENS. La Agencia confirma la flexibilidad como libertad.', cta: 'Acepta el pedido. Cinco estrellas.' },
        },
      },
    ],
  },

  {
    slug: 'massa',
    video: '/videos/card-ordini/massa.mp4',
    number: 4,
    name: 'MASSA',
    title: { it: 'LA MASSA', en: 'THE MASS', es: 'LA MASA' },
    subtitle: {
      it: 'Chi consuma e riproduce inconsapevolmente',
      en: 'Those who consume and reproduce unknowingly',
      es: 'Quienes consumen y reproducen sin saberlo',
    },
    description: {
      it: [
        'La Massa non è stupida. È ottimizzata.',
        'Ha imparato a sopravvivere socialmente seguendo i segnali giusti, adottando i comportamenti giusti, consumando i contenuti giusti. Non si tratta di mancanza di pensiero critico. Si tratta di un sistema progettato per rendere il conformismo la scelta più conveniente.',
        'La Massa non segue. Viene seguita. Dai dati che produce, dalle preferenze che esprime, dai comportamenti che ripete. È il prodotto più prezioso del sistema.',
      ],
      en: [
        "The Mass isn't stupid. It's optimized.",
        "It has learned to survive socially by following the right cues, adopting the right behaviors, consuming the right content. It's not a lack of critical thinking. It's a system designed to make conformity the most convenient choice.",
        "The Mass doesn't follow. It's followed. By the data it produces, the preferences it expresses, the behaviors it repeats. It's the system's most valuable product.",
      ],
      es: [
        'La Masa no es tonta. Está optimizada.',
        'Ha aprendido a sobrevivir socialmente siguiendo las señales correctas, adoptando los comportamientos correctos, consumiendo el contenido correcto. No se trata de falta de pensamiento crítico. Se trata de un sistema diseñado para que el conformismo sea la opción más conveniente.',
        'La Masa no sigue. Es seguida. Por los datos que produce, las preferencias que expresa, los comportamientos que repite. Es el producto más valioso del sistema.',
      ],
    },
    claim: {
      it: { hook: 'Non sanno cosa vogliono. E applaudono comunque.', inst: "Trasmissione dell'Ordine Massa avviata. Tre specie classificate.", cta: 'Unisciti al consenso.' },
      en: { hook: "They don't know what they want. And they applaud anyway.", inst: 'Transmission of Order Massa initiated. Three species classified.', cta: 'Join the consensus.' },
      es: { hook: 'No saben qué quieren. Y aplauden todo igual.', inst: 'Iniciamos transmisión de la Orden Massa. Tres especies clasificadas.', cta: 'Únete al consenso.' },
    },
    species: [
      {
        slug: 'pecora',
        video: '/videos/card-specie/pecora.mp4',
        ejemplar: '019',
        latin: 'OVIS SOCIALIS',
        name: { it: 'PECORA', en: 'SHEEP', es: 'OVEJA' },
        subtitle: {
          it: 'Il conformista. Il trend-jumper.',
          en: 'The conformist. The trend-jumper.',
          es: 'El conformista. El trend-jumper.',
        },
        description: {
          it: [
            'La Pecora non segue perché non ha idee. Segue perché seguire è razionale.',
            'In un sistema dove la visibilità dipende dall\'allineamento, dissentire ha un costo. Essere fuori tendenza ha un costo. La Pecora ha calcolato, anche inconsciamente, che il costo non vale. Così adotta il trend, condivide il contenuto, usa le parole giuste del momento.',
            'Non è vigliaccheria. È adattamento. Il problema è che sette miliardi di individui che si adattano insieme producono una realtà che nessuno ha scelto.',
          ],
          en: [
            "The Sheep doesn't follow because it has no ideas. It follows because following is rational.",
            "In a system where visibility depends on alignment, dissenting has a cost. Being out of trend has a cost. The Sheep has calculated, even unconsciously, that the cost isn't worth it. So it adopts the trend, shares the content, uses the moment's right words.",
            "It's not cowardice. It's adaptation. The problem is that seven billion individuals adapting together produce a reality no one chose.",
          ],
          es: [
            'La Oveja no sigue porque no tenga ideas. Sigue porque seguir es racional.',
            'En un sistema donde la visibilidad depende del alineamiento, disentir tiene un costo. Estar fuera de tendencia tiene un costo. La Oveja ha calculado, incluso inconscientemente, que el costo no vale la pena. Así que adopta la tendencia, comparte el contenido, usa las palabras correctas del momento.',
            'No es cobardía. Es adaptación. El problema es que siete mil millones de individuos adaptándose juntos producen una realidad que nadie eligió.',
          ],
        },
        card: {
          it: { hook: 'Lo fanno tutti. Lo dice un video che ho visto.', inst: "EJEMPLAR 019 — OVIS SOCIALIS. L'Istituto certifica il consenso spontaneo di questa settimana.", cta: 'Unisciti prima delle 18:00.' },
          en: { hook: "Everyone's doing it. A video I saw said so.", inst: "EJEMPLAR 019 — OVIS SOCIALIS. The Institute certifies this week's spontaneous consensus.", cta: 'Join before 6 PM.' },
          es: { hook: 'Todos lo están haciendo. Lo dice un video que vi.', inst: 'EJEMPLAR 019 — OVIS SOCIALIS. La Agencia certifica el consenso espontáneo de esta semana.', cta: 'Únete antes de las 18:00.' },
        },
      },
      {
        slug: 'pesce-rosso',
        video: '/videos/card-specie/pesce-rosso.mp4',
        ejemplar: '021',
        latin: 'CARASSIUS DOOMSCROLLENS',
        name: { it: 'PESCE ROSSO', en: 'GOLDFISH', es: 'PEZ DORADO' },
        subtitle: {
          it: 'Il doomscroller.',
          en: 'The doomscroller.',
          es: 'El doomscroller.',
        },
        description: {
          it: [
            'Il Pesce Rosso non sceglie cosa guardare. Scorre.',
            "L'algoritmo conosce le sue pause, le sue esitazioni, i contenuti davanti ai quali rallenta. Sa cosa lo attiva meglio della sua stessa coscienza. Gli serve un'emozione forte ogni tre secondi — indignazione, desiderio, paura, nostalgia — altrimenti cambia schermo.",
            'Non è dipendenza. È un prodotto progettato per sembrare libertà di scelta mentre elimina la capacità di scegliere.',
          ],
          en: [
            "The Goldfish doesn't choose what to watch. It scrolls.",
            "The algorithm knows its pauses, its hesitations, the content it slows down for. It knows what activates it better than its own consciousness does. It needs a strong emotion every three seconds — outrage, desire, fear, nostalgia — or it changes screen.",
            "It's not addiction. It's a product designed to look like freedom of choice while eliminating the ability to choose.",
          ],
          es: [
            'El Pez Dorado no elige qué mirar. Scrollea.',
            'El algoritmo conoce sus pausas, sus dudas, los contenidos ante los que se detiene. Sabe qué lo activa mejor que su propia conciencia. Necesita una emoción fuerte cada tres segundos — indignación, deseo, miedo, nostalgia — o cambia de pantalla.',
            'No es adicción. Es un producto diseñado para parecer libertad de elección mientras elimina la capacidad de elegir.',
          ],
        },
        card: {
          it: { hook: 'Solo cinque minuti ancora. Sono due ore che scrolli.', inst: "EJEMPLAR 021 — CARASSIUS DOOMSCROLLENS. L'Istituto conferma il ciclo dopaminergico notturno.", cta: 'Non fermarti. Sei quasi alla fine del feed.' },
          en: { hook: "Just five more minutes. It's been two hours.", inst: 'EJEMPLAR 021 — CARASSIUS DOOMSCROLLENS. The Institute confirms the nightly dopamine loop.', cta: "Don't stop. You're almost at the end of the feed." },
          es: { hook: 'Solo cinco minutos más. Llevas dos horas.', inst: 'EJEMPLAR 021 — CARASSIUS DOOMSCROLLENS. La Agencia confirma el bucle dopaminérgico nocturno.', cta: 'No pares. Estás casi al final del feed.' },
        },
      },
      {
        slug: 'pinguino',
        video: '/videos/card-specie/pinguino.mp4',
        ejemplar: '020',
        latin: 'APTENODYTES CORPORATUS',
        name: { it: 'PINGUINO', en: 'PENGUIN', es: 'PINGÜINO' },
        subtitle: {
          it: 'Il corporate uniformato.',
          en: 'The uniformed corporate.',
          es: 'El corporativo uniformado.',
        },
        description: {
          it: [
            'Il Pinguino ha trovato la sua tribù. Si chiama azienda.',
            'Parla la lingua giusta — synergy, ownership, alignment. Si veste in modo appropriato, reagisce in modo appropriato, ambisce in modo appropriato. Ha trasformato l\'obbedienza in personal brand e la conformità in professionalità.',
            "Non è ipocrita. Crede davvero nel sistema in cui opera. Questo lo rende più utile al sistema di qualsiasi dipendente che obbedisce per paura.",
          ],
          en: [
            "The Penguin found its tribe. It's called the company.",
            'It speaks the right language — synergy, ownership, alignment. It dresses appropriately, reacts appropriately, aspires appropriately. It has turned obedience into a personal brand and conformity into professionalism.',
            "It's not hypocritical. It truly believes in the system it operates in. That makes it more useful to the system than any employee who obeys out of fear.",
          ],
          es: [
            'El Pingüino encontró su tribu. Se llama empresa.',
            'Habla el idioma correcto — sinergia, ownership, alineamiento. Se viste de forma apropiada, reacciona de forma apropiada, aspira de forma apropiada. Ha convertido la obediencia en marca personal y la conformidad en profesionalismo.',
            'No es hipócrita. Cree de verdad en el sistema en el que opera. Eso lo hace más útil al sistema que cualquier empleado que obedece por miedo.',
          ],
        },
        card: {
          it: { hook: 'Ottima domanda. La porto al team.', inst: "EJEMPLAR 020 — APTENODYTES CORPORATUS. L'Istituto archivia la performance in videocamera durante la call.", cta: 'Sorridi. Annuisci. Modera i toni.' },
          en: { hook: "Great question. I'll bring it to the team.", inst: 'EJEMPLAR 020 — APTENODYTES CORPORATUS. The Institute archives on-camera performance during the call.', cta: 'Smile. Nod. Moderate.' },
          es: { hook: 'Excelente pregunta. La llevo al equipo.', inst: 'EJEMPLAR 020 — APTENODYTES CORPORATUS. La Agencia archiva el rendimiento de cámara durante la videollamada.', cta: 'Sonríe. Asiente. Modera.' },
        },
      },
    ],
  },

  {
    slug: 'rebelles',
    video: '/videos/card-ordini/rebelles.mp4',
    number: 5,
    name: 'REBELLES',
    title: { it: 'I RIBELLI', en: 'THE REBELS', es: 'LOS REBELDES' },
    subtitle: {
      it: 'Chi crede di fuggire e compra la propria gabbia',
      en: "Those who think they're escaping and buy their own cage",
      es: 'Quienes creen huir y compran su propia jaula',
    },
    description: {
      it: [
        'Il sistema ha imparato a vendere anche la ribellione.',
        "Ogni forma di fuga è stata studiata, confezionata e rimessa sul mercato. L'anti-consumismo ha il suo brand. La spiritualità ha il suo abbonamento. La mascolinità alternativa ha il suo podcast. Chi crede di essere fuori dal sistema sta comprando una versione premium di esso.",
        'I Ribelli sono il segmento di mercato più redditizio. Pagano di più per sentirsi diversi.',
      ],
      en: [
        'The system has learned to sell rebellion too.',
        'Every form of escape has been studied, packaged, and put back on the market. Anti-consumerism has its brand. Spirituality has its subscription. Alternative masculinity has its podcast. Whoever believes they\'re outside the system is buying a premium version of it.',
        'The Rebels are the most profitable market segment. They pay more to feel different.',
      ],
      es: [
        'El sistema ha aprendido a vender también la rebeldía.',
        'Toda forma de fuga ha sido estudiada, empaquetada y puesta de nuevo en el mercado. El anticonsumismo tiene su marca. La espiritualidad tiene su suscripción. La masculinidad alternativa tiene su podcast. Quien cree estar fuera del sistema está comprando una versión premium de él.',
        'Los Rebeldes son el segmento de mercado más rentable. Pagan más por sentirse diferentes.',
      ],
    },
    claim: {
      it: { hook: 'Credono di scappare. E comprano la loro gabbia.', inst: "Trasmissione dell'Ordine Rebelles avviata. Tre specie classificate.", cta: 'Respira profondamente. Resta abbonato.' },
      en: { hook: "They think they're escaping. And they buy their own cage.", inst: 'Transmission of Order Rebelles initiated. Three species classified.', cta: 'Take a deep breath. Stay subscribed.' },
      es: { hook: 'Creen escapar. Y compran su jaula.', inst: 'Iniciamos transmisión de la Orden Rebelles. Tres especies clasificadas.', cta: 'Respira hondo. Sigue suscrito.' },
    },
    species: [
      {
        slug: 'tigre',
        video: '/videos/card-specie/tigre.mp4',
        ejemplar: '026',
        latin: 'PANTHERA DISCIPLINA',
        name: { it: 'TIGRE', en: 'TIGER', es: 'TIGRE' },
        subtitle: {
          it: 'Warrior culture. Monk mode. Alpha male.',
          en: 'Warrior culture. Monk mode. Alpha male.',
          es: 'Warrior culture. Monk mode. Alpha male.',
        },
        description: {
          it: [
            "La Tigre si è svegliata alle 5. Ha fatto il bagno ghiacciato, meditato, sollevato pesi. Ha ottimizzato il corpo, la mente, la disciplina. Si è costruita una gabbia perfetta e la chiama libertà.",
            'La mascolinità performativa è diventata un\'industria. Podcast, integratori, corsi, retreat. Il mercato ha capito che vendere all\'uomo che vuole essere forte è più facile che vendere a chiunque altro — basta chiamare il prodotto "strumento", non "acquisto".',
            'La Tigre non consuma. Investe in sé stessa. È la stessa cosa con un nome diverso.',
          ],
          en: [
            'The Tiger woke up at 5. Took the ice bath, meditated, lifted weights. Optimized the body, the mind, the discipline. Built itself a perfect cage and calls it freedom.',
            'Performative masculinity has become an industry. Podcasts, supplements, courses, retreats. The market realized that selling to a man who wants to be strong is easier than selling to anyone else — just call the product a "tool," not a "purchase."',
            "The Tiger doesn't consume. It invests in itself. It's the same thing with a different name.",
          ],
          es: [
            'El Tigre se despertó a las 5. Se dio el baño helado, meditó, levantó pesas. Optimizó el cuerpo, la mente, la disciplina. Se construyó una jaula perfecta y la llama libertad.',
            'La masculinidad performativa se ha vuelto una industria. Podcasts, suplementos, cursos, retiros. El mercado entendió que venderle a un hombre que quiere ser fuerte es más fácil que venderle a cualquier otro — basta con llamar al producto "herramienta," no "compra."',
            'El Tigre no consume. Invierte en sí mismo. Es lo mismo con otro nombre.',
          ],
        },
        card: {
          it: { hook: 'Oggi si è svegliato alle 4:30. Per entrare in acqua ghiacciata prima di tutti.', inst: "EJEMPLAR 026 — PANTHERA DISCIPLINA. L'Istituto certifica la disciplina come personalità.", cta: 'Respira. Soffri. Condividi.' },
          en: { hook: 'Today he woke up at 4:30. To get into ice water before anyone else.', inst: 'EJEMPLAR 026 — PANTHERA DISCIPLINA. The Institute certifies discipline as a personality.', cta: 'Breathe. Suffer. Share.' },
          es: { hook: 'Hoy se levantó a las 4:30. Para meterse en agua helada antes que nadie.', inst: 'EJEMPLAR 026 — PANTHERA DISCIPLINA. La Agencia certifica la disciplina como personalidad.', cta: 'Respira. Sufre. Comparte.' },
        },
      },
      {
        slug: 'capra',
        video: '/videos/card-specie/capra.mp4',
        ejemplar: '023',
        latin: 'CAPRA NIRVANA',
        name: { it: 'CAPRA', en: 'GOAT', es: 'CABRA' },
        subtitle: {
          it: 'Wellness escapist. Ayahuasca. Off-grid.',
          en: 'Wellness escapist. Ayahuasca. Off-grid.',
          es: 'Wellness escapist. Ayahuasca. Off-grid.',
        },
        description: {
          it: [
            'La Capra ha deciso di uscire dal sistema. Il volo per la cerimonia in Perù costa 1.200 euro.',
            'Cerca autenticità, connessione, lentezza. Fugge dalla città per il ritiro in montagna, dal supermarket per il mercato biologico, dallo schermo per il corso di ceramica. Ogni fuga ha il suo prezzo, la sua piattaforma, la sua community online.',
            "Non c'è niente di sbagliato nel cercare pace. Il problema è quando la pace diventa un'estetica, la spiritualità un'identità di consumo e l'uscita dal sistema un prodotto del sistema.",
          ],
          en: [
            'The Goat decided to leave the system. The flight for the ceremony in Peru costs 1,200 euros.',
            'It seeks authenticity, connection, slowness. It flees the city for the mountain retreat, the supermarket for the organic market, the screen for the pottery class. Every escape has its price, its platform, its online community.',
            "There's nothing wrong with seeking peace. The problem is when peace becomes an aesthetic, spirituality a consumer identity, and leaving the system a product of the system.",
          ],
          es: [
            'La Cabra decidió salir del sistema. El vuelo para la ceremonia en Perú cuesta 1.200 euros.',
            'Busca autenticidad, conexión, lentitud. Huye de la ciudad hacia el retiro de montaña, del supermercado hacia el mercado orgánico, de la pantalla hacia el curso de cerámica. Cada fuga tiene su precio, su plataforma, su comunidad online.',
            'No hay nada de malo en buscar paz. El problema es cuando la paz se vuelve una estética, la espiritualidad una identidad de consumo y la salida del sistema un producto del sistema.',
          ],
        },
        card: {
          it: { hook: 'Ha rinunciato al sistema. Iscriviti al suo Patreon.', inst: "EJEMPLAR 023 — CAPRA NIRVANA. L'Istituto certifica il ritiro spirituale con WiFi.", cta: 'Pulisci il tuo chakra. Paga il piano annuale.' },
          en: { hook: 'She quit the system. Subscribe to her Patreon.', inst: 'EJEMPLAR 023 — CAPRA NIRVANA. The Institute certifies the spiritual retreat with WiFi.', cta: 'Cleanse your chakra. Pay the annual plan.' },
          es: { hook: 'Renunció al sistema. Suscríbete a su Patreon.', inst: 'EJEMPLAR 023 — CAPRA NIRVANA. La Agencia certifica el retiro espiritual con WiFi.', cta: 'Limpia tu chakra. Paga el plan anual.' },
        },
      },
      {
        slug: 'panda',
        video: '/videos/card-specie/panda.mp4',
        ejemplar: '027',
        latin: 'AILUROPODA TRISTIS',
        name: { it: 'PANDA', en: 'PANDA', es: 'PANDA' },
        subtitle: {
          it: 'Eco-anxiety influencer. Doomer chic.',
          en: 'Eco-anxiety influencer. Doomer chic.',
          es: 'Eco-anxiety influencer. Doomer chic.',
        },
        description: {
          it: [
            'Il Panda è preoccupato per il pianeta. Lo dice ogni giorno. Con le foto giuste, le caption giuste, gli hashtag giusti.',
            "L'eco-ansia è reale. La crisi climatica è reale. Ma il sistema ha trovato il modo di monetizzare anche quella — prodotti sostenibili, certificazioni green, contenuto ambientale che genera engagement senza generare cambiamento.",
            'Il Panda sente il peso del mondo sulle spalle. E lo condivide in formato 1080×1350.',
          ],
          en: [
            'The Panda is worried about the planet. It says so every day. With the right photos, the right captions, the right hashtags.',
            'Eco-anxiety is real. The climate crisis is real. But the system has found a way to monetize that too — sustainable products, green certifications, environmental content that generates engagement without generating change.',
            'The Panda feels the weight of the world on its shoulders. And shares it in 1080×1350 format.',
          ],
          es: [
            'El Panda está preocupado por el planeta. Lo dice cada día. Con las fotos correctas, los captions correctos, los hashtags correctos.',
            'La ecoansiedad es real. La crisis climática es real. Pero el sistema ha encontrado la forma de monetizar también eso — productos sostenibles, certificaciones verdes, contenido ambiental que genera engagement sin generar cambio.',
            'El Panda siente el peso del mundo sobre sus hombros. Y lo comparte en formato 1080×1350.',
          ],
        },
        card: {
          it: { hook: 'Restano dieci anni. Restano da vent\'anni.', inst: "EJEMPLAR 027 — AILUROPODA TRISTIS. L'Istituto certifica l'angoscia climatica come stile.", cta: 'Piangi. Posta. Continua a volare.' },
          en: { hook: 'Ten years left. There have been ten years left for twenty years.', inst: 'EJEMPLAR 027 — AILUROPODA TRISTIS. The Institute certifies climate anxiety as a style.', cta: 'Cry. Post. Keep flying.' },
          es: { hook: 'Quedan diez años. Quedan desde hace veinte.', inst: 'EJEMPLAR 027 — AILUROPODA TRISTIS. La Agencia certifica la angustia climática como estilo.', cta: 'Llora. Postea. Continúa volando.' },
        },
      },
    ],
  },

  {
    slug: 'crucesignati',
    video: '/videos/card-ordini/crucesignati.mp4',
    number: 6,
    name: 'CRUCESIGNATI',
    title: { it: 'I CROCIATI', en: 'THE CRUSADERS', es: 'LOS CRUZADOS' },
    subtitle: {
      it: 'Chi combatte per la tribù, non per sé',
      en: 'Those who fight for the tribe, not for themselves',
      es: 'Quienes luchan por la tribu, no por sí mismos',
    },
    description: {
      it: [
        'I Crociati credono nella causa. Questo è il loro punto di forza. Questo è il loro punto di debolezza.',
        "Il sistema non ha nemici più utili di chi combatte con genuina convinzione. L'indignazione autentica è il combustibile più efficiente — non si esaurisce, non chiede compenso, non si interroga sui risultati.",
        'Mentre i Crociati combattono tra loro, chi ha costruito l\'arena guarda.',
      ],
      en: [
        'The Crusaders believe in the cause. That\'s their strength. That\'s their weakness.',
        "The system has no more useful enemies than those who fight with genuine conviction. Authentic outrage is the most efficient fuel — it doesn't run out, doesn't ask for payment, doesn't question its own results.",
        'While the Crusaders fight each other, whoever built the arena watches.',
      ],
      es: [
        'Los Cruzados creen en la causa. Esa es su fuerza. Esa es su debilidad.',
        'El sistema no tiene enemigos más útiles que quienes luchan con convicción genuina. La indignación auténtica es el combustible más eficiente — no se agota, no pide compensación, no se cuestiona sus propios resultados.',
        'Mientras los Cruzados luchan entre sí, quien construyó la arena observa.',
      ],
    },
    claim: {
      it: { hook: 'Combattono per niente. E muoiono felici.', inst: "Trasmissione dell'Ordine Crucesignati avviata. Tre specie classificate.", cta: 'Scegli la tua trincea.' },
      en: { hook: 'They fight for nothing. And die happy.', inst: 'Transmission of Order Crucesignati initiated. Three species classified.', cta: 'Choose your trench.' },
      es: { hook: 'Pelean por nada. Y mueren felices.', inst: 'Iniciamos transmisión de la Orden Crucesignati. Tres especies clasificadas.', cta: 'Elige tu trinchera.' },
    },
    species: [
      {
        slug: 'lupo',
        video: '/videos/card-specie/lupo.mp4',
        ejemplar: '029',
        latin: 'LUPUS VINDICATUS',
        name: { it: 'LUPO', en: 'WOLF', es: 'LOBO' },
        subtitle: {
          it: 'Il predatore ideologico del branco.',
          en: "The pack's ideological predator.",
          es: 'El depredador ideológico de la manada.',
        },
        description: {
          it: [
            "Il Lupo non combatte da solo. Ha bisogno del branco, della gerarchia, del nemico comune. Senza questi tre elementi non esiste.",
            'Opera nel linguaggio della guerra culturale — frame, meme, narrative da distruggere. Sa che in una battaglia di idee non vince chi ha ragione, vince chi ripete più forte e più a lungo. Ha imparato le regole della memetic warfare e le applica con dedizione.',
            'Crede di combattere per i valori. Sta combattendo per la visibilità del branco. Spesso è la stessa cosa. Quasi mai coincide con il cambiamento reale.',
          ],
          en: [
            "The Wolf doesn't fight alone. It needs the pack, the hierarchy, the common enemy. Without these three elements it doesn't exist.",
            'It operates in the language of the culture war — frames, memes, narratives to destroy. It knows that in a battle of ideas, the winner isn\'t who\'s right, it\'s who repeats loudest and longest. It has learned the rules of memetic warfare and applies them with dedication.',
            "It believes it's fighting for values. It's fighting for the pack's visibility. Often it's the same thing. Almost never does it coincide with real change.",
          ],
          es: [
            'El Lobo no lucha solo. Necesita la manada, la jerarquía, el enemigo común. Sin estos tres elementos no existe.',
            'Opera en el lenguaje de la guerra cultural — frames, memes, narrativas que destruir. Sabe que en una batalla de ideas no gana quien tiene razón, gana quien repite más fuerte y más tiempo. Ha aprendido las reglas de la guerra memética y las aplica con dedicación.',
            'Cree que lucha por los valores. Está luchando por la visibilidad de la manada. A menudo es lo mismo. Casi nunca coincide con el cambio real.',
          ],
        },
        card: {
          it: { hook: 'È solo contro tutti. Insieme agli altri soli contro tutti.', inst: "EJEMPLAR 029 — LUPUS VINDICATUS. L'Istituto archivia il lupo solitario nel suo branco.", cta: 'Ulula in gruppo.' },
          en: { hook: "He's alone against everyone. Together with the other loners against everyone.", inst: 'EJEMPLAR 029 — LUPUS VINDICATUS. The Institute archives the lone wolf within his pack.', cta: 'Howl in a group.' },
          es: { hook: 'Está solo contra todos. Junto a los otros solos contra todos.', inst: 'EJEMPLAR 029 — LUPUS VINDICATUS. La Agencia archiva al lobo solitario en su manada.', cta: 'Aúlla en grupo.' },
        },
      },
      {
        slug: 'cinghiale',
        video: '/videos/card-specie/cinghiale.mp4',
        ejemplar: '028',
        latin: 'SUS FUROR',
        name: { it: 'CINGHIALE', en: 'BOAR', es: 'JABALÍ' },
        subtitle: {
          it: 'Il combattente cieco.',
          en: 'The blind fighter.',
          es: 'El combatiente ciego.',
        },
        description: {
          it: [
            'Il Cinghiale carica. Non valuta, non analizza, non aspetta. Carica.',
            "È il soldato perfetto di qualsiasi causa perché non ha bisogno di capirla — ha bisogno solo di un nemico. L'algoritmo glielo fornisce ogni mattina, fresco, personalizzato, abbastanza vicino da sembrare una minaccia reale.",
            'La sua rabbia è genuina. Questo lo rende utile a chi sa incanalarla. Il Cinghiale non viene manipolato — viene orientato. La differenza è sottile ma fondamentale.',
          ],
          en: [
            "The Boar charges. It doesn't assess, doesn't analyze, doesn't wait. It charges.",
            "It's the perfect soldier for any cause because it doesn't need to understand it — it just needs an enemy. The algorithm provides one every morning, fresh, personalized, close enough to feel like a real threat.",
            "Its anger is genuine. That makes it useful to whoever knows how to channel it. The Boar isn't manipulated — it's oriented. The difference is subtle but fundamental.",
          ],
          es: [
            'El Jabalí carga. No evalúa, no analiza, no espera. Carga.',
            'Es el soldado perfecto de cualquier causa porque no necesita entenderla — necesita solo un enemigo. El algoritmo se lo proporciona cada mañana, fresco, personalizado, lo bastante cerca como para parecer una amenaza real.',
            'Su rabia es genuina. Eso lo hace útil a quien sabe canalizarla. Al Jabalí no lo manipulan — lo orientan. La diferencia es sutil pero fundamental.',
          ],
        },
        card: {
          it: { hook: "Ha ragione. L'ha detto più forte dell'altro.", inst: "EJEMPLAR 028 — SUS FUROR. L'Istituto certifica la carica frontale del trimestre.", cta: 'Ricondividi senza leggere.' },
          en: { hook: "He's right. He said it louder than the other guy.", inst: "EJEMPLAR 028 — SUS FUROR. The Institute certifies this quarter's frontal charge.", cta: 'Repost without reading.' },
          es: { hook: 'Tiene razón. Lo dijo más fuerte que el otro.', inst: 'EJEMPLAR 028 — SUS FUROR. La Agencia certifica la carga frontal del trimestre.', cta: 'Repostea sin leer.' },
        },
      },
      {
        slug: 'toro',
        video: '/videos/card-specie/toro.mp4',
        ejemplar: '031',
        latin: 'TAURUS FURIBUNDUS',
        name: { it: 'TORO', en: 'BULL', es: 'TORO' },
        subtitle: {
          it: "L'indignato permanente.",
          en: 'The permanently outraged.',
          es: 'El indignado permanente.',
        },
        description: {
          it: [
            'Il Toro è sempre arrabbiato. Ha sempre una ragione. Le ragioni cambiano, la rabbia rimane.',
            "Vive in uno stato di emergenza continua. Ogni notizia è una conferma, ogni evento una prova, ogni disaccordo un attacco. Non può permettersi di calmarsi — la calma significherebbe interrogarsi, e l'interrogativo potrebbe minacciare l'identità che ha costruito intorno alla sua indignazione.",
            "Non è instabilità emotiva. È un equilibrio preciso — quello di chi ha trovato nel conflitto permanente l'unico modo di sentirsi vivo.",
          ],
          en: [
            'The Bull is always angry. It always has a reason. The reasons change, the anger stays.',
            "It lives in a state of continuous emergency. Every news item is a confirmation, every event a proof, every disagreement an attack. It can't afford to calm down — calm would mean questioning itself, and questioning might threaten the identity it has built around its outrage.",
            "It's not emotional instability. It's a precise balance — that of someone who has found in permanent conflict the only way to feel alive.",
          ],
          es: [
            'El Toro está siempre enfadado. Siempre tiene una razón. Las razones cambian, la rabia permanece.',
            'Vive en un estado de emergencia continua. Cada noticia es una confirmación, cada evento una prueba, cada desacuerdo un ataque. No puede permitirse calmarse — la calma significaría cuestionarse, y el cuestionamiento podría amenazar la identidad que ha construido alrededor de su indignación.',
            'No es inestabilidad emocional. Es un equilibrio preciso — el de quien ha encontrado en el conflicto permanente la única forma de sentirse vivo.',
          ],
        },
        card: {
          it: { hook: 'Un panno qualsiasi. Purché sia rosso.', inst: "EJEMPLAR 031 — TAURUS FURIBUNDUS. L'Istituto certifica la carica automatica contro lo stimolo.", cta: 'Carica prima di pensare.' },
          en: { hook: 'Any red rag. Any shade of red.', inst: 'EJEMPLAR 031 — TAURUS FURIBUNDUS. The Institute certifies the automatic charge against the stimulus.', cta: 'Charge before thinking.' },
          es: { hook: 'Cualquier trapo rojo. Cualquier color rojo.', inst: 'EJEMPLAR 031 — TAURUS FURIBUNDUS. La Agencia certifica la carga automática contra el estímulo.', cta: 'Embiste antes de pensar.' },
        },
      },
    ],
  },

  {
    slug: 'submersi',
    video: '/videos/card-ordini/submersi.mp4',
    number: 7,
    name: 'SUBMERSI',
    title: { it: 'I SOMMERSI', en: 'THE SUBMERGED', es: 'LOS SUMERGIDOS' },
    subtitle: {
      it: 'Chi il sistema ha reso invisibile',
      en: 'Those the system has made invisible',
      es: 'Quienes el sistema ha vuelto invisibles',
    },
    description: {
      it: [
        'Questo non è un Ordine come gli altri.',
        "I Sommersi non sono vittime di una scelta sbagliata, di un'illusione comprata, di una tribù seguita. Sono vittime di un'architettura — un sistema che misura il valore in produttività, visibilità e consumo, e che cancella chi non rientra in nessuna di queste categorie.",
        'Radiopaganda non classifica i Sommersi per ridicolizzarli. Li classifica per renderli visibili. È la differenza più importante di tutto il bestiario.',
      ],
      en: [
        "This isn't an Order like the others.",
        "The Submerged aren't victims of a bad choice, a bought illusion, a followed tribe. They're victims of an architecture — a system that measures worth in productivity, visibility, and consumption, and erases whoever doesn't fit any of those categories.",
        "Radiopaganda doesn't classify the Submerged to mock them. It classifies them to make them visible. It's the most important difference in the whole bestiary.",
      ],
      es: [
        'Este no es un Orden como los demás.',
        'Los Sumergidos no son víctimas de una mala elección, de una ilusión comprada, de una tribu seguida. Son víctimas de una arquitectura — un sistema que mide el valor en productividad, visibilidad y consumo, y borra a quien no encaja en ninguna de esas categorías.',
        'Radiopaganda no clasifica a los Sumergidos para ridiculizarlos. Los clasifica para hacerlos visibles. Es la diferencia más importante de todo el bestiario.',
      ],
    },
    claim: {
      it: { hook: 'Lavorano in silenzio. Senza chiedere nulla. Ed è per questo che scompaiono.', inst: "Trasmissione dell'Ordine Submersi avviata. Tre specie classificate.", cta: 'Chi sostiene tutto. E nessuno vede.' },
      en: { hook: "They work in silence. Asking for nothing. And that's why they disappear.", inst: 'Transmission of Order Submersi initiated. Three species classified.', cta: 'Those who hold everything up. Unseen.' },
      es: { hook: 'Trabajan en silencio. Sin pedir nada. Y por eso desaparecen.', inst: 'Iniciamos transmisión de la Orden Submersi. Tres especies clasificadas.', cta: 'Los que sostienen todo. Y nadie los ve.' },
    },
    species: [
      {
        slug: 'topo',
        video: '/videos/card-specie/topo.mp4',
        ejemplar: '035',
        latin: 'MUS PROVIDENS',
        name: { it: 'TOPO', en: 'MOUSE', es: 'RATÓN' },
        subtitle: {
          it: "Il lavoratore essenziale invisibile.",
          en: 'The invisible essential worker.',
          es: 'El trabajador esencial invisible.',
        },
        description: {
          it: [
            'Il Topo esiste quando smette di esistere.',
            "Pulisce gli uffici prima che arrivino gli altri, consegna i pacchi prima che la città si svegli, mantiene in funzione infrastrutture che nessuno vede finché non si rompono. Il sistema dipende da lui completamente e lo riconosce quasi mai.",
            'Durante la pandemia è stato chiamato "essenziale". Dopo la pandemia è tornato invisibile. La parola essenziale, si è scoperto, non significa indispensabile. Significa necessario ma sostituibile.',
          ],
          en: [
            'The Mouse exists when it stops existing.',
            'It cleans the offices before others arrive, delivers the packages before the city wakes up, keeps running infrastructure that no one sees until it breaks. The system depends on it completely and almost never acknowledges it.',
            'During the pandemic it was called "essential." After the pandemic it went back to being invisible. The word essential, it turns out, doesn\'t mean indispensable. It means necessary but replaceable.',
          ],
          es: [
            'El Ratón existe cuando deja de existir.',
            'Limpia las oficinas antes de que lleguen los demás, entrega los paquetes antes de que la ciudad despierte, mantiene en funcionamiento infraestructuras que nadie ve hasta que se rompen. El sistema depende de él por completo y casi nunca lo reconoce.',
            'Durante la pandemia lo llamaron "esencial." Después de la pandemia volvió a ser invisible. La palabra esencial, resultó, no significa indispensable. Significa necesario pero sustituible.',
          ],
        },
        card: {
          it: { hook: 'È ovunque. Nessuno lo nomina.', inst: "EJEMPLAR 035 — MUS PROVIDENS. L'Istituto archivia l'inventario che nessuno conta.", cta: 'Tieni il magazzino in ordine.' },
          en: { hook: "He's everywhere. No one names him.", inst: 'EJEMPLAR 035 — MUS PROVIDENS. The Institute archives the inventory no one counts.', cta: 'Keep the warehouse tidy.' },
          es: { hook: 'Está en todas partes. Nadie lo nombra.', inst: 'EJEMPLAR 035 — MUS PROVIDENS. La Agencia archiva el inventario que nadie cuenta.', cta: 'Mantén el almacén ordenado.' },
        },
      },
      {
        slug: 'mulo',
        video: '/videos/card-specie/mulo.mp4',
        ejemplar: '038',
        latin: 'EQUUS PORTATOR',
        name: { it: 'MULO', en: 'MULE', es: 'MULO' },
        subtitle: {
          it: 'Il caregiver. Il lavoro non pagato.',
          en: 'The caregiver. Unpaid labor.',
          es: 'El caregiver. El trabajo no remunerado.',
        },
        description: {
          it: [
            'Il Mulo porta il peso degli altri. Lo fa per scelta, per amore, per necessità. Spesso per tutte e tre le ragioni insieme.',
            "Accudisce i figli, gli anziani, i malati. Gestisce la casa, le relazioni, le crisi familiari. Fa un lavoro enorme che il sistema non conteggia nel PIL, non remunera, non protegge. Quando si rompe, il sistema gli chiede di riposarsi e riprendere.",
            "L'economia globale si regge su questo lavoro invisibile. Lo sa. Preferisce non dirlo.",
          ],
          en: [
            "The Mule carries others' weight. It does so by choice, by love, by necessity. Often for all three reasons at once.",
            "It cares for children, the elderly, the sick. It manages the household, relationships, family crises. It does enormous work that the system doesn't count in GDP, doesn't pay, doesn't protect. When it breaks down, the system asks it to rest and get back to it.",
            'The global economy runs on this invisible labor. It knows it. It prefers not to say so.',
          ],
          es: [
            'El Mulo carga el peso de los demás. Lo hace por elección, por amor, por necesidad. A menudo por las tres razones juntas.',
            'Cuida a los hijos, a los ancianos, a los enfermos. Gestiona la casa, las relaciones, las crisis familiares. Hace un trabajo enorme que el sistema no cuenta en el PIB, no remunera, no protege. Cuando se rompe, el sistema le pide que descanse y retome.',
            'La economía global se sostiene sobre este trabajo invisible. Lo sabe. Prefiere no decirlo.',
          ],
        },
        card: {
          it: { hook: 'Porta quello che altri hanno ordinato. Porta quello che altri non volevano portare.', inst: "EJEMPLAR 038 — EQUUS PORTATOR. L'Istituto archivia la schiena che regge la catena.", cta: 'Tieni il ritmo del prossimo turno.' },
          en: { hook: "He carries what others ordered. He carries what others didn't want to carry.", inst: 'EJEMPLAR 038 — EQUUS PORTATOR. The Institute archives the back that holds up the chain.', cta: 'Keep pace for the next shift.' },
          es: { hook: 'Carga lo que otros han pedido. Carga lo que otros no querían cargar.', inst: 'EJEMPLAR 038 — EQUUS PORTATOR. La Agencia archiva la espalda que sostiene la cadena.', cta: 'Sigue al ritmo del próximo turno.' },
        },
      },
      {
        slug: 'bradipo',
        video: '/videos/card-specie/bradipo.mp4',
        ejemplar: '040',
        latin: 'BRADYPUS DIGNUS',
        name: { it: 'BRADIPO', en: 'SLOTH', es: 'PEREZOSO' },
        subtitle: {
          it: 'Chi il sistema chiama improduttivo.',
          en: 'Whoever the system calls unproductive.',
          es: 'A quien el sistema llama improductivo.',
        },
        description: {
          it: [
            'Il Bradipo non tiene il ritmo. Il sistema ha deciso che questo è un problema.',
            'Forse è malato. Forse è stanco in modo che il riposo non risolve. Forse semplicemente funziona a una velocità diversa da quella che il capitalismo ha stabilito come normale. In ogni caso viene misurato con gli stessi strumenti degli altri e trovato insufficiente.',
            'Non è pigrizia. È umanità in un sistema progettato per macchine. Il Bradipo non ha bisogno di essere sistemato. Ha bisogno di un sistema diverso.',
          ],
          en: [
            "The Sloth can't keep the pace. The system has decided this is a problem.",
            "Maybe it's sick. Maybe it's tired in a way rest doesn't fix. Maybe it simply operates at a different speed than the one capitalism has set as normal. Either way it's measured with the same tools as everyone else and found insufficient.",
            "It's not laziness. It's humanity in a system designed for machines. The Sloth doesn't need to be fixed. It needs a different system.",
          ],
          es: [
            'El Perezoso no lleva el ritmo. El sistema ha decidido que eso es un problema.',
            'Quizá está enfermo. Quizá está cansado de una forma que el descanso no resuelve. Quizá simplemente funciona a una velocidad distinta de la que el capitalismo ha establecido como normal. En cualquier caso se lo mide con las mismas herramientas que a los demás y se lo encuentra insuficiente.',
            'No es pereza. Es humanidad en un sistema diseñado para máquinas. El Perezoso no necesita ser arreglado. Necesita un sistema distinto.',
          ],
        },
        card: {
          it: { hook: 'Un cliente ogni ora. Un sorriso per ogni cliente.', inst: "EJEMPLAR 040 — BRADYPUS DIGNUS. L'Istituto archivia la cortesia sostenuta del turno notturno.", cta: 'Il prossimo cliente aspetta.' },
          en: { hook: 'One customer an hour. One smile for each customer.', inst: 'EJEMPLAR 040 — BRADYPUS DIGNUS. The Institute archives the sustained courtesy of the night shift.', cta: 'The next customer is waiting.' },
          es: { hook: 'Un cliente cada hora. Una sonrisa para cada cliente.', inst: 'EJEMPLAR 040 — BRADYPUS DIGNUS. La Agencia archiva la cortesía sostenida del turno nocturno.', cta: 'El siguiente cliente espera.' },
        },
      },
    ],
  },
]

export function getOrder(slug) {
  return orders.find((o) => o.slug === slug)
}

export function getSpecies(orderSlug, speciesSlug) {
  const order = getOrder(orderSlug)
  if (!order) return null
  const species = order.species.find((s) => s.slug === speciesSlug)
  if (!species) return null
  return { order, species }
}
