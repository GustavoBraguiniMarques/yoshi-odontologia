'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Anchor,
  Crown,
  Smile,
  Sun,
  ScanFace,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import Button from './Button';
import { whatsappUrl } from '@/config/clinic';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: Anchor,
    title: 'Implante',
    description: 'Recuperação dos dentes fixos, volte a mastigar com muito mais segurança e firmeza.',
  },
  {
    icon: Crown,
    title: 'Prótese',
    description: 'Substituição sob medida e de perfeito encaixe, gerando um visual 100% natural.',
  },
  {
    icon: Smile,
    title: 'Ortodontia',
    description: 'Aparelhos que alinham os dentes e corrigem a mordida, para um sorriso harmonioso.',
  },
  {
    icon: Sun,
    title: 'Clareamento',
    description: 'Deixe seus dentes visivelmente mais brancos e iluminados com total segurança.',
  },
  {
    icon: ScanFace,
    title: 'Invisalign',
    description: 'Alinhadores transparentes e removíveis que corrigem o sorriso com discrição.',
  },
  {
    icon: Sparkles,
    title: 'Faceta',
    description: 'Lâminas finas e sob medida que corrigem cor, formato e imperfeições dos dentes.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section dark-section"
    >
      <div className="section-container flex flex-col items-center">
        {/* H2 centralizado com animação */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-center [text-wrap:balance]"
        >
          Tratamentos Mais Procurados
        </motion.h2>

        {/* Grade 3x2 de cards */}
        <div className="mt-12 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="card service-card"
            >
              {/* 1. Círculo de ícone centralizado */}
              <div className="w-14 h-14 rounded-full bg-support-color flex items-center justify-center shrink-0 shadow-sm text-primary">
                <service.icon className="w-7 h-7 stroke-[2.2]" />
              </div>

              {/* 2. Título H3 centralizado */}
              <h3 className="mt-6 w-full">
                {service.title}
              </h3>

              {/* 3. Descrição centralizada */}
              <p className="mt-6 texto-card !text-soft-black-ink">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botão padrão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-14 flex justify-center"
        >
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Tratamento
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
