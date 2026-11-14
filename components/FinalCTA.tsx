'use client';

import React from 'react';
import { motion } from 'motion/react';
import Button from './Button';
import { WHATSAPP_URL } from './constants';

export default function FinalCTA() {
  return (
    <section className="secao bg-background py-0! md:py-30! pr-0">
      <div className="container-secao px-0 md:px-6">
        {/* Painel CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="card-cta"
        >
          {/* H2 em branco */}
          <h2 className="titulo-secao text-[32px] md:text-[42px] lg:text-[46px] text-background max-w-208 [text-wrap:balance]">
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
