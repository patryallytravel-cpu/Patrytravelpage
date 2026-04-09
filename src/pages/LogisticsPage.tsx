import { Shirt, Users, MapPin, Gift, Car, GlassWater, ShoppingBag, Wine, Heart, PartyPopper, Cake, Sparkles } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import VipBudgetForm from '@/components/forms/VipBudgetForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import fashionTourImage from '@/assets/fashion-tour.png';
import tourLogo from '@/assets/tour-disenadores-logo.png';
import showroomInterior from '@/assets/showroom-interior.jpg';
import souvenirBag from '@/assets/souvenir-bag.jpg';
import celebrationToast from '@/assets/celebration-toast.jpg';
import privateTransport from '@/assets/private-transport.jpg';
import logoOcho43 from '@/assets/logo-ocho43.jpg';
import logoPatriciaMejia2 from '@/assets/logo-patricia-mejia.png';
import logoPatriciaMejia from '@/assets/LOGO NEGRO PATRICIA MEJIA DISEÑADORA DE ZAPATOS.png';
import logoArgemiroSierra from '@/assets/logo-argemiro-sierra.png';
import fridaLogo from '@/assets/frida-logo.png';

/**holaaddda */

// Fashion photos
import fashionCraftsman from '@/assets/fashion-craftsman.jpg';
import fashionModel1 from '@/assets/fashion-model-1.jpeg';
import fashionModel2 from '@/assets/fashion-model-2.jpeg';
import fashionFlowers from '@/assets/fashion-flowers.jpeg';
import fashionArgemiro from '@/assets/fashion-argemiro.png';
import fashionHandbag from '@/assets/fashion-handbag.jpg';
import fashionShowroomPatricia from '@/assets/fashion-showroom-patricia.jpg';
import fashionPatriciaProducts from '@/assets/fashion-patricia-products.jpg';
import fashionBoot from '@/assets/fashion-boot.jpg';
import fashionShoesFlatlay from '@/assets/fashion-shoes-flatlay.jpg';

const LogisticsPage = () => {
  const { t } = useLanguage();
  const phoneNumber = '573235825138';

  const includes = [
    { icon: Users, key: 'designers.includes.guide' },
    { icon: Gift, key: 'designers.includes.souvenir' },
    { icon: Car, key: 'designers.includes.transport' },
    { icon: GlassWater, key: 'designers.includes.toast' },
  ];

  const collaborators = [
    { src: logoOcho43, alt: 'Ocho43 Tienda de Diseño', needsBg: false },
    { src: logoPatriciaMejia, alt: 'Patricia Mejía Diseñadora de Zapatos', needsBg: false },
    { src: logoArgemiroSierra, alt: 'Argemiro Sierra', needsBg: false },
    { src: fridaLogo, alt: 'Frida', needsBg: false },
  ];

  const occasions = [
    { icon: Heart, title: t('designers.occasion.friends'), image: fashionModel1 },
    { icon: PartyPopper, title: t('designers.occasion.bachelorette'), image: fashionFlowers },
    { icon: Cake, title: t('designers.occasion.birthday'), image: fashionModel2 },
    { icon: Sparkles, title: t('designers.occasion.custom'), image: fashionArgemiro },
  ];

  return (
    <Layout>
      {/* Hero - Compact */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${fashionTourImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <img src={tourLogo} alt="Tour de Diseñadores con Patry Ally" className="w-56 md:w-72 mx-auto mb-6 brightness-0 invert drop-shadow-lg" />
            <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              {t('designers.hero.subtitle')}
            </h1>
          </div>
        </div>
      </section>

      {/* Fashion Gallery — Apple-style immersive grid */}
      <section className="py-20 md:py-32 bg-foreground overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="font-montserrat text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 italic tracking-tight leading-none">
              {t('designers.intro.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
              {t('designers.intro.desc')}
            </p>
          </div>

          {/* Bento-style image grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large feature */}
            <div className="col-span-2 row-span-2 rounded-[1.5rem] overflow-hidden group">
              <img src={fashionShowroomPatricia} alt="Showroom Patricia Mejía" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden group aspect-square">
              <img src={fashionBoot} alt="Bota artesanal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden group aspect-square">
              <img src={fashionShoesFlatlay} alt="Zapatos Patricia Mejía" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden group aspect-square">
              <img src={fashionHandbag} alt="Bolso de lujo Ocho43" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="rounded-[1.5rem] overflow-hidden group aspect-square">
              <img src={fashionCraftsman} alt="Artesano creando bota" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          {/* Closing statement */}
          <div className="max-w-3xl mx-auto text-center mt-16 md:mt-24">
            <p className="text-lg md:text-2xl text-white/70 leading-relaxed font-light">
              {t('designers.intro.desc2')}
            </p>
            <p className="text-secondary font-semibold text-xl md:text-2xl mt-8 italic">
              {t('designers.intro.cta')}
            </p>
          </div>
        </div>
      </section>

      {/* Organízalo como quieras — Occasions */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
              {t('designers.group.title')}
            </h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
              {t('designers.group.desc')}
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {occasions.map((occ, i) => (
              <div key={i} className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={occ.image}
                  alt={occ.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <occ.icon className="w-6 h-6 text-secondary mb-2" />
                  <p className="text-white font-semibold text-sm md:text-base leading-snug">{occ.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 md:py-36 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-20 md:mb-28">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
                  {t('designers.logistics.title')}
                </p>
                <h3 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                  Transporte privado, seguro y cómodo.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {t('designers.logistics.desc')}
                </p>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-soft">
                <img src={privateTransport} alt="Transporte privado de lujo" className="w-full h-[320px] md:h-[400px] object-cover" />
              </div>
            </div>
          </div>

          {/* Souvenir & Toast cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="group relative bg-muted/40 rounded-[2rem] overflow-hidden">
              <div className="aspect-square relative">
                <img src={souvenirBag} alt="Souvenir exclusivo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <ShoppingBag className="w-5 h-5 text-secondary" />
                    <span className="text-secondary font-semibold text-sm tracking-widest uppercase">{t('designers.souvenir.title')}</span>
                  </div>
                  <p className="text-white text-lg md:text-xl leading-relaxed font-light">{t('designers.souvenir.desc')}</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-muted/40 rounded-[2rem] overflow-hidden">
              <div className="aspect-square relative">
                <img src={celebrationToast} alt="Brindis de celebración" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Wine className="w-5 h-5 text-accent" />
                    <span className="text-accent font-semibold text-sm tracking-widest uppercase">{t('designers.toast.title')}</span>
                  </div>
                  <p className="text-white text-lg md:text-xl leading-relaxed font-light">{t('designers.toast.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground text-center mb-16 tracking-tight">
              {t('designers.includes.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {includes.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <span className="text-sm text-foreground font-medium leading-snug">{t(item.key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground text-center mb-14 tracking-tight">
            {t('designers.collaborators.title')}
          </h2>
          <div className="flex justify-center items-center gap-8 md:gap-14 flex-wrap">
            {collaborators.map((collab, i) => (
              <div
                key={i}
                className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-soft border border-border flex items-center justify-center p-5 transition-transform duration-300 hover:scale-105 ${
                  collab.needsBg ? 'bg-primary' : 'bg-card'
                }`}
              >
                <img src={collab.src} alt={collab.alt} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 h-14 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hola, me interesa el Tour de Diseñadores con Patry Ally')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MapPin className="w-5 h-5" />
                {t('designers.cta')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <VipBudgetForm />
    </Layout>
  );
};

export default LogisticsPage;
