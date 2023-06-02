'use client';

import { Icons } from '@/components/icons';
import { RoundButton } from '@/components/tours/round-button';
import { useRouter } from 'next/navigation';

export function TourNav({ tour, tourObjectIndex }) {
  const router = useRouter();

  function goObject(index) {
    const tourObject = tour.objects[index];
    const url = `/tour/${tour.slug}/${tourObject.slug}`;
    router.push(url);
  }

  return (
    <>
      {tourObjectIndex > 0 && (
        <RoundButton size="md" onClick={() => goObject(tourObjectIndex - 1)}>
          <Icons.chevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous</span>
        </RoundButton>
      )}
      {tourObjectIndex < tour?.objects?.length - 1 && (
        <RoundButton size="md" onClick={() => goObject(tourObjectIndex + 1)}>
          <Icons.chevronRight className="h-8 w-8" />
          <span className="sr-only">Next</span>
        </RoundButton>
      )}
    </>
  );
}
