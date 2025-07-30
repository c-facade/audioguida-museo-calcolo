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
	description?: string;
}

const images : Picture[] = [
	{
			"name": "crt.jpg",
			"alt": "A cathode ray tube monitor displays white dots on a black background.",
			"description": "Cathodic Ray Tube Amusement Device: a 1947 experiment with cathode tubes.",
			"width": 640,
			"height": 480
		},
		{
			"name": "molecole.jpg",
			"alt": "A man is sitting in front of a computer, the screen displays the 3D structure of a molecule.",
			"description": "A scientist visualizes the 3D structure of a molecule on the Evans & Sutherland PS 300 on display",
			"width": 888,
			"height": 633
		},
		{
			"name": "spacewar.jpeg",
			"alt": "Spacewar!",
			"description": "Spacewar!",
			"height": 646,
			"width": 960
		},
		{
			"name": "Tennis_for_two.webp",
			"alt": "a black and white video game with simplified graphics, a vertical dashed line divides the screen in two, simulating a ping-pong table.",
			"description": "Tennis for two",
			"width": 369,
			"height": 255
		},
		{
			"name": "Pong.png",
			"alt": "a black and white video game with simplified graphics, a vertical dashed line divides the screen in two, simulating a ping-pong table.",
			"description": "Pong game image",
			"width": 500,
			"height": 375
		},
		{
			"name": "space_invaders.jpg",
			"width": 1600,
			"height": 1060,
			"alt": "space invaders"
		},
		{
			"name": "super_mario.jpg",
			"width": 1600,
			"height": 800,
			"alt": "space invaders"
		}
];



export default function SupportGallery() {
	const [index, setIndex] = useState(-1);

	let slides : Slide[] = [];
	for(let image of images){
		slides.push(
		{
			src: `/supporto-guida/${image.name}`,
			width: image.width ?? 200,
			height: image.height ?? 200,
			alt: image.alt,
			description: image.description ?? ""
		}
		);
	}

	function handleClick(i : number) {
		console.log("Clicked on "+i+" image");
		setIndex(i);
	}

	return (
		<div>
		<div className="mt-4 flex flex-wrap">
	{ images.map((image : Picture, i : number) =>
	<Image 
		className="m-[2px] inline" 
		key={image.name} 
		src={`/supporto-guida/${image.name}`} 
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
