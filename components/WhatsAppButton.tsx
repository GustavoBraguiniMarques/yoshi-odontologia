import Button from './Button';
import { whatsappUrl } from '@/config/clinic';

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
};

/** Botão de agendamento: sempre abre a conversa no WhatsApp da clínica (link de config/clinic.ts). */
export default function WhatsAppButton({ children, className }: WhatsAppButtonProps) {
  return (
    <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Button>
  );
}
