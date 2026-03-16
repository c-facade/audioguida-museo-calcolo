import type { Metadata } from "next";
import { SiteFooter } from '@/components/layout/site-footer';
import * as React from "react";
import { getDictionary } from '@/app/[lang]/dictionaries';
import "../../[lang]/style.css";
import Lnk from "@/components/ui/Lnk";


export async function generateMetadata() : Promise<Metadata> {
		let title : string, description : string;
		title = "Museo dell&apos;informatica a Pisa: Museo degli Strumenti per il Calcolo";
		description = "Scopri il Museo degli Strumenti per il Calcolo a Pisa, uno dei pochi musei italiani dedicati alla storia dell&apos;informatica. Computer storici, macchine Olivetti e la Calcolatrice Elettronica Pisana."; 
		return {
			title: title,
			description: description,
		};
}

export default async function Page(){
	let lang = 'it';
	const dict = await getDictionary(lang);
	return(
		<div>
			<section className="px-2 pb-8 pt-6 md:py-10">
				<h1 className="mb-3 text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
					Un museo dell&apos;informatica a Pisa
				</h1>
				<p>Quando si visita Pisa, la maggior parte dei visitatori pensa subito alla <Lnk href="https://it.wikipedia.org/wiki/Torre_di_Pisa">Torre Pendente</Lnk> e ai monumenti della <Lnk href="https://www.opapisa.it/">Piazza dei Miracoli</Lnk>. Ma la città ospita anche uno dei musei scientifici più originali d&apos;Italia: il <Lnk href="https://msc.sma.unipi.it">Museo degli Strumenti per il Calcolo</Lnk>, dedicato alla storia delle macchine calcolatrici e dei primi computer.</p>
				<p>Il museo fa parte del <Lnk href="http://sma.unipi.it/">Sistema Museale di Ateneo</Lnk> dell&apos;Università di Pisa ed è situato dentro la <Lnk href="https://maps.app.goo.gl/5vyPooC4BJZNDn9t6">Cittadella Galileiana</Lnk>, area nota anche con il nome di &quot;Vecchi Macelli&quot;.</p>
				

				<h2 className="py-3 text-xl font-extrabold">La storia dei computer e delle macchine per il calcolo</h2>
				<p>
				Il museo racconta l&apos;evoluzione delle tecnologie di calcolo attraverso una collezione di studenti scientifici che coprono oltre due secoli di storia. Tra gli oggetti esposti si trovano:
				</p>
				<ul style={{listStyle: "inside"}} className="p-2 md:p-4">
					<li>
						Macchine calcolatrici meccaniche dell&apos;Ottocento, come <Lnk href="/it/tour/msc/aritmometri">l&apos;Aritmometro</Lnk> di Colmar;
					</li>
					<li>
						Dispositivi elettromeccanici del primo Novecento, come le <Lnk href="/it/tour/msc/calc-elettromeccaniche">Calcolatrici Olivetti</Lnk>;
					</li>
					<li>
						Grandi computer degli anni Cinquanta e Sessanta, come la <Lnk href="/it/tour/msc/bull-gamma-3">Bull Gamma 3</Lnk> ed il <Lnk href="/it/tour/msc/elea-9104">CINAC</Lnk>;
					</li>
					<li>
						Sistemi informatici utilizzati nella ricerca scientifica, come il visualizzatore di <Lnk href="/it/tour/msc/grafica-musica">grafica 3D</Lnk> Evans & Sutherland;
					</li>
					<li>
						I modelli più famosi di personal computer: il Commodore 64, IBM Personal Computer, Apple II <Lnk href="/it/tour/msc/personal-computer/">ed altri</Lnk>.
					</li>
				</ul>

				<p>Queste macchine testimoniano il passaggio storico dalle tecnologie meccaniche ai primi computer elettronici, e poi all&apos;arrivo del computer nelle case di tutti.
				</p>


				<h2 className="py-3 text-xl font-extrabold">I computer Olivetti e l&apos;informatica italiana.</h2>
				<p>Una parte molto importante della collezione del Museo degli Strumenti per il calcolo è dedicata alla storia della <Lnk href="https://it.wikipedia.org/Olivetti">Olivetti</Lnk>, una delle aziende più innovative dell&apos;Italia del Novecento e protagonista nello sviluppo dell&apos;informatica europea.</p>
			<p>Il museo conserva una vasta raccolta di macchine prodotte dall&apos;azienda, che documentano l&apos;evoluzione delle tecnologie per il calcolo e per l&apos;elaborazione delle informazioni. Tra gli oggetti esposti si trovano:</p>
				<ul style={{listStyle: "inside"}} className="p-2 md:p-4">
					<li>Due grandi calcolatori della serie <Lnk href="/it/msc/sala-4-olivetti">Elea</Lnk>, tra i primi computer elettronici progettati e prodotti in Italia;</li>
					<li>
						Numerose <Lnk href="/it/tour/msc/videoscrittura">macchine da scrivere</Lnk>, simbolo della storia industriale e del design Olivetti;
					</li>
					<li>
						Calcolatrici meccaniche ed elettromeccaniche utilizzate in uffici e centri di calcolo nel corso del Novecento;
					</li>
					<li>
						Computer da scrivania come l&apos;Olivetti P4060, progettato per applicazioni scientifiche ed aziendali;
					</li>
					<li>Personal computer degli anni Ottanta come l&apos;Olivetti M20 e l&apos;Olivetti M21</li>
				</ul>
				<p>Uno degli oggetti più importanti della collezione è la <Lnk href="/it/tour/msc/p101">Olivetti Programma 101</Lnk>, presentata nel 1965 e spesso considerata il primo computer desktop programmabile della storia.
				</p>
				<p> Il museo conserva una Programma 101 e una Programma 102, quest&apos;ultima perfettamente funzionante. Questa macchina rappresenta una tappa fondamentale nell&apos;evoluzione dell&apos;informatica, perché portò per la prima volta la potenza computazionale di un computer direttamente sulle scrivanie delle persone.
				</p>
				<p>
Attraverso questi oggetti è possibile seguire da vicino l’evoluzione delle tecnologie Olivetti: dalle macchine per ufficio ai grandi computer, fino ai sistemi che hanno contribuito alla diffusione dell’informatica negli ambienti di lavoro.
				</p>
				
				
				<h2 className="py-3 text-xl font-extrabold">I personal computer degli anni Ottanta e Novanta, Retro-computing e Videogiochi</h2>
				<p>Il Museo degli Strumenti per il calcolo è anche una destinazione particolarmente interessante per gli appassionati di retro-computing e per chi ha nostalgia dei computer domestici degli anni Ottanta.
				</p>
				<p>Conserva una ricca collezione di <Lnk href="/it/tour/msc/personal-computer">personal computer</Lnk> storici. La lista completa di Mini e Personal Computer presenti al museo si trova qui <Lnk href="http://www.fondazionegalileogalilei.it/museo/collezioni/calcolatori/mini_pc.html">Collezioni: Mini e Personal Computer</Lnk> anche se solo una trentina sono in esposizione.</p>
			<p>Tra questi si trovano numerosi modelli prodotti da Apple, insieme a computer molto amati dagli appassionati come il Commodore 64, il Commodore VIC-20 e l’Commodore Amiga.</p><p>
La collezione comprende inoltre computer appartenenti ad altre piattaforme importanti della storia dell’informatica personale, come sistemi della famiglia MSX, il TRS-80, l’IBM Personal Computer e lo ZX Spectrum.</p>
				<p>È possibile interagire direttamente con il Commodore 64, sia per sperimentare con la programmazione che giocando a Ghosts vs Goblins.</p>
				<p></p>
				<p>Il museo ospita inoltre una piccola sezione dedicata alla storia dei <Lnk href="/it/tour/msc/videogiochi">videogiochi</Lnk>, con diverse console che hanno segnato le prime generazioni del gioco elettronico. Tra queste si trovano sistemi come l’Atari 2600, il Nintendo Entertainment System e il Sega Master System, accanto ad altre console meno diffuse che testimoniano la grande varietà del mercato dei videogiochi negli anni Ottanta e Novanta.</p><p>

Questa sezione permette di riscoprire un periodo fondamentale della storia dell’informatica, quando i computer e i videogiochi iniziarono a entrare nella vita quotidiana di milioni di persone.</p>

				<h2 className="py-3 text-xl font-extrabold">La Calcolatrice Elettronica Pisana</h2>
				<p>
					Uno dei pezzi più importanti della collezione è la <Lnk href="/it/tour/msc/calcolatrice-elettronica-pisana">Calcolatrice Elettronica Pisana</Lnk>(CEP), completata nel 1961, uno dei primi computer realizzati in Italia.
				</p>
				<p> La CEP è un esemplare unico, costruito per la ricerca scientifica e utilizzato presso il Centro Studi Calcolatrici Elettroniche e il Consiglio Nazionale delle Ricerche(CNR). La sua struttura, composta da grandi armadi metallici dalle pareti in vetro, permette ai visitatori di osservare da vicino come erano costruiti i primi computer elettronici. 
				</p><p>
					A differenza dei dispositivi moderni, dove tutti i componenti sono miniaturizzati, nella CEP è possibile riconoscere fisicamente le parti fondamentali di un calcolatore: unità di elaborazione, <Lnk href="/it/tour/msc/cep-memoria/">memoria RAM</Lnk>, memoria a <Lnk href="/it/tour/msc/cep-tamburo">disco rigido</Lnk>, circuiti aritmetico-logici e sistema di alimentazione.
				</p>
				<p>La macchina è costruita per la maggior parte da <Lnk href="https://it.wikipedia.org/wiki/Valvola_termoionica">valvole termoioniche</Lnk>, la tecnologie elettronica utilizzata prima dell&apos;introduzione dei transistor. </p>
				<p>La prima versione della CEP, chiamata <Lnk href="https://www.progettohmr.it/">Macchina Ridotta</Lnk>(MR), fu completata nel 1957, divenendo il primo computer progettato e costruito interamente in Italia. In seguito la Macchina Ridotta venne smontata e i suoi componenti furono riutilizzati per realizzare la versione definitiva della Calcolatrice Elettronica Pisana.</p>
				<p>Il progetto CEP contribuì alla nascita, nel 1969, del primo corso di laurea in Informatica in Italia: il corso di Scienze dell&apos;Informazione presso l&apos;Università di Pisa.</p>
				
				<h2 className="py-3 text-xl font-extrabold">Una visita ideale per chi ama scienza e tecnologia</h2>
				<p>Il Museo degli Strumenti per il Calcolo è una destinazione perfetta per chi è curioso di scoprire come sono nati i computer moderni.

	Il percorso espositivo permette di osservare macchine rare, grandi calcolatori storici e strumenti che raccontano l’evoluzione delle tecnologie informatiche.
				</p><p>
					Per chi visita Pisa e desidera scoprire qualcosa di diverso dai percorsi turistici più tradizionali, questo museo rappresenta una delle mete più originali della città.</p>
			
				<h2 className="py-3 text-xl font-extrabold">Altri musei scientifici da visitare a Pisa</h2>
				<p>Il Museo degli Strumenti per il Calcolo fa parte del Sistema Museale di Ateneo dell&apos;Università di Pisa, una rete di musei universitari che conservano importanti collezioni scientifiche.

Visitando il museo è possibile scoprire anche altri spazi espositivi della stessa rete.
					</p>
				<h3 className="py-2 font-bold">Ludoteca Scientifica</h3>

				<p>Nell&apos;edificio di fronte si trova la <Lnk href="www.msf.sma-unipi.it">Ludoteca Scientifica</Lnk> dell&apos;Università di Pisa, uno spazio interattivo dedicato alla divulgazione scientifica con esperimenti e attività per tutte le età.
				</p>
				<p>La Ludoteca Scientifica ha una collezione di Strumenti di Fisica storici, risalenti al Settecento e all&apos;Ottocento.</p>
				<h3 className="py-2 font-bold">Collezioni egittologiche</h3>

				<p>Le Collezioni Egittologiche dell&apos;Università di Pisa conservano reperti provenienti dall’antico Egitto e testimoniano la lunga tradizione degli studi egittologici dell’università.
				</p>
				<h3 className="py-2 font-bold">Museo di Anatomia Patologica</h3>
				<p>
					Il <Lnk href="map.sma.unipi.it">Museo di Anatomia Patologica</Lnk> dell&apos;Università di Pisa racconta la storia della medicina attraverso preparati anatomici storici, modelli scientifici e strumenti utilizzati nella ricerca medica.
				</p>
				<h2 className="py-3 text-xl font-extrabold">Cosa vedere a Pisa oltre ai monumenti più famosi</h2>
				<p>Se stai cercando cosa vedere a Pisa oltre alla torre pendente e al duomo, il Museo degli Strumenti per il Calcolo è una tappa insolita ma che vi divertirà.</p>
				<p>Qui è possibile toccare con mano le calcolatrici meccaniche, osservare grandi computer antichi, seguire la storia dell&apos;Olivetti e vedere da vicino la Calcolatrice Elettronica Pisana, uno dei primi computer realizzati in Italia.</p>
				<p>La visita può essere completata con altri musei del <Lnk href="sma.unipi.it">Sistema Museale di Ateneo</Lnk> dell&apos;Università di Pisa, creando un itinerario dedicato alla scienza e alla storia della ricerca universitaria.</p>
				<p>Per chi visita Pisa e vuole scoprire un lato meno conosciuto della città, questo museo rappresenta una delle esperienze più interessanti.</p>
				<h2 className="py-3 text-xl font-extrabold">Domande frequenti sul museo dell&apos;informatica a Pisa</h2>
				<h3 className="p-2 font-bold">Esiste un museo dell&apos;informatica a Pisa?</h3>
				<p>Sì, il Museo degli Strumenti per il Calcolo è un museo dedicato alla storia dei computer e delle macchine per il calcolo, situato nella Cittadella Galileiana, Via Bonanno Pisano, Largo Padre Renzo Spadoni, 2.</p>
				<h3 className="p-2 font-bold">Cosa si può vedere nel museo?</h3>
				<p>La collezione comprende macchine calcolatrici storiche, grandi computer degli anni Cinquanta e Sessanta, e numerosi personal computer e console per videogiochi.
				</p>	
				<h3 className="p-2 font-bold">Il museo è adatto anche ai non esperti?
				</h3>
				<p>Sì. Il percorso espositivo è pensato per raccontare la storia dell&apos;informatica in modo accessibile. È presente un&apos;audioguida per spiegare il contesto storico e il funzionamento delle macchine in esposizione.</p>
				<h3 className="p-2 font-bold">Quando è possibile visitare il museo?</h3>
				<p>Dal 12 marzo 2026 Il Museo osserverà il seguente orario di apertura:
				lunedì, mercoledì e venerdì: 8:30 – 14:30<br/>
				martedì e giovedì: 8:30 – 18:00<br/>
				sabato, domenica: chiuso.<br />
				Consigliamo di verificare gli <Lnk href="https://www.msc.sma.unipi.it/orari/">Orari di Apertura</Lnk> sul sito web del museo.
				</p>
				<h3 className="p-2 font-bold">Quanto costa visitare il museo?</h3>
				<p>L&apos;ingresso al museo costa € 2.50, le visite guidate € 5.00. Verifica che possiedi uno sconto sul sito del museo a <Lnk href="https://www.msc.sma.unipi.it/tariffe/">Tariffe</Lnk>.</p>
				<h3 className="p-2 font-bold">Dovrei prenotare una visita guidata?</h3>
				<p>Le visite guidate permettono di scoprire molte più informazioni sul museo, e di partecipare a dimostrazioni pratiche, tra cui l&apos;interazione con un circuito costruito con valvole termoioniche, calcoli con una calcolatrice meccanica e programmazione sul commodore 64. L&apos;audioguida contiene un breve riassunto del contenuto delle visite guidate, in quanto è scritta da una delle nostre guide museali. Per partecipare ad una visita guidata, è necessaria la prenotazione.</p>
				<h3 className="p-2 font-bold">C&apos;è un&apos;audioguida?</h3>
				<p>Il Museo degli Strumenti per il Calcolo offre un&apos;audioguida gratuita visitabile al sito <Lnk href="audioguide.sma.unipi.it">Audioguide SMA</Lnk> o tramite QR code. È interamente online, non richiede iscrizioni o download, e può essere visitata dal cellulare o da computer/tablet. Contiene descrizioni e contesto per gli elementi più importanti del museo.</p>
			

			</section>


			<footer className="w-full max-w-screen-md">
				<SiteFooter lang={lang} dict={dict} />
			</footer>
		</div>
	);
}
