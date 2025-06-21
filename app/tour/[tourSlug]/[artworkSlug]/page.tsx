import type {Metadata } from 'next'
import { ArtworkNarration, GalleryTour } from "@/types";
import toursData from '@/public/tours/tours.json';
import * as React from "react";
import { ArtworkNarrationCard } from "@/components/artwork-narration/artwork-narration-card";

export async function generateMetadata({ params }): Promise<Metadata> {
	const {tourSlug, artworkSlug} = await params;
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
    description: 'Museum Audio Tours Prototype',
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
	params: Promise<{ tourSlug: string, artworkSlug: string}>
}) {
	
	const {tourSlug, artworkSlug} = React.use(params);
	const tours: GalleryTour[] = toursData;
	const galleryTour: GalleryTour | undefined =
		tours.find( (galleryTour) => galleryTour.slug === tourSlug);
	let artworkNarrationIndex : number = -1;
	if(galleryTour){
		artworkNarrationIndex = galleryTour.artworks.findIndex(
			(artworkNarration) => artworkNarration.slug === artworkSlug
		);
		return (
			<div>	
				<ArtworkNarrationCard galleryTour={galleryTour} artworkNarrationIndex={artworkNarrationIndex}/>
			</div>
		)
	}
	return null;
}

