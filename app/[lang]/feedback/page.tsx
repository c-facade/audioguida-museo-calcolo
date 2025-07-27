//import { useForm, ValidationError } from "@formspree/react";
import '../style.css';
import { getDictionary } from '../dictionaries';

//TODO rendere il bottone più bello
//TODO redirection quando hai finito.

export default async function FeedbackForm({
	params 
} : {
	params : Promise<{lang: string}>
}) {
	const {lang} = await params;
	console.log(lang);
	const dict = await getDictionary(lang);

	return(
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
				<h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
					{dict.feedback.titolo}
				</h1>
				<form className="grid gap-y-6"
					action="https://formspree.io/f/xovleowz"
					method="POST"
				>
					<fieldset>
						<div className="fs-field">
							<label className="block text-sm font-medium"
								htmlFor="content-score">
								{dict.feedback.contenuti}	
							</label>
							<input
								className="fs-slider"
								id="content-score"
								max="5"
								min="1"
								name="Valutazione contenuto"
								required
								step="1"
								type="range"
							/>
							<div className="slider-label-container">
								<span className="slider-label-text">1</span>
								<span className="slider-label-text">2</span>
								<span className="slider-label-text">3</span>
								<span className="slider-label-text">4</span>
								<span className="slider-label-text">5</span>
							</div>
						</div>
						<div className="fs-field">
							<label className="block text-sm font-medium"
								htmlFor="func-score">
								{dict.feedback.funzionamento}
							</label>
							<input
								className="fs-slider"
								id="func-score"
								max="5"
								min="1"
								name="Valutazione funzionamento"
								required
								step="1"
								type="range"
							/>
							<div className="slider-label-container">
								<span className="slider-label-text">1</span>
								<span className="slider-label-text">2</span>
								<span className="slider-label-text">3</span>
								<span className="slider-label-text">4</span>
								<span className="slider-label-text">5</span>
							</div>
						</div>

						<div className="m-3 flex flex-col gap-y-1.5">
							<label
								className="block text-sm font-medium"
								htmlFor="detailed-feedback"
							>
								{dict.feedback.spiegare}
							</label>
							<textarea
								className="resize-y appearance-none rounded-md border-0 px-3 py-2 text-black outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
								id="detailed-feedback"
								name="Feedback dettagliato"
								placeholder={dict.feedback.faccisapere}
								required
							/>
						</div>
						<div className="m-3 flex flex-col gap-y-1.5">
							<label
								className="block font-[family-name:--font-family-display] text-sm font-medium"
								htmlFor="email-address"
							>
								{dict.feedback.email}
							</label>
							<input
								className="h-10 appearance-none rounded-md border-0 px-3 text-black outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
								id="email-address"
								name="Indirizzo email"
							/>
							<p className="block text-sm text-[--color-text-muted]">
								{dict.feedback.emailspiega}
							</p>
						</div>
					</fieldset>
					<div className="flex flex-row-reverse gap-x-6">
						<button
							className="cursor-pointer rounded-md bg-neutral-800 px-8 py-4 text-sm font-medium leading-4 text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[--color-highlight]"

							type="submit"
						>
							{dict.feedback.invia}
						</button>
					</div>
				</form>
			</div>
		</section>);
}
