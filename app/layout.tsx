import { Metadata } from 'next';
import { inter } from '../components/ui/fonts';
import './globals.css';

export const metadata : Metadata = {
  title: {
    default: 'Museo degli Strumenti per il Calcolo',
    template: '%s | Audioguida MSC',
  },
  description: 'La guida elettronica del Museo degli Strumenti per il calcolo dell\'Università di Pisa',
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
		<html className={`${inter.className} antialiased`} suppressHydrationWarning>
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

