'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

const navLinks = [
  { href: '#home', label: 'Início', active: true },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#services', label: 'Tratamentos' },
  { href: '#dentist', label: 'Sobre Nós' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#footer', label: 'Contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-surface z-30">
      <div className="container-secao h-25 flex items-center justify-between">
        {/* 1. Logo à esquerda com proporção aumentada */}
        <a
          href="#home"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
          aria-label="VIG Odontologia - Início"
        >
          <Image
            src="/images/logo.png"
            alt="VIG Odontologia"
            width={240}
            height={70}
            priority
            unoptimized
            className="h-14 md:h-17 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* 2. Links diretos com gap reduzido */}
        <nav
          className="hidden md:flex items-center gap-5 lg:gap-6"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-nav text-[15px] lg:text-[16px] leading-titulo uppercase transition-colors whitespace-nowrap ${
                link.active
                  ? 'text-primary font-bold'
                  : 'text-ink-muted hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 3. Botão do WhatsApp com texto "Fale conosco" em duas linhas */}
        <div className="hidden lg:flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-4 bg-background rounded-full flex items-center gap-3 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm group border border-border/20"
            title="Fale conosco pelo WhatsApp"
          >
            <div className="w-9 h-9 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0 text-whatsapp group-hover:bg-whatsapp group-hover:text-background transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.36C8.74 7.36 8.53 7.37 8.35 7.74C8.13 8.24 7.55 8.81 7.55 9.94C7.55 11.07 8.38 12.16 8.5 12.31C8.63 12.47 10.13 14.77 12.42 15.76C14.33 16.59 14.72 16.42 15.14 16.38C15.56 16.34 16.5 15.82 16.7 15.26C16.89 14.7 16.89 14.22 16.83 14.12C16.77 14.01 16.62 13.95 16.4 13.84C16.17 13.73 15.06 13.18 14.85 13.1C14.64 13.02 14.49 12.98 14.34 13.2C14.19 13.43 13.76 13.95 13.63 14.1C13.5 14.25 13.37 14.27 13.14 14.16C12.91 14.05 12.18 13.81 11.31 13.03C10.63 12.43 10.17 11.68 10.04 11.46C9.91 11.23 10.03 11.11 10.14 11C10.25 10.89 10.38 10.72 10.5 10.58C10.63 10.43 10.67 10.33 10.74 10.18C10.82 10.03 10.78 9.9 10.72 9.79C10.67 9.68 10.24 8.63 10.06 8.2C9.88 7.78 9.7 7.84 9.55 7.83C9.42 7.82 9.27 7.82 9.12 7.82L8.95 7.36Z" />
              </svg>
            </div>
            <div className="flex flex-col text-left leading-titulo">
              <span className="font-nav text-[13px] font-bold text-ink">
                Fale
              </span>
              <span className="font-nav text-[13px] font-bold text-ink mt-1">
                conosco
              </span>
            </div>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-whatsapp/10 text-whatsapp flex items-center justify-center hover:bg-whatsapp/20 transition-colors"
            aria-label="Fale conosco no WhatsApp"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.36C8.74 7.36 8.53 7.37 8.35 7.74C8.13 8.24 7.55 8.81 7.55 9.94C7.55 11.07 8.38 12.16 8.5 12.31C8.63 12.47 10.13 14.77 12.42 15.76C14.33 16.59 14.72 16.42 15.14 16.38C15.56 16.34 16.5 15.82 16.7 15.26C16.89 14.7 16.89 14.22 16.83 14.12C16.77 14.01 16.62 13.95 16.4 13.84C16.17 13.73 15.06 13.18 14.85 13.1C14.64 13.02 14.49 12.98 14.34 13.2C14.19 13.43 13.76 13.95 13.63 14.1C13.5 14.25 13.37 14.27 13.14 14.16C12.91 14.05 12.18 13.81 11.31 13.03C10.63 12.43 10.17 11.68 10.04 11.46C9.91 11.23 10.03 11.11 10.14 11C10.25 10.89 10.38 10.72 10.5 10.58C10.63 10.43 10.67 10.33 10.74 10.18C10.82 10.03 10.78 9.9 10.72 9.79C10.67 9.68 10.24 8.63 10.06 8.2C9.88 7.78 9.7 7.84 9.55 7.83C9.42 7.82 9.27 7.82 9.12 7.82L8.95 7.36Z" />
            </svg>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Divisor da navbar: Linha 1px em border */}
      <div className="max-w-285 mx-auto border-b border-border" />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-5 shadow-card animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-nav text-[16px] leading-titulo uppercase ${
                  link.active ? 'font-bold text-primary' : 'text-ink-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border/30">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-13 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center gap-3 px-4 font-nav font-bold text-[16px] leading-titulo hover:bg-whatsapp/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.36C8.74 7.36 8.53 7.37 8.35 7.74C8.13 8.24 7.55 8.81 7.55 9.94C7.55 11.07 8.38 12.16 8.5 12.31C8.63 12.47 10.13 14.77 12.42 15.76C14.33 16.59 14.72 16.42 15.14 16.38C15.56 16.34 16.5 15.82 16.7 15.26C16.89 14.7 16.89 14.22 16.83 14.12C16.77 14.01 16.62 13.95 16.4 13.84C16.17 13.73 15.06 13.18 14.85 13.1C14.64 13.02 14.49 12.98 14.34 13.2C14.19 13.43 13.76 13.95 13.63 14.1C13.5 14.25 13.37 14.27 13.14 14.16C12.91 14.05 12.18 13.81 11.31 13.03C10.63 12.43 10.17 11.68 10.04 11.46C9.91 11.23 10.03 11.11 10.14 11C10.25 10.89 10.38 10.72 10.5 10.58C10.63 10.43 10.67 10.33 10.74 10.18C10.82 10.03 10.78 9.9 10.72 9.79C10.67 9.68 10.24 8.63 10.06 8.2C9.88 7.78 9.7 7.84 9.55 7.83C9.42 7.82 9.27 7.82 9.12 7.82L8.95 7.36Z" />
                </svg>
                <span>Fale conosco</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
