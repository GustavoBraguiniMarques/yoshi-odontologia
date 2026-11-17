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
    <header className="relative w-full bg-dark-bg z-30">
      <div className="container-secao h-20 flex items-center justify-between">
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
            height={60}
            priority
            unoptimized
            className="h-14 md:h-15 w-auto object-contain transition-transform group-hover:scale-[1.02]"
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
              className={`font-nav text-[15px] lg:text-[16px] leading-titulo uppercase transition-colors whitespace-nowrap text-soft-white-ink hover:text-white-ink`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black-ink focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Divisor da navbar: Linha 1px em border */}
      <div className="max-w-285 mx-auto border-b border-support-color" />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-light-bg border-b border-support-color px-6 py-5 shadow-card animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-nav text-[16px] leading-titulo uppercase ${
                  link.active ? 'font-bold text-primary' : 'text-black-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
