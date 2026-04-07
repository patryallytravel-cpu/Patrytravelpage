import { useLanguage } from '@/contexts/LanguageContext';
import clusterTurismoNegocios from '@/assets/cluster-turismo-negocios.png';
import redClusterColombia from '@/assets/red-cluster-colombia.png';
import alcaldiaMedellin from '@/assets/alcaldia-medellin.png';
import suraLogo from '@/assets/sura-logo.png';

const partners = [
{ src: clusterTurismoNegocios, alt: 'Cluster Turismo de Negocios Medellín y Antioquia', className: '' },
{ src: redClusterColombia, alt: 'Red Cluster Colombia', className: 'scale-75' },
{ src: alcaldiaMedellin, alt: 'Alcaldía de Medellín', className: 'scale-150' },
{ src: suraLogo, alt: 'SURA', className: 'scale-50' }];


const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          {t('partners.title')}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {partners.map((partner, i) => (
            <img key={i} src={partner.src} alt={partner.alt} className={`h-16 object-contain grayscale hover:grayscale-0 transition-all ${partner.className}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;