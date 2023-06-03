'use client';

import Image from 'next/image';

import { MuseumMap } from '@/components/museum-map/museum-map';
import { BkmLogo } from '@/components/ui/bkm-logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TourObjectImagePresentation } from './tour-object-image-presentation';

export function TourObjectCard({ tour, tourObject, tourObjectIndex }) {
  return (
    <>
      <section className="container mt-6">
        <div className="flex w-full">
          <div className="grow">
            <BkmLogo className="w-48 fill-neutral-600 hover:fill-neutral-400" />
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold text-neutral-300">
                {tour?.name}
              </h1>
              <span className="rounded-full bg-neutral-800 py-2 px-3 text-sm font-extrabold">
                {tourObjectIndex + 1} of {tour?.objects.length}
              </span>
            </div>
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
        <TourObjectImagePresentation tour={tour} tourObject={tourObject} tourObjectIndex={tourObjectIndex} />
      </section>
      <section className="container mb-12">
        <Tabs defaultValue="objectMap" className="w-full">
          <TabsList>
            <TabsTrigger value="objectMap">Map</TabsTrigger>
            <TabsTrigger value="objectArtist">Artist</TabsTrigger>
            <TabsTrigger value="objectNarration">Narration</TabsTrigger>
          </TabsList>
          <TabsContent value="objectMap">
            <div className="flex w-full items-center justify-center">
              <div className="max-w-sm ">
                <MuseumMap item={tourObject} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="objectArtist">
            <div className="mb-8 rounded-md bg-neutral-800 p-4">
              <div className="mb-6 flex w-full items-center justify-center">
                <div className="w-48 flex-none">
                  <Image
                    alt="Artist"
                    src={`/tours/${tour?.slug}/${tourObject?.slug}/artist.jpg`}
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex-1">{tourObject?.artistText}</div>
            </div>
            <div className="mt-8 font-semibold text-neutral-400 hover:underline">
              <a href="#">See more works by this artist &gt;</a>
            </div>
          </TabsContent>
          <TabsContent value="objectNarration">
            <div className="mb-8 rounded-md bg-neutral-800 p-4">
              <div className="mb-6 flex w-full items-center justify-center">
                <div className="w-48 flex-none">
                  <Image
                    alt="Artist"
                    src={`/tours/${tour?.slug}/${tourObject?.slug}/narrator.jpg`}
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="mb-2 font-bold uppercase text-neutral-400">
                About the Narrator
              </div>
              <div className="whitespace-pre-line">
                {tourObject?.narratorText}
              </div>
            </div>
            <div className="whitespace-pre-line">{tourObject?.text}</div>
          </TabsContent>
        </Tabs>
      </section>
      <section className="container mt-6 mb-10">
        <BkmLogo className="w-48 fill-neutral-600 hover:fill-neutral-400" />
      </section>
    </>
  );
}
