'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Anchor,
  Crown,
  Sparkles,
  Sun,
  Droplets,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import Button from './Button';
import { WHATSAPP_URL } from './constants';

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
    icon: Sparkles,
    title: 'Ortodentia',
    description: 'Correção de cor e formato para deixar o seu sorriso o mais harmonioso possível.',
  },
  {
    icon: Sun,
    title: 'Clareamento',
    description: 'Deixe seus dentes visivelmente mais brancos e iluminados com total segurança.',
  },
  {
    icon: Droplets,
    title: 'Invisalign',
    description: 'Higienização bucal completa, para deixar seus dentes e gengivas saudáveis.',
  },
  {
    icon: RefreshCw,
    title: 'Faceta',
    description: 'Reparo de dentes quebrados ou desgastados, devolvendo tada a força e estética.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="secao bg-light-bg"
    >
      <div className="container-secao flex flex-col items-center">
        {/* H2 centralizado com animação */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: [0.22, 0.61, 0.36, 1] }}
          className="titulo-secao text-black-ink text-center [text-wrap:balance]"
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
              className="card-servico"
            >
              {/* 1. Círculo de ícone centralizado */}
              <div className="w-14 h-14 rounded-full bg-support-color flex items-center justify-center shrink-0 shadow-sm text-primary">
                <service.icon className="w-7 h-7 stroke-[2.2]" />
              </div>

              {/* 2. Título H3 centralizado */}
              <h3 className="mt-6 subtitulo-card text-black-inktruncate w-full">
                {service.title}
              </h3>

              {/* 3. Descrição centralizada */}
              <p className="mt-6 texto-card text-soft-black-ink line-clamp-4">
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
            href={WHATSAPP_URL}
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
