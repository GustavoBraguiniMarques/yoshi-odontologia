'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { clinic } from '@/config/clinic';
import { content } from '@/config/content';

// Menu vem de config/content.ts; sem depoimentos, o link "Depoimentos" sai do menu.
const navLinks = content.nav.filter(
  (link) => link.href !== '#testimonials' || content.testimonials.items.length > 0
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-transparent z-30">
      {/* Logo à esquerda; menu (desktop) ou botão do menu (celular) à direita */}
      <div className="section-container h-25 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label={`${clinic.name} - Início`}
        >
          <Image
            src={clinic.logo.header}
            alt={clinic.name}
            priority
            className="h-10 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Menu do desktop */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-14"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link transition-colors whitespace-nowrap text-soft-black-ink hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão do menu no celular */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-soft-black-ink rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu do celular (fica no HTML e só aparece quando aberto) */}
      <div
        id="mobile-menu"
        hidden={!mobileMenuOpen}
        className="md:hidden bg-light-bg border-b border-support-color px-6 py-5 shadow-card"
      >
        <nav className="flex flex-col gap-4" aria-label="Menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-nav text-[16px] leading-title uppercase text-black-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
