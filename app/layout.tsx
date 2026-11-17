import type { Metadata } from 'next';
import { Philosopher, Poppins, Lato } from 'next/font/google';
import './globals.css';

const philosopher = Philosopher({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-philosopher',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
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

export const metadata: Metadata = {
  title: 'VIG Odontologia | Urgência 24 Horas & Implantes em Maringá - PR',
  description:
    'Clínica odontológica com pronto atendimento de urgência 24 horas e implantes em Maringá/PR. Excelência em saúde bucal, alívio imediato da dor e tecnologia avançada.',
  keywords: [
    'dentista 24 horas maringá',
    'urgência odontológica maringá',
    'implantes dentários maringá',
    'clínica odontológica maringá',
    'canal dente urgência maringá',
    'clareamento dental maringá',
    'vig odontologia',
  ],
  authors: [{ name: 'VIG Odontologia' }],
  openGraph: {
    title: 'VIG Odontologia | Urgência 24h & Implantes em Maringá',
    description:
      'Pronto atendimento odontológico de urgência 24 horas e implantes com tecnologia de ponta em Maringá/PR.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'VIG Odontologia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIG Odontologia | Urgência 24h & Implantes em Maringá',
    description:
      'Atendimento de urgência 24 horas e implantes odontológicos em Maringá/PR.',
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
