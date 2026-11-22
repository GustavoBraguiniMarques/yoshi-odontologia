import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/Button';
import { clinic } from '@/config/clinic';

export const metadata: Metadata = {
  title: 'Página não encontrada',
};

// Página 404 (gera out/404.html). Na Hostinger, ela só é usada com
// "ErrorDocument 404 /404.html" no .htaccess.
export default function NotFound() {
  return (
    <main className="light-section min-h-screen flex items-center">
      <div className="section-container w-full py-15 flex flex-col items-center text-center">
        <Image src={clinic.logo.header} alt={clinic.name} priority className="h-16 md:h-20 w-auto" />
        <h1 className="mt-10 font-heading text-[36px] md:text-[44px] leading-titulo font-bold text-black-ink">
          Página não encontrada
        </h1>
        <p className="mt-4 texto-secao max-w-120">
          O endereço pode ter mudado ou não existe mais. Volte para o início para conhecer a{' '}
          {clinic.name}.
        </p>
        <Button href="/" className="mt-8">
          Voltar para o início
        </Button>
      </div>
    </main>
  );
}
