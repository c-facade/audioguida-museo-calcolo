import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import '../style.css';

//TODO rendere il bottone più bello
//TODO redirection quando hai finito.

export default function Page() {
	// Make sure to run npm install @formspree/react
	// For more help visit https://formspr.ee/react-help


	return(
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
					Valuta l&apos;audioguida o segnala errori
				</h1>
				<form className="grid gap-y-6"
					action="https://formspree.io/f/xovleowz"
					method="POST"
				>
					<fieldset>
						<div className="fs-field">
							<label className="block text-sm font-medium"
								htmlFor="content-score">
								Come valuti i contenuti dell&apos;audioguida? (1 = pessimi, 5 = ottimi)
							</label>
							<input
								className="fs-slider"
								id="content-score"
								max="5"
								min="0"
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
								Come valuti il funzionamento dell&apos;audioguida? (1 = pessimo, 5 = ottimo)
							</label>
							<input
								className="fs-slider"
								id="func-score"
								max="5"
								min="0"
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
								Dacci il tuo feedback
							</label>
							<textarea
								className="resize-y appearance-none rounded-md border-0 px-3 py-2 text-black outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
								id="detailed-feedback"
								name="Feedback dettagliato"
								placeholder="Facci sapere cosa ha funzionato, cosa non ha funzionato, e come possiamo migliorare."
								required
							/>
						</div>
						<div className="m-3 flex flex-col gap-y-1.5">
							<label
								className="block font-[family-name:--font-family-display] text-sm font-medium text-[--color-text-default]"
								htmlFor="email-address"
							>
								Indirizzo email (opzionale)
							</label>
							<input
								className="h-10 appearance-none rounded-md border-0 px-3 text-black outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-0 focus-visible:outline-[--color-highlight] focus-visible:ring-[1.5px] focus-visible:ring-inset focus-visible:ring-[--color-border-active]"
								id="email-address"
								name="Indirizzo email"
							/>
							<p className="block text-sm text-[--color-text-muted]">
								Se vuoi che ti contattiamo per discutere, lasciaci la tua email.
							</p>
						</div>
					</fieldset>
					<div className="flex flex-row-reverse gap-x-6">
						<button
							className="cursor-pointer rounded-md bg-[--color-primary] px-8 py-4 text-sm font-medium leading-4 text-white transition-colors duration-200 hover:bg-[--color-primary-active] focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[--color-highlight]"

							type="submit"
						>
							Invia
						</button>
					</div>
				</form>
			</div>
		</section>);
}
