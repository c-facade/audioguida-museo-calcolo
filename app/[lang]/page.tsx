import type { Metadata } from 'next';
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import toursDataIt from '@/public/tours/tours_it.json';
import toursDataEn from '@/public/tours/tours_en.json';
import { GalleryTour } from '@/types';
import { getDictionary } from './dictionaries';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';

//TODO consider dynamic import of tours

export async function generateMetadata(): Promise<Metadata> {
  return {
		title: 'Audioguida MSC',
		description: "Audioguida del Museo degli Strumenti per il Calcolo di Pisa",
  };
}

export default async function Page({ 
	params 
} : {
	params : Promise<{lang: string}>
}) {
	const {lang} = await params;
	const dict = await getDictionary(lang);
	// Temporaneo, da modificare se si aggiungono altre lingue
	const toursData = lang == 'it' ? toursDataIt : toursDataEn;
  const tours: GalleryTour[] = toursData;
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="flex max-w-[980px] flex-col items-start gap-2">
				<div className="flex flex-row justify-between">
					<h1 className="block text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl"> {dict.main.titolo}
					</h1>
					<LanguageSwitcher/>
			</div>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
					{dict.main.descrizione}
				</p>
			</div>
			
      <div className="flex flex-col gap-4">
        {tours.map((tour) => (
          <div
            className="rounded-lg p-4 hover:bg-neutral-800" key={tour.slug}
          >
						<Link key={tour.slug} href={`/${lang}/tour/${tour.slug}/intro`}>
              <Image
                className="h-48 w-full object-cover"
                alt="Artist"
                src={`/tours/${tour?.slug}/image.jpg`}
                width="500"
								height="500"
								priority={true}
              />
              <h2 className="mt-2 text-xl font-extrabold">{tour.name}</h2>
              <p className="text-neutral-300">{tour.description}</p>
						</Link>
          </div>
        ))}
      </div>
		</section>
  );
}
