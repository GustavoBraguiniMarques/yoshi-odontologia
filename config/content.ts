/**
 * Textos e fotos das seções, na ordem em que aparecem na página.
 *
 * Dados da clínica (nome, contatos, endereço, horários, CRO, SEO) ficam em config/clinic.ts.
 * Fotos ficam em assets/images: para trocar, substitua o arquivo mantendo o nome.
 */

import { Anchor, Crown, Smile, Sun, ScanFace, Sparkles } from 'lucide-react';
import { clinic } from './clinic';
import heroImage from '@/assets/images/hero.webp';
import patientPhoto from '@/assets/images/patient.webp';
import officePhoto from '@/assets/images/office.webp';
import teamPhoto from '@/assets/images/team.webp';

export const content = {
  /**
   * Menu do topo. O href precisa ser o id da seção (#home, #services, #diferenciais,
   * #dentist, #testimonials, #footer). Os ids ficam nos componentes: não mude.
   */
  nav: [
    { href: '#home', label: 'Início' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#services', label: 'Tratamentos' },
    { href: '#dentist', label: 'Sobre Nós' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#footer', label: 'Contato' },
  ],

  hero: {
    // O trecho "highlight" aparece na cor da marca. Atenção aos espaços nas pontas.
    title: {
      before: 'Especialistas em ',
      highlight: 'próteses e implantes',
      after: ' no centro de Curitiba',
    },
    text: 'Cuidado odontológico completo, com especialidade em ortodontia, implantes e próteses, localizada no coração de Curitiba.',
    button: 'Agendar Consulta',
    image: {
      src: heroImage,
      alt: 'Modelo odontológico profissional demonstrando prótese e implante dentário',
    },
  },

  services: {
    title: 'Tratamentos Mais Procurados',
    // Ícones: https://lucide.dev/icons (importe o ícone no topo deste arquivo).
    // Descrições curtas (até ~80 caracteres) mantêm os cards da mesma altura.
    items: [
      {
        icon: Anchor,
        title: 'Implante',
        description: 'Recuperação dos dentes fixos, volte a mastigar com muito mais segurança e firmeza.',
      },
      {
        icon: Crown,
        title: 'Prótese',
        description: 'Substituição sob medida e de perfeito encaixe, gerando um visual 100% natural.',
      },
      {
        icon: Smile,
        title: 'Ortodontia',
        description: 'Aparelhos que alinham os dentes e corrigem a mordida, para um sorriso harmonioso.',
      },
      {
        icon: Sun,
        title: 'Clareamento',
        description: 'Deixe seus dentes visivelmente mais brancos e iluminados com total segurança.',
      },
      {
        icon: ScanFace,
        title: 'Invisalign',
        description: 'Alinhadores transparentes e removíveis que corrigem o sorriso com discrição.',
      },
      {
        icon: Sparkles,
        title: 'Faceta',
        description: 'Lâminas finas e sob medida que corrigem cor, formato e imperfeições dos dentes.',
      },
    ],
    button: 'Agendar Tratamento',
  },

  differentials: {
    title: 'Nossos Diferenciais',
    // A colagem usa exatamente 3 fotos, nesta ordem: esquerda, topo e embaixo.
    photos: [
      { src: patientPhoto, alt: `Paciente sorridente em atendimento na ${clinic.name}` },
      { src: officePhoto, alt: `Consultório moderno da ${clinic.name} com tecnologia avançada` },
      { src: teamPhoto, alt: `Equipe de cirurgiões-dentistas da ${clinic.name}` },
    ],
    items: [
      {
        title: 'Atendimento humanizado:',
        description: 'Cuidado atento a cada paciente, do primeiro contato ao fim do tratamento.',
      },
      {
        title: 'Tudo num só lugar:',
        description: 'Implantes, próteses, ortodontia, clareamento e estética na mesma clínica.',
      },
      {
        title: 'Tecnologia de ponta:',
        description: 'Recursos modernos para planejar cada implante e prótese com mais precisão.',
      },
    ],
    button: 'Agendar Consulta',
  },

  about: {
    title: 'Três gerações, um legado.',
    paragraphs: [
      'A Yoshi nasceu de um sonho simples e poderoso: entregar o que há de melhor na odontologia para as pessoas.',
      'Construída com trabalho, dedicação e amor genuíno pela profissão, hoje reunimos todas as especialidades em duas unidades no Paraná.',
      'Somos guiados pela excelência em cada detalhe, cuidado com cada paciente e pelo propósito de transformar vidas através do sorriso.',
    ],
    photo: { src: teamPhoto, alt: `Equipe da ${clinic.name} reunida` },
  },

  testimonials: {
    title: 'Depoimentos dos Pacientes',
    /**
     * EXEMPLOS: nomes, textos e fotos fictícios. Substitua por depoimentos reais
     * (por exemplo, do perfil da clínica no Google) antes de publicar.
     * A foto (avatar) é opcional. Lista vazia esconde a seção e o link do menu.
     */
    items: [
      {
        name: 'Rodrigo Silva',
        quote: 'Fui muito bem atendido do início ao fim. A equipe explicou cada etapa do tratamento com paciência.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Marcos Vinicius',
        quote: 'Fiz meus implantes com a equipe e o resultado superou todas as expectativas. Recuperação tranquila.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Beatriz Lima',
        quote: 'Clínica moderna, profissionais atenciosos e ambiente impecável. Recomendo com segurança.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Fernanda Costa',
        quote: 'Desde a recepção até o fim da consulta, a atenção de toda a equipe foi impecável.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Eduardo Silveira',
        quote: 'Tratamento de prótese com ajuste perfeito. Consegui mastigar e sorrir novamente com confiança.',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      },
      {
        name: 'Camila Duarte',
        quote: 'Clareamento seguro e sem dor. O resultado ficou muito natural e a equipe explica tudo com clareza.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      },
    ] as Testimonial[],
  },

  finalCta: {
    title: 'Deseja agendar a sua avaliação ou tirar alguma dúvida?',
    button: 'Falar pelo WhatsApp',
  },

  footer: {
    contactsTitle: 'Contatos',
    hoursTitle: 'Funcionamento',
    routeLink: 'Ver rota no Maps',
  },

  floatingWhatsApp: {
    tooltip: 'Agende pelo WhatsApp',
  },
};

type Testimonial = {
  name: string;
  quote: string;
  /** URL da foto. Opcional: sem foto, o card mostra só o nome. */
  avatar?: string;
};
