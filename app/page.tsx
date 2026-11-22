import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Differentials from '@/components/Differentials';
import Services from '@/components/Services';
import TeamDentist from '@/components/TeamDentist';
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
    <main className="min-h-screen bg-light-bg selection:bg-primary/20 selection:text-black-ink relative">
      {/* Dados estruturados para o Google (endereço, telefone, horário) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd()).replace(/</g, '\\u003c') }}
      />

      {/* 1. Hero (inclui o Header, compartilhando o mesmo background) */}
      <Hero />

      {/* 2. Serviços */}
      <Services />

      {/* 3. Diferenciais */}
      <Differentials />

      {/* 4. Dentista (sobre a equipe) */}
      <TeamDentist />

      {/* 5. Depoimentos */}
      <Testimonials />

      {/* 6. CTA final */}
      <FinalCTA />

      {/* 7. Footer */}
      <Footer />

      {/* Botão de WhatsApp Flutuante e Pulsante */}
      <FloatingWhatsApp />
    </main>
  );
}
