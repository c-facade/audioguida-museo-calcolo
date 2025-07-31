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
							className=" block rounded-sm hover:text-white"
						>{dict.footer.ilmuseo}</a>
					</li>
						<li>
							<a href={`/${lang}`}
							className=" block rounded-sm hover:text-white"
							>{dict.footer.audioguide}</a>
						</li>
						<li>
							<a href={`/${lang}/about`}
							className=" block rounded-sm hover:text-white"
							>About</a>
						</li>
					</ul>
				</div>
				<div className="font-extrabold text-neutral-500">
					<a href={`/${lang}/feedback`}
						className=" block rounded-sm hover:text-white"
					>{dict.footer.feedback}</a>
				</div>

			</nav>
			{/*
			<h2 className="text-xl font-extrabold text-neutral-600">	
				<a href='https://www.msc.sma.unipi.it/'>{dict.footer.ilmuseo}</a> <span> | </span>
				<a href='/'>{dict.footer.audioguide}</a>
			</h2>
			<p className="font-extrabold text-neutral-600">
				<a href={`/${lang}/feedback`}>{dict.footer.feedback}</a>
				</p>
				*/}
    </section>
  );
}
