import 'server-only'

// da aggiungere esperanto(eo)

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

export const getDictionary = async (locale : string) => dictionaries[locale]()
export const getToursData = async (locale: string) => toursData[locale]()

