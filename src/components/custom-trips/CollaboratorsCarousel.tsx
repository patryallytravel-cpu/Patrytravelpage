import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

import logoTribe from '@/assets/logo-tribe.jpeg';
import logoIbis from '@/assets/logo-ibis.jpeg';
import logoNovotel from '@/assets/logo-novotel.jpeg';
import logoFirenze from '@/assets/logo-firenze.jpg';
import logoBlues from '@/assets/logo-blues.jpg';
import logoUrbit from '@/assets/logo-urbit.jpg';
import logoOnce22 from '@/assets/logo-once22.jpg';
import logoMoa from '@/assets/logo-moa.jpg';
import logoLaureles from '@/assets/logo-laureles-selection.jpg';
import logoAccor from '@/assets/logo-accor.jpeg';

const collaborators = [
  { src: logoNovotel, alt: 'Novotel' },
  { src: logoIbis, alt: 'Ibis Hotel' },
  { src: logoAccor, alt: 'Accor' },
  { src: logoBlues, alt: 'Blue & Suites' },
  { src: logoUrbit, alt: 'Urbit' },
  { src: logoFirenze, alt: 'FRNZ Lofts' },
  { src: logoLaureles, alt: 'Laureles Selection' },
  { src: logoOnce22, alt: 'Once 22' },
  { src: logoMoa, alt: 'MOA' },
  { src: logoTribe, alt: 'Tribe' },
];

const CollaboratorsCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const totalGroups = Math.ceil(collaborators.length / visibleCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalGroups]);

  const visibleLogos = collaborators.slice(
    currentIndex * visibleCount,
    currentIndex * visibleCount + visibleCount
  );

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          {t('customTrip.collaborators.title')}
        </h2>

        <div className="flex justify-center items-center gap-8 md:gap-14 min-h-[140px]">
          {visibleLogos.map((logo, i) => (
            <div
              key={`${currentIndex}-${i}`}
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow-soft border border-border bg-card flex items-center justify-center p-3 animate-fade-in"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-secondary w-6' : 'bg-border'
              }`}
              aria-label={`Grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsCarousel;
