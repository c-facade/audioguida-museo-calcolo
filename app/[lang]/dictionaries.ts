import 'server-only'

// da aggiungere esperanto(eo)
const supportedLangs=['it', 'en', 'fr', 'eo'];

const dictionaries = {
	en: () => import('../../dict/en.json').then((module) => module.default),
	it: () => import('../../dict/it.json').then((module) => module.default),
	fr: () => import('../../dict/fr.json').then((module) => module.default),
	eo: () => import('../../dict/eo.json').then((module) => module.default),
}

const toursData = {
	en: () => import('../../public/tours/tours_en.json').then((module) => module.default),
	it: () => import('../../public/tours/tours_it.json').then((module) => module.default),
	fr: () => import('../../public/tours/tours_fr.json').then((module) => module.default),
	eo: () => import('../../public/tours/tours_eo.json').then((module) => module.default),
}

export const getDictionary = async (locale : string) => {
	if (!(locale in supportedLangs)){
		return dictionaries[locale]()
	}
	else {
		console.warn("Unsupported language! Falling back to English.");
		return dictionaries['en']();
	}
}
export const getToursData = async (locale: string) => {
	if (!(locale in supportedLangs)){
		return toursData[locale]()
	}
	else {
		throw new Error("Unsupported tour language!");
	}
}

