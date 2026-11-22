'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, PhoneCall, Clock } from 'lucide-react';
import {
  clinic,
  fullAddress,
  whatsappUrl,
  phoneUrl,
  instagramUrl,
  mapsRouteUrl,
  mapsEmbedUrl,
  croLine,
} from '@/config/clinic';

const legalLinks = [
  { href: '/terms/', label: 'Termos de Uso' },
  { href: '/privacy/', label: 'Privacidade' },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="section dark-section pt-15 pb-8"
    >
      <div className="section-container">
        {/* Grade de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Coluna 1: Logo, Localização e Mapa */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-start">
            <Link
              href="/#home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label={`${clinic.name} - Início`}
            >
              <Image
                src={clinic.logo.footer}
                alt={clinic.name}
                unoptimized
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Localização */}
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-support-color shrink-0 mt-1 stroke-[2.2]" />
              <p className="font-body text-[15px] leading-texto text-white-ink">
                {fullAddress}
              </p>
            </div>

            {/* Bloco de incorporação de mapa do Google */}
            <div className="mt-4 w-full aspect-[2/1] min-h-53 rounded-xl overflow-hidden border border-primary shadow-inner relative group">
              <iframe
                title={`Localização da ${clinic.name}`}
                src={mapsEmbedUrl}
                className="w-full h-[calc(100%+136px)] -mt-34 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 bg-black-ink/85 hover:bg-black-ink text-white-ink text-[11px] font-medium px-3 py-1 rounded-md shadow-md transition-colors backdrop-blur-xs flex items-center gap-1"
              >
                <span>Ver rota no Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Contatos */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-4">
            <h4 className="font-body text-[24px] leading-subtitulo font-semibold text-white-ink tracking-wide">
              Contatos
            </h4>
            <div className="mt-5 flex flex-col gap-4">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white-ink transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.95 7.36C8.74 7.36 8.53 7.37 8.35 7.74C8.13 8.24 7.55 8.81 7.55 9.94C7.55 11.07 8.38 12.16 8.5 12.31C8.63 12.47 10.13 14.77 12.42 15.76C14.33 16.59 14.72 16.42 15.14 16.38C15.56 16.34 16.5 15.82 16.7 15.26C16.89 14.7 16.89 14.22 16.83 14.12C16.77 14.01 16.62 13.95 16.4 13.84C16.17 13.73 15.06 13.18 14.85 13.1C14.64 13.02 14.49 12.98 14.34 13.2C14.19 13.43 13.76 13.95 13.63 14.1C13.5 14.25 13.37 14.27 13.14 14.16C12.91 14.05 12.18 13.81 11.31 13.03C10.63 12.43 10.17 11.68 10.04 11.46C9.91 11.23 10.03 11.11 10.14 11C10.25 10.89 10.38 10.72 10.5 10.58C10.63 10.43 10.67 10.33 10.74 10.18C10.82 10.03 10.78 9.9 10.72 9.79C10.67 9.68 10.24 8.63 10.06 8.2C9.88 7.78 9.7 7.84 9.55 7.83C9.42 7.82 9.27 7.82 9.12 7.82L8.95 7.36Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-soft-white-ink font-medium group-hover:text-primary">WhatsApp</span>
                  <span className="font-body text-[16px] leading-titulo font-semibold text-soft-white-ink hover:text-primary">
                    {clinic.whatsapp.display}
                  </span>
                </div>
              </a>

              {/* Instagram (some se clinic.instagram estiver vazio) */}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white-ink transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-soft-white-ink font-medium group-hover:text-primary">Instagram</span>
                    <span className="font-body text-[16px] leading-titulo font-semibold text-soft-white-ink group-hover:text-primary">
                      @{clinic.instagram}
                    </span>
                  </div>
                </a>
              )}

              {/* Telefone (some se clinic.phone for null) */}
              {clinic.phone && phoneUrl && (
                <a
                  href={phoneUrl}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white-ink transition-colors">
                    <PhoneCall size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-soft-white-ink font-medium group-hover:text-primary">Telefone</span>
                    <span className="font-body text-[16px] leading-titulo font-semibold text-soft-white-ink group-hover:text-primary">
                      {clinic.phone.display}
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Coluna 3: Funcionamento */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-2">
            <h4 className="font-body text-[24px] leading-subtitulo font-semibold text-white-ink tracking-wide">
              Funcionamento
            </h4>
            <div className="card time-card">
              <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary shrink-0 mt-1">
                <Clock className="w-5 h-5 stroke-[2.2]" />
              </div>
              {/* Horários vêm de clinic.hours: uma linha por faixa de dias */}
              <div className="flex flex-col gap-3">
                {clinic.hours.map((item) => (
                  <div key={item.days} className="flex flex-col">
                    <span className="font-body text-[17px] leading-subtitulo font-bold text-white-ink">
                      {item.days}
                    </span>
                    <span className="font-body text-[15px] leading-texto text-white-ink mt-1">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="mt-11 mb-6 w-full border-b border-support-color" />

        {/* Linha inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white-ink">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="legenda-texto">
              © {new Date().getFullYear()} {clinic.name}. Todos os direitos reservados.
            </p>
            {/* Registro no CRO (clinic.cro): aparece quando estiver preenchido */}
            {croLine && <p className="legenda-texto text-center md:text-left">{croLine}</p>}
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="legenda-texto hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
