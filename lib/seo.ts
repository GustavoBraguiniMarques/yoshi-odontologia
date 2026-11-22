/**
 * Regras de SEO derivadas de config/clinic.ts. Não precisa editar por clínica.
 * Usado só no servidor (metadata, robots.txt, sitemap e dados estruturados).
 */

import { clinic, instagramUrl } from '@/config/clinic';
import ogImage from '@/assets/images/og-image.jpg';

/**
 * URL base para links absolutos (Open Graph, sitemap, dados estruturados):
 * o domínio final; nas prévias da Vercel, a URL da Vercel; no computador, localhost.
 */
export const siteUrl =
  clinic.site ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

/**
 * O site só entra no Google quando o domínio final está preenchido e o build
 * não está rodando na Vercel (lá ficam só as prévias).
 */
export const allowIndexing = Boolean(clinic.site) && !process.env.VERCEL;

/** Imagem de compartilhamento (WhatsApp, redes sociais): 1200x630. */
export { ogImage };

/** Dados estruturados (schema.org) para o Google entender endereço, telefone e horário. */
export function clinicJsonLd() {
  const phone = clinic.phone ?? clinic.whatsapp;
  const { address } = clinic;

  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinic.name,
    url: siteUrl,
    image: new URL(ogImage.src, siteUrl).href,
    logo: new URL(clinic.logo.header.src, siteUrl).href,
    telephone: `+${phone.number}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street} - ${address.neighborhood}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'BR',
    },
    openingHours: clinic.hours.flatMap((item) => (item.schema ? [item.schema] : [])),
    ...(instagramUrl && { sameAs: [instagramUrl] }),
  };
}
