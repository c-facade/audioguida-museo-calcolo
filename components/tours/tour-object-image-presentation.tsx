'use client';

import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
import { Howl } from 'howler';
import Konva from 'konva';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';
import { Icons } from '@/components/icons';
import { RoundButton } from './round-button';

export function TourObjectImagePresentation({ tour, tourObject }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [sound, setSound] = useState<any | null>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const stageRef = useRef<any | null>(null);
  const imageRef = useRef<any | null>(null);
  const lastEventRef = useRef<any | null>(null);

  const imageUrl = `/tours/${tour.slug}/${tourObject.slug}/object.jpg`;
  const [image] = useImage(imageUrl);

  const timeline = tourObject.timeline;

  const alt = '';

  const audioUrl = `/tours/${tour.slug}/${tourObject.slug}/audio.mp3`;

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let height = window.innerHeight;

      if (image && image.naturalWidth && image.naturalHeight) {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        height = width / aspectRatio;
      }

      setDimensions({ width, height });
    }

    window.addEventListener('resize', handleResize);

    // Initial call to handleResize function to set dimensions
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [image]); // Rerun effect if image changes

  const createSound = () => {
    return new Howl({
      src: [audioUrl],
    });
  };

  useEffect(() => {
    if (isAudioPlaying) {
      if (!sound) setSound(createSound());
      if (!sound || sound.playing()) return;

      sound.play();

      const intervalId = setInterval(() => {
        if (!image) return;

        const currentTime = sound.seek();

        const currentEvent = timeline.find((event, index, array) => {
          const nextEvent = array[index + 1];
          return (
            currentTime >= event.start &&
            (!nextEvent || currentTime < nextEvent.start)
          );
        });

        if (
          currentEvent &&
          (!lastEventRef.current ||
            currentEvent.start !== lastEventRef.current.start)
        ) {
          lastEventRef.current = currentEvent;

          // Calculate stage coordinates that will put (percentX, percentY) coordinates
          // of the image at the center of the stage
          const stageX =
            dimensions.width / 2 -
            (currentEvent.percentX / 100) *
              image.naturalWidth *
              (dimensions.width / image.naturalWidth) *
              currentEvent.scale;
          const stageY =
            dimensions.height / 2 -
            (currentEvent.percentY / 100) *
              image.naturalHeight *
              (dimensions.height / image.naturalHeight) *
              currentEvent.scale;

          new Konva.Tween({
            node: imageRef.current,
            duration: 1,
            x: stageX,
            y: stageY,
            scaleX: currentEvent.scale,
            scaleY: currentEvent.scale,
          }).play();
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    } else {
      if (sound) {
        sound.pause();
      }
    }
  }, [isAudioPlaying, image, dimensions.height, dimensions.width, sound, timeline, createSound]);

  function startAudio() {
    setIsAudioPlaying(true);
  }

  function pauseAudio() {
    setIsAudioPlaying(false);
  }

  return (
    <>
      <div className="my-6 flex w-full items-center justify-center">
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
      <div className="mb-4 flex w-full items-center justify-center">
        {!isAudioPlaying ? (
          <RoundButton onClick={() => startAudio()}>
            <Icons.play className="ml-1 h-8 w-8" />
            <span className="sr-only">Play audio</span>
          </RoundButton>
        ) : (
          <RoundButton onClick={() => pauseAudio()}>
            <Icons.pause className="h-8 w-8" />
            <span className="sr-only">Play audio</span>
          </RoundButton>
        )}
      </div>
    </>
  );
}
