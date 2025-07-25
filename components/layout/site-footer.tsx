import { getDictionary } from '../../app/[lang]/dictionaries';
import * as React from "react";


export async function SiteFooter(param) {
	const {lang} = await param;
	const dict = await getDictionary(lang);
	return (
    <section className="mt-5 container mb-7">
			<h2 className="text-xl font-extrabold text-neutral-600">
				
				<a href='https://www.msc.sma.unipi.it/'>{dict.footer.ilmuseo}</a> <span> | </span>
				<a href='/'>{dict.footer.audioguide}</a>
			</h2>
			<p className="font-extrabold text-neutral-600">
				<a href={`/${param.lang}/feedback`}>{dict.footer.feedback}</a></p>
    </section>
  );
}
