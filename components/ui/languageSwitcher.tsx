import Image from 'next/image';
import Link from 'next/link';

export function LanguageSwitcher({lang, url}) {
	return (	
					<div>
						{lang == 'it' ?
							<Link href={`/en${url}`}>
						<Image 
							alt="Switch to English"
							src="/en.png"
							width="30"
							height="30"
							className="size-[30px] "
						/>
							</Link>
							:
							<Link href={`/it${url}`}>
						<Image 
							alt="Switch to Italian"
							src="/it.png"
							width="30"
							height="30"
							className="size-[30px] "
						/>
							</Link>
					}
						</div>
	);
}
