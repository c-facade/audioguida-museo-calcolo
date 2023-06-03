import type { Metadata } from 'next';
import tours from '@/data/tours/tours.json';

import { TourObjectCard } from '@/components/tours/tour-object-card';

export async function generateMetadata({ params }): Promise<Metadata> {
  const tourSlug = params.tourSlug;
  const objectSlug = params.objectSlug;
  const tour = tours.find((tour) => tour.slug === tourSlug);
  let tourObjectTitle = '';
  if (tour) {
    const tourObject = tour.objects.find(
      (tourObject) => tourObject.slug === objectSlug
    );
    if (tourObject?.title) {
      tourObjectTitle = tourObject.title;
    }
  }

  return {
    title: tourSlug,
    description: 'Museum Audio Tours Prototype',
    /*
    openGraph: {
      title: collectionObject.title || '',
      description: caption,
      images: [
        {
          url: thumb,
        },
      ],
    },
    */
  };
}

export default function Page({ params }) {
  const tourSlug = params.tourSlug;
  const objectSlug = params.objectSlug;
  const tour = tours.find((tour) => tour.slug === tourSlug);
  let tourObject: any = null;
  let tourObjectIndex = -1;
  if (tour) {
    tourObjectIndex = tour.objects.findIndex(
      (tourObject) => tourObject.slug === objectSlug
    );
    tourObject = tour.objects[tourObjectIndex];
  }

  return (
    <TourObjectCard
      tour={tour}
      tourObject={tourObject}
      tourObjectIndex={tourObjectIndex}
    />
  );
}
