#!/usr/bin/env node
/**
 * RADIOPAGANDA — Genera video scrollytelling per IT / EN / ES
 *
 * Prerequisito: npm install ffmpeg-static   (nessun ffmpeg di sistema richiesto)
 * Esegui:       node scripts/generate-scrolly-videos.mjs
 */

import { spawnSync } from 'child_process'
import { createRequire } from 'module'

// Usa ffmpeg-static (binario bundlato via npm) oppure ffmpeg di sistema
let FFMPEG_BIN = 'ffmpeg'
try {
  const require = createRequire(import.meta.url)
  FFMPEG_BIN = require('ffmpeg-static')
  console.log(`✔  ffmpeg-static: ${FFMPEG_BIN}`)
} catch {
  // ffmpeg-static non installato → proviamo quello di sistema
  const check = spawnSync('ffmpeg', ['-version'], { stdio: 'pipe' })
  if (check.status !== 0) {
    console.error('❌  ffmpeg non trovato.\n    Installa con:  npm install ffmpeg-static')
    process.exit(1)
  }
  console.log('✔  ffmpeg di sistema')
}
import { mkdirSync, statSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT    = path.join(__dirname, '..')
const PUBLIC  = path.join(ROOT, 'public')
const VIDEOS  = path.join(PUBLIC, 'videos')

// ── Parametri ────────────────────────────────────────────────────────────────
const HOLD_SEC  = 1.5   // secondi per unità di hold
const XFADE_DUR = 0.5   // durata dissolve tra frame consecutivi (secondi)
const FPS       = 25    // frame rate output
const W         = 900   // larghezza output in px
const H         = 1200  // altezza output in px
const CRF       = 22    // qualità H.264: 18 = alta qualità, 28 = file piccolo

// ── Frame data (sincronizzati con data/frames/*.ts) ──────────────────────────
// Formato: [nomeFile, hold]
// IT, EN, ES usano gli stessi file immagine — solo i testi cambiano nel codice.
const FRAMES_IT = [
  ['img-00.webp',  2.5], ['img-00b.webp', 1  ],
  ['img-01.webp',  2  ], ['img-01b.webp', 1  ],
  ['img-02.webp',  2  ], ['img-02b.webp', 1  ],
  ['img-03.webp',  2  ], ['img-03b.webp', 1  ],
  ['img-04.webp',  2  ], ['img-04b.webp', 1  ],
  ['img-05a.webp', 1.5], ['img-05b.webp', 1.5],
  ['img-06.webp',  2  ],
  ['img-07a.webp', 1.5], ['img-07b.webp', 2  ],
  ['img-08a.webp', 1.5], ['img-08b.webp', 1.5],
  ['img-09.webp',  2  ],
  ['img-10.webp',  2  ], ['img-10b.webp', 1  ],
  ['img-11.webp',  2  ], ['img-11b.webp', 1  ],
  ['img-12.webp',  2  ],
  ['img-13.webp',  2.5],
  ['img-14a.webp', 1.5], ['img-14b.webp', 1.5],
  ['img-15a.webp', 1.5], ['img-15b.webp', 1.5],
  ['img-16.webp',  2  ], ['img-16b.webp', 1  ],
  ['img-17.webp',  3  ],
]

const LANGS = {
  it: FRAMES_IT,
  en: FRAMES_IT,   // stessi file — testi diversi nel componente Vue
  es: FRAMES_IT,
}

mkdirSync(VIDEOS, { recursive: true })

// ── Genera video per ogni lingua ─────────────────────────────────────────────
for (const [lang, frames] of Object.entries(LANGS)) {
  const imgDir = path.join(PUBLIC, 'images', 'scrolly', lang)
  const out    = path.join(VIDEOS, `scrolly-${lang}.mp4`)
  const N      = frames.length

  console.log(`\n▶  Generando ${lang.toUpperCase()} (${N} frame)…`)

  // Durate reali (secondi per frame)
  const durations = frames.map(([, h]) => h * HOLD_SEC)

  // ── Input ffmpeg ────────────────────────────────────────────────────────────
  // Ogni immagine loopata abbastanza a lungo da coprire il clip + buffer xfade
  const inputArgs = []
  for (const [file, hold] of frames) {
    const clipDur = hold * HOLD_SEC + XFADE_DUR * 2
    const imgPath = path.join(imgDir, file)
    if (!existsSync(imgPath)) {
      console.warn(`  ⚠  File mancante: ${imgPath}`)
    }
    inputArgs.push('-loop', '1', '-t', String(clipDur.toFixed(2)), '-i', imgPath)
  }

  // ── Scale filter per ogni input ─────────────────────────────────────────────
  // cover + crop per riempire il frame senza bande nere
  const scaleParts = frames.map((_, i) =>
    `[${i}:v]scale=${W}:${H}:flags=lanczos,fps=${FPS},setsar=1[v${i}]`
  )

  // ── Chain xfade ─────────────────────────────────────────────────────────────
  // offset_k = sum(d_0..d_k) - (k+1) * XFADE_DUR
  const xfadeParts = []
  let cumDur  = 0
  let prevLbl = 'v0'

  for (let k = 0; k < N - 1; k++) {
    cumDur += durations[k]
    const offset   = Math.max(0, cumDur - (k + 1) * XFADE_DUR).toFixed(3)
    const nextLbl  = k === N - 2 ? 'out' : `x${k}`
    xfadeParts.push(
      `[${prevLbl}][v${k + 1}]xfade=transition=dissolve:duration=${XFADE_DUR}:offset=${offset}[${nextLbl}]`
    )
    prevLbl = nextLbl
  }

  const filterComplex = [...scaleParts, ...xfadeParts].join(';')

  // ── Comando ffmpeg ───────────────────────────────────────────────────────────
  const ffArgs = [
    '-y',
    ...inputArgs,
    '-filter_complex', filterComplex,
    '-map', '[out]',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-crf', String(CRF),
    '-preset', 'fast',
    '-movflags', '+faststart',
    out,
  ]

  const result = spawnSync(FFMPEG_BIN, ffArgs, { stdio: 'inherit' })

  if (result.status === 0) {
    const mb = (statSync(out).size / 1024 / 1024).toFixed(1)
    console.log(`✅  ${path.relative(ROOT, out)}  (${mb} MB)`)
  } else {
    console.error(`❌  Errore generando ${lang}`)
    process.exit(result.status ?? 1)
  }
}

console.log('\n✅  Tutti i video pronti in public/videos/')
console.log('   Aggiorna pages/index.vue per usare <ScrollyVideo />\n')
