import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Compass, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import medicinaImage from '@/assets/medicina-especializada.png';
import classicCarsImage from '@/assets/classic-cars.png';
import santaFeImage from '@/assets/santa-fe.png';
const ServicesGrid = () => {
  const {
    t
  } = useLanguage();
  const services = [{
    id: 'medicine',
    href: '/medicina',
    Icon: Stethoscope,
    titleKey: 'services.medicine',
    descKey: 'services.medicine.desc',
    image: medicinaImage
  }, {
    id: 'tours',
    href: '/experiencias',
    Icon: Compass,
    titleKey: 'services.tours',
    descKey: 'services.tours.desc',
    image: classicCarsImage
  }, {
    id: 'logistics',
    href: '/logistica',
    Icon: Car,
    titleKey: 'services.logistics',
    descKey: 'services.logistics.desc',
    image: santaFeImage
  }];
  return <section className="py-24 md:py-32 bg-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-montserrat sm:text-4xl md:text-5xl font-extrabold mb-6 text-indigo-900 text-6xl">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link to={services[0].href} className={cn('group relative rounded-3xl overflow-hidden md:row-span-2 min-h-[400px] md:min-h-[500px]', 'shadow-soft hover:shadow-glow transition-all duration-500')}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{
            backgroundImage: `url(${services[0].image})`
          }} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-3">
                {t(services[0].titleKey)}
              </h3>
              <p className="text-white/80 mb-6 max-w-sm">{t(services[0].descKey)}</p>
              <div className="flex items-center gap-2 text-secondary font-medium group-hover:gap-4 transition-all">
                <span>Explorar</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {services.slice(1).map(service => <Link key={service.id} to={service.href} className={cn('group relative rounded-3xl overflow-hidden min-h-[240px]', 'shadow-soft hover:shadow-glow transition-all duration-500')}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{
            backgroundImage: `url(${service.image})`
          }} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <service.Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-montserrat text-xl md:text-2xl font-bold text-white mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-white/80 mb-4 text-sm">{t(service.descKey)}</p>
                <div className="flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Explorar</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default ServicesGrid;