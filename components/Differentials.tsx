import Image from 'next/image';
import Reveal from './Reveal';
import WhatsAppButton from './WhatsAppButton';
import { content } from '@/config/content';

const { differentials } = content;

// Posição de cada foto na colagem (mesma ordem de differentials.photos: esquerda, topo, embaixo)
const photoPositions = [
  'left-0 top-[23.1%] w-[52.8%] z-[1] shadow-md',
  'left-[39.4%] top-0 w-[60.6%] z-[2] shadow-lg',
  'left-[28.7%] top-[47.5%] w-[58.5%] z-[3] shadow-lg',
];

export default function Differentials() {
  return (
    <section id="differentials" className="section light-section">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Colagem de fotos circulares */}
          <Reveal
            x={-32}
            y={0}
            duration={1.1}
            className="relative w-full max-w-135 h-100 md:h-150 lg:h-151 min-[1320px]:-ml-18 shrink-0"
          >
            {differentials.photos.map((photo, index) => (
              <div
                key={photo.src.src}
                className={`absolute aspect-square rounded-full overflow-hidden border-4 border-support-color bg-light-bg ${photoPositions[index]}`}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover object-center" />
              </div>
            ))}
          </Reveal>

          {/* Coluna de texto */}
          <Reveal x={32} y={0} duration={1.1} className="w-full lg:max-w-143 flex flex-col items-start">
            <h2 className="max-w-125 [text-wrap:balance]">{differentials.title}</h2>

            <div className="mt-10 flex flex-col gap-8 max-w-138">
              {differentials.items.map((item) => (
                <p key={item.title} className="section-text">
                  <span className="font-bold">{item.title} </span>
                  {item.description}
                </p>
              ))}
            </div>

            <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-13">
              <WhatsAppButton>{differentials.button}</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
