import { ClipboardList, UserCheck, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CustomTripForm from '@/components/forms/CustomTripForm';
import ServicesSection from '@/components/custom-trips/ServicesSection';
import { useLanguage } from '@/contexts/LanguageContext';
import customTripsHero from '@/assets/custom-trips-hero.png';

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
import logoYork from '@/assets/logo york.png';
import logoDrapastrana from '@/assets/logo-drapastrana.jpeg';
import logoAntienvejecimiento from '@/assets/logo-antienvejecimiento.png';
import logoDermavital from '@/assets/Logo-Dermavital.png';

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

      {/* Collaborators */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto px-6">
          {/* Header with decorative line */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
              <h2 className="font-montserrat text-sm md:text-base font-semibold text-secondary tracking-widest uppercase">
                {t('customTrip.collaborators.title')}
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary" />
            </div>
            <h3 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
              Nuestros Aliados
            </h3>
          </div>

          {/* Logos sections */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Section 1: Accor line */}
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoAccor}
                    alt="Accor"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoTribe}
                    alt="Tribe"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoIbis}
                    alt="Ibis"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoNovotel}
                    alt="Novotel"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Main partners */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoBlues}
                    alt="Blue & Suites"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoUrbit}
                    alt="Urbit"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoFirenze}
                    alt="FRNZ Lofts"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoLaureles}
                    alt="Laureles Selection"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoOnce22}
                    alt="Once 22"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoMoa}
                    alt="MOA"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoYork}
                    alt="York"
                    className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoAntienvejecimiento}
                    alt="Antienvejecimiento"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Beauty & Wellness */}
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoDermavital}
                    alt="Derma Vital"
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[100px] sm:max-w-[130px] md:max-w-[150px] object-contain"
                  />
                </div>
                <div className="flex items-center justify-center p-2 sm:p-3 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:scale-110">
                  <img
                    src={logoDrapastrana}
                    alt="Drapastrana"
                    className="h-14 sm:h-16 md:h-24 lg:h-28 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[180px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
