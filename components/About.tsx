import Image from 'next/image';
import Reveal from './Reveal';
import { content } from '@/config/content';

const { about } = content;

export default function About() {
  return (
    <section id="about" className="section light-section">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Coluna esquerda: título e texto */}
        <Reveal className="flex flex-col text-center lg:text-left items-center lg:items-start">
          <h2>{about.title}</h2>
          <div className="flex flex-col gap-6 mt-4 section-text">
            {about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'mt-6' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Coluna direita: foto da equipe */}
        <Reveal
          y={32}
          delay={0.2}
          className="relative w-full aspect-[7/8] rounded-card overflow-hidden shadow-card border-2 border-support-color bg-light-bg"
        >
          <Image src={about.photo.src} alt={about.photo.alt} fill className="object-cover object-center" />
        </Reveal>
      </div>
    </section>
  );
}
