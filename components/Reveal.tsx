'use client';

import { motion } from 'motion/react';

/** Curva de animação usada no site inteiro. */
const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

type RevealProps = {
  children: React.ReactNode;
  /** Tag renderizada. Padrão: div. */
  as?: 'div' | 'h2';
  className?: string;
  /** Atraso em segundos. */
  delay?: number;
  /** Duração em segundos. */
  duration?: number;
  /** Deslocamento inicial em px (o conteúdo desliza até a posição final). */
  x?: number;
  y?: number;
  /** Escala inicial (1 = sem zoom). */
  scale?: number;
};

/**
 * Faz o conteúdo surgir (aparece e desliza) quando entra na tela, uma vez só.
 * Para mudar a animação do site inteiro, mude aqui.
 */
export default function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  duration = 1,
  x = 0,
  y = 24,
  scale = 1,
}: RevealProps) {
  const Tag = as === 'h2' ? motion.h2 : motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
