import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { FilterProvider } from '@/context/FilterContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'YYC Coffee Trail | Discover Calgary\'s Best Coffee Shops',
  description: 'Explore Calgary\'s vibrant coffee scene. Find the best cafes, discover local roasters, and track your coffee adventures across YYC.',
  keywords: 'Calgary, coffee, cafes, YYC, Alberta, coffee shops, local roasters',
  authors: [{ name: 'YYC Coffee Trail' }],
  openGraph: {
    title: 'YYC Coffee Trail | Discover Calgary\'s Best Coffee Shops',
    description: 'Explore Calgary\'s vibrant coffee scene. Find the best cafes, discover local roasters, and track your coffee adventures across YYC.',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-coffee-50 dark:bg-gradient-to-b dark:from-yyc-sky dark:to-yyc-mountain min-h-screen`}>
        <ThemeProvider>
          <FilterProvider>
            {children}
          </FilterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}