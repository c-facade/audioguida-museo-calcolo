import { Inter } from 'next/font/google';

import '../../../globals.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {children}
    </>
  );
}
