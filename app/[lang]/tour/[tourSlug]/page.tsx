import type { Metadata } from 'next';
import toursDataIt from '@/public/tours/tours_it.json';
import toursDataEn from '@/public/tours/tours_en.json';
import toursDataFr from '@/public/tours/tours_fr.json';
import toursDataEo from '@/public/tours/tours_eo.json';
import { ArtworkNarration, GalleryTour } from '@/types';
import * as React from "react";
import { ArtworkList } from '@/components/lists/artwork-list';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';
import Link from 'next/link';

export async function generateMetadata({ 
	params} : {params: Promise<{ lang: string, tourSlug: string}>
	}) : Promise<Metadata> {
		const {lang, tourSlug} = await params;
		const languages = {
			'it': toursDataIt,
			'en': toursDataEn,
			'fr': toursDataFr,
			'eo': toursDataEo
		}
		const toursData = languages[lang];
		const tours: GalleryTour[] = toursData;
  	const galleryTour: GalleryTour | undefined = tours.find(
    	(galleryTour) => galleryTour.slug === tourSlug
  );

  return {
    title: galleryTour?.name,
    description: galleryTour?.description,
		alternates: {
			canonical: '/it',
			languages: {
				'en': '/en',
				'fr': '/fr',
				'eo': '/eo',
			},
		},
  };
}

export default function Page({ 
	params 
} : {
	params : Promise<{lang: string, tourSlug: string}>
}) {
	// I'm using a bit of a long thing to get
	// the language switch to work, because react is acting weird
	// when I mark the function as async
	// TODO investigate?
	const languages = {
		'it': toursDataIt,
		'en': toursDataEn,
		'fr': toursDataFr,
		'eo': toursDataEo,
	}
	const {lang, tourSlug} = React.use(params);
	const toursData = languages[lang];
	const tours: GalleryTour[] = toursData;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );

  if (!galleryTour) {
    throw new Error("Il tour scelto non esiste.");
	}

	const duration : number = galleryTour.artworks.reduce((sum: number, artwork: ArtworkNarration) => 
		sum + (artwork.duration ?? 0), 0
	);
	console.log("Durata totale: " + Math.floor(duration/60) + "." +duration%60);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="max-w-[980px] gap-2">
			<div className="flex justify-between">
				<h2 className="text-xl font-extrabold text-neutral-600">
					<Link href={`/${lang}`}>Audioguide</Link>	
				</h2>
				<LanguageSwitcher lang={lang} url={`/tour/${tourSlug}`}/>
			</div>
        <h1 className="my-2 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
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
