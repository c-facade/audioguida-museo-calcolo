// app/page.tsx

import TrackedLink from '@/components/TrackedLink';
import Image from 'next/image';

export default async function RootPage() {
	//const languages=["it", "en", "fr"];
	const languages= {
		"it": ["Italiano", "Museo degli Strumenti per il Calcolo"],
		"en": ["English", "Museum of Computing Machinery"],
		"fr": ["Français", "Musée des machines de calcul"],
		"eo": ["Esperanto", "Muzeo de Kalkulaj Iloj"], 
	}

	return(
		<section className="container grid max-w-[700px]  items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="max-w-[800px] flex-col items-start gap-2">
				<h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl"> Audioguide
				</h1>
        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
					Choose your language
				</p>
			</div>
			<div className="flex flex-col gap-4"

			>
				<Image
					className="h-48 w-full object-cover"
					alt="esterno museo"
					src={`testata-interna.jpg`}
					width="500"
					height="500"
					priority={true}
					fetchPriority="high"
				/>
        {Object.keys(languages).map((locale) => (
					<TrackedLink 
						href={`/${locale}/tour/msc/storia-informatica`} 
						key={locale} 
						lang={locale}>
						<div
								className="rounded-lg p-3 hover:bg-neutral-800"
								>
								<h2 className="mt-2 text-xl font-extrabold">
									{
										languages[locale][0]
								}&nbsp;
								<Image
									className="inline size-[20px]"
									alt={`${locale}`}
									src={`${locale}_squared.png`}
									width="20"
									height="20"
								/>
							</h2>
							<p className="text-neutral-300">{
									languages[locale][1]
								}
							</p>
							</div>
					</TrackedLink>
				))}
				<div className="font-extrabold text-neutral-500">
					<a href={`/visit/cosa-vedere-pisa-museo-informatica`}
						className=" block rounded-sm hover:text-white"
					>Descrizione</a>
				</div>
			
			</div>

		</section>
	);
}
