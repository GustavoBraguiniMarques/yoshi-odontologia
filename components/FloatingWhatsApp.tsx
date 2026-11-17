'use client';

import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from './constants';

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip informativo ao passar o mouse */}
      <span className="hidden md:inline-block mr-3 px-4 py-2 rounded-full bg-black-ink text-white-ink text-xs font-medium font-body shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Plantão Urgência 24h
      </span>

      {/* Botão flutuante com anel pulsante */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a VIG Odontologia no WhatsApp 24h"
        className="relative w-15 h-15 rounded-full bg-whatsapp text-white-ink flex items-center justify-center shadow-2xl transition-shadow duration-300 hover:shadow-whatsapp focus:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
      >
        {/* Anel de pulso contínuo */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-35"
        />

        {/* Segundo anel suave */}
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-whatsapp/20 animate-pulse"
        />

        {/* Ícone oficial do WhatsApp em SVG */}
        <svg
          className="relative z-10 w-9 h-9 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.36C8.74 7.36 8.53 7.37 8.35 7.74C8.13 8.24 7.55 8.81 7.55 9.94C7.55 11.07 8.38 12.16 8.5 12.31C8.63 12.47 10.13 14.77 12.42 15.76C14.33 16.59 14.72 16.42 15.14 16.38C15.56 16.34 16.5 15.82 16.7 15.26C16.89 14.7 16.89 14.22 16.83 14.12C16.77 14.01 16.62 13.95 16.4 13.84C16.17 13.73 15.06 13.18 14.85 13.1C14.64 13.02 14.49 12.98 14.34 13.2C14.19 13.43 13.76 13.95 13.63 14.1C13.5 14.25 13.37 14.27 13.14 14.16C12.91 14.05 12.18 13.81 11.31 13.03C10.63 12.43 10.17 11.68 10.04 11.46C9.91 11.23 10.03 11.11 10.14 11C10.25 10.89 10.38 10.72 10.5 10.58C10.63 10.43 10.67 10.33 10.74 10.18C10.82 10.03 10.78 9.9 10.72 9.79C10.67 9.68 10.24 8.63 10.06 8.2C9.88 7.78 9.7 7.84 9.55 7.83C9.42 7.82 9.27 7.82 9.12 7.82L8.95 7.36Z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
