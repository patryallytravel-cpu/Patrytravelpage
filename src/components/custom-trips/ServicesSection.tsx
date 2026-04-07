import { Car, Sparkles, Building2, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import serviceTransport from '@/assets/service-transport.jpg';
import serviceSpa from '@/assets/service-spa.jpg';
import serviceHotels from '@/assets/service-hotels.jpg';

const services = [
  {
    icon: Car,
    image: serviceTransport,
    titleKey: 'customTrip.services.transport.title',
    descKey: 'customTrip.services.transport.desc',
    benefits: [
      'customTrip.services.transport.b1',
      'customTrip.services.transport.b2',
      'customTrip.services.transport.b3',
      'customTrip.services.transport.b4',
    ],
  },
  {
    icon: Sparkles,
    image: serviceSpa,
    titleKey: 'customTrip.services.spa.title',
    descKey: 'customTrip.services.spa.desc',
    benefits: [
      'customTrip.services.spa.b1',
      'customTrip.services.spa.b2',
      'customTrip.services.spa.b3',
      'customTrip.services.spa.b4',
    ],
  },
  {
    icon: Building2,
    image: serviceHotels,
    titleKey: 'customTrip.services.hotels.title',
    descKey: 'customTrip.services.hotels.desc',
    benefits: [
      'customTrip.services.hotels.b1',
      'customTrip.services.hotels.b2',
      'customTrip.services.hotels.b4',
    ],
  },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          {t('customTrip.services.title')}
        </h2>

        <div className="space-y-20 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${isReversed ? 'md:[direction:rtl]' : ''}`}
              >
                {/* Image */}
                <div className={`rounded-3xl overflow-hidden shadow-soft ${isReversed ? 'md:[direction:ltr]' : ''}`}>
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-[300px] md:h-[380px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className={isReversed ? 'md:[direction:ltr]' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground">
                      {t(service.titleKey)}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground">{t(benefit)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
