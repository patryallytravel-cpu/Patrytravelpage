import { Check, Plane, Coffee, Building2, Wifi, Car, Users, HeartPulse, Globe, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import VipBudgetForm from '@/components/forms/VipBudgetForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import pricingHeroBg from '@/assets/pricing-hero-bg.jpg';

const PricingPage = () => {
  const { t } = useLanguage();

  const includedServices = [
    { icon: Plane, key: 'pricing.includes.transfers' },
    { icon: Coffee, key: 'pricing.includes.breakfast' },
    { icon: Building2, key: 'pricing.includes.accommodation' },
    { icon: Wifi, key: 'pricing.includes.sim' },
    { icon: Car, key: 'pricing.includes.transport' },
    { icon: Users, key: 'pricing.includes.companion' },
    { icon: Globe, key: 'pricing.includes.language' },
    { icon: HeartPulse, key: 'pricing.includes.insurance' },
  ];

  const hotels = [
    { name: 'NOVOTEL', priceUSD: 'U$2900', location: 'POBLADO' },
    { name: 'BLUE & SUITE', priceUSD: 'U$1800', location: 'POBLADO' },
    { name: 'HOTEL YORK', priceUSD: 'U$4245', location: 'POBLADO' },
    { name: 'IBIS', priceUSD: 'U$1560', location: 'POBLADO' },
    { name: 'URBIT', priceUSD: 'U$1450', location: 'LAURELES' },
    { name: 'FIRENZE', priceUSD: 'U$1450', location: 'LAURELES' },
    { name: 'HOTEL GOLDEN PALERMO', priceUSD: 'U$1510', location: 'LAURELES' },
    { name: 'ATTIC 33', priceUSD: 'U$1250', location: 'LAURELES' },
  ];

  return (
    <Layout>
      {/* Hero with background image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pricingHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            {t('pricing.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto italic">
            {t('pricing.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('pricing.included.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.included.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {includedServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm text-foreground leading-relaxed pt-2">
                  {t(service.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Pricing Table */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('pricing.hotels.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('pricing.hotels.perNight')}
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold text-sm">
                <div className="p-4 pl-6">{t('pricing.table.hotel')}</div>
                <div className="p-4 text-center">2 {t('pricing.table.people')}</div>
                <div className="p-4 text-center">UBICACIÓN</div>
              </div>

              {hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 border-t border-border items-center hover:bg-muted/30 transition-colors"
                >
                  <div className="p-4 pl-6">
                    <span className="font-semibold text-foreground/80">
                      {hotel.name}
                    </span>
                  </div>
                  <div className="p-4 text-center">
                    <span className="font-montserrat font-bold text-lg text-secondary">
                      {hotel.priceUSD}
                    </span>
                  </div>
                  <div className="p-4 text-center flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{hotel.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-card border-border shadow-soft p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {hotel.location}
                  </div>
                </div>
                <p className="font-montserrat font-bold text-xl text-secondary">
                  {hotel.priceUSD}
                  <span className="text-sm text-muted-foreground font-normal ml-1">/ 2 {t('pricing.table.people')}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Insurance Note */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {t('pricing.insurance.title')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('pricing.insurance.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white"
            >
              <a 
                href="https://wa.me/573235825138?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('pricing.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <VipBudgetForm />
    </Layout>
  );
};

export default PricingPage;
