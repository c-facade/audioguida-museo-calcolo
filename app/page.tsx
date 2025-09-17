// app/page.tsx

import { connectToDatabase } from '@/lib/mongo';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import {redirect} from 'next/navigation';

export default async function RootPage() {	
	// per avere il numero di visite.
	const result = await connectToDatabase();
	if (result != null) {
		const { client } = await connectToDatabase();
		const visitors = client.db("analytics").collection("visitors");
		const d = new Date();
		const headersList = await headers();
		const locale = headersList.get('accept-language');
		const userAgent = headersList.get('user-agent');
		const referrer = headersList.get('referer') || null;
		let admin = false;
		if(userAgent != null && locale != null) {
			const adminqualities = userAgent + locale;
			console.log(adminqualities);
			if((userAgent + locale)== "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:142.0) Gecko/20100101 Firefox/142.0en-US,en;q=0.5"){
				admin = true;
			}
		}
		visitors.insertOne(
			{
				"time": d.toString(),
				"locale": locale,
				"device": userAgent,
				"referrer": referrer,
				"admin": admin
			}
		);
		console.log("inserted yeah");
		let risultato = await visitors.find().toArray();
		console.log(risultato);
	}
	const languages=["it", "en"];
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
				/>
        {languages.map((lang) => (
					<Link href={`/${lang}/tour/msc/intro`} key={lang} >
						<div
								className="rounded-lg p-3 hover:bg-neutral-800"
								>
								<h2 className="mt-2 text-xl font-extrabold">
									{
								lang == 'it'?
								"Italiano " :
									"English "
								}
								<Image
									className="inline size-[20px]"
									alt={`${lang}`}
									src={`${lang}_squared.png`}
									width="20"
									height="20"
								/>
							</h2>
							<p className="text-neutral-300">{
								lang == 'it' ?
									"Museo degli Strumenti per il Calcolo" :
									"Museum of Computing machinery"
								}
							</p>
							</div>
					</Link>
        ))}
      </div>
		</section>
	);
}
