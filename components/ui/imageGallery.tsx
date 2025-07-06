'use client'
import {useState} from "react";
import Image from 'next/image';
import { Picture } from '@/types';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";


interface Slide{
	src: string;
	width: number;
	height: number;
	caption?: string;
	alt: string;
	title: string;
}


export default function ImageGallery( {galleryTour, artwork}) {
	const [index, setIndex] = useState(-1);
	
	if(!artwork.images){
		return null;
	}
	

	let slides : Slide[] = [];
	for(let image of artwork.images){
		slides.push(
		{
			src: `/tours/${galleryTour.slug}/${artwork.slug}/${image.name}`,
			width: image.width ?? 200,
			height: image.height ?? 200,
			alt: image.alt,
			title: image.alt
		}
		);
	}

	function handleClick(i : number) {
		console.log("Clicked on "+i+" image");
		setIndex(i);
	}

	/*
	let array : string[]  = [];
	for(let image ){
		array.push(`/tours/${galleryTour.slug}/${artwork.slug}/image${i}.jpg`);
		}
	*/

	return (
		<div>
		<div className="mt-4 flex flex-wrap">
	{ artwork.images.map((image : Picture, i : number) =>
	<Image 
		className="m-[2px] inline" 
		key={image.name} 
		src={`/tours/${galleryTour.slug}/${artwork.slug}/${image.name}`} 
		alt={image.alt} 
		height={200} 
		width={200}
		onClick={() => handleClick(i)}
	/>
						 )
	}
		</div>
			<Lightbox
				plugins={[Captions]}
				slides={slides}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				controller={{ closeOnBackdropClick: true }}
			/>
		</div>
	);
}
