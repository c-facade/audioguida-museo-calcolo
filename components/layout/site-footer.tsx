import { MainNav } from '@/components/layout/main-nav';

export function SiteFooter(
	lang : string,
) {
	console.log("footer lang", lang)
	return (
    <section className="container mt-5 mb-7">
      <h2 className="text-xl font-extrabold text-neutral-600">
				<a href='https://www.msc.sma.unipi.it/'>Il Museo</a> <span> | </span>
				<a href='/'>Audioguide</a>
			</h2>
			<p className="font-extrabold text-neutral-600">
				<a href="/feedback">Valuta l&apos;audioguida</a></p>
    </section>
  );
}
