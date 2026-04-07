import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Heart, Users, Target, Award, Star } from 'lucide-react';
import patryFounderImage from '@/assets/patry-founder.png';

const WhoWeAreSection = () => {
  const { t } = useLanguage();

  const qualities = [
    { icon: Heart, key: 'passionate' },
    { icon: Target, key: 'adaptive' },
    { icon: Users, key: 'leader' },
    { icon: Sparkles, key: 'creative' },
  ];

  const services = [
    'whoweare.service1',
    'whoweare.service2',
    'whoweare.service3',
  ];

  return (
    <section id="quienes-somos" className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('whoweare.label')}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            {t('whoweare.title')}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Patry's Story */}
          <div className="relative">
            {/* Image with decorative elements */}
            <div className="relative mx-auto lg:mx-0 max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-soft">
                <img
                  src={patryFounderImage}
                  alt="Patry - Fundadora de PatryAlly"
                  className="w-full h-[500px] md:h-[600px] object-cover object-top scale-110"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-6 py-3 rounded-2xl shadow-lg">
                <span className="font-montserrat font-bold text-sm">
                  {t('whoweare.founder')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Story */}
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-foreground">
                  {t('whoweare.greeting')}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('whoweare.intro')}
              </p>
            </div>

            {/* Personal Qualities */}
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-2xl border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <quality.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {t(`whoweare.quality.${quality.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-border mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-secondary font-semibold text-sm">2023</span>
                  <h3 className="font-montserrat text-xl font-bold text-foreground">
                    {t('whoweare.origin.title')}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('whoweare.origin.desc')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('whoweare.referrals')}
              </p>
            </div>

            {/* Services Highlights */}
            <div className="space-y-4">
              <h4 className="font-montserrat font-bold text-foreground mb-4">
                {t('whoweare.services.title')}
              </h4>
              {services.map((serviceKey, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(serviceKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('whoweare.mission.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t('whoweare.mission.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
