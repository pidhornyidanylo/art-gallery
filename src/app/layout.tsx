import type { Metadata } from 'next';
import Favicon from '../../pubic/favicon.ico';
import { Inter } from 'next/font/google';
import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Project Space Archinty',
    template: '%s | PSA',
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${inter.className}` + ' flex h-[100vh] w-[100%] justify-center p-2'
        }
      >
        <Container>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
