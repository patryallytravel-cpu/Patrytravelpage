import { Link } from 'react-router-dom';
import { Syringe, Smile, Heart, Activity, Stethoscope, Dumbbell, Sparkles, Bone, Eye, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const SpecialtiesGrid = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      id: 'plastic',
      href: '/medicina',
      Icon: Syringe,
      titleKey: 'specialties.plastic',
      descKey: 'specialties.plastic.desc',
      color: 'secondary',
    },
    {
      id: 'dental',
      href: '/medicina',
      Icon: Smile,
      titleKey: 'specialties.dental',
      descKey: 'specialties.dental.desc',
      color: 'accent',
    },
    {
      id: 'cardio',
      href: '/medicina',
      Icon: Heart,
      titleKey: 'specialties.cardio',
      descKey: 'specialties.cardio.desc',
      color: 'primary',
    },
    {
      id: 'gastro',
      href: '/medicina',
      Icon: Activity,
      titleKey: 'specialties.gastro',
      descKey: 'specialties.gastro.desc',
      color: 'secondary',
    },
    {
      id: 'checkups',
      href: '/medicina',
      Icon: Stethoscope,
      titleKey: 'specialties.checkups',
      descKey: 'specialties.checkups.desc',
      color: 'accent',
    },
    {
      id: 'sports',
      href: '/medicina',
      Icon: Dumbbell,
      titleKey: 'specialties.sports',
      descKey: 'specialties.sports.desc',
      color: 'primary',
    },
    {
      id: 'derma',
      href: '/medicina',
      Icon: Sparkles,
      titleKey: 'specialties.derma',
      descKey: 'specialties.derma.desc',
      color: 'secondary',
    },
    {
      id: 'ortho',
      href: '/medicina',
      Icon: Bone,
      titleKey: 'specialties.ortho',
      descKey: 'specialties.ortho.desc',
      color: 'accent',
    },
    {
      id: 'ophtha',
      href: '/medicina',
      Icon: Eye,
      titleKey: 'specialties.ophtha',
      descKey: 'specialties.ophtha.desc',
      color: 'primary',
    },
  ];

  const colorMap = {
    primary: 'bg-primary/10 text-primary group-hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary group-hover:bg-secondary/20',
    accent: 'bg-accent/10 text-accent group-hover:bg-accent/20',
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('specialties.label')}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {t('specialties.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('specialties.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => (
            <Link
              key={specialty.id}
              to={specialty.href}
              className={cn(
                'group relative bg-card rounded-3xl p-8 border border-border',
                'hover:border-secondary/30 hover:shadow-soft transition-all duration-300',
                'flex flex-col items-start'
              )}
            >
              <div className={cn(
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors',
                colorMap[specialty.color as keyof typeof colorMap]
              )}>
                <specialty.Icon className="w-8 h-8" />
              </div>
              
              <h3 className="font-montserrat text-xl font-bold text-foreground mb-3">
                {t(specialty.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(specialty.descKey)}
              </p>
              
              <div className="mt-6 text-secondary text-sm font-medium group-hover:translate-x-1 transition-transform">
                {t('specialties.cta')} →
              </div>
            </Link>
          ))}
        </div>

        {/* Custom service message */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-secondary/10 to-primary/10 px-8 py-6 rounded-2xl border border-secondary/20">
            <span className="text-lg font-medium text-foreground">
              {t('specialties.custom')}
            </span>
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
            >
              <a
                href="https://wa.me/573006247456?text=Hola%2C%20estoy%20interesado%20en%20un%20servicio%20m%C3%A9dico%20que%20no%20encuentro%20en%20el%20portafolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
