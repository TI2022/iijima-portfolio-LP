import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { LanguageProvider } from "@/lib/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Iijima Tatsunori | Freelance Software Engineer',
  description: 'Specialized in building innovative web applications with Next.js, React, and modern web technologies.',
  openGraph: {
    title: 'Iijima Tatsunori | Freelance Software Engineer',
    description: 'Specialized in building innovative web applications with Next.js, React, and modern web technologies.',
    url: '',
    siteName: 'Iijima Tatsunori - Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Iijima Tatsunori - Freelance Software Engineer',
      },
    ],
    locale: 'en_US',
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}