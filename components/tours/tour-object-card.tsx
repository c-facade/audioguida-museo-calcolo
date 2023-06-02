'use client';

import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
import Image from 'next/image';

import { MuseumMap } from '@/components/museum-map/museum-map';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/tours/tour-tabs';
import { TourObjectImagePresentation } from './tour-object-image-presentation';

export function TourObjectCard({ tour, tourObject, tourObjectIndex }) {
  return (
    <div className="">
      <h4 className="mt-2 text-xl">
        {tourObject.title}
      </h4>
      <h5 className="mt-1 text-base text-neutral-400">{tourObject.date}</h5>
      <h5 className="mt-2 text-sm text-neutral-400">
        {tourObject.artist}, {tourObject.artistBio}
      </h5>
      <TourObjectImagePresentation tour={tour} tourObject={tourObject} />

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
    </div>
  );
}
