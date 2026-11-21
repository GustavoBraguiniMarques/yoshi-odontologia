import React from 'react';
import Hero from '@/components/Hero';
import Differentials from '@/components/Differentials';
import Services from '@/components/Services';
import TeamDentist from '@/components/TeamDentist';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light-bg selection:bg-primary/20 selection:text-black-ink relative">
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
