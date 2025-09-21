import 'server-only'

const dictionaries = {
	en: () => import('../../dict/en.json').then((module) => module.default),
	it: () => import('../../dict/it.json').then((module) => module.default),
	fr: () => import('../../dict/fr.json').then((module) => module.default)
}

export const getDictionary = async (locale : string) => dictionaries[locale]()
