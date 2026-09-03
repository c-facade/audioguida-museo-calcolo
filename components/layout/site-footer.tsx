import * as React from "react";


export function SiteFooter({lang, dict}){
	return (
		<section className="container mb-7 mt-5">
			<nav>
				<div className="flex w-auto items-center justify-between text-xl font-extrabold text-neutral-500">
					<ul className="flex flex-row space-x-8">
					<li>
						<a 
							href="https://www.msc.sma.unipi.it"
							className=" block rounded-xs hover:text-white"
						>{dict.footer.ilmuseo}</a>
					</li>
						<li>
							<a href={`/${lang}`}
							className=" block rounded-xs hover:text-white"
							>{dict.footer.audioguide}</a>
						</li>
						<li>
							<a href={`/${lang}/about`}
							className=" block rounded-xs hover:text-white"
							>About</a>
						</li>
					</ul>
				</div>
				<div className="font-extrabold text-neutral-500">
					<a href={`/${lang}/feedback`}
						className=" block rounded-xs hover:text-white"
					>{dict.footer.feedback}</a>
				</div>

			</nav>
    </section>
  );
}
