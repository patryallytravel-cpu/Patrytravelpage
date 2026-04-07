import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const phoneNumber = '573006247456';
  const message = encodeURIComponent(
    'Hola Patry Ally, me gustaría obtener más información sobre sus servicios.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={t('cta.whatsapp')}
    >
      <div className="flex items-center gap-3">
        {/* Text Label */}
        <div className="hidden sm:flex items-center bg-foreground text-background text-sm font-semibold px-5 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          {t('cta.whatsapp')}
        </div>
        
        {/* Button with text on mobile */}
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
          
          {/* Button */}
          <div className="relative flex items-center gap-3 bg-[#25D366] rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-5 py-3 sm:px-0 sm:py-0 sm:w-16 sm:h-16 sm:justify-center">
            <MessageCircle className="w-7 h-7 text-white" fill="white" />
            <span className="text-white font-semibold text-sm sm:hidden">
              {t('cta.whatsapp')}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
