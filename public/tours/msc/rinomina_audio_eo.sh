#!/usr/bin/bash
# Script: rinomina_audio_eo.sh
# Uso: ./rinomina_audio_eo.sh /percorso/alla/directory

# Controlla che sia stato passato un argomento
if [ -z "$1" ]; then
    echo "Uso: $0 /percorso/alla/directory"
    exit 1
fi

# Directory di partenza
BASE_DIR="$1"

# Controlla che sia una directory valida
if [ ! -d "$BASE_DIR" ]; then
    echo "Errore: '$BASE_DIR' non è una directory valida."
    exit 1
fi

# Trova tutti i file che corrispondono al pattern e li rinomina
find "$BASE_DIR" -type f -name "audio_eo_*.mp3" | while read -r file; do
    dir=$(dirname "$file")
    newname="$dir/audio_eo.mp3"
    echo "Rinomino: $file → $newname"
    mv "$file" "$newname"
done

echo "Operazione completata!"

