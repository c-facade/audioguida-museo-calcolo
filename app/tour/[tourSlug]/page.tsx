import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import toursData from '@/public/tours/tours.json';
import { GalleryTour } from '@/types';
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
	params : Promise<{tourSlug: string}>
}) {
	const {tourSlug} = React.use(params);
	const tours: GalleryTour[] = toursData;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );

  if (!galleryTour) {
    return null;
  }

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-xl font-extrabold text-neutral-600">
          <a href='/'>Audioguide S.M.A. Pisa</a>
        </h2>
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          {galleryTour.name}
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          {galleryTour.description}
        </p>
			</div>	
			<ArtworkList 
				galleryTour={galleryTour}
				roomOnly={true}/>
    </section>
  );
}
