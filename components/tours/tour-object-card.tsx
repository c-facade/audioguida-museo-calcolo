'use client';

import Image from 'next/image';

import { BkmLogo } from '@/components/bkm-logo';
import { MuseumMap } from '@/components/museum-map/museum-map';
import { TourNav } from '@/components/tours/tour-nav';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/tours/tour-tabs';
import { TourObjectImagePresentation } from './tour-object-image-presentation';

export function TourObjectCard({ tour, tourObject, tourObjectIndex }) {
  return (
    <>
      <section className="container mt-6">
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
        <div className="">
          <h4 className="mt-2 text-xl">
            {tourObject.title}
            <span className="ml-3 text-neutral-400">{tourObject.date}</span>
          </h4>

          <h5 className="my-2 text-sm text-neutral-400">
            {tourObject.artist}, {tourObject.artistBio}
          </h5>
        </div>
      </section>
      <section className="container mt-4 p-0">
        <TourObjectImagePresentation tour={tour} tourObject={tourObject} />
      </section>
      <section className="container mb-12">
        <Tabs defaultValue="objectMap" className="w-full">
          <TabsList>
            <TabsTrigger value="objectMap">Map</TabsTrigger>
            <TabsTrigger value="objectText">Text</TabsTrigger>
            <TabsTrigger value="objectArtist">Artist</TabsTrigger>
          </TabsList>
          <TabsContent value="objectMap">
            <div className="flex w-full items-center justify-center">
              <div className="max-w-sm ">
                <MuseumMap item={tourObject} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="objectText">
            <div className="whitespace-pre-line">{tourObject?.text}</div>
          </TabsContent>
          <TabsContent value="objectArtist">
            <div className="flex gap-4">
              <div className="w-24 flex-none">
                <Image
                  alt="Artist"
                  src={`/tours/${tour?.slug}/${tourObject?.slug}/artist.jpg`}
                  width="500"
                  height="500"
                />
              </div>
              <div className="flex-1">{tourObject?.artistText}</div>
            </div>
            <div className="mt-8 font-semibold text-neutral-400 hover:underline">
              <a href="#">See more works by this artist &gt;</a>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
