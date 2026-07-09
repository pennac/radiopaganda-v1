# RADIOPAGANDA V1 — Avvio

## 1. Installa dipendenze

```bash
cd "00 Archivio/Radiopaganda/Doc/app/V1"
npm install
```

## 2. Aggiungi le immagini

Copia i 31 file .webp per ogni lingua nelle rispettive cartelle:

```
public/
└── images/
    └── scrolly/
        ├── it/   ← immagini italiane (img-00.webp … img-17.webp + transizioni)
        ├── en/   ← immagini inglesi  (stessi nomi file)
        └── es/   ← immagini spagnole (stessi nomi file)
```

**Nomi file richiesti** (31 per lingua):
`img-00.webp`, `img-00b.webp`, `img-01.webp`, `img-01b.webp`, `img-02.webp`, `img-02b.webp`,
`img-03.webp`, `img-03b.webp`, `img-04.webp`, `img-04b.webp`,
`img-05a.webp`, `img-05b.webp`, `img-06.webp`,
`img-07a.webp`, `img-07b.webp`, `img-08a.webp`, `img-08b.webp`,
`img-09.webp`, `img-10.webp`, `img-10b.webp`,
`img-11.webp`, `img-11b.webp`, `img-12.webp`, `img-13.webp`,
`img-14a.webp`, `img-14b.webp`, `img-15a.webp`, `img-15b.webp`,
`img-16.webp`, `img-16b.webp`, `img-17.webp`

**Ottimizzazione**: converti in WebP, max 200KB per immagine (usa squoosh.app).

## 3. Avvia in sviluppo

```bash
npm run dev
```

Apri http://localhost:3000

## 4. Struttura del progetto

```
V1/
├── assets/css/main.css          ← design tokens globali
├── components/
│   ├── ScrollyTelling.client.vue ← componente scrollytelling (i18n-aware)
│   └── TheHeader.vue             ← header con nav + lang switcher
├── composables/
│   └── useScrollyFrames.ts      ← restituisce i frame per la lingua attiva
├── data/frames/
│   ├── it.ts                    ← frame + testi italiani
│   ├── en.ts                    ← frame + testi inglesi
│   └── es.ts                    ← frame + testi spagnoli
├── i18n/
│   ├── it.json / en.json / es.json ← stringhe UI per lingua
├── pages/
│   ├── index.vue                ← homepage: loop + manifesto essenziale
│   ├── progetto.vue             ← pagina progetto trilingue
│   ├── test.vue                 ← classificazione (placeholder)
│   └── bestiario/
│       ├── index.vue            ← griglia 7 ordini
│       ├── [ordine].vue         ← dettaglio ordine + specie
│       └── [ordine]/[specie].vue ← dettaglio specie
├── public/images/scrolly/       ← QUI VANNO LE IMMAGINI
├── nuxt.config.ts
└── package.json
```

## 5. Lingue

URL routing automatico:
- `/`    → Italiano (default)
- `/en/` → English
- `/es/` → Español

Il componente ScrollyTelling cambia immagini E testi al cambio lingua.
