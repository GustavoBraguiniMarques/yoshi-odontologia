'use client';

import { useState, useSyncExternalStore, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { content } from '@/config/content';

const { testimonials } = content;
const allTestimonials = testimonials.items;

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

  // Sem depoimentos em config/content.ts, a seção não aparece.
  if (total === 0) return null;

  return (
    <section
      id="testimonials"
      className="section light-section bg-[linear-gradient(180deg,var(--light-bg),var(--light-bg2))]"
    >
      <div className="section-container flex flex-col items-center">
        {/* H2 centralizado */}
        <h2 className="text-center [text-wrap:balance]">
          {testimonials.title}
        </h2>

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
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="card testimony-card"
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
              <blockquote className="font-body italic text-[15px] md:text-[17px] leading-texto font-normal text-soft-black-ink max-w-70 my-auto">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* 3. Foto (opcional) e 4. Nome */}
              <div className="flex flex-col items-center gap-2 mt-4">
                {item.avatar && (
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-inner bg-light-bg border-2 border-support-color">
                    <Image
                      src={item.avatar}
                      alt="Foto do paciente"
                      width={52}
                      height={52}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span className="selo-destaque md:text-[18px]">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginação */}
        {/* Setas com 44px de área de toque (a margem negativa mantém o espaço ocupado de antes) */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {/* Seta esquerda */}
          <motion.button
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handlePrev}
            className="w-11 h-11 -my-3 flex items-center justify-center text-primary hover:text-black-ink transition-colors focus:outline-none"
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

          {/* Pontos de paginação: cada botão tem 24px de área de toque, com o ponto visível no centro */}
          <div className="flex items-center max-w-full overflow-x-hidden">
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
                  className="group w-6 h-6 flex items-center justify-center shrink-0 rounded-full focus:outline-none"
                >
                  <span
                    className={`block rounded-full transition-all duration-200 ${
                      isActive
                        ? 'w-3 h-3 bg-primary scale-110'
                        : 'w-2 h-2 bg-primary/80 group-hover:bg-dark-bg'
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Seta direita */}
          <motion.button
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={handleNext}
            className="w-11 h-11 -my-3 flex items-center justify-center text-primary hover:text-black-ink transition-colors focus:outline-none"
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
