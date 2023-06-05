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
    default: 'Museum Audio Tours',
    template: '%s | Museum Audio Tours',
  },
  description: 'Museum Audio Tours Prototype',
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
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-screen-md">
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
