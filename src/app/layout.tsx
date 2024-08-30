import Navbar from '@/components/layouts/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layouts/footer/Footer.Component';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fame+',
  description: 'Quanbydevs are here!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* NAVBAR HERE */}
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
