'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Button from './Button';
import { WHATSAPP_URL } from './constants';

const differentialPhotos = [
  {
    src: '/images/paciente.png',
    alt: 'Paciente sorridente em atendimento na VIG Odontologia',
    className: 'left-0 top-[23.1%] w-[52.8%] z-[1] shadow-md',
  },
  {
    src: '/images/consultorio.png',
    alt: 'Consultório moderno da VIG Odontologia com tecnologia avançada',
    className: 'left-[39.4%] top-0 w-[60.6%] z-[2] shadow-lg',
  },
  {
    src: '/images/equipe.png',
    alt: 'Equipe de cirurgiões dentistas da VIG Odontologia',
    className: 'left-[28.7%] top-[47.5%] w-[58.5%] z-[3] shadow-lg',
  },
];

const differentialsData = [
  {
    title: 'Urgência 24 horas:',
    description: 'Atendimento a qualquer hora, inclusive à noite e nos fins de semana.',
  },
  {
    title: 'Tudo num só lugar:',
    description: 'implantes, próteses, canal, clareamento e estética na mesma clínica.',
  },
  {
    title: 'Tecnologia de ponta:',
    description: 'Recursos modernos para planejar cada implante e prótese com mais precisão.',
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section light-section"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          {/* Fotos circulares dos Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative w-full max-w-135 h-100 md:h-150 lg:h-151 lg:-ml-18 shrink-0"
          >
            {differentialPhotos.map((photo) => (
              <div
                key={photo.src}
                className={`absolute aspect-square rounded-full overflow-hidden border-4 border-support-color bg-light-bg ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  unoptimized
                  priority
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
              Nossos Diferenciais
            </h2>

            <div className="mt-10 flex flex-col gap-8 max-w-138">
              {differentialsData.map((item) => (
                <p
                  key={item.title}
                  className="texto-secao text-[18px] md:text-[20px] font-400"
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
