import { Inter } from 'next/font/google';
import { Russo_One } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const russo = Russo_One(
	{ subsets: ['latin-ext'],
		weight: "400"
});

