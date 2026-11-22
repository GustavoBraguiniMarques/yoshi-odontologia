'use client';

import { motion } from 'motion/react';
import { WhatsAppIcon } from './icons';
import { clinic, whatsappUrl } from '@/config/clinic';
import { content } from '@/config/content';

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 120, damping: 18 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Dica que aparece ao passar o mouse (desktop) */}
      <span className="hidden md:inline-block mr-3 px-4 py-2 rounded-full bg-black-ink text-white-ink text-xs font-medium font-body shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {content.floatingWhatsApp.tooltip}
      </span>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a ${clinic.name} no WhatsApp`}
        className="relative w-15 h-15 rounded-full bg-whatsapp text-white-ink flex items-center justify-center shadow-2xl transition-shadow duration-300 hover:shadow-whatsapp focus:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
      >
        {/* Anéis pulsantes (desligados para quem pediu menos movimento no sistema) */}
        <span aria-hidden="true" className="absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-ping opacity-35" />
        <span aria-hidden="true" className="absolute -inset-1 rounded-full bg-whatsapp/20 motion-safe:animate-pulse" />

        <WhatsAppIcon className="relative z-10 w-9 h-9" />
      </motion.a>
    </motion.div>
  );
}
