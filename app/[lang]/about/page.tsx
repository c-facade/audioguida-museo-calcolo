import { getDictionary } from "../dictionaries";

export default async function About(
{
	params 
} : {
	params : Promise<{lang: string}>
}){
	
	const {lang} = await params;
	console.log(lang);
	const dict = await getDictionary(lang);
	
	return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
				<h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
					{dict.about.titolo}
				</h1>
				<div className="m-1 mt-3 whitespace-pre-line">
					{dict.about.testo}
				</div>
			</div>
		</section>
	);	 
}


