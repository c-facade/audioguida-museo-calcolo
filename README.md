# Audioguide Sistema Museale di Ateneo
Prototipo di audioguide per il sistema museale d'ateneo dell'Università di Pisa, specificamente per la nuova apertura del Museo degli Strumenti per il Calcolo.

## TODO list
- Aggiungere galleria di immagini.
- Eliminare Esempi di altri musei.
- Pulire il codice in generale.
- Continuare a riempire l'audioguida del MSC.
- Caricarlo da qualche parte.
- Separare `tours.json` dall'implementazione, così che non ci sia bisogno di compilare di nuovo per aggiornare il file.

## Tecnologie

Il prototipo originale che ho forkato utilizza [Next.js](https://nextjs.org/), [React](https://react.dev/), [Howler.js](https://howlerjs.com/), e [Konva](https://konvajs.org/). Ho aggiornato le versioni di alcuni di questi per risolvere delle vulnerabilità. Konva ha smesso di funzionare quindi l'ho eliminato dal progetto.

## Next.js template

Based on https://github.com/shadcn/next-template ([Website](https://template.shadcn.com/), [UI Components](https://ui.shadcn.com/)),
which is an implementation of [Radix UI](https://www.radix-ui.com/) with [Tailwind](https://tailwindcss.com/) and other helpful utilities.

## Features

- Audio narration
- Synced annotations
- Synced pan and zoom of images
- Audio handling with [Howler.js](https://howlerjs.com/)
- Image pan & zoom with [Konva](https://konvajs.org/)
- Meta & OG meta tags
- [lucide-react icons](https://github.com/lucide-icons/lucide)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) dark/light modes
- [@next/font](https://nextjs.org/docs/api-reference/next/font) font loading

## Installation & Running

### Download & Install

Fork/download this project and run `npm i` to install dependencies.

Then, run the development server with `npm run dev` and open http://localhost:3000 with your browser to see the result.

If you have not yet loaded the Elasticsearch data, you should see an error on the search page that the index does not exist.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).

