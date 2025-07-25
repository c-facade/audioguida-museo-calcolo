import { SiteFooter } from '@/components/layout/site-footer';
import * as React from "react";

// TODO: dynamically set html lang with metadata
// SiteFooter cannot be used as a JSX component

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
