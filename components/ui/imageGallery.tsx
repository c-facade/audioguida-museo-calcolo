'use client'
import Image from 'next/image';
import LightBox from "yet-another-react-lightbox";
import { useState } from "react";

export default function ImageGallery( {galleryTour, artwork}) {
	const [open, setOpen] = useState(true);
	if(!artwork.images){
		return null;
	}
	let array : string[]  = [];
	for(let i = 1; i<artwork.images+1; i++){
		array.push(`/tours/${galleryTour.slug}/${artwork.slug}/image${i}.jpg`);
	}
	const slides = array.map((filename) => ({
		src: filename,
		width: 200,
		height: 200,
	}));

	return (
	<div>
	{ array.map((filename) =>
							<Image key={filename} src={filename} alt="decorativa" height={200} width={200} onClick={() => setOpen(true)} />
						 )
	}
	<LightBox
		slides ={slides}
		open={open}
		close={() => setOpen(false)}
		/>
	Raga che succede
	</div>
	);
}
