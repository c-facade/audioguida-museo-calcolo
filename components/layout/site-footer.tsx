import * as React from "react";


export function SiteFooter({lang, dict}){
	return (
    <section className="container mb-7 mt-5">
			<h2 className="text-xl font-extrabold text-neutral-600">
				
				<a href='https://www.msc.sma.unipi.it/'>{dict.footer.ilmuseo}</a> <span> | </span>
				<a href='/'>{dict.footer.audioguide}</a>
			</h2>
			<p className="font-extrabold text-neutral-600">
				<a href={`/${lang}/feedback`}>{dict.footer.feedback}</a>
			</p>
    </section>
  );
}
