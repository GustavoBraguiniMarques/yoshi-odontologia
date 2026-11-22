import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Differentials from '@/components/Differentials';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { clinic } from '@/config/clinic';
import { clinicJsonLd } from '@/lib/seo';

// URL canônica só existe quando o domínio final está preenchido em config/clinic.ts.
export const metadata: Metadata = clinic.site ? { alternates: { canonical: '/' } } : {};

export default function HomePage() {
  return (
    <>
      {/* Dados estruturados para o Google (endereço, telefone, horário) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd()).replace(/</g, '\\u003c') }}
      />

      <main>
        {/* 1. Hero (inclui o Header, compartilhando o mesmo fundo) */}
        <Hero />

        {/* 2. Serviços */}
        <Services />

        {/* 3. Diferenciais */}
        <Differentials />

        {/* 4. Sobre a clínica */}
        <About />

        {/* 5. Depoimentos */}
        <Testimonials />

        {/* 6. CTA final */}
        <FinalCTA />
      </main>

      {/* 7. Rodapé (fora do <main>, para leitores de tela reconhecerem como rodapé) */}
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}
