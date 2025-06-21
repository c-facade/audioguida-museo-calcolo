'use client';

import Image from 'next/image';
import { ArtworkNarration, GalleryTour } from '@/types';

import { MuseumMap } from '@/components/museum-map/museum-map';
import { BkmLogo } from '@/components/ui/bkm-logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import { ArtworkNarrationPlayer } from './artwork-narration-player';

import dynamic from 'next/dynamic'
import { Button } from '../ui/button';
import Link from 'next/link';

const ArtworkNarrationPlayer = dynamic(() => import('./artwork-narration-player'), {
  ssr: false
});

interface ArtworkNarrationCardProps {
  galleryTour: GalleryTour;
	artworkNarrationIndex: number;
}

export function ArtworkNarrationCard({
  galleryTour,
  artworkNarrationIndex,
}: ArtworkNarrationCardProps) {
  const artworkNarration: ArtworkNarration =
    galleryTour.artworks[artworkNarrationIndex];
	const intro = artworkNarration.slug === "intro";
	return (
		<>
			<section className="container mt-6">
				<div className="flex w-full">
					<div className="grow">
						<h2 className="text-xl font-extrabold text-neutral-600">
							<a href='/'>Audioguide S.M.A.</a>
						</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold text-neutral-300">
                <a href={`/tour/${galleryTour?.slug}`}>{galleryTour?.name}</a>
              </h1>
              <span className="rounded-full bg-neutral-800 py-2 px-3 text-sm font-extrabold">
                {artworkNarrationIndex + 1} of {galleryTour?.artworks.length}
              </span>
            </div>
					</div>
				</div>	
        <div className="">
          <h4 className="mt-2 text-xl">
            {artworkNarration.title}
            <span className="ml-3 text-neutral-400">
              {artworkNarration.date}
						</span>
						{intro ?
								<Link className="text-lg" href={`/tour/${galleryTour.slug}/`}>
									<Button size="default">&#10132;</Button>
								</Link>
							: ""
						}
          </h4>
					{ artworkNarration.artist != "" ?
          <h5 className="my-2 text-sm text-neutral-400">
            {artworkNarration.artist}, {artworkNarration.artistBio}
					</h5> : <></>
					}
        </div>
			</section>
      <section className="container mt-4 p-0">
				
				<ArtworkNarrationPlayer
          galleryTour={galleryTour}
          artworkNarrationIndex={artworkNarrationIndex}
        />
      </section>	
			<section className={"container"+intro ? "" : "mb-12"}>
         <div className="m-1 whitespace-pre-line">{artworkNarration?.text}</div>
			</section>
			{intro ?
				<h4 className="mt-5 text-xl">
					<Link href={`/tour/${galleryTour.slug}/`}>
						<Button size="lg">Visita il Museo &#10132;</Button>
					</Link>
				</h4>
				: ""
			}
		</>
	);
	/*
      </section>
      <section className="container mt-4 p-0">
        <ArtworkNarrationPlayer
          galleryTour={galleryTour}
          artworkNarrationIndex={artworkNarrationIndex}
        />
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
                <MuseumMap item={artworkNarration} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="objectArtist">
            <div className="mb-8 rounded-md bg-neutral-800 p-4">
              <div className="mb-6 flex w-full items-center justify-center">
                <div className="w-48 flex-none">
                  <Image
                    alt="Artist"
                    src={`/tours/${galleryTour?.slug}/${artworkNarration?.slug}/artist.jpg`}
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="flex-1">{artworkNarration?.artistText}</div>
            </div>
            {artworkNarration?.artistLink && (
              <div className="mt-8 font-semibold text-neutral-400 hover:underline">
                <a href={artworkNarration?.artistLink}>See more works by this artist &gt;</a>
              </div>
            )}
          </TabsContent>
          <TabsContent value="objectNarration">
            <div className="mb-8 rounded-md bg-neutral-800 p-4">
              <div className="mb-6 flex w-full items-center justify-center">
                <div className="w-48 flex-none">
                  <Image
                    alt="Artist"
                    src={`/tours/${galleryTour?.slug}/${artworkNarration?.slug}/narrator.jpg`}
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              <div className="mb-2 font-bold uppercase text-neutral-400">
                About the Narrator
              </div>
              <div className="whitespace-pre-line">
                {artworkNarration?.narratorText}
              </div>
            </div>
            <div className="whitespace-pre-line">{artworkNarration?.text}</div>
          </TabsContent>
        </Tabs>
      </section>
    </>
		);
							*/
}
