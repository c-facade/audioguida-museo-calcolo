import type { Metadata } from 'next';
import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';
import toursData from '@/public/tours/tours.json';
import { GalleryTour } from '@/types';
import { getDictionary } from './dictionaries';

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
		title: 'Audioguida MSC',
		description: "Audioguida del Museo degli Strumenti per il Calcolo di Pisa",
  };
}

// super ugly hack, hope it works until react gets better
const dicten = await getDictionary('en');
const dictit = await getDictionary('it');

export default function Page({ 
	params 
} : {
	params : Promise<{lang: string}>
}) {
	const {lang} = React.use(params);
  const tours: GalleryTour[] = toursData;
	console.log("page lang", lang);
	const dict = (lang == 'it' ? dictit : dicten);
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl"> {dict.main.titolo}
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
					{dict.main.descrizione}
				</p>
			</div>
			
      <div className="flex flex-col gap-4">
        {tours.map((tour) => (
          <div
            className="rounded-lg p-4 hover:bg-neutral-800" key={tour.slug}
          >
						<Link key={tour.slug} href={`/tour/${tour.slug}/intro`}>
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
