// File: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import HydrationWrapper from '@/components/HydrationWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calistus Mwonga | AI Engineer',
  description: 'The professional portfolio of Calistus Mwonga, an AI Engineer and Systems Builder.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        {/* Wait for hydration, then mount the animated layout */}
            <div className="flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-grow w-full">
                {children}
              </main>

              <Footer />
            </div>
      </body>
    </html>
  );
}
