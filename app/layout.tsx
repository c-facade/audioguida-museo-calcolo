import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Sistema Museale di Ateneo',
    template: '%s | Museum Audio Tours',
  },
  description: 'Audioguide Sistema Museale di Ateneo',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-black font-sans text-neutral-50 antialiased">
				<div className="flex min-h-screen w-full flex-col items-center "> {/*justify center*/}
          <main className="w-full max-w-screen-md flex-1">
						{children}
					</main>
					<footer className="w-full max-w-screen-md">
						<SiteFooter />
					</footer>
        </div>
      </body>
    </html>
  );
}
