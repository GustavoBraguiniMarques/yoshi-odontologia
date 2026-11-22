import type { Metadata } from 'next';
import { Philosopher, Poppins, Lato } from 'next/font/google';
import { clinic } from '@/config/clinic';
import './globals.css';

const philosopher = Philosopher({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-philosopher',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

// Title, description e redes sociais vêm de config/clinic.ts.
export const metadata: Metadata = {
  title: clinic.seo.title,
  description: clinic.seo.description,
  openGraph: {
    title: clinic.seo.title,
    description: clinic.seo.description,
    type: 'website',
    locale: 'pt_BR',
    siteName: clinic.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: clinic.seo.title,
    description: clinic.seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${philosopher.variable} ${poppins.variable} ${lato.variable}`}
    >
      <body className="font-body antialiased bg-light-bg selection:bg-primary/20 selection:text-black-ink">
        {children}
      </body>
    </html>
  );
}
