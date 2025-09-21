import type {Metadata } from 'next'
import { ArtworkNarration, GalleryTour } from "@/types";
import toursDataIt from '@/public/tours/tours_it.json';
import toursDataEn from '@/public/tours/tours_en.json';
import toursDataFr from '@/public/tours/tours_fr.json';
import * as React from "react";
import { ArtworkNarrationCard } from "@/components/artwork-narration/artwork-narration-card";
import { ArtworkList } from '@/components/lists/artwork-list';
import ImageGallery from '@/components/ui/imageGallery';

export async function generateMetadata({ params }): Promise<Metadata> {
	const {lang, tourSlug, artworkSlug} = await params;
	const toursData = lang == 'it' ? toursDataIt : toursDataEn; 
	const tours: GalleryTour[] = toursData;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );
  let artworkNarration: ArtworkNarration | undefined = undefined;
  if (galleryTour) {
    artworkNarration = galleryTour.artworks.find(
      (artworkNarration) => artworkNarration.slug === artworkSlug
    );
  }

  const imageUrl = `/tours/${galleryTour?.slug}/${artworkNarration?.slug}/object.jpg`;

  return {
    title: tourSlug,
    description: 'Audioguida Museo degli Strumenti per il Calcolo',
    openGraph: {
      title: `${galleryTour?.name} | ${artworkNarration?.title}` || '',
      description: artworkNarration?.description,
      images: [imageUrl],
    },
  };
}

export default function Page({
	params,
}: {
	params: Promise<{ lang: string, tourSlug: string, artworkSlug: string}>
}) {
	const languageMap = {
		'it': toursDataIt,
		'en': toursDataEn,
		'fr': toursDataFr,
	}
	const {lang, tourSlug, artworkSlug} = React.use(params);
	const toursData = languageMap[lang];
	const tours: GalleryTour[] = toursData;
	const galleryTour: GalleryTour | undefined =
		tours.find( (galleryTour) => galleryTour.slug === tourSlug);
	let artworkNarrationIndex : number = -1;
	if(galleryTour){
		artworkNarrationIndex = galleryTour.artworks.findIndex(
			(artworkNarration) => artworkNarration.slug === artworkSlug
		);
		let artwork = galleryTour.artworks[artworkNarrationIndex];
		return (
			<div>	
				<ArtworkNarrationCard lang={lang} galleryTour={galleryTour} artworkNarrationIndex={artworkNarrationIndex}/>
				{artwork.isRoom ? (
				<ArtworkList
				lang={lang}
				galleryTour={galleryTour}
					roomOnly={false}
					room={artwork.room}
					/>
				): <></>}
				<ImageGallery artwork={artwork} galleryTour={galleryTour}/>
			</div>
		)
	}
	return null;
}

