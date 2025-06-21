import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import toursData from '@/public/tours/tours.json';
import { GalleryTour } from '@/types';

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: 'Museum Audio Tours Prototype',
    description: 'Museum Audio Tours Prototype',
  };
}

export default function Page() {
  const tours: GalleryTour[] = toursData;

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
          Audioguide
        </h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
				Ascolta le audioguide dei seguenti musei e mostre.
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
              />
              <h2 className="text-xl font-extrabold mt-2">{tour.name}</h2>
              <p className="text-neutral-300">{tour.description}</p>
						</Link>
          </div>
        ))}
      </div>
		</section>
  );
}
