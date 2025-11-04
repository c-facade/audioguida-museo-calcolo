'use client';
import Link from 'next/link';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <section className="container grid max-w-[700px]  items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="max-w-[800px] flex-col items-start gap-2">
				<h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl"> Audioguide
				</h1>
      <h2 className="mb-5 text-center">The selected language seems not to have been implemented yet.</h2>
					<div className="m-1 rounded-lg border border-neutral-500 p-3 hover:bg-neutral-800 ">
						<Link href="/">Back to main page</Link>
					</div>
					<div className="m-1 rounded-lg border border-neutral-500 p-3 hover:bg-neutral-800">	
				<Link href="/en/feedback">Send us feedback</Link>
					</div>	
			</div>
			</section>
					);
}
