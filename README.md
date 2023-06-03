# museum-audio-tour



annotation regex:

\[(.+)\]\n(.+)\n\[(.+)\]\n
{\n"start": $1,\n"end": $3,\n"text": "$2"\n},