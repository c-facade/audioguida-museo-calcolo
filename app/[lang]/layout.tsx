import { SiteFooter } from '@/components/layout/site-footer';
import * as React from "react";
import { getDictionary } from './dictionaries';

export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>
}) {
	let {lang} = await params;
	const dict = await getDictionary(lang);
	return (
		<>
				<main className="h-dvh w-full max-w-(--breakpoint-md) flex-1">
					{children}
				</main>
				<footer className="w-full max-w-(--breakpoint-md)">
					<SiteFooter lang={lang} dict={dict} />
				</footer>
		</>
  );
}
