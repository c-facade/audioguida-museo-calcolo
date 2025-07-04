import Image from 'next/image';

export default function ImageGallery( {galleryTour, artwork}) {
	if(!artwork.images){
		return null;
	}
	let array : string[]  = [];
	for(let i = 1; i<artwork.images+1; i++){
		array.push(`/tours/${galleryTour.slug}/${artwork.slug}/image${i}.jpg`);
	}

	return (
		<div className="mt-4">
	{ array.map((filename) =>
							<Image className="m-1 inline" key={filename} src={filename} alt="decorativa" height={200} width={200}/>
						 )
	}
	</div>
	);
}
