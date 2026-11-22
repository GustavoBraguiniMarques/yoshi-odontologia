'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { content } from '@/config/content';

const { about } = content;

export default function TeamDentist() {
  return (
    <section
      id="dentist"
      className="section dark-section"
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Coluna esquerda: título e descrição */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <h2>
            {about.title}
          </h2>
          <div className="flex flex-col gap-6 mt-4 texto-secao text-black-ink">
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'mt-6' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Coluna direita: foto da equipe */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative w-full aspect-[7/8] rounded-card overflow-hidden shadow-card border-2 border-support-color bg-light-bg"
        >
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
