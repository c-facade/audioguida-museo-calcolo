'use client';

import { useEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';
import Konva from 'konva';
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';

import { Icons } from '@/components/icons';
import { RoundButton } from './round-button';

export function TourObjectImagePresentation({ tour, tourObject }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const stageRef = useRef<any | null>(null);
  const stageParentRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<any | null>(null);
  const lastEventRef = useRef<any | null>(null);

  const imageUrl = `/tours/${tour.slug}/${tourObject.slug}/object.jpg`;
  const [image] = useImage(imageUrl);

  const timeline = tourObject.timeline;

  const alt = '';

  const audioUrl = `/tours/${tour.slug}/${tourObject.slug}/audio.mp3`;

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
    }
  }, [
    isAudioPlaying,
    image,
    dimensions.height,
    dimensions.width,
    timeline,
    audioUrl,
  ]);

  function startAudio() {
    setIsAudioPlaying(true);
  }

  function pauseAudio() {
    setIsAudioPlaying(false);
  }

  return (
    <>
      <div className="relative my-6 w-full">
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
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        </div>
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
