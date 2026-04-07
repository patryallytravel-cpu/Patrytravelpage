import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import medellinSunset from '@/assets/medellin-sunset.png';
import dentalClinic from '@/assets/dental-clinic.png';
import cocoraValley from '@/assets/cocora-valley.png';

const slides = [
  {
    id: 1,
    image: medellinSunset,
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
    ctaKey: 'hero.slide1.cta',
  },
  {
    id: 2,
    image: dentalClinic,
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
    ctaKey: 'hero.slide2.cta',
  },
  {
    id: 3,
    image: cocoraValley,
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
    ctaKey: 'hero.slide3.cta',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { t } = useLanguage();

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[90vh] md:h-[95vh] w-full overflow-hidden pb-10">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-all duration-[1500ms] ease-out',
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-start justify-center pt-36 md:pt-48">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  'transition-all duration-700',
                  index === currentSlide
                    ? 'opacity-100'
                    : 'opacity-0 pointer-events-none absolute inset-0'
                )}
              >
                <h1 
                  className={cn(
                    "font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]",
                    index === currentSlide 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 -translate-y-8"
                  )}
                >
                  {t(slide.titleKey)}
                </h1>
                <p 
                  className={cn(
                    "text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto transition-all duration-700 delay-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
                    index === currentSlide 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  )}
                >
                  {t(slide.subtitleKey)}
                </p>
                <div
                  className={cn(
                    "transition-all duration-700 delay-500",
                    index === currentSlide 
                      ? "opacity-100 translate-y-0 scale-100" 
                      : "opacity-0 translate-y-4 scale-95"
                  )}
                >
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="rounded-full px-10 h-14 text-lg font-semibold shadow-glow hover:scale-105 transition-transform bg-secondary hover:bg-secondary/90 text-white"
                  >
                    {t(slide.ctaKey)}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'transition-all duration-300 rounded-full',
              index === currentSlide
                ? 'w-10 h-3 bg-secondary'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
