import { Video, Plane, Stethoscope, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const ProcessTimeline = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      Icon: Video,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      color: 'primary',
    },
    {
      id: 2,
      Icon: Plane,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      color: 'accent',
    },
    {
      id: 3,
      Icon: Stethoscope,
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      color: 'secondary',
    },
    {
      id: 4,
      Icon: Sparkles,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      color: 'primary',
    },
  ];

  const iconColorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('process.label')}
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t('process.title')}
          </h2>
          <p className="text-lg text-white/80">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-white/20 rounded-full" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <span className="absolute -top-3 z-20 bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.id}
                  </span>
                  <div className={cn(
                    'w-20 h-20 rounded-full flex items-center justify-center relative z-10 bg-white shadow-lg',
                  )}>
                    <step.Icon className={cn('w-10 h-10', iconColorMap[step.color as keyof typeof iconColorMap])} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-montserrat text-xl font-bold text-white mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {t(step.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
