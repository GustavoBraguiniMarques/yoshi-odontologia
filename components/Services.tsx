'use client';

import { motion } from 'motion/react';
import Button from './Button';
import { whatsappUrl } from '@/config/clinic';
import { content } from '@/config/content';

const { services } = content;

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
          {services.title}
        </motion.h2>

        {/* Grade 3x2 de cards */}
        <div className="mt-12 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {services.items.map((service, index) => (
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
              <p className="mt-6 card-text">
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
            {services.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
