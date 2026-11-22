'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Button from './Button';
import { whatsappUrl } from '@/config/clinic';
import { content } from '@/config/content';

const { differentials } = content;

// Posição de cada foto na colagem (mesma ordem de differentials.photos: esquerda, topo, embaixo)
const photoPositions = [
  'left-0 top-[23.1%] w-[52.8%] z-[1] shadow-md',
  'left-[39.4%] top-0 w-[60.6%] z-[2] shadow-lg',
  'left-[28.7%] top-[47.5%] w-[58.5%] z-[3] shadow-lg',
];

export default function Differentials() {
  return (
    <section
      id="differentials"
      className="section light-section"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Fotos circulares dos Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative w-full max-w-135 h-100 md:h-150 lg:h-151 min-[1320px]:-ml-18 shrink-0"
          >
            {differentials.photos.map((photo, index) => (
              <div
                key={photo.src.src}
                className={`absolute aspect-square rounded-full overflow-hidden border-4 border-support-color bg-light-bg ${photoPositions[index]}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </motion.div>

          {/* Coluna de Texto à direita */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="w-full lg:max-w-143 flex flex-col items-start"
          >
            <h2 className="max-w-125 [text-wrap:balance]">
              {differentials.title}
            </h2>

            <div className="mt-10 flex flex-col gap-8 max-w-138">
              {differentials.items.map((item) => (
                <p
                  key={item.title}
                  className="section-text"
                >
                  <span className="font-bold">
                    {item.title}{' '}
                  </span>
                  {item.description}
                </p>
              ))}
            </div>

            <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-13">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {differentials.button}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
