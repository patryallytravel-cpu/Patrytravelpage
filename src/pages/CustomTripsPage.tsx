import { ClipboardList, UserCheck, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CustomTripForm from '@/components/forms/CustomTripForm';
import ServicesSection from '@/components/custom-trips/ServicesSection';
import CollaboratorsCarousel from '@/components/custom-trips/CollaboratorsCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import customTripsHero from '@/assets/custom-trips-hero.png';

const CustomTripsPage = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      descKey: 'customTrip.step1.desc',
    },
    {
      icon: UserCheck,
      descKey: 'customTrip.step2.desc',
    },
    {
      icon: MapPin,
      descKey: 'customTrip.step3.desc',
    },
  ];

  return (
    <Layout>
      {/* Hero - Centered like Palenque */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${customTripsHero})`,
          }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('customTrip.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {t('customTrip.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Steps Section - Gray background */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
              {t('customTrip.title')}
            </h2>
          </div>

          {/* Steps - Horizontal with icon left of text */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-secondary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-secondary" />
                </div>
                {/* Text */}
                <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative Orange Line */}
          <div className="max-w-4xl mx-auto">
            <div className="h-1 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Collaborators Carousel */}
      <CollaboratorsCarousel />

      {/* Form Section - Two columns */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left - Description */}
            <div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-foreground mb-6 leading-snug">
                {t('customTrip.desc.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('customTrip.desc.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                {t('customTrip.desc.p2')}
              </p>
            </div>

            {/* Right - Form */}
            <div>
              <CustomTripForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h4 className="font-montserrat text-lg font-semibold text-foreground mb-2">
            {t('customTrip.alt.title')}
          </h4>
          <p className="text-muted-foreground">
            {t('customTrip.alt.email')}{' '}
            <a href="mailto:info@patryally.com" className="text-secondary font-semibold hover:underline">
              info@patryally.com
            </a>
            {' '}{t('customTrip.alt.suffix')}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CustomTripsPage;
