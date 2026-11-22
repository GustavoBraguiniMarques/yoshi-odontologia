import type { Metadata } from 'next';
import LegalPage, { LegalSection } from '@/components/LegalPage';
import { clinic, instagramUrl } from '@/config/clinic';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: `Condições de uso do site da ${clinic.name}.`,
  ...(clinic.site && { alternates: { canonical: '/terms/' } }),
};

// Texto genérico para um site informativo de clínica odontológica.
export default function TermsPage() {
  const externalServices = `WhatsApp${instagramUrl ? ', Instagram' : ''} e Google Maps`;

  return (
    <LegalPage title="Termos de Uso" updatedAt="22 de novembro de 2026">
      <p>Ao usar este site, você concorda com os termos abaixo.</p>

      <LegalSection title="1. Sobre o site">
        <p>
          Este site apresenta a {clinic.name} e os tratamentos que ela oferece. As informações têm
          caráter informativo e não substituem uma consulta: diagnóstico e plano de tratamento só
          podem ser definidos por um cirurgião-dentista, após avaliação.
        </p>
      </LegalSection>

      <LegalSection title="2. Agendamentos">
        <p>
          Os agendamentos são feitos pelo WhatsApp{clinic.phone ? ' ou por telefone' : ''} e dependem
          da disponibilidade da agenda. O horário só fica garantido depois da confirmação da nossa
          equipe.
        </p>
      </LegalSection>

      <LegalSection title="3. Imagens e resultados">
        <p>
          As imagens do site são ilustrativas. O resultado de qualquer tratamento varia de paciente
          para paciente.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Textos, imagens, logotipo e demais conteúdos deste site pertencem à {clinic.name} ou são
          usados com autorização. Não é permitido copiá-los ou reproduzi-los sem autorização prévia.
        </p>
      </LegalSection>

      <LegalSection title="5. Links para outros sites">
        <p>
          O site tem links para serviços de outras empresas, como {externalServices}. Não temos
          controle sobre esses serviços nem responsabilidade pelo conteúdo deles.
        </p>
      </LegalSection>

      <LegalSection title="6. Alterações e contato">
        <p>
          Estes termos podem ser atualizados a qualquer momento. Em caso de dúvida, fale com a gente
          pelo WhatsApp {clinic.whatsapp.display}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
