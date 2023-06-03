import type { Metadata } from 'next';
import toursData from '@/public/tours/tours.json';
import { ArtworkNarration, GalleryTour } from '@/types';

import { ArtworkNarrationCard } from '@/components/artwork-narration/artwork-narration-card';

export async function generateMetadata({ params }): Promise<Metadata> {
  const tours: GalleryTour[] = toursData;
  const tourSlug = params.tourSlug;
  const artworkSlug = params.artworkSlug;
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

export default function Page({ params }) {
  const tours: GalleryTour[] = toursData;
  const tourSlug = params.tourSlug;
  const artworkSlug = params.artworkSlug;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );
  let artworkNarration: any = null;
  let artworkNarrationIndex = -1;
  if (galleryTour) {
    artworkNarrationIndex = galleryTour.artworks.findIndex(
      (artworkNarration) => artworkNarration.slug === artworkSlug
    );
    return (
      <ArtworkNarrationCard
        galleryTour={galleryTour}
        artworkNarrationIndex={artworkNarrationIndex}
      />
    );  
  }
  return null;
}
