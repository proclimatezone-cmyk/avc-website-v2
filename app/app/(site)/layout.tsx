import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LoadingScreen from '@/components/LoadingScreen';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap', // optimization: text visible during font load
});

export const metadata: Metadata = {
  title: 'AVC ClimaVent — Климат-контроль в Ташкенте',
  description: 'Профессиональный монтаж, ремонт и обслуживание систем кондиционирования, котлов и тепловых насосов. Midea, Welkin, Shivaki. Ташкент, Узбекистан.',
  keywords: 'кондиционер монтаж Ташкент, HVAC Узбекистан, AVC ClimaVent, котел установка, тепловой насос',
  openGraph: {
    title: 'AVC ClimaVent — Климат-контроль',
    description: 'Профессиональный монтаж и сервис климатических систем в Ташкенте.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-white text-[#0A3B2C] antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <LoadingScreen />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
