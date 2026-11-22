/**
 * Dados da clínica: fonte única.
 *
 * Tudo que identifica a clínica (nome, contatos, endereço, horários e SEO) fica aqui.
 * Os links (WhatsApp, telefone, Instagram, rota e mapa) são gerados no fim do arquivo
 * a partir desses dados: não digite links à mão nos componentes.
 */

import type { StaticImageData } from 'next/image';
import logoHeader from '@/assets/images/logo-header.webp';
import logoFooter from '@/assets/images/logo-footer.webp';

type PhoneNumber = {
  /** DDI + DDD + número, só dígitos. Ex.: '5541987719197' */
  number: string;
  /** Como o número aparece no site. Ex.: '(41) 98771-9197' */
  display: string;
};

type Clinic = {
  name: string;
  /**
   * Logos em assets/images. Para trocar, substitua os arquivos mantendo o nome:
   * largura e altura são lidas do próprio arquivo.
   */
  logo: {
    /** Versão para fundo claro (cabeçalho). */
    header: StaticImageData;
    /** Versão para fundo escuro (rodapé). */
    footer: StaticImageData;
  };
  whatsapp: PhoneNumber & {
    /** Mensagem que já vem escrita quando o paciente abre a conversa. */
    message: string;
  };
  /** Telefone para ligação. Use null para esconder a linha "Telefone" do rodapé. */
  phone: PhoneNumber | null;
  /** Usuário do Instagram, sem @. Deixe vazio ('') para esconder do rodapé. */
  instagram: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    /** Sigla do estado. Ex.: 'PR' */
    state: string;
    zip: string;
  };
  /** Uma linha por faixa de dias, na ordem em que devem aparecer. */
  hours: { days: string; time: string }[];
  seo: {
    /** Título da aba e do resultado no Google (ideal: até 60 caracteres). */
    title: string;
    /** Descrição no resultado do Google (ideal: até 155 caracteres). */
    description: string;
  };
};

export const clinic: Clinic = {
  name: 'Yoshi Odontologia',
  logo: {
    header: logoHeader,
    footer: logoFooter,
  },
  whatsapp: {
    number: '5541987719197',
    display: '(41) 98771-9197',
    message: 'Olá, gostaria de agendar um atendimento',
  },
  phone: {
    number: '5541987719197',
    display: '(41) 98771-9197',
  },
  instagram: 'yoshiodontologia',
  address: {
    street: 'Rua Brigadeiro Franco, 441',
    neighborhood: 'Mercês',
    city: 'Curitiba',
    state: 'PR',
    zip: '80430-210',
  },
  hours: [
    { days: 'Segunda a sexta', time: '08:00 às 19:00' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],
  seo: {
    title: 'Yoshi Odontologia | Implantes e Próteses em Curitiba',
    description:
      'Clínica odontológica no centro de Curitiba, especializada em implantes, próteses e ortodontia. Agende sua avaliação pelo WhatsApp.',
  },
};

/* ------------------------------------------------------------------
 * Valores gerados a partir dos dados acima. Não precisa editar.
 * ------------------------------------------------------------------ */

const { address } = clinic;

export const fullAddress = `${address.street} - ${address.neighborhood}, ${address.city} - ${address.state}, ${address.zip}`;

export const whatsappUrl = `https://wa.me/${clinic.whatsapp.number}?text=${encodeURIComponent(clinic.whatsapp.message)}`;

export const phoneUrl = clinic.phone ? `tel:+${clinic.phone.number}` : null;

export const instagramUrl = clinic.instagram ? `https://www.instagram.com/${clinic.instagram}/` : null;

export const mapsRouteUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
