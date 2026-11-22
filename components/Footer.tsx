import Image from 'next/image';
import Link from 'next/link';
import { MapPin, PhoneCall, Clock } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './icons';
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
import { content } from '@/config/content';

type Contact = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
};

// Contatos montados a partir de config/clinic.ts: Instagram e telefone somem se estiverem vazios.
const contacts: Contact[] = [
  {
    label: 'WhatsApp',
    value: clinic.whatsapp.display,
    href: whatsappUrl,
    external: true,
    icon: <WhatsAppIcon className="w-5 h-5" />,
  },
  ...(instagramUrl
    ? [
        {
          label: 'Instagram',
          value: `@${clinic.instagram}`,
          href: instagramUrl,
          external: true,
          icon: <InstagramIcon className="w-5 h-5" />,
        },
      ]
    : []),
  ...(clinic.phone && phoneUrl
    ? [
        {
          label: 'Telefone',
          value: clinic.phone.display,
          href: phoneUrl,
          external: false,
          icon: <PhoneCall size={20} />,
        },
      ]
    : []),
];

const legalLinks = [
  { href: '/terms/', label: 'Termos de Uso' },
  { href: '/privacy/', label: 'Privacidade' },
];

export default function Footer() {
  return (
    <footer id="contact" className="section dark-section pt-15 pb-8">
      <div className="section-container">
        {/* Grade de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Coluna 1: logo, endereço e mapa */}
          <div className="md:col-span-12 lg:col-span-6 flex flex-col items-start">
            <Link
              href="/#home"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-support-color rounded-lg"
              aria-label={`${clinic.name} - Início`}
            >
              <Image src={clinic.logo.footer} alt={clinic.name} className="h-14 md:h-16 w-auto object-contain" />
            </Link>

            <div className="mt-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-support-color shrink-0 mt-1 stroke-[2.2]" />
              <p className="caption-text">{fullAddress}</p>
            </div>

            <div className="mt-4 w-full aspect-[2/1] min-h-53 rounded-xl overflow-hidden border border-primary shadow-inner relative group">
              {/* O iframe é 136px mais alto e sobe 136px (-mt-34) para esconder o cartão de
                  endereço que o Google Maps mostra no topo do mapa incorporado. */}
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
                <span>{content.footer.routeLink}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: contatos */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-4">
            <h2 className="font-body text-[24px] leading-subtitle font-semibold text-white-ink tracking-wide">
              {content.footer.contactsTitle}
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white-ink transition-colors">
                    {contact.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-soft-white-ink font-medium group-hover:text-primary">
                      {contact.label}
                    </span>
                    <span className="font-body text-[16px] leading-title font-semibold text-soft-white-ink group-hover:text-primary">
                      {contact.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 3: horário de funcionamento */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-start lg:pl-2">
            <h2 className="font-body text-[24px] leading-subtitle font-semibold text-white-ink tracking-wide">
              {content.footer.hoursTitle}
            </h2>
            <div className="hours-card">
              <div className="w-9 h-9 rounded-full bg-support-color flex items-center justify-center text-primary shrink-0 mt-1">
                <Clock className="w-5 h-5 stroke-[2.2]" />
              </div>
              {/* Horários vêm de clinic.hours: uma linha por faixa de dias */}
              <div className="flex flex-col gap-3">
                {clinic.hours.map((item) => (
                  <div key={item.days} className="flex flex-col">
                    <span className="font-body text-[17px] leading-subtitle font-bold text-white-ink">
                      {item.days}
                    </span>
                    <span className="font-body text-[15px] leading-text text-white-ink mt-1">{item.time}</span>
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
            <p className="caption-text">
              © {new Date().getFullYear()} {clinic.name}. Todos os direitos reservados.
            </p>
            {/* Registro no CRO (clinic.cro): aparece quando estiver preenchido */}
            {croLine && <p className="caption-text text-center md:text-left">{croLine}</p>}
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="caption-text hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
