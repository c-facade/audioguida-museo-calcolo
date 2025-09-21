import Image from 'next/image';
import Link from 'next/link';

export function LanguageSwitcher({lang, url}) {
	const languages = ['it', 'en', 'fr'];
	console.log("current", lang);
	return (
		<div className="flex items-center">
			{
				languages.map((loc) => 
					<Link 
						key={loc}
						href={`/${loc}${url}`}
						className="m-1"	
					>
						<Image 
							alt={`Switch to ${loc}`}
							src={`/${loc}.png`}
							width="30"
							height="30"
							className={lang == loc ? "size-[28px] border-[3px] rounded-xl" : "size-[25px]"}

						/>
					</Link>
			)}
		</div>
	);
}
