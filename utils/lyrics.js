// Parsa un blocco di testo canzone in sezioni { header, lines }.
// Le intestazioni sono righe tipo "[Chorus]" o "[Verse 1 — TIGRE]".
export function parseLyrics(text) {
  if (!text) return []
  const lines = text.split('\n')
  const sections = []
  let current = null

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue

    const headerMatch = line.match(/^\[(.+)\]$/)
    if (headerMatch) {
      current = { header: headerMatch[1], lines: [] }
      sections.push(current)
      continue
    }

    if (!current) {
      current = { header: '', lines: [] }
      sections.push(current)
    }
    current.lines.push(line)
  }

  return sections
}
