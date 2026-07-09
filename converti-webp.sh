#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# RADIOPAGANDA — Conversione PNG → WebP
# Uso: metti questo script nella cartella con le immagini, poi:
#   chmod +x converti-webp.sh
#   ./converti-webp.sh
#
# Funziona su macOS Ventura+ (usa sips nativo, nessuna installazione)
# Su macOS più vecchio: installa cwebp con "brew install webp"
# ─────────────────────────────────────────────────────────────────

QUALITY=85

# Test diretto: prova a convertire un pixel in webp con sips
TEST_PNG=$(mktemp /tmp/rp_test_XXXX.png)
TEST_WEBP="${TEST_PNG%.png}.webp"
# Crea un PNG 1x1 minimale
printf '\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x02\x00\x00\x00\x90wS\xde\x00\x00\x00\x0cIDATx\x9cc\xf8\x0f\x00\x00\x01\x01\x00\x05\x18\xd8N\x00\x00\x00\x00IEND\xaeB`\x82' > "$TEST_PNG"

if sips -s format webp "$TEST_PNG" --out "$TEST_WEBP" &>/dev/null && [ -f "$TEST_WEBP" ]; then
  USE_SIPS=true
  rm -f "$TEST_PNG" "$TEST_WEBP"
elif command -v cwebp &>/dev/null; then
  USE_SIPS=false
  rm -f "$TEST_PNG" "$TEST_WEBP"
else
  rm -f "$TEST_PNG" "$TEST_WEBP"
  echo "❌ Nessun tool disponibile."
  echo "   Installa cwebp: brew install webp"
  exit 1
fi

COUNT=0
for f in *.png; do
  [ -f "$f" ] || continue
  OUT="${f%.png}.webp"

  if $USE_SIPS; then
    sips -s format webp -s formatOptions $QUALITY "$f" --out "$OUT" &>/dev/null
  else
    cwebp -q $QUALITY "$f" -o "$OUT" &>/dev/null
  fi

  SIZE_ORIG=$(du -k "$f" | cut -f1)
  SIZE_WEBP=$(du -k "$OUT" | cut -f1)
  echo "✓ $f → $OUT  (${SIZE_ORIG}KB → ${SIZE_WEBP}KB)"
  COUNT=$((COUNT + 1))
done

echo ""
echo "✅ $COUNT file convertiti."
echo "Puoi eliminare i .png originali quando sei sicuro del risultato."
