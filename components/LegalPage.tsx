import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import { clinic } from '@/config/clinic';

type LegalPageProps = {
  title: string;
  /** Data da última alteração do texto. Ex.: '22 de novembro de 2026' */
  updatedAt: string;
  children: React.ReactNode;
};

/** Layout simples das páginas de texto (Privacidade e Termos de Uso). */
export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <>
      {/* Um gradiente só para cabeçalho e conteúdo, sem emenda entre os dois */}
      <div className="light-section">
        <header className="w-full">
          <div className="section-container h-25 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`${clinic.name} - Início`}
            >
              <Image
                src={clinic.logo.header}
                alt={clinic.name}
                priority
                className="h-10 md:h-20 w-auto object-contain"
              />
            </Link>
            <Link
              href="/"
              className="nav-link text-soft-black-ink hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ← Voltar ao site
            </Link>
          </div>
        </header>

        <main className="pt-8 pb-15 md:pt-12 md:pb-30">
          <article className="section-container">
            <div className="max-w-3xl">
              <h1 className="heading-lg text-black-ink">
                {title}
              </h1>
              <p className="mt-3 font-body text-[15px] leading-text">Última atualização: {updatedAt}</p>
              <div className="mt-10 flex flex-col gap-10 card-text text-left">{children}</div>
            </div>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}

/** Uma seção do texto: título e parágrafos ou listas. */
export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="heading-md">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}
