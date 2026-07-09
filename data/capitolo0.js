// RADIOPAGANDA — Capitolo 0: album manifesto (8 canzoni).
// Fonte lyrics/Suno prompt: radiopaganda-canzone-*.md (una per canzone).
// Fonte significati: radiopaganda-capitolo-0-significati.md.
// I video sono ospitati su YouTube (canale Radiopaganda, unlisted finché non si pubblica il capitolo).
// youtubeId è null finché il video non è caricato: il componente mostra un placeholder "video in arrivo".

export const capitolo0 = {
  number: 0,
  title: { it: 'CAPITOLO 0', en: 'CHAPTER 0', es: 'CAPÍTULO 0' },
  subtitle: {
    it: 'MANIFESTO',
    en: 'MANIFESTO',
    es: 'MANIFIESTO',
  },

  // Testo narrativo di apertura — originariamente scritto per la home
  // (scrollytelling a 11 scene, poi abbandonato per il design "loop + manifesto"),
  // riassegnato come testo hero di questa pagina. Fonte: radiopaganda-manifesto.md.
  // Diviso in strofe per la resa a schermo.
  intro: {
    it: [
      ['Volo di notte.', "Vedo nell'oscurità.", 'Vi ho già visti.'],
      [
        'Osservo chi ha tutto e vuole di più.',
        'Chi lavora senza fermarsi e chiama virtù la stanchezza.',
        'Chi ha sempre ragione e non cambia mai idea.',
        'Chi è libero — ma solo nei formati consentiti.',
        'Chi aspetta che passi.',
      ],
      [
        'Il nostro cantico sono le loro voci.',
        'Canzoni che la propaganda ha scritto per loro',
        'senza che se ne accorgessero.',
      ],
      [
        'Radiopaganda classifica la popolazione in specie animali.',
        'Non è una metafora.',
        'È una diagnosi.',
      ],
      [
        'La tua specie è già stata assegnata.',
        'Potresti non riconoscerla.',
        'Da quassù la vediamo benissimo.',
      ],
    ],
    en: [
      ['I fly at night.', 'I see in the dark.', "I've already seen you."],
      [
        'I watch those who have everything and want more.',
        'Those who work without stopping and call exhaustion a virtue.',
        'Those who are always right and never change their mind.',
        'Those who are free — but only in the permitted formats.',
        'Those who wait for it to pass.',
      ],
      [
        'Our chant is their voices.',
        'Songs that propaganda wrote for them',
        'without them noticing.',
      ],
      [
        'Radiopaganda classifies the population into animal species.',
        'This is not a metaphor.',
        "It's a diagnosis.",
      ],
      [
        'Your species has already been assigned.',
        "You might not recognize it.",
        'From up here, we see it perfectly.',
      ],
    ],
    es: [
      ['Vuelo de noche.', 'Veo en la oscuridad.', 'Ya te he visto.'],
      [
        'Observo a quienes lo tienen todo y quieren más.',
        'A quienes trabajan sin parar y llaman virtud al agotamiento.',
        'A quienes siempre tienen razón y nunca cambian de idea.',
        'A quienes son libres — pero solo en los formatos permitidos.',
        'A quienes esperan que pase.',
      ],
      [
        'Nuestro cántico son sus voces.',
        'Canciones que la propaganda escribió para ellos',
        'sin que se dieran cuenta.',
      ],
      [
        'Radiopaganda clasifica a la población en especies animales.',
        'No es una metáfora.',
        'Es un diagnóstico.',
      ],
      [
        'Tu especie ya ha sido asignada.',
        'Puede que no la reconozcas.',
        'Desde aquí arriba la vemos perfectamente.',
      ],
    ],
  },

  manifesto: {
    slug: 'approvazione',
    title: 'APPROVAZIONE',
    subtitle: { it: 'Canzone manifesto dell\'album', en: 'The album\'s manifesto song', es: 'La canción manifiesto del álbum' },
    orderSlug: null,
    youtubeId: { it: 'jesOFHwoglQ', en: 'VpsSHiKibIQ', es: '1kdULFnRzv4' },
    // Cover in loop (senza audio, stile "canvas") — usata in /capitoli/0 come
    // sfondo decorativo del blocco canzone. Stesso file per le 3 lingue.
    coverSrc: '/videos/capitolo0/Cover-canzoni/cover-approvazione.mp4',
    videoRatio: '828 / 1108',
    // Video reale della canzone (con audio, durata reale ~90-100s), diverso
    // per lingua — usato in /canzoni, dove l'audio parte con lo scroll.
    videoSrc: {
      it: '/videos/capitolo0/song/approvazione-it.mp4',
      en: '/videos/capitolo0/song/approvazione-en.mp4',
      es: '/videos/capitolo0/song/approvazione-es.mp4',
    },
    // Copertina dell'album (barbagianni DJ sulla torre): video loop separato,
    // mostrato sopra al titolo "MANIFESTO" in cima alla pagina /capitoli/0 —
    // non è il video della canzone Approvazione, è la cover dell'intero album.
    albumCoverSrc: '/videos/capitolo0/Cover-canzoni/cover-album-manifesto.mp4',
    significato: {
      it: 'Non è potere, dicono. È cortesia. Ma la cortesia funziona solo su chi non si è accorto di essere già stato classificato.',
      en: "It's not power, they say. It's courtesy. But courtesy only works on someone who hasn't noticed they've already been classified.",
      es: 'No es poder, dicen. Es cortesía. Pero la cortesía solo funciona con quien no se ha dado cuenta de que ya ha sido clasificado.',
    },
    lyrics: {
      it: `[intro]
lo sapevi già, no?

[verse1]
t'abbiamo classificato
mentre durmivi
la tua specie è bella
ti sta proprio bene
non hai chiesto niente
e noi t'abbiamo dato tutto
sei libero amore
di fare quello che ti diciamo

[chorus]
approvazione, approvazione
non è potere — è cortesia
approvazione, approvazione
grazie pe' la collaborazione

[bridge]
stai ancora ballando vero
grazie
grazie proprio
grazie assaje

[outro]
prego.`,
      en: `[intro]
you already knew, didn't you.

[verse1]
we classified you
while you were sleeping
your species suits you
it really does
you never asked for anything
and we gave you everything
you're free darling
to do exactly what we say

[chorus]
approvazione, approvazione
it's not power — it's courtesy
approvazione, approvazione
thank you for your cooperation

[bridge]
you're still dancing aren't you
thank you
really
thank you so much

[outro]
you're welcome.`,
      es: `[intro]
ya lo sabías, ¿verdad?

[verse1]
te clasificamos
mientras dormías
tu especie te queda bien
te sienta de maravilla
nunca pediste nada
y nosotros te lo dimos todo
eres libre amor
de hacer exactamente lo que te decimos

[chorus]
approvazione, approvazione
no es poder — es cortesía
approvazione, approvazione
gracias por tu colaboración

[bridge]
sigues bailando ¿verdad?
gracias
de verdad
muchísimas gracias

[outro]
de nada.`,
    },
  },

  songs: [
    {
      slug: 'potestas',
      orderSlug: 'potestas',
      title: 'ABBIAMO TUTTO',
      significato: {
        it: 'La ricchezza non si giustifica: si registra. Chi ha sempre avuto tutto non sente il bisogno di convincere nessuno — nemmeno se stesso.',
        en: "Wealth doesn't need to justify itself: it just states itself. Those who've always had everything feel no need to convince anyone — not even themselves.",
        es: 'La riqueza no se justifica: se constata. Quien siempre lo ha tenido todo no siente la necesidad de convencer a nadie — ni siquiera a sí mismo.',
      },
      youtubeId: { it: 'uSOsBCP5kJA', en: 'i5yQxYaMIdE', es: 'cjD0go2P0xg' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-abbiamo-tutto.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/potestas-it.mp4',
        en: '/videos/capitolo0/song/potestas-en.mp4',
        es: '/videos/capitolo0/song/potestas-es.mp4',
      },
      lyrics: {
        it: `[Intro]
sì. siamo noi.

[Verse 1]
non chiediamo permesso
lo prendiamo e basta
il numero sul conto
non ha mai fine

[Chorus]
abbiamo tutto
abbiamo tutto
il resto è noia

abbiamo tutto
gli altri
fanno fila

[Verse 2]
stanze senza indirizzi
nomi che aprono tutto
soldi che lavorano soli
noi no

[Chorus]
abbiamo tutto
abbiamo tutto
il resto è noia

abbiamo tutto
gli altri
fanno fila

[Bridge]
non è fortuna —
è solo la differenza
tra chi ha sempre avuto
e chi spera ancora

[Outro]
fanno fila
fanno fila
fanno —`,
        en: `[Intro]
yes. that's us.

[Verse 1]
we don't ask permission
we just take it
the number in the account
never ends

[Chorus]
we have it all
we have it all
the rest is boring

we have it all
the others
wait in line

[Verse 2]
rooms with no address
names that open everything
money that works alone
we don't

[Chorus]
we have it all
we have it all
the rest is boring

we have it all
the others
wait in line

[Bridge]
it's not luck —
it's just the difference
between those who always had
and those who still hope

[Outro]
wait in line
wait in line
wait —`,
        es: `[Intro]
sí. somos nosotras.

[Verse 1]
no pedimos permiso
lo tomamos y ya
el número en la cuenta
no termina nunca

[Chorus]
lo tenemos todo
lo tenemos todo
lo demás aburre

lo tenemos todo
los demás
hacen fila

[Verse 2]
habitaciones sin dirección
nombres que abren todo
el dinero trabaja solo
nosotras no

[Chorus]
lo tenemos todo
lo tenemos todo
lo demás aburre

lo tenemos todo
los demás
hacen fila

[Bridge]
no es suerte —
es solo la diferencia
entre las que siempre tuvieron
y las que todavía esperan

[Outro]
hacen fila
hacen fila
hacen —`,
      },
    },
    {
      slug: 'fama',
      orderSlug: 'fama',
      title: 'GUARDATE',
      significato: {
        it: "Un'esistenza che dipende dallo sguardo altrui non è vanità: è un sistema di sopravvivenza ben progettato. La canzone suona come un successo — ed è esattamente il punto.",
        en: "An existence that depends on being watched isn't vanity: it's a well-designed survival system. The song sounds like a hit — that's exactly the point.",
        es: 'Una existencia que depende de la mirada ajena no es vanidad: es un sistema de supervivencia bien diseñado. La canción suena a éxito — y ese es justamente el punto.',
      },
      youtubeId: { it: 'UHOrWviS3ec', en: 'BH0DDy7OL0Q', es: 'jNlVUbqqGMw' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-guardami.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/fama-it.mp4',
        en: '/videos/capitolo0/song/fama-en.mp4',
        es: '/videos/capitolo0/song/fama-es.mp4',
      },
      lyrics: {
        it: `[Intro]
stiamo andando in onda —

[Verse 1]
mi sveglio già in frame
trucco prima di tutto
non esisto
se non mi guardate
angolo perfetto
luce perfetta
vita perfetta
— quasi

[Pre-Chorus]
non è vanità
è sopravvivenza
senza uno sguardo
scompaio

[Chorus]
guardate
guardate
sono qui
guardate
guardate
esisto

[Verse 2]
non importa cosa dico
importa che mi vedete
non importa chi sono
importa che ci siete
mi amate
mi odiate
non importa —
guardate

[Pre-Chorus]
non è vanità
è sopravvivenza
senza uno sguardo
scompaio

[Chorus]
guardate
guardate
sono qui
guardate
guardate
esisto

[Bridge]
quante visualizzazioni
per sentirsi reali?

[Outro]
guardate
guardate
sono —`,
        en: `[Intro]
we're going live —

[Verse 1]
I wake up already in frame
makeup before everything
I don't exist
if you don't watch me
perfect angle
perfect light
perfect life
— almost

[Pre-Chorus]
it's not vanity
it's survival
without a look
I disappear

[Chorus]
watch me
watch me
I'm here
watch me
watch me
I exist

[Verse 2]
it doesn't matter what I say
it matters that you see me
it doesn't matter who I am
it matters that you're there
you love me
you hate me
doesn't matter —
watch me

[Pre-Chorus]
it's not vanity
it's survival
without a look
I disappear

[Chorus]
watch me
watch me
I'm here
watch me
watch me
I exist

[Bridge]
how many views
to feel real?

[Outro]
watch me
watch me
I am —`,
        es: `[Intro]
estamos en vivo —

[Verse 1]
me despierto ya en frame
maquillaje antes que todo
no existo
si no me miran
ángulo perfecto
luz perfecta
vida perfecta
— casi

[Pre-Chorus]
no es vanidad
es supervivencia
sin una mirada
desaparezco

[Chorus]
mírame
mírame
estoy aquí
mírame
mírame
existo

[Verse 2]
no importa lo que digo
importa que me vean
no importa quién soy
importa que estén
me aman
me odian
no importa —
mírame

[Pre-Chorus]
no es vanidad
es supervivencia
sin una mirada
desaparezco

[Chorus]
mírame
mírame
estoy aquí
mírame
mírame
existo

[Bridge]
¿cuántas visualizaciones
para sentirse real?

[Outro]
mírame
mírame
soy —`,
      },
    },
    {
      slug: 'labor',
      orderSlug: 'labor',
      title: 'LA MACCHINA NON DORME',
      significato: {
        it: 'Il sacrificio è diventato virtù, la stanchezza un curriculum. La macchina non chiede di fermarsi: aspetta solo che tu decida da sola di non farlo.',
        en: "Sacrifice has become virtue, exhaustion a résumé line. The machine doesn't ask you to keep going: it just waits for you to decide that on your own.",
        es: 'El sacrificio se ha vuelto virtud, el agotamiento un mérito. La máquina no pide que sigas: solo espera a que lo decidas tú sola.',
      },
      youtubeId: { it: '7zGwydfObdk', en: 'yu62JqhVens', es: 'elWS5r2s-ew' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-macchina.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/labor-it.mp4',
        en: '/videos/capitolo0/song/labor-en.mp4',
        es: '/videos/capitolo0/song/labor-es.mp4',
      },
      lyrics: {
        it: `[Intro]
non ci siamo mai fermate.

[Verse]
mattone su mattone
siamo noi
consegna dopo consegna
siamo noi
il turno non finisce
lo prendiamo
chiamateci bestie
lo siamo

[Chorus]
gira
gira
la macchina non dorme
gira
gira
la macchina non muore
senza di noi — niente
senza di noi — niente

[Bridge]
avete preso
avete preso
la macchina ricorda
la macchina aspetta

[Chorus]
gira
gira
la macchina non dorme
gira
gira
la macchina non muore
senza di noi — niente
senza di noi — niente

[Outro]
gira
gira
niente`,
        en: `[Intro]
we never stopped.

[Verse]
brick after brick
that's us
delivery after delivery
that's us
the shift never ends
we take it
call us beasts
we are

[Chorus]
spin
spin
the machine never sleeps
spin
spin
the machine never dies
without us — nothing
without us — nothing

[Bridge]
you took
you took
the machine remembers
the machine waits

[Chorus]
spin
spin
the machine never sleeps
spin
spin
the machine never dies
without us — nothing
without us — nothing

[Outro]
spin
spin
nothing`,
        es: `[Intro]
nunca paramos.

[Verse]
ladrillo a ladrillo
somos nosotras
entrega tras entrega
somos nosotras
el turno no termina
lo tomamos
llamadnos bestias
lo somos

[Chorus]
gira
gira
la máquina no duerme
gira
gira
la máquina no muere
sin nosotras — nada
sin nosotras — nada

[Bridge]
tomasteis
tomasteis
la máquina recuerda
la máquina espera

[Chorus]
gira
gira
la máquina no duerme
gira
gira
la máquina no muere
sin nosotras — nada
sin nosotras — nada

[Outro]
gira
gira
nada`,
      },
    },
    {
      slug: 'massa',
      orderSlug: 'massa',
      title: 'CI SIAMO',
      significato: {
        it: "Esistere si è ridotto a pubblicare. Non importa cosa si condivide, importa farlo — insieme, uguali, nello stesso istante.",
        en: "Existing has been reduced to posting. It doesn't matter what you share, only that you do — together, identical, in the same instant.",
        es: 'Existir se ha reducido a publicar. No importa qué se comparte, importa hacerlo — juntas, iguales, en el mismo instante.',
      },
      youtubeId: { it: 'mGUI1__l5G4', en: '7Pfuj3p1_tk', es: 'LR1fiyto2mI' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-ci-siamo.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/massa-it.mp4',
        en: '/videos/capitolo0/song/massa-en.mp4',
        es: '/videos/capitolo0/song/massa-es.mp4',
      },
      lyrics: {
        it: `[Intro]
se non lo posti
non ci sei stata.

[Verse 1]
lancio alle otto — ci siamo
sold out alle nove — ci siamo
nuovo corso — ci siamo
brunch di domenica — ci siamo
il posto che fanno tutti
ci. sia. mo.

[Pre-chorus]
non per noi
per il feed
non per vivere
per il post
—
guarda

[Chorus]
ci siamo
ci siamo
anche stavolta — ci siamo
lo vedi — lo vedi — ci siamo
se non lo posti
non ci sei stata
se non lo posti
non esisti

[Verse 2]
foto uguale — ci siamo
caption uguale — ci siamo
stesso filtro stesso hashtag
chi ha iniziato?
non importa — ci siamo

[Pre-chorus]
non per noi
per il feed
non per vivere
per il post
—
guarda

[Chorus]
ci siamo
ci siamo
anche stavolta — ci siamo
lo vedi — lo vedi — ci siamo
se non lo posti
non ci sei stata
se non lo posti
non esisti

[Bridge]
è uscita una storia — ci siamo
è uscita una storia — ci siamo
ci sei?
CI SIAMO
ci sei?
CI SIAMO

[Chorus]
ci siamo
ci siamo
anche stavolta — ci siamo
lo vedi — lo vedi — ci siamo
se non lo posti
non ci sei stata
se non lo posti
non esisti

[Outro]
ci siamo
ci siamo
ci...`,
        en: `[Intro]
if you don't post it
you weren't there.

[Verse 1]
launch at eight — we're here
sold out at nine — we're here
new class — we're here
sunday brunch — we're here
the place that everyone does
we're. right. here.

[Pre-chorus]
not for us
for the feed
not to live
for the post
—
look

[Chorus]
we're here
we're here
once again — we're here
you see it — you see it — we're here
if you don't post it
you weren't there
if you don't post it
you don't exist

[Verse 2]
same photo — we're here
same caption — we're here
same filter same hashtag
who started it?
doesn't matter — we're here

[Pre-chorus]
not for us
for the feed
not to live
for the post
—
look

[Chorus]
we're here
we're here
once again — we're here
you see it — you see it — we're here
if you don't post it
you weren't there
if you don't post it
you don't exist

[Bridge]
a story just dropped — we're here
a story just dropped — we're here
you there?
WE'RE HERE
you there?
WE'RE HERE

[Chorus]
we're here
we're here
once again — we're here
you see it — you see it — we're here
if you don't post it
you weren't there
if you don't post it
you don't exist

[Outro]
we're here
we're here
we're...`,
        es: `[Intro]
si no lo posteas
no estuviste.

[Verse 1]
lanzamiento a las ocho — estamos
sold out a las nueve — estamos
nuevo curso — estamos
brunch del domingo — estamos
el sitio que hacen todos
es. ta. mos.

[Pre-chorus]
no por nosotras
por el feed
no para vivir
para el post
—
mira

[Chorus]
estamos
estamos
también esta vez — estamos
lo ves — lo ves — estamos
si no lo posteas
no estuviste
si no lo posteas
no existes

[Verse 2]
misma foto — estamos
mismo caption — estamos
mismo filtro mismo hashtag
¿quién empezó?
no importa — estamos

[Pre-chorus]
no por nosotras
por el feed
no para vivir
para el post
—
mira

[Chorus]
estamos
estamos
también esta vez — estamos
lo ves — lo ves — estamos
si no lo posteas
no estuviste
si no lo posteas
no existes

[Bridge]
salió una historia — estamos
salió una historia — estamos
¿estás?
ESTAMOS
¿estás?
ESTAMOS

[Chorus]
estamos
estamos
también esta vez — estamos
lo ves — lo ves — estamos
si no lo posteas
no estuviste
si no lo posteas
no existes

[Outro]
estamos
estamos
esta...`,
      },
    },
    {
      slug: 'rebelles',
      orderSlug: 'rebelles',
      title: 'FUORI',
      significato: {
        it: 'Ogni fuga dal sistema è già stata catalogata, prezzata e messa in abbonamento. La libertà premium ha diritto al reso.',
        en: 'Every escape from the system has already been catalogued, priced, and put on a subscription plan. Premium freedom comes with a refund policy.',
        es: 'Cada fuga del sistema ya ha sido catalogada, tasada y puesta en suscripción. La libertad premium tiene derecho a devolución.',
      },
      youtubeId: { it: 'mqSNnpm3T3s', en: 'qIU_Lms9pyU', es: 'rVK9luyrh4M' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-fuori.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/rebelles-it.mp4',
        en: '/videos/capitolo0/song/rebelles-en.mp4',
        es: '/videos/capitolo0/song/rebelles-es.mp4',
      },
      lyrics: {
        it: `[Intro]
siamo fuori.
(il negozio apre alle nove)

[Verse 1 — TIGRE]
sveglia alle cinque
bagno ghiacciato
proteine, pesi
ottimizzata
non consumo
investo in me
la gabbia è mia
l'ho costruita io

[Chorus]
fuori
siamo fuori
libere
siamo libere
no

[Verse 2 — CAPRA]
volo per Lima
milleduecento
cerimonia
autentica
carta contactless
connessione
la fuga ha un prezzo
lo so

[Chorus]
fuori
siamo fuori
libere
siamo libere
no

[Verse 3 — PANDA]
foto della crisi
luce giusta
hashtag giusto
engagement
sento il peso
lo condivido
in formato
1080×1350

[Bridge]
grazie
per aver scelto
la nostra versione
premium
della libertà
torni presto

[Chorus finale]
fuori
siamo fuori
libere
siamo libere
no

[Outro]
soddisfatte o rimborsate.`,
        en: `[Intro]
we're out.
(the store opens at nine)

[Verse 1 — TIGRE]
up at five
ice bath, cold
protein, weights
optimized
I don't consume
I invest in me
the cage is mine
I built it myself

[Chorus]
out
we are out
free
we are free
no

[Verse 2 — CAPRA]
flight to Lima
twelve hundred
ceremony
authentic
contactless card
connection
escape has a price
I know

[Chorus]
out
we are out
free
we are free
no

[Verse 3 — PANDA]
photo of the crisis
right light
right hashtag
engagement
I feel the weight
I share it
in format
1080×1350

[Bridge]
thank you
for choosing
our premium version
of freedom
come back soon

[Chorus finale]
out
we are out
free
we are free
no

[Outro]
satisfied or refunded.`,
        es: `[Intro]
estamos fuera.
(la tienda abre a las nueve)

[Verse 1 — TIGRE]
despierta a las cinco
baño de hielo
proteínas, pesas
optimizada
no consumo
invierto en mí
la jaula es mía
la construí yo

[Chorus]
fuera
estamos fuera
libres
estamos libres
no

[Verse 2 — CAPRA]
vuelo a Lima
mil doscientos
ceremonia
auténtica
pago sin contacto
conexión
escapar tiene precio
lo sé

[Chorus]
fuera
estamos fuera
libres
estamos libres
no

[Verse 3 — PANDA]
foto de la crisis
luz correcta
hashtag correcto
engagement
siento el peso
lo comparto
en formato
1080×1350

[Bridge]
gracias
por elegir
nuestra versión
premium
de la libertad
vuelva pronto

[Chorus finale]
fuera
estamos fuera
libres
estamos libres
no

[Outro]
satisfechas o reembolsadas.`,
      },
    },
    {
      slug: 'crucesignati',
      orderSlug: 'crucesignati',
      title: 'RAGIONE',
      significato: {
        it: "Avere ragione è diventato un loop che si autoalimenta: non serve convincere nessuno, basta ripeterlo abbastanza forte. Il sistema ringrazia per l'indignazione — è il suo carburante preferito.",
        en: "Being right has become a self-feeding loop: no need to convince anyone, just repeat it loud enough. The system thanks you for your outrage — it's its favorite fuel.",
        es: 'Tener razón se ha vuelto un bucle que se alimenta solo: no hace falta convencer a nadie, basta con repetirlo bastante fuerte. El sistema agradece la indignación — es su combustible favorito.',
      },
      youtubeId: { it: 'gqDEkUqYxfo', en: 'tp57tRpXDTs', es: 'thu3hF1OCwk' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-abbiamo-ragione.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/crucesignati-it.mp4',
        en: '/videos/capitolo0/song/crucesignati-en.mp4',
        es: '/videos/capitolo0/song/crucesignati-es.mp4',
      },
      lyrics: {
        it: `[Intro]
abbiamo ragione.
(lo abbiamo sempre saputo)

[Verse 1 — LUPO]
sul palco ancora
lo stesso discorso
la folla capisce
io lo so già
nome per nome
li conosco tutti
dove si nascondono
come parlano
sono loro
sono sempre stati loro
non c'è dubbio
non ce n'è mai stato

[Pre-chorus]
è sempre colpa loro
è sempre così
niente cambia
niente cambierà

[Chorus]
ragione
abbiamo ragione
loro
loro hanno torto

[Verse 2 — CINGHIALE]
schermo acceso
stanza nel buio
rispondo ancora
non mi fermo
punto per punto
li smonto
uno per uno
non si reggono
le loro parole
cadono da sole
ho le prove
le ho sempre avute

[Pre-chorus]
è sempre colpa loro
è sempre così
niente cambia
niente cambierà

[Chorus]
ragione
abbiamo ragione
loro
loro hanno torto

[Verse 3 — TORO]
ottanta canale
l'avevo detto
ogni sera uguale
ogni sera necessario
colletto stretto
mani sul tessuto
mia moglie dorme
io no, non posso
come fai a dormire
quando sai
quando capisci
quando vedi

[Bridge]
grazie
per la vostra indignazione
è esattamente
quello di cui
abbiamo bisogno
continuate
per favore
continuate

[Chorus finale]
ragione
abbiamo ragione
loro
loro hanno torto

[Outro]
ragione
abbiamo ragione
loro—
(ricomincia)`,
        en: `[Intro]
we are right.
(we always knew)

[Verse 1 — LUPO]
on stage again
same speech
the crowd understands
I already know
name by name
I know them all
where they hide
how they talk
it's them
it's always been them
no doubt
there never was

[Pre-chorus]
it's always their fault
it's always like this
nothing changes
nothing will

[Chorus]
right
we are right
them
they are wrong

[Verse 2 — CINGHIALE]
screen on
room in darkness
responding again
I don't stop
point by point
I take them apart
one by one
they don't hold up
their words
fall on their own
I have the proof
I always did

[Pre-chorus]
it's always their fault
it's always like this
nothing changes
nothing will

[Chorus]
right
we are right
them
they are wrong

[Verse 3 — TORO]
channel eighty
I knew it
same every evening
same every evening necessary
collar tight
hands on the fabric
my wife sleeps
I can't
how do you sleep
when you know
when you understand
when you see

[Bridge]
thank you
for your outrage
it is exactly
what we need
keep going
please
keep going

[Chorus finale]
right
we are right
them
they are wrong

[Outro]
right
we are right
them—
(starts again)`,
        es: `[Intro]
tenemos razón.
(siempre lo supimos)

[Verse 1 — LUPO]
en el escenario otra vez
el mismo discurso
la gente entiende
yo ya lo sé
nombre por nombre
los conozco a todos
dónde se esconden
cómo hablan
son ellos
siempre han sido ellos
no hay duda
nunca la hubo

[Pre-chorus]
siempre es culpa suya
siempre es así
nada cambia
nada cambiará

[Chorus]
razón
tenemos razón
ellos
ellos están equivocados

[Verse 2 — CINGHIALE]
pantalla encendida
habitación en la oscuridad
respondiendo otra vez
no me detengo
punto por punto
los desmonto
uno por uno
no se sostienen
sus palabras
caen solas
tengo las pruebas
siempre las tuve

[Pre-chorus]
siempre es culpa suya
siempre es así
nada cambia
nada cambiará

[Chorus]
razón
tenemos razón
ellos
ellos están equivocados

[Verse 3 — TORO]
canal ochenta
lo sabía
igual cada noche
igual cada noche necesario
cuello apretado
manos en la tela
mi mujer duerme
yo no puedo
cómo se duerme
cuando sabes
cuando entiendes
cuando ves

[Bridge]
gracias
por vuestra indignación
es exactamente
lo que necesitamos
seguid
por favor
seguid

[Chorus finale]
razón
tenemos razón
ellos
ellos están equivocados

[Outro]
razón
tenemos razón
ellos—
(vuelve a empezar)`,
      },
    },
    {
      slug: 'submersi',
      orderSlug: 'submersi',
      title: 'SEMPE ACCUSÌ',
      significato: {
        it: 'Come le tarantate che danzavano per sopravvivere al morso, i Sommersi non si fermano mai — non per scelta, ma perché fermarsi non è previsto. Qui Radiopaganda non ride: osserva.',
        en: 'Like the tarantate who danced to survive the bite, the Submersi never stop — not by choice, but because stopping was never an option. Here Radiopaganda doesn\'t laugh: it watches.',
        es: 'Como las tarantadas que bailaban para sobrevivir a la picadura, los Sumergidos nunca se detienen — no por elección, sino porque detenerse no está previsto. Aquí Radiopaganda no se ríe: observa.',
      },
      youtubeId: { it: 'zgQf3YOqIGg', en: '81khXnSG9TQ', es: 'G8fJZVBL72E' },
      coverSrc: '/videos/capitolo0/Cover-canzoni/cover-sempe-accussi.mp4',
      videoRatio: '828 / 1108',
      videoSrc: {
        it: '/videos/capitolo0/song/submersi-it.mp4',
        en: '/videos/capitolo0/song/submersi-en.mp4',
        es: '/videos/capitolo0/song/submersi-es.mp4',
      },
      nota: 'La tarantella nasce dalle tarantate — donne che cadevano in trance dopo il morso della tarantola e dovevano ballare senza fermarsi per sopravvivere. I Submersi non possono fermarsi. È lo stesso loop.',
      lyrics: {
        it: `[Verse 1 — TOPO]
tre e meza 'a matina
'u carrettu pesa
porta per porta
nisciuna risposta
c'era stammatina
c'era 'eri puru

[Pre-chorus]
passate, passate
'a fatica è 'a fatica
nui stamm' ccà fora
vui dentru 'o mercatu

[Chorus]
sempe accusì
sempe accusì
nui stamm' ccà
e vui passate

[Verse 2 — MULO]
cucina accesa
manu nell'acqua
ausanu l'uocchi
ma nun mi trovanu
fatico ancora
fatico sempe

[Pre-chorus]
passate, passate
'a fatica è 'a fatica
nui stamm' ccà fora
vui dentru 'o mercatu

[Chorus]
sempe accusì
sempe accusì
nui stamm' ccà
e vui passate

[Verse 3 — BRADIPO]
'u gradinu 'e miezzu
mi fermu nu momento
ci stannu 'e mmie orme
ci stannu da sempe

[Bridge]
il servizio
sarà regolarmente assicurato
vi ringraziamo
continuate

[Chorus finale]
sempe accusì
sempe accusì
nui stamm' ccà
e vui passate

[Outro]
sempe accusì—
(loop senza fine)`,
        en: `[Verse 1 — TOPO]
three thirty in the morning
the cart is heavy
door after door
no answer
I was there this morning
I was there yesterday too

[Pre-chorus]
pass, keep passing
the work is the work
we're outside
you're in the market

[Chorus]
always like this
always like this
we are here
and you pass by

[Verse 2 — MULO]
kitchen still on
hands in the water
they look up
but they don't find me
I'm still working
I'm always working

[Pre-chorus]
pass, keep passing
the work is the work
we're outside
you're in the market

[Chorus]
always like this
always like this
we are here
and you pass by

[Verse 3 — BRADIPO]
the middle step
I stop for a moment
my footprints are here
they've always been here

[Bridge]
the service
will be regularly maintained
we thank you
please continue

[Chorus finale]
always like this
always like this
we are here
and you pass by

[Outro]
always like this—
(endless loop)`,
        es: `[Verse 1 — TOPO]
lah treh y media
el carrito pesa
puerta por puerta
sin repuesta
ehta mañana ehtaba
ayer también

[Pre-chorus]
pasá', pasá'
la faena eh la faena
nosotrâh ehtamo' fuera
vosotroh dentro 'el mercao

[Chorus]
siempre así
siempre así
aquí ehtamo'
y vosotroh pasáih

[Verse 2 — MULO]
la cosina ensendía
manoh en el agua
levantan loh ojoh
pero no me ven
fatigo todavía
fatigo siempre

[Pre-chorus]
pasá', pasá'
la faena eh la faena
nosotrâh ehtamo' fuera
vosotroh dentro 'el mercao

[Chorus]
siempre así
siempre así
aquí ehtamo'
y vosotroh pasáih

[Verse 3 — BRADIPO]
el esalón 'e en medio
me paro un momento
mih huellas ehtán aquí
siempre han ehtao

[Bridge]
el servicio
se prestará regularmente
les agradecemos
continúen

[Chorus finale]
siempre así
siempre así
aquí ehtamo'
y vosotroh pasáih

[Outro]
siempre así—
(bucle sin fin)`,
      },
    },
  ],
}
