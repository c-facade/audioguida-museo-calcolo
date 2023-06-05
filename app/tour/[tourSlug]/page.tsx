import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import toursData from '@/public/tours/tours.json';
import { GalleryTour } from '@/types';

import { BkmLogo } from '@/components/ui/bkm-logo';

export async function generateMetadata({ params }): Promise<Metadata> {
  const tours: GalleryTour[] = toursData;
  const tourSlug = params.tourSlug;
  const artworkSlug = params.artworkSlug;
  const galleryTour: GalleryTour | undefined = tours.find(
    (galleryTour) => galleryTour.slug === tourSlug
  );

  return {
    title: galleryTour?.name,
    description: galleryTour?.description,
  };
}

export default function Page({ params }) {
  const tours: GalleryTour[] = toursData;
  const tourSlug = params.tourSlug;
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
          <a href='/'>Brooklyn Museum Audio Tours</a>
        </h2>
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          {galleryTour.name}
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          {galleryTour.description}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {galleryTour.artworks.map((artwork) => (
          <div className="rounded-lg p-4 hover:bg-neutral-900">
            <Link
              key={artwork.slug}
              href={`/tour/${galleryTour.slug}/${artwork.slug}`}
            >
              <Image
                className="h-48 w-full object-cover"
                alt="Artist"
                src={`/tours/${galleryTour?.slug}/${artwork.slug}/object.jpg`}
                width="500"
                height="500"
              />
              <h2 className="mt-2 text-xl font-extrabold">{artwork.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
