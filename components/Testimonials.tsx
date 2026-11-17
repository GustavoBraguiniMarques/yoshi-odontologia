'use client';

import React, { useState, useSyncExternalStore, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialItem {
  avatar: string;
  name: string;
  quote: string;
  todoBriefing: string;
}

const testimonialsSets: TestimonialItem[][] = [
  // Página 1 (Padrão)
  [
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      name: 'Rodrigo Silva',
      quote: 'Atendimento rápido no meio da noite para conter uma dor intensa de canal. Muito grato pelo cuidado.',
      todoBriefing: 'TODO: Retrato de busto, homem de barba, preto e branco.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      name: 'Marcos Vinicius',
      quote: 'Fiz meus implantes com a equipe e o resultado superou todas as expectativas. Recuperação tranquila.',
      todoBriefing: 'TODO: Retrato de busto, homem sorrindo, camisa xadrez.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      name: 'Beatriz Lima',
      quote: 'Clínica moderna, profissionais atenciosos e ambiente impecável. Recomendo com segurança em Maringá.',
      todoBriefing: 'TODO: Retrato de busto, pessoa com roupa clara, fundo azul-petróleo.',
    },
  ],
  // Página 2
  [
    {
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      name: 'Fernanda Costa',
      quote: 'Fui atendida na emergência durante a madrugada e a atenção de toda a equipe foi impecável.',
      todoBriefing: 'TODO: Depoimento provisório paciente 4.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      name: 'Eduardo Silveira',
      quote: 'Tratamento de prótese com ajuste perfeito. Consegui mastigar e sorrir novamente com confiança.',
      todoBriefing: 'TODO: Depoimento provisório paciente 5.',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      name: 'Camila Duarte',
      quote: 'Clareamento seguro e sem dor. O resultado ficou muito natural e a equipe explica tudo com clareza.',
      todoBriefing: 'TODO: Depoimento provisório paciente 6.',
    },
  ]
];

const allTestimonials: TestimonialItem[] = testimonialsSets.flat();
const starIndices = [0, 1, 2, 3, 4];

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getCardsPerPage() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function getServerSnapshot() {
  return 3;
}

export default function Testimonials() {
  const cardsPerPage = useSyncExternalStore(subscribe, getCardsPerPage, getServerSnapshot);
  const [activePageIndex, setActivePageIndex] = useState(0);

  // Avança um depoimento por vez, de forma circular
  const total = allTestimonials.length;
  const safePageIndex = activePageIndex % total;

  const visibleCards = Array.from({ length: cardsPerPage }, (_, i) =>
    allTestimonials[(safePageIndex + i) % total]
  );

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setActivePageIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Suporte a gestos touch (arrastar do dedo) em mobile e tablet
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Suporte a arrasto com mouse
  const mouseStartX = useRef<number | null>(null);
  const mouseStartY = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    mouseStartY.current = e.clientY;
    isMouseDown.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null || mouseStartY.current === null) return;
    const deltaX = e.clientX - mouseStartX.current;
    const deltaY = e.clientY - mouseStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    mouseStartX.current = null;
    mouseStartY.current = null;
    isMouseDown.current = false;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    mouseStartX.current = null;
    mouseStartY.current = null;
  };

  return (
    <section
      id="testimonials"
      className="secao bg-dark-bg"
    >
      <div className="container-secao flex flex-col items-center">
        {/* H2 centralizado */}
        <motion.h2  
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="titulo-secao text-white-ink text-center [text-wrap:balance]"
        >
          Depoimentos dos Pacientes
        </motion.h2>

        {/* Grade responsiva com suporte a touch / swipe e drag */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="mt-12 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-90 md:max-w-190 lg:max-w-full justify-items-center mx-auto touch-pan-y select-none cursor-grab active:cursor-grabbing"
        >
          {visibleCards.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-depoimento"
            >
              {/* 1. Estrelas */}
              <div className="flex items-center justify-center gap-0 mb-2">
                {starIndices.map((starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 fill-star text-star"
                  />
                ))}
              </div>

              {/* 2. Depoimento / Citação */}
              <blockquote className="font-body italic text-[15px] md:text-[16px] leading-texto font-normal text-soft-black-ink max-w-70 my-auto line-clamp-4">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* 3. Imagem (avatar) e 4. Nome */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-inner bg-light-bg border-2 border-support-color">
                  <Image
                    src={item.avatar}
                    alt="Foto do paciente"
                    width={52}
                    height={52}
                    unoptimized
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="selo-destaque text[16px] md:text-[18px]">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-14 flex items-center justify-center gap-4">
          {/* Seta esquerda */}
          <motion.button
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handlePrev}
            className="w-11 flex items-center justify-center text-support-color hover:text-primary transition-colors focus:outline-none"
            aria-label="Depoimentos anteriores"
          >
            <svg
              className="w-11 h-5 stroke-current"
              viewBox="0 0 44 20"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="42" y1="10" x2="6" y2="10" />
              <polyline points="14 3 6 10 14 17" />
            </svg>
          </motion.button>

          {/* Pontos de paginação */}
          <div className="flex items-center gap-3 md:gap-4 max-w-full overflow-x-hidden py-1">
            {Array.from({ length: total }).map((_, dotIndex) => {
              const isActive = dotIndex === safePageIndex;
              return (
                <motion.button
                  key={dotIndex}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setActivePageIndex(dotIndex)}
                  aria-label={`Ir para depoimento ${dotIndex + 1}`}
                  className={`rounded-full transition-all duration-200 focus:outline-none shrink-0 ${
                    isActive
                      ? 'w-3 h-3 bg-primary scale-110'
                      : 'w-2 h-2 bg-support-color hover:bg-dark-bg'
                  }`}
                />
              );
            })}
          </div>

          {/* Seta direita */}
          <motion.button
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleNext}
            className="w-11 flex items-center justify-center text-support-color hover:text-primary transition-colors focus:outline-none"
            aria-label="Próximos depoimentos"
          >
            <svg
              className="w-11 h-5 stroke-current"
              viewBox="0 0 44 20"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2" y1="10" x2="38" y2="10" />
              <polyline points="30 3 38 10 30 17" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
