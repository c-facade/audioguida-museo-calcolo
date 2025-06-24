import Image from 'next/image';
import Link from 'next/link';
import { ArtworkNarration, GalleryTour } from '@/types';

export function ArtworkList({galleryTour, roomOnly, room=-1}) {
	return (
		<>
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{galleryTour.artworks.map((artwork: ArtworkNarration) =>
				((artwork.isRoom && roomOnly) || (!roomOnly && room<0) || (artwork.room == room && !artwork.isRoom)) ?
				(
					<div className="rounded-lg p-4 hover:bg-neutral-900" id={artwork.id} key={artwork.id}>
					<Link
						key={artwork.id}
							href={`/tour/${galleryTour.slug}/${artwork.slug}`}
						>
							<Image
								className="h-48 w-full object-cover"
								alt={artwork.description}
								src={
									artwork.preview ?
								`/tours/${galleryTour?.slug}/${artwork.slug}/preview.jpg` :
							`/tours/${galleryTour?.slug}/${artwork.slug}/object.jpg`}
								width="500"
								height="500"
							/>
							<h2 className="mt-2 text-xl font-extrabold">{artwork.title}</h2>
						</Link>
				</div>
				)
				:
					<></>
			)}
		</div>
		</>
	);
}
