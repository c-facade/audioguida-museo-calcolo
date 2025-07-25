import { SiteFooter } from '@/components/layout/site-footer';
import * as React from "react";

// TODO: Image with src "/tours/msc/image.jpg" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
//Read more: https://nextjs.org/docs/api-reference/next/image#priority
// TODO: dynamically set html lang with metadata


export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>
}) {
	const {lang} = await params;
	console.log("layout language:", lang)
  return (
		<body className="bg-black font-sans text-neutral-50 antialiased">
			<div className="flex min-h-screen w-full flex-col items-center "> {/*justify center*/}
				<main className="w-full max-w-screen-md flex-1">
					{children}
				</main>
				<footer className="w-full max-w-screen-md">
					<SiteFooter lang={lang} />
				</footer>
			</div>
		</body>
  );
}
