import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Users, Shield } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-44 pb-24 md:pt-52 md:pb-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              {t('about.label')}
            </span>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-2xl bg-muted/50">
                <span className="block font-montserrat text-3xl md:text-4xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">{t('about.stat1')}</span>
              </div>
              <div className="text-center p-4 rounded-2xl bg-muted/50">
                <span className="block font-montserrat text-3xl md:text-4xl font-bold text-primary">15+</span>
                <span className="text-sm text-muted-foreground">{t('about.stat2')}</span>
              </div>
              <div className="text-center p-4 rounded-2xl bg-muted/50">
                <span className="block font-montserrat text-3xl md:text-4xl font-bold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">{t('about.stat3')}</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Heart className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">
                  {t('about.human.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.human.desc')}
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">
                  {t('about.network.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.network.desc')}
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-bold text-foreground mb-2">
                  {t('about.quality.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.quality.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
