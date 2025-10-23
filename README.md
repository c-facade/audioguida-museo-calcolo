# Audioguide Sistema Museale di Ateneo
Audioguida per il Sistema Museale d'Ateneo dell'Università di Pisa, creata specificamente per la nuova apertura del Museo degli Strumenti per il Calcolo.

L'audioguida è visitabile online a https://audioguide.sma.unipi.it/ .

## TODO list
- [X] audio in inglese
- [ ] Responsive feedback pages
- [ ] Real-time import of tours.json according to language.
- [X] Aggiustare l'altezza del footer all'altezza del telefono...
- [X] Testare su SAFARI
- [ ] Aggiungere audio in francese.
- [ ] Aggiungere file Esperanto.
- [ ] Error file.

## Tecnologie

Il prototipo originale che ho forkato utilizza [Next.js](https://nextjs.org/), [React](https://react.dev/), [Howler.js](https://howlerjs.com/), e [Konva](https://konvajs.org/). Ho aggiornato le versioni di alcuni di questi per risolvere delle vulnerabilità. Konva ha smesso di funzionare quindi l'ho eliminato dal progetto.

Basato su https://github.com/shadcn/next-template ([Website](https://template.shadcn.com/), [UI Components](https://ui.shadcn.com/)),
che è una implementazione di [Radix UI](https://www.radix-ui.com/) con [Tailwind](https://tailwindcss.com/).

## Caratteristiche

- Narrazione audio.
- Gestione dell'audio con [Howler.js](https://howlerjs.com/)
- Meta & OG meta tags
- [lucide-react icons](https://github.com/lucide-icons/lucide)
- [Tailwind CSS](https://tailwindcss.com/)
- [@next/font](https://nextjs.org/docs/api-reference/next/font) font loading

## Credits

Da un'idea di Antonio Viti.

## License

Licensed under the MIT License.

## Icons credits
<a href="https://www.flaticon.com/free-icons/flag" title="flag icons">Flag icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/france" title="france icons">France icons created by Roundicons - Flaticon</a>
