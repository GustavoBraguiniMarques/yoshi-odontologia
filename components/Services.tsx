import Reveal from './Reveal';
import WhatsAppButton from './WhatsAppButton';
import { content } from '@/config/content';

const { services } = content;

export default function Services() {
  return (
    <section id="services" className="section dark-section">
      <div className="section-container flex flex-col items-center">
        <Reveal as="h2" className="text-center [text-wrap:balance]">
          {services.title}
        </Reveal>

        {/* Grade de cards: 1, 2 ou 3 colunas */}
        <div className="mt-12 lg:mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {services.items.map((service, index) => (
            <Reveal
              key={service.title}
              y={30}
              duration={0.9}
              delay={index * 0.12}
              className="card service-card"
            >
              <div className="w-14 h-14 rounded-full bg-support-color flex items-center justify-center shrink-0 shadow-sm text-primary">
                <service.icon className="w-7 h-7 stroke-[2.2]" />
              </div>

              <h3 className="mt-6 w-full">{service.title}</h3>

              <p className="mt-6 card-text">{service.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} delay={0.3} className="mt-14 flex justify-center">
          <WhatsAppButton>{services.button}</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
