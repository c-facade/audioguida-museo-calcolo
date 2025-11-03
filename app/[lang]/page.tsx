import type { Metadata } from 'next';
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { GalleryTour } from '@/types';
import { getDictionary, getToursData } from './dictionaries';
import { LanguageSwitcher } from '@/components/ui/languageSwitcher';

export async function generateMetadata({ 
	params} : {params: Promise<{ lang: string}>
	}) : Promise<Metadata> {
		const {lang} = await params;
		let title : string, description : string;
		if(lang == 'it'){
			title = 'Audioguida MSC';
			description = "Audioguida del Museo degli Strumenti per il Calcolo di Pisa";
		}
		else if(lang == 'en'){
			title = "MSC Audioguide";
			description = "The audioguide of the Museum of Computing Machinery of Pisa.";
		}
		else if(lang == 'eo'){
			description = "La aŭd-gvidilo de la Muzeo de Kalkulaj Iloj.";
			title = "aŭd-gvidilo MSC";
		}
		else{
			title = "MSC Audioguide";
			description = "L'audioguide de le musée des machines de calcul de Pise";
		}
		return {
			title: title,
			description: description,
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

export default async function Page({ 
	params 
} : {
	params : Promise<{lang: string}>
}) {
	const {lang} = await params;
	const dict = await getDictionary(lang);
	const toursData = await getToursData(lang);
	const tours: GalleryTour[] = toursData;
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="max-w-[980px] flex-col items-start gap-2">
				<div className="flex flex-row justify-between">
					<h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl"> {dict.main.titolo}
					</h1>
					<LanguageSwitcher lang={lang} url=""/>
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
						<Link key={tour.slug} href={`/${lang}/tour/${tour.slug}/storia-informatica`}>
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
