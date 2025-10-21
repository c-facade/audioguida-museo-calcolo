import Image from 'next/image';
import Link from 'next/link';
import { ArtworkNarration, GalleryTour } from '@/types';
import { russo } from '../ui/fonts';

export function ArtworkList({lang, galleryTour, roomOnly, room=-1}) {
	return (
		<>
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{galleryTour.artworks
				.filter((artwork : ArtworkNarration) =>
								(artwork.isRoom && roomOnly) ||
								(!roomOnly && room < 0) ||
								(artwork.room == room && !artwork.isRoom)
							 )
				.map((artwork: ArtworkNarration) =>
					<div className="rounded-lg p-4 hover:bg-neutral-900" id={artwork.key} key={artwork.key}>
					<Link
						key={artwork.key}
						href={`/${lang}/tour/${galleryTour.slug}/${artwork.slug}`}
						>
						<Image
						key={artwork.key}
								className="h-48 w-full object-cover"
								alt={artwork.description}
								src={
									artwork.preview ?
								`/tours/${galleryTour?.slug}/${artwork.slug}/preview.jpg` :
							`/tours/${galleryTour?.slug}/${artwork.slug}/object.jpg`}
								width="500"
								height="500"
							/>
						<h2 className="mt-2 text-xl font-extrabold" style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between"}}><span className={`${russo.className} antialiased`}>{artwork.number}&nbsp;</span><span style={{"textAlign": "end"}}>{artwork.title}</span></h2>
						</Link>
				</div>
				)
			}
		</div>
		</>
	);
}
