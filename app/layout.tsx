import { connectToDatabase } from '@/lib/mongo';
import { Inter } from 'next/font/google';
import './globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});


export const metadata = {
  title: {
    default: 'MSC',
    template: '%s | Museum Audio Tours',
  },
  description: 'Audioguide',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
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
    <html className={inter.className} suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
		<body className="bg-black font-sans text-neutral-50 antialiased">
			<div className="flex min-h-dvh w-full flex-col items-center "> {/*justify center*/}
				{children}
			</div>
		</body>
    </html>
  );
}

