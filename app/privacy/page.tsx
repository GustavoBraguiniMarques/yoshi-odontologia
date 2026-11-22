import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/LegalPage';
import { clinic, fullAddress, instagramUrl } from '@/config/clinic';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Como a ${clinic.name} trata as informações de quem visita o site.`,
  ...(clinic.site && { alternates: { canonical: '/privacy/' } }),
};

// Texto genérico para um site informativo (sem formulários, cookies próprios ou ferramentas
// de análise). Se o site passar a coletar dados (formulário, Google Analytics, pixel de
// anúncios), revise este texto.
export default function PrivacyPage() {
  const contact = `WhatsApp ${clinic.whatsapp.display}`;

  return (
    <LegalPage title="Política de Privacidade" updatedAt="22 de novembro de 2026">
      <p>
        Esta política explica como a {clinic.name} trata as informações de quem visita este site,
        de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).
      </p>

      <LegalSection title="1. Quem somos">
        <p>
          {clinic.name}, localizada em {fullAddress}. Contato: {contact}.
        </p>
      </LegalSection>

      <LegalSection title="2. Dados coletados pelo site">
        <p>
          Este site é informativo: não tem formulários, não pede cadastro e não usa cookies próprios
          nem ferramentas de análise ou de publicidade.
        </p>
        <p>
          Como acontece em qualquer site, o servidor de hospedagem registra dados técnicos de acesso,
          como endereço IP, data, hora e navegador, usados apenas para manter o site seguro e
          funcionando.
        </p>
      </LegalSection>

      <LegalSection title="3. Serviços de terceiros">
        <p>
          Alguns recursos do site são oferecidos por outras empresas, que seguem as próprias
          políticas de privacidade:
        </p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          <li>WhatsApp (Meta): os botões de agendamento abrem uma conversa no WhatsApp.</li>
          <li>
            Google Maps (Google): o mapa do rodapé é carregado pelo Google, que pode registrar dados
            como o endereço IP e usar cookies.
          </li>
          {instagramUrl && <li>Instagram (Meta): o link para o nosso perfil leva ao Instagram.</li>}
        </ul>
      </LegalSection>

      <LegalSection title="4. Informações que você nos envia">
        <p>
          Quando você fala com a gente pelo WhatsApp ou por telefone, usamos seu nome, seu telefone e
          as informações que você compartilhar apenas para responder, agendar e realizar o seu
          atendimento. Informações de saúde são tratadas com sigilo profissional, como determina o
          Código de Ética Odontológica, e nunca são vendidas nem usadas para publicidade.
        </p>
      </LegalSection>

      <LegalSection title="5. Seus direitos">
        <p>
          Pela LGPD, você pode pedir a qualquer momento a confirmação de que tratamos seus dados, o
          acesso a eles, a correção, a exclusão e informações sobre com quem eles são
          compartilhados. Para isso, fale com a gente pelo {contact}.
        </p>
      </LegalSection>

      <LegalSection title="6. Alterações nesta política">
        <p>
          Esta política pode ser atualizada. A data da última atualização aparece no topo da página.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
