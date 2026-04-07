import { Flower2, Bird, Mountain, Palette, Bean, TreeDeciduous, Coffee, Sparkles, MapPin, Wind, Shirt, Car, Landmark, Users, ClipboardList, UserCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import VipBudgetForm from '@/components/forms/VipBudgetForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import cocoraImage from '@/assets/cocora-valley.png';
import customTripsHero from '@/assets/custom-trips-hero.png';
import fashionTourImage from '@/assets/fashion-tour.png';
import orchidsImage from '@/assets/orchids-forest.png';
import classicCarsImage from '@/assets/classic-cars.png';
import guatapeImage from '@/assets/guatape.png';
import santaFeImage from '@/assets/santa-fe.png';
import hummingbirdImage from '@/assets/hummingbird-tour.png';
import comuna13Image from '@/assets/comuna13-tour.png';
import cacaoImage from '@/assets/cacao-tour.png';
import botanicalImage from '@/assets/botanical-garden.png';
import coffeeImage from '@/assets/coffee-tour.png';
import wellnessImage from '@/assets/wellness-tour.png';
import paraglidingImage from '@/assets/paragliding-tour.png';
import orienteImage from '@/assets/oriente-tour.png';
import cityTourImage from '@/assets/city-tour.png';

const ToursPage = () => {
  const { t } = useLanguage();

  const tours = [
    {
      icon: Flower2,
      titleKey: 'tours.orchids',
      descKey: 'tours.orchids.desc',
      image: orchidsImage,
    },
    {
      icon: Bird,
      titleKey: 'tours.hummingbirds',
      descKey: 'tours.hummingbirds.desc',
      image: hummingbirdImage,
    },
    {
      icon: Mountain,
      titleKey: 'tours.oriente',
      descKey: 'tours.oriente.desc',
      image: orienteImage,
    },
    {
      icon: Palette,
      titleKey: 'tours.comuna13',
      descKey: 'tours.comuna13.desc',
      image: comuna13Image,
    },
    {
      icon: Bean,
      titleKey: 'tours.cacao',
      descKey: 'tours.cacao.desc',
      image: cacaoImage,
    },
    {
      icon: TreeDeciduous,
      titleKey: 'tours.botanical',
      descKey: 'tours.botanical.desc',
      image: botanicalImage,
    },
    {
      icon: Coffee,
      titleKey: 'tours.coffee',
      descKey: 'tours.coffee.desc',
      image: coffeeImage,
    },
    {
      icon: Sparkles,
      titleKey: 'tours.wellness',
      descKey: 'tours.wellness.desc',
      image: wellnessImage,
    },
    {
      icon: MapPin,
      titleKey: 'tours.city',
      descKey: 'tours.city.desc',
      image: cityTourImage,
    },
    {
      icon: Wind,
      titleKey: 'tours.paragliding',
      descKey: 'tours.paragliding.desc',
      image: paraglidingImage,
    },
    {
      icon: Shirt,
      titleKey: 'tours.designers',
      descKey: 'tours.designers.desc',
      image: fashionTourImage,
    },
    {
      icon: Car,
      titleKey: 'tours.classic',
      descKey: 'tours.classic.desc',
      image: classicCarsImage,
    },
    {
      icon: Landmark,
      titleKey: 'tours.santafe',
      descKey: 'tours.santafe.desc',
      image: santaFeImage,
    },
  ];

  const phoneNumber = '573235825138';

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${cocoraImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
              {t('tours.hero.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('tours.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          {/* Alliance Note */}
          <div className="flex items-center justify-center gap-3 mb-12 p-4 bg-secondary/10 rounded-2xl">
            <Users className="w-5 h-5 text-secondary" />
            <p className="text-muted-foreground text-center">
              {t('tours.allies.note')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <div
                key={index}
                className={cn(
                  'group relative rounded-3xl overflow-hidden min-h-[320px]',
                  'shadow-soft hover:shadow-glow transition-all duration-500'
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <tour.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-white mb-2">
                    {t(tour.titleKey)}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {t(tour.descKey)}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="w-fit rounded-full px-6 bg-secondary hover:bg-secondary/90 text-white font-semibold"
                  >
                    <a 
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hola, me interesa ${t(tour.titleKey)}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('tours.cta')}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Trip Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${customTripsHero})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('customTrip.hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              {t('customTrip.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
              {t('customTrip.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { icon: ClipboardList, descKey: 'customTrip.step1.desc' },
              { icon: UserCheck, descKey: 'customTrip.step2.desc' },
              { icon: MapPin, descKey: 'customTrip.step3.desc' },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-secondary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="h-1 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* VIP Budget Form */}
      <VipBudgetForm />
    </Layout>
  );
};

export default ToursPage;
