import Reveal from './Reveal';
import WhatsAppButton from './WhatsAppButton';
import { content } from '@/config/content';

export default function FinalCTA() {
  return (
    <section className="section bg-(image:--light-gradient-up) py-0 md:py-30">
      {/* Card colado nas bordas no celular; a partir do tablet, recuado 24px do conteúdo das outras seções */}
      <div className="section-container px-0 md:px-14">
        <Reveal scale={0.98} className="card cta-card">
          <h2 className="text-black-ink max-w-208 [text-wrap:balance]">{content.finalCta.title}</h2>

          <WhatsAppButton className="mt-7 lg:mt-9">{content.finalCta.button}</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
