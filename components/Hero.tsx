'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Button from './Button';
import Header from './Header';
import { whatsappUrl } from '@/config/clinic';
import { content } from '@/config/content';

const { hero } = content;

export default function Hero() {
  return (
    <section
      id="home"
      className="section light-section p-0"
    >
      <Header />

      {/* Hero container alinhado ao grid de 1140px */}
      <div className="relative w-full overflow-hidden">        

        {/* Conteúdo em grade de 2 colunas: centralizado no mobile e tablet, à esquerda no desktop */}
        <div className="relative z-10 section-container py-15 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna da esquerda */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {hero.title.before}
              <span className="text-primary">{hero.title.highlight}</span>
              {hero.title.after}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="texto-secao mt-4 max-w-80 md:max-w-120 lg:max-w-115 mx-auto lg:mx-0"
            >
              {hero.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="flex items-center justify-center lg:justify-start w-full lg:w-auto mt-6"
            >
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-18 px-16 rounded-lg"
              >
                {hero.button}
              </Button>
            </motion.div>
          </div>

          {/* Coluna da direita com imagem em proporção 5:6 */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative w-full max-w-90 md:max-w-120 aspect-[6/7]  shrink-0"
            >
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                className="object-contain object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
