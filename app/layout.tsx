import type { Metadata } from 'next';
import { Philosopher, Poppins, Lato } from 'next/font/google';
import { clinic } from '@/config/clinic';
import { siteUrl, allowIndexing, ogImage } from '@/lib/seo';
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

const shareImage = {
  url: ogImage.src,
  width: ogImage.width,
  height: ogImage.height,
  alt: clinic.name,
};

// Title, description e redes sociais vêm de config/clinic.ts; as regras ficam em lib/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: clinic.seo.title,
    // páginas internas: "Política de Privacidade | Nome da Clínica"
    template: `%s | ${clinic.name}`,
  },
  description: clinic.seo.description,
  // Sem domínio final, ou em build na Vercel, o site é prévia: fica fora do Google.
  robots: allowIndexing ? undefined : { index: false, follow: false },
  openGraph: {
    title: clinic.seo.title,
    description: clinic.seo.description,
    type: 'website',
    locale: 'pt_BR',
    siteName: clinic.name,
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: clinic.seo.title,
    description: clinic.seo.description,
    images: [shareImage],
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
