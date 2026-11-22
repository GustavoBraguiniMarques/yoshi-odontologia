'use client';

import { useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { content } from '@/config/content';

const { testimonials } = content;
const items = testimonials.items;

/** Arrasto mínimo, em px, para trocar de depoimento. */
const SWIPE_DISTANCE = 40;
const STARS = [1, 2, 3, 4, 5];

// Quantos cards aparecem por vez: 1 no celular, 2 no tablet e 3 no desktop.
const MOBILE = '(max-width: 767px)';
const TABLET = '(max-width: 1023px)';

function subscribeToBreakpoints(onChange: () => void) {
  const queries = [MOBILE, TABLET].map((query) => window.matchMedia(query));
  queries.forEach((query) => query.addEventListener('change', onChange));
  return () => queries.forEach((query) => query.removeEventListener('change', onChange));
}

function getCardsPerPage() {
  if (window.matchMedia(MOBILE).matches) return 1;
  if (window.matchMedia(TABLET).matches) return 2;
  return 3;
}

// No HTML gerado no build ainda não existe tela: começa com 3, como no desktop.
const getServerCardsPerPage = () => 3;

export default function Testimonials() {
  const cardsPerPage = useSyncExternalStore(subscribeToBreakpoints, getCardsPerPage, getServerCardsPerPage);
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  // Sem depoimentos em config/content.ts, a seção não aparece.
  const total = items.length;
  if (total === 0) return null;

  // Avança um depoimento por vez, de forma circular, sem repetir card quando há poucos depoimentos.
  const visibleCards = Array.from(
    { length: Math.min(cardsPerPage, total) },
    (_, offset) => items[(activeIndex + offset) % total]
  );

  const showPrevious = () => setActiveIndex((index) => (index - 1 + total) % total);
  const showNext = () => setActiveIndex((index) => (index + 1) % total);

  // Arrastar para os lados, com o dedo ou o mouse, troca de depoimento.
  const handlePointerDown = (event: React.PointerEvent) => {
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_DISTANCE) {
      if (deltaX < 0) showNext();
      else showPrevious();
    }
  };

  const cancelSwipe = () => {
    swipeStart.current = null;
  };

  return (
    <section id="testimonials" className="section light-section bg-(image:--light-gradient-down)">
      <div className="section-container flex flex-col items-center">
        <h2 className="text-center [text-wrap:balance]">{testimonials.title}</h2>

        {/* Cards (arrastáveis) */}
        <div
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={cancelSwipe}
          onPointerCancel={cancelSwipe}
          className="mt-12 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-90 md:max-w-190 lg:max-w-full justify-items-center mx-auto touch-pan-y select-none cursor-grab active:cursor-grabbing"
        >
          {visibleCards.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="card testimonial-card"
            >
              <div className="flex items-center justify-center gap-0 mb-2" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                {STARS.map((star) => (
                  <Star key={star} className="w-5 h-5 fill-star text-star" />
                ))}
              </div>

              <blockquote className="font-body italic text-[15px] md:text-[17px] leading-text font-normal text-soft-black-ink max-w-70 my-auto">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Foto (opcional) e nome */}
              <div className="flex flex-col items-center gap-2 mt-4">
                {item.avatar && (
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-inner bg-light-bg border-2 border-support-color">
                    {/* alt vazio: a foto é decorativa, o nome já está ao lado */}
                    <Image
                      src={item.avatar}
                      alt=""
                      width={52}
                      height={52}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span className="highlight-text">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginação. Setas com 44px de área de toque (a margem negativa mantém o espaço ocupado). */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.15, x: -3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={showPrevious}
            className="w-11 h-11 -my-3 flex items-center justify-center rounded-lg text-primary hover:text-black-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Depoimentos anteriores"
          >
            <svg
              className="w-11 h-5 stroke-current"
              viewBox="0 0 44 20"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="42" y1="10" x2="6" y2="10" />
              <polyline points="14 3 6 10 14 17" />
            </svg>
          </motion.button>

          {/* Pontos: cada botão tem 24px de área de toque, com o ponto visível no centro */}
          <div className="flex items-center max-w-full overflow-x-hidden">
            {items.map((item, dotIndex) => {
              const isActive = dotIndex === activeIndex;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setActiveIndex(dotIndex)}
                  aria-label={`Ir para depoimento ${dotIndex + 1}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group w-6 h-6 flex items-center justify-center shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                >
                  <span
                    className={`block rounded-full transition-all duration-200 ${
                      isActive ? 'w-3 h-3 bg-primary scale-110' : 'w-2 h-2 bg-primary/80 group-hover:bg-dark-bg'
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.15, x: 3 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={showNext}
            className="w-11 h-11 -my-3 flex items-center justify-center rounded-lg text-primary hover:text-black-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Próximos depoimentos"
          >
            <svg
              className="w-11 h-5 stroke-current"
              viewBox="0 0 44 20"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
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
