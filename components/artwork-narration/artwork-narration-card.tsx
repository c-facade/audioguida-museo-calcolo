'use client';

//import Image from 'next/image';
import { ArtworkNarration, GalleryTour } from '@/types';
import { useRouter } from 'next/navigation';

//import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import { ArtworkNarrationPlayer } from './artwork-narration-player';

import dynamic from 'next/dynamic'
import { Button } from '../ui/button';
import Link from 'next/link';
import { LanguageSwitcher } from '../ui/languageSwitcher';
import { russo } from '../ui/fonts';

const ArtworkNarrationPlayer = dynamic(() => import('./artwork-narration-player'), {
  ssr: false
});

interface ArtworkNarrationCardProps {
  galleryTour: GalleryTour;
	artworkNarrationIndex: number;
	lang: string;
}

export function ArtworkNarrationCard({
	lang,
  galleryTour,
  artworkNarrationIndex,
}: ArtworkNarrationCardProps) {
  const artworkNarration: ArtworkNarration =
    galleryTour.artworks[artworkNarrationIndex];
	const intro = artworkNarration.slug === "intro";
  const router = useRouter();

  function goObject(index) {
    const tobj = galleryTour.artworks[index];
		const url = `/${lang}/tour/${galleryTour.slug}/${tobj.slug}`;
    router.push(url);
	}

	const minidict = {
		'it':
			{'esplora': 'Esplora il Museo ',
				'successivo': 'Successivo ',
				'precedente': 'Precedente '
			},
		'en':
			{'esplora': 'Explore the Museum ',
				'successivo': 'Next ',
				'precedente': 'Previous '
			},
		'fr':
			{
				'esplora': 'Explorer le musée ',
				'successivo': 'Suivant ',
				'precedente': 'Précédent '
			},
		'eo': {
				'esplora': 'Esploru la Muzeon ',
				'successivo': 'Sekva ',
				'precedente': 'Antaŭa '
		},
}

	return (
		<>
			<section className="container mt-6">
				<div className="flex w-full">
					<div className="grow">
						<div className="flex justify-between">
							<h2 className="text-xl font-extrabold text-neutral-600">
								<a href={`/${lang}`}>Audioguide</a>
							</h2>
							<LanguageSwitcher lang={lang} url={`/tour/${galleryTour.slug}/${artworkNarration.slug}`}/>
						</div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-extrabold text-neutral-300">
								<a href={`/${lang}/tour/${galleryTour?.slug}`}>{galleryTour?.name}</a>
              </h1>
              <span className="rounded-full bg-neutral-800 px-3 py-2 text-sm font-extrabold">
                {artworkNarrationIndex + 1} of {galleryTour?.artworks.length}
              </span>
            </div>
					</div>
				</div>	
        <div className="">
          <h4 className="mt-2 text-xl">
						<span className={russo.className}><b>{artworkNarration.number}</b>&nbsp;&nbsp;</span>
						<span>{artworkNarration.title}</span>
            <span className="ml-3 text-neutral-400">
              {artworkNarration.date}
						</span>
						{intro ?
							<Link className="text-lg" href={`/${lang}/tour/${galleryTour.slug}/`}>
									<Button size="default">&#10132;</Button>
								</Link>
							: ""
						}
          </h4>
					{ artworkNarration.artist ?
          <h5 className="my-2 text-sm text-neutral-400">
            {artworkNarration.artist}
					</h5> : <></>
					}
        </div>
			</section>
      <section className="container mt-4 p-0">
				
				<ArtworkNarrationPlayer
					lang={lang}
					galleryTour={galleryTour}
          artworkNarrationIndex={artworkNarrationIndex}
        />
      </section>	
			<section className={"container"+intro ? "" : "mb-12"}>
         <div className="m-1 whitespace-pre-line">{artworkNarration?.text}</div>
			</section>
			{intro ?
				<h4 className="mt-5 text-xl">
					<Link href={`/${lang}/tour/${galleryTour.slug}/`}>
						<Button size="lg">
							{minidict[lang]['esplora']}
						 &#10132;</Button>
					</Link>
				</h4>
				: ""
			}
				<div className="text-l mt-5 flex justify-between">
					<Button
						onClick={() => goObject(artworkNarrationIndex - 1)}
						disabled={artworkNarrationIndex === 0}
					>
					<span className="hidden">
						&#8678;
						&#129144;</span>
							{minidict[lang]['precedente']}
						</Button>
					<Button 
						onClick={() => goObject(artworkNarrationIndex + 1)}	
						disabled={artworkNarrationIndex >= galleryTour?.artworks?.length - 1}
					>
						{minidict[lang]['successivo']}
						<span className="text-xl" hidden>&#8680;</span>
					</Button>
				</div>
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
