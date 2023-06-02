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
        <span className="ml-3 text-neutral-400">{tourObject.date}</span>
      </h4>
      
      <h5 className="my-2 text-sm text-neutral-400">
        {tourObject.artist}, {tourObject.artistBio}
      </h5>
      <TourObjectImagePresentation tour={tour} tourObject={tourObject} />

      <Tabs defaultValue="objectMap" className="w-full">
        <TabsList>
          <TabsTrigger value="objectMap">Museum Map</TabsTrigger>
          <TabsTrigger value="objectText">Full Text</TabsTrigger>
        </TabsList>
        <TabsContent value="objectMap">
          <div className="w-full">
            <MuseumMap item={tourObject} />
          </div>
        </TabsContent>
        <TabsContent value="objectText">
          <div className="whitespace-pre-line">{tourObject?.text}</div>
          <div className="mt-8 bg-neutral-900 p-4">
            <div className="mb-4 font-semibold uppercase text-neutral-400">
              About the Artist
            </div>
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
            <div className="mt-4 text-right font-semibold text-neutral-400 hover:underline">
              <a href="#">See more works by this artist &gt;</a>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
