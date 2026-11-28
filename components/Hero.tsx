import Image from 'next/image';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';
import { content } from '@/config/content';

const { hero } = content;

// A entrada desta seção é animada em CSS (animate-rise, em globals.css), não com o motion:
// assim o título e a foto aparecem assim que a página carrega, sem esperar o JavaScript.
export default function Hero() {
  return (
    <section id="home" className="section dark-section p-0">
      <Header />

      <div className="relative w-full overflow-hidden">
        {/* Duas colunas: centralizado no celular e no tablet, à esquerda no desktop */}
        <div className="relative z-10 section-container py-15 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="motion-safe:animate-rise [--rise-y:28px] text-white-ink">
              {hero.title.before}
              <span className="text-primary">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>

            <p className="section-text mt-4 max-w-80 md:max-w-120 lg:max-w-115 mx-auto lg:mx-0 motion-safe:animate-rise [--rise-y:20px] [animation-delay:0.2s]">
              {hero.text}
            </p>

            <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto mt-6 motion-safe:animate-rise [--rise-y:16px] [animation-delay:0.5s]">
              {/* cantos de 8px de propósito: o CTA principal se destaca dos outros botões */}
              <WhatsAppButton className="h-18 px-16 rounded-lg">{hero.button}</WhatsAppButton>
            </div>
          </div>

          {/* Coluna da direita: foto na proporção 6:7 */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-90 md:max-w-120 aspect-[6/7] shrink-0 motion-safe:animate-rise-image [animation-delay:0.35s]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
