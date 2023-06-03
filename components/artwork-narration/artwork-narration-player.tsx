'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Howl, Howler } from 'howler';
import Konva from 'konva';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';

import { Icons } from '@/components/ui/icons';
import { RoundButton } from '@/components/ui/round-button';

import { ArtworkNarration, GalleryTour } from '@/types';

interface ArtworkNarrationPlayerProps {
  galleryTour: GalleryTour;
  artworkNarrationIndex: number;
}

export function ArtworkNarrationPlayer({
  galleryTour,
  artworkNarrationIndex,
}: ArtworkNarrationPlayerProps) {
  const artworkNarration: ArtworkNarration = galleryTour.artworks[artworkNarrationIndex];
  const router = useRouter();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [currentAnnotation, setCurrentAnnotation] = useState('');
  const stageRef = useRef<any | null>(null);
  const stageParentRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<any | null>(null);
  const lastEventRef = useRef<any | null>(null);

  const imageUrl = `/tours/${galleryTour.slug}/${artworkNarration.slug}/object.jpg`;
  const [image] = useImage(imageUrl);

  const annotations = artworkNarration.annotations;

  const alt = '';

  const audioUrl = `/tours/${galleryTour.slug}/${artworkNarration.slug}/audio.mp3`;

  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const parentElement = stageParentRef.current;

    function handleResize([entry]) {
      const width = entry.contentRect.width;
      let height = entry.contentRect.height;

      if (image && image.naturalWidth && image.naturalHeight) {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        height = width / aspectRatio;
      }

      setDimensions({ width, height });
    }

    if (parentElement) {
      // Create a new Resize Observer instance and observe the stageParentRef
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(parentElement);

      // Initial call to handleResize function to set dimensions
      handleResize([{ contentRect: parentElement.getBoundingClientRect() }]);

      return () => {
        // Disconnect the observer when the component is unmounted
        if (parentElement) resizeObserver.unobserve(parentElement);
      };
    }
  }, [image]);

  useEffect(() => {
    if (!soundRef.current) {
      Howler.unload(); // stop any other sounds
      soundRef.current = new Howl({
        src: [audioUrl],
      });
    }

    const sound = soundRef.current;

    if (!isAudioPlaying) {
      sound.pause();
    } else {
      if (!sound.playing()) {
        sound.play();
      }

      const intervalId = setInterval(() => {
        if (!image) return;

        const currentTime = sound.seek();

        const currentAnnotation = annotations.find((event, index, array) => {
          const nextEvent = array[index + 1];
          return (
            currentTime >= event.start &&
            (!nextEvent || currentTime < nextEvent.start)
          );
        });

        if (currentAnnotation && currentAnnotation.text && sound.playing()) {
          setCurrentAnnotation(currentAnnotation.text);
        }

        if (
          currentAnnotation &&
          currentAnnotation.percentX &&
          currentAnnotation.percentY &&
          currentAnnotation.scale &&
          (!lastEventRef.current ||
            currentAnnotation.start !== lastEventRef.current.start)
        ) {
          lastEventRef.current = currentAnnotation;

          // Calculate stage coordinates that will put (percentX, percentY) coordinates
          // of the image at the center of the stage
          const stageX =
            dimensions.width / 2 -
            (currentAnnotation.percentX / 100) *
              image.naturalWidth *
              (dimensions.width / image.naturalWidth) *
              currentAnnotation.scale;
          const stageY =
            dimensions.height / 2 -
            (currentAnnotation.percentY / 100) *
              image.naturalHeight *
              (dimensions.height / image.naturalHeight) *
              currentAnnotation.scale;

          new Konva.Tween({
            node: imageRef.current,
            duration: 1,
            x: stageX,
            y: stageY,
            scaleX: currentAnnotation.scale,
            scaleY: currentAnnotation.scale,
          }).play();
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [
    isAudioPlaying,
    image,
    dimensions.height,
    dimensions.width,
    annotations,
    audioUrl,
  ]);

  function goObject(index) {
    const tobj = galleryTour.artworks[index];
    const url = `/tour/${galleryTour.slug}/${tobj.slug}`;
    router.push(url);
  }

  return (
    <>
      <div className="relative w-full">
        <div className="w-full" ref={stageParentRef}>
          <Stage
            width={dimensions.width}
            height={dimensions.height}
            ref={stageRef}
          >
            <Layer>
              <Image
                ref={imageRef}
                alt={alt}
                image={image}
                width={dimensions.width}
                height={dimensions.height}
                x={0}
                y={0}
                scaleX={1}
                scaleY={1}
              />
            </Layer>
          </Stage>
        </div>
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center"></div>
      </div>
      <div className="flex h-[70px] w-full items-start justify-center px-4 pt-2">
        {currentAnnotation}
      </div>
      <div className="mb-8 flex w-full items-center justify-between px-8">
        <RoundButton
          onClick={() => goObject(artworkNarrationIndex - 1)}
          disabled={artworkNarrationIndex === 0}
        >
          <Icons.chevronLeft className="h-10 w-10" />
          <span className="sr-only">Previous</span>
        </RoundButton>
        {!isAudioPlaying ? (
          <RoundButton onClick={() => setIsAudioPlaying(true)}>
            <Icons.play className="ml-1 h-12 w-12" />
            <span className="sr-only">Play audio</span>
          </RoundButton>
        ) : (
          <RoundButton onClick={() => setIsAudioPlaying(false)}>
            <Icons.pause className="h-12 w-12" />
            <span className="sr-only">Play audio</span>
          </RoundButton>
        )}
        <RoundButton
          onClick={() => goObject(artworkNarrationIndex + 1)}
          disabled={artworkNarrationIndex >= galleryTour?.artworks?.length - 1}
        >
          <Icons.chevronRight className="h-10 w-10" />
          <span className="sr-only">Next</span>
        </RoundButton>
      </div>
    </>
  );
}
