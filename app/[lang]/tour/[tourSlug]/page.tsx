import type { Metadata } from 'next';
import toursData from '@/public/tours/tours.json';
import { ArtworkNarration, GalleryTour } from '@/types';
import * as React from "react";
import { ArtworkList } from '@/components/lists/artwork-list';


export async function generateMetadata({ 
	params} : {params: Promise<{ tourSlug: string}>
	}) : Promise<Metadata> {
	const {tourSlug} = await params;
	const tours: GalleryTour[] = toursData;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );

  return {
    title: galleryTour?.name,
    description: galleryTour?.description,
  };
}

export default function Page({ 
	params 
} : {
	params : Promise<{lang: string, tourSlug: string}>
}) {
	const {lang, tourSlug} = React.use(params);
	const tours: GalleryTour[] = toursData;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );

  if (!galleryTour) {
    return null;
	}

	const duration : number = galleryTour.artworks.reduce((sum: number, artwork: ArtworkNarration) => 
		sum + (artwork.duration ?? 0), 0
	);

	console.log("Durata totale: " + Math.floor(duration/60) + "." +duration%60);

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-xl font-extrabold text-neutral-600">
          <a href='/'>Audioguide</a>
        </h2>
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          {galleryTour.name}
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          {galleryTour.description}
        </p>
			</div>	
			<ArtworkList 
				lang={lang}
				galleryTour={galleryTour}
				roomOnly={true}/>
    </section>
  );
}
