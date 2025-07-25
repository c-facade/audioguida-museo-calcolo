import { getDictionary } from '../../app/[lang]/dictionaries';
import * as React from "react";


export async function SiteFooter(param) {
	const dict = await getDictionary(param.lang);
	//console.log("definitivo:", dict);
	return (
    <section className="container mt-5 mb-7">
			<h2 className="text-xl font-extrabold text-neutral-600">
				
				<a href='https://www.msc.sma.unipi.it/'>{dict.footer.ilmuseo}</a> <span> | </span>
				<a href='/'>{dict.footer.audioguide}</a>
			</h2>
			<p className="font-extrabold text-neutral-600">
			<a href="/feedback">{dict.footer.feedback}</a></p>
    </section>
  );
}
