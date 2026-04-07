import { Link } from 'react-router-dom';
import { Heart, Truck, MapPin, Award, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DifferenceSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Award,
      titleKey: 'pillars.medical.title',
      descKey: 'pillars.medical.desc',
    },
    {
      icon: Truck,
      titleKey: 'pillars.logistics.title',
      descKey: 'pillars.logistics.desc',
    },
    {
      icon: MapPin,
      titleKey: 'pillars.experiences.title',
      descKey: 'pillars.experiences.desc',
    },
  ];

  const phoneNumber = '573235825138';
  const message = encodeURIComponent('Hola Patry Ally, me gustaría obtener más información sobre sus servicios.');

  return (
    <>
      {/* Essence Section - Grey Silk Background */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-secondary mx-auto mb-8" />
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {t('essence.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              {t('essence.subtitle')}
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white"
            >
              <Link to="/medicina">{t('essence.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              {t('pillars.title')}
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={cn(
                  'group relative bg-card rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-glow transition-all duration-500',
                  'border border-border hover:border-secondary/50'
                )}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <pillar.icon className="w-8 h-8 text-secondary" />
                </div>

                {/* Content */}
                <h3 className="font-montserrat text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(pillar.descKey)}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t('cta.banner.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {t('cta.banner.subtitle')}
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-xl"
            >
              <a 
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                {t('cta.banner.button')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DifferenceSection;
