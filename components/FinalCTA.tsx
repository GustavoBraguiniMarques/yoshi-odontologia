'use client';

import React from 'react';
import { motion } from 'motion/react';
import Button from './Button';
import { WHATSAPP_URL } from './constants';

export default function FinalCTA() {
  return (
    <section className="section bg-[linear-gradient(0deg,var(--light-bg),var(--light-bg2))] py-0! md:py-30!">
      <div className="section-container px-0 md:px-6">
        {/* Painel CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          className="card cta-card"
        >
          {/* H2 em branco */}
          <h2 className="text-[32px] md:text-[42px] lg:text-[46px] text-black-ink max-w-208 [text-wrap:balance]">
            Deseja agendar a sua avaliação ou tirar alguma dúvida?
          </h2>

          {/* Botão padrão */}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 lg:mt-9"
          >
            Falar pelo WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
