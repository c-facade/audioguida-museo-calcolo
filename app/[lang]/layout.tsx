import { SiteFooter } from '@/components/layout/site-footer';
import * as React from "react";
import { getDictionary } from './dictionaries';

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
	const dict = await getDictionary(lang);
	console.log("layout language:", lang)
	return (
		<>
				<main className="h-dvh w-full max-w-screen-md flex-1">
					{children}
				</main>
				<footer className="w-full max-w-screen-md">
					<SiteFooter lang={lang} dict={dict} />
				</footer>
		</>
  );
}
