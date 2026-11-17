'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface DoctorProfile {
  name: string;
  role: string;
  image: string;
  alt: string;
}

const teamMembers: DoctorProfile[] = [
  {
    name: 'Dr. Vinicius De Lara',
    role: 'Cirurgião Dentista',
    image: '/images/doutor.jpg',
    alt: 'Dr. Vinicius De Lara, Cirurgião Dentista na VIG Odontologia',
  },
  {
    name: 'Dra. Vidian Lara',
    role: 'Cirurgiã Dentista',
    image: '/images/doutora.jpg',
    alt: 'Dra. Vidian Lara, Cirurgiã Dentista na VIG Odontologia',
  },
];

export default function TeamDentist() {
  return (
    <section
      id="dentist"
      className="secao bg-light-bg overflow-hidden"
    >
      <div className="container-secao flex flex-col items-center">
        {/* Título e parágrafo centralizados */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-210 text-center flex flex-col items-center"
        >
          <h2 className="titulo-secao text-black-ink [text-wrap:balance]">
            Nossa Equipe
          </h2>
          <p className="mt-5 texto-secao text-soft-black-ink md:text-[19px]">
            Corpo clínico dedicado à excelência odontológica em Maringá, unindo conhecimento cirúrgico e acolhimento humano. Nossa missão é oferecer atendimento ágil e resolutivo em qualquer horário do dia ou da noite, com conforto absoluto e tecnologia.
          </p>
        </motion.div>

        {/* Grade de 2 colunas: uma para cada profissional */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-14 w-full max-w-220 justify-items-center">
          {teamMembers.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center text-center w-full max-w-100"
            >
              {/* Imagem do profissional */}
              <div className="relative w-full aspect-[4/5] rounded-card overflow-hidden shadow-card border-6 border-support-color bg-light-bg">
                <Image
                  src={doctor.image}
                  alt={doctor.alt}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Nome do profissional */}
              <h3 className="mt-4 md:mt-5 subtitulo-card text-[24px] md:text-[28px]">
                {doctor.name}
              </h3>

              {/* Cargo do profissional */}
              <p className="selo-destaque">
                {doctor.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
