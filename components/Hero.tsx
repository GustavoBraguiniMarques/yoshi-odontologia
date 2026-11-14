'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Button from './Button';
import { WHATSAPP_URL } from './constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-surface overflow-visible"
    >
      {/* Hero container alinhado ao grid de 1140px */}
      <div className="relative w-full overflow-hidden">
        {/* Brilho branco radial atrás da foto */}
        <div
          aria-hidden="true"
          className="absolute left-[40%] top-0 w-[60%] h-full pointer-events-none z-0 bg-[image:var(--gradient-hero)]"
        />

        {/* Conteúdo em grade de 2 colunas: centralizado no mobile e tablet, à esquerda no desktop */}
        <div className="relative z-10 container-secao py-15 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-145 lg:min-h-180">
          {/* Coluna da esquerda */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="titulo-hero max-w-137 [text-wrap:balance]"
            >
              Próteses e Implantes em Maringá
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="texto-secao mt-3 lg:mt-4 max-w-80 md:max-w-120 lg:max-w-115 mx-auto lg:mx-0"
            >
              Cuidado odontológico completo com pronto atendimento 24 horas, implantes avançados e conforto absoluto no coração de Maringá.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center lg:justify-start w-full lg:w-auto mt-5 lg:mt-6"
            >
              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-18 px-16 rounded-lg"
              >
                Agendar Consulta
              </Button>
            </motion.div>
          </div>

          {/* Coluna da direita com imagem em proporção 5:6 */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-113 md:max-w-130 lg:w-144 lg:h-173 lg:max-w-144 aspect-[5/6] [filter:var(--filter-hero)] rounded-card overflow-hidden shadow-card border-4 border-primary-light bg-background shrink-0"
            >
              <Image
                src="/images/hero-image.jpeg"
                alt="Modelo odontológico profissional demonstrando prótese e implante dentário"
                fill
                unoptimized
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
