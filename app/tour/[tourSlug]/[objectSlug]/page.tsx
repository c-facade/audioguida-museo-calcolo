import type { Metadata } from 'next';
import Image from 'next/image';
import tours from '@/data/tours/tours.json';
import { BkmLogo } from '@/components/bkm-logo';
import { TourObjectCard } from '@/components/tours/tour-object-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tours/tour-tabs"
import { MuseumMap } from '@/components/museum-map/museum-map';

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
  if (tour) {
    tourObject = tour.objects.find(
      (tourObject) => tourObject.slug === objectSlug
    );
  }

  return (
    <section className="container mb-12 mt-6">
      <BkmLogo className='w-52 fill-neutral-600 hover:fill-neutral-400' />
      <h1 className="mt-2 text-2xl font-extrabold text-neutral-300 lg:text-3xl">
        {tour?.name}
      </h1>
      <TourObjectCard tour={tour} tourObject={tourObject} />

      <Tabs defaultValue="objectText" className="w-full">
        <TabsList>
          <TabsTrigger value="objectText">Text</TabsTrigger>
          <TabsTrigger value="objectMap">Map</TabsTrigger>
        </TabsList>
        <TabsContent value="objectText">
          <div className="whitespace-pre-line">{tourObject?.text}</div>
            <div className="mt-8 bg-neutral-900 p-4">
              <div className="mb-4 font-semibold uppercase text-neutral-400">
                About the Artist
              </div>
              <div className="flex gap-4">
                <div className="">
                  <Image
                    alt="Artist"
                    src={`/tours/${tour?.slug}/${tourObject?.slug}/artist.jpg`}
                    width="300"
                    height="300"
                  />
                </div>
                <div>{tourObject?.artistText}</div>
              </div>
              <div className="mt-4 text-right font-semibold text-neutral-400 hover:underline">
                <a href="#">See more works by this artist &gt;</a>
              </div>
            </div>
        </TabsContent>
        <TabsContent value="objectMap">
          <div className="w-full">
            <MuseumMap item={tourObject} />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
