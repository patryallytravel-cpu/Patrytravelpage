import { 
  Stethoscope, Smile, Heart, Activity, Brain, Bone,
  Scan, FlaskConical, Dumbbell, Zap, HeartPulse, Microscope,
  Building2, Award, Users, Shield, CheckCircle2, ArrowRight,
  MessageCircle
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import VipBudgetForm from '@/components/forms/VipBudgetForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import medicalTeamHero from '@/assets/medical-team-hero.png';
import logoHematologico from '@/assets/logo-hematologico.png';
import logoAltaEstetica from '@/assets/logo-alta-estetica-dental.png';
import logoSantaLucia from '@/assets/logo-santa-lucia.png';
import logoOftalmologica from '@/assets/logo-clinica-oftalmologica.png';
import logoSura from '@/assets/logo-sura.png';
import logoSomer from '../assets/logo-somer.png';
import LogoMasvida from '../assets/logomasvida.png';
import logoVumi from '../assets/logo vumi.png';

const MedicinePage = () => {
  const { t } = useLanguage();

  const phoneNumber = '573235825138';

  // Cuadro Médico - Especialidades detalladas
  const medicalDirectory = [
    {
      icon: Stethoscope,
      titleKey: 'health.plastic.title',
      descKey: 'health.plastic.desc',
      procedures: ['health.plastic.proc1', 'health.plastic.proc2', 'health.plastic.proc3', 'health.plastic.proc4'],
    },
    {
      icon: Activity,
      titleKey: 'health.gastro.title',
      descKey: 'health.gastro.desc',
      procedures: ['health.gastro.proc1', 'health.gastro.proc2', 'health.gastro.proc3'],
    },
    {
      icon: Heart,
      titleKey: 'health.cardio.title',
      descKey: 'health.cardio.desc',
      procedures: ['health.cardio.proc1', 'health.cardio.proc2', 'health.cardio.proc3'],
    },
    {
      icon: Brain,
      titleKey: 'health.neuro.title',
      descKey: 'health.neuro.desc',
      procedures: ['health.neuro.proc1', 'health.neuro.proc2', 'health.neuro.proc3'],
    },
    {
      icon: Bone,
      titleKey: 'health.ortho.title',
      descKey: 'health.ortho.desc',
      procedures: ['health.ortho.proc1', 'health.ortho.proc2', 'health.ortho.proc3'],
    },
    {
      icon: Smile,
      titleKey: 'health.dental.title',
      descKey: 'health.dental.desc',
      procedures: ['health.dental.proc1', 'health.dental.proc2', 'health.dental.proc3', 'health.dental.proc4'],
    },
    {
      icon: HeartPulse,
      titleKey: 'health.masvida',
      descKey: 'health.masvida.desc',
      procedures: ['health.masvida.proc1', 'health.masvida.proc2', 'health.masvida.proc3', 'health.masvida.proc4'],
    },
  ];

  // Servicios de Chequeo Ejecutivo
  const executiveServices = [
    { icon: Scan, titleKey: 'health.exec.echo', descKey: 'health.exec.echo.desc' },
    { icon: HeartPulse, titleKey: 'health.exec.ecg', descKey: 'health.exec.ecg.desc' },
    { icon: Zap, titleKey: 'health.exec.holter', descKey: 'health.exec.holter.desc' },
    { icon: FlaskConical, titleKey: 'health.exec.lab', descKey: 'health.exec.lab.desc' },
    { icon: Microscope, titleKey: 'health.exec.molecular', descKey: 'health.exec.molecular.desc' },
    { icon: Dumbbell, titleKey: 'health.exec.sports', descKey: 'health.exec.sports.desc' },
  ];


  const scrollToForm = () => {
    document.getElementById('vip-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${medicalTeamHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('health.hero.label')}
            </span>
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t('health.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {t('health.hero.subtitle')}
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-semibold bg-accent hover:bg-accent/90 text-white shadow-xl"
            >
              {t('health.hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Accompaniment Banner */}
      <section className="py-6 bg-accent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Users className="w-8 h-8 text-white shrink-0" />
            <p className="text-white font-medium text-lg">
              {t('health.banner.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Sección A: Cuadro Médico */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {t('health.directory.label')}
            </span>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6">
              {t('health.directory.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('health.directory.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalDirectory.map((specialty, index) => (
              <div
                key={index}
                className={cn(
                  'group bg-card rounded-3xl p-8 border border-border',
                  'hover:border-accent/50 hover:shadow-soft transition-all duration-300'
                )}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <specialty.icon className="w-8 h-8 text-accent" />
                </div>
                
                {/* Title & Description */}
                <h3 className="font-montserrat text-xl font-bold text-primary mb-3">
                  {t(specialty.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {t(specialty.descKey)}
                </p>
                
                {/* Procedures List */}
                <ul className="space-y-2 mb-6">
                  {specialty.procedures.map((proc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{t(proc)}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full rounded-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  <a 
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hola, me interesa información sobre ${t(specialty.titleKey)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('health.cta.consult')}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección C: Chequeo Ejecutivo */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                {t('health.exec.label')}
              </span>
              <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-6">
                {t('health.exec.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('health.exec.description')}
              </p>
              
              {/* BIUMAN Info */}
              <div className="bg-card rounded-2xl p-6 border border-border mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Dumbbell className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-foreground mb-2">
                      {t('health.exec.biuman.title')}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t('health.exec.biuman.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToForm}
                size="lg"
                className="rounded-full px-10 h-14 text-lg font-semibold bg-accent hover:bg-accent/90 text-white"
              >
                {t('health.exec.cta')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right: Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {executiveServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-montserrat font-bold text-foreground mb-2">
                    {t(service.titleKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Routes */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-4">
                  {t('health.routes.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t('health.routes.desc')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{t('health.routes.item1')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{t('health.routes.item2')}</span>
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{t('health.routes.item3')}</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary rounded-2xl p-8">
                  <span className="block font-montserrat text-5xl md:text-6xl font-bold text-white mb-2">48h</span>
                  <span className="text-white/80">{t('health.routes.time')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary text-center mb-12">
            {t('health.allies.title')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[
              { src: logoHematologico, alt: 'Laboratorio Clínico Hematológico' },
              { src: logoAltaEstetica, alt: 'Alta Estética Dental' },
              { src: logoSantaLucia, alt: 'Santa Lucía - Cuidamos tus sentidos' },
              { src: logoOftalmologica, alt: 'Clínica Oftalmológica de Medellín' },
              { src: logoSura, alt: 'Clínica Sura' },
              { src: logoSomer, alt: 'Clínica Somer' },
              { src: LogoMasvida, alt: 'Mas vida' },
              { src: logoVumi, alt: 'Vumi Travel' },
            ].map((ally, i) => (
              <img
                key={i}
                src={ally.src}
                alt={ally.alt}
                className="h-20 md:h-28 w-auto max-w-[220px] md:max-w-[280px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* VIP Budget Form */}
      <div id="vip-form">
        <VipBudgetForm />
      </div>
    </Layout>
  );
};

export default MedicinePage;
