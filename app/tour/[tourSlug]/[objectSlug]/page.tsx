import type { Metadata } from 'next';
import tours from '@/data/tours/tours.json';

import { BkmLogo } from '@/components/bkm-logo';
import { TourNav } from '@/components/tours/tour-nav';
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
    <section className="container mb-12 mt-6">
      <div className="flex w-full">
        <div className="grow">
          <BkmLogo className="w-48 fill-neutral-600 hover:fill-neutral-400" />
          <div className="mt-2 flex items-center gap-x-2">
            <h1 className="text-2xl font-extrabold text-neutral-300">
              {tour?.name}
            </h1>
            <span className="ml-2 rounded-full bg-neutral-800 py-2 px-3 text-sm font-extrabold">
              {tourObjectIndex + 1} of {tour?.objects.length}
            </span>
          </div>
        </div>
        <div className="flex gap-x-2">
          <TourNav tour={tour} tourObjectIndex={tourObjectIndex} />
        </div>
      </div>
      <TourObjectCard
        tour={tour}
        tourObject={tourObject}
        tourObjectIndex={tourObjectIndex}
      />
    </section>
  );
}
