import type { Metadata, Viewport } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'RB22 | Red Bull Racing 2026',
  description:
    'An immersive, cinematic Formula 1 scrollytelling experience showcasing the Oracle Red Bull Racing RB22 powered by Red Bull Ford Powertrains for the 2026 FIA Formula One World Championship.',
  keywords: [
    'Red Bull Racing',
    'RB22',
    '2026 F1',
    'Formula 1',
    'Red Bull Ford Powertrains',
    'Max Verstappen',
    'Isack Hadjar',
    'Scrollytelling',
  ],
  authors: [{ name: 'Creative Engineering Showcase' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} light scroll-smooth`}>
      <body className="min-h-screen bg-white text-zinc-950 font-rajdhani antialiased selection:bg-[#D9531E] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
