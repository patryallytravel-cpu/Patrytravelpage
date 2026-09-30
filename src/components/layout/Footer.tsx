import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Linkedin, Facebook, Smartphone, Phone, HeartPulse, Palette, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import logoWatermark from '@/assets/logo-watermark.png';
import footerBg from '@/assets/footer-bg.png';
import medellinFlorece from '@/assets/medellin-florece-2.png';

const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated submission - will be connected to backend later
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: '¡Mensaje enviado!',
      description: 'Te contactaremos pronto.'
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contacto" className="relative text-background overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }} />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-foreground/70" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative">
            {/* Logo Watermark - centered behind the form */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <img
                src={logoWatermark}
                alt=""
                className="w-96 md:w-[500px] opacity-[0.15] brightness-0 invert" />
              
            </div>
            
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold mb-4 relative z-10">
              {t('footer.plan')}
            </h2>
            <p className="text-background/70 mb-8 max-w-md relative z-10">
              {t('difference.subtitle')}
            </p>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder={t('footer.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-2xl h-12" />
                
                <Input
                  name="email"
                  type="email"
                  placeholder={t('footer.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-2xl h-12" />
                
              </div>
              <Input
                name="phone"
                type="tel"
                placeholder={t('footer.phone')}
                value={formData.phone}
                onChange={handleChange}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-2xl h-12" />
              
              <Textarea
                name="message"
                placeholder={t('footer.message')}
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 rounded-2xl resize-none" />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto rounded-full px-8 h-12 text-base">
                
                {isSubmitting ? '...' : t('footer.send')}
              </Button>
            </form>

            {/* Destino Medellín */}
            <div className="relative z-10 mt-10 pt-10 border-t border-background/10">
              <div className="flex items-center gap-5">
                <img
                  src={medellinFlorece}
                  alt="Medellín, aquí todo florece"
                  className="h-24 md:h-28 w-auto flex-shrink-0 rounded-2xl shadow-lg shadow-black/30 ring-1 ring-background/20" />
                <div>
                  <span className="block text-xs font-semibold tracking-widest uppercase text-secondary mb-2">
                    {t('footer.city.label')}
                  </span>
                  <p className="text-sm text-background/70 leading-relaxed max-w-xs">
                    {t('footer.city.desc')}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  { icon: HeartPulse, label: t('footer.city.health') },
                  { icon: Palette, label: t('footer.city.culture') },
                  { icon: Leaf, label: t('footer.city.nature') },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs text-background/80">
                    <Icon className="h-3.5 w-3.5 text-secondary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-12">
            <div className="mb-10">
              <div className="overflow-hidden" style={{ height: '160px' }}>
                <img
                  src={logoWatermark}
                  alt="Patry Ally"
                  style={{ height: '200px' }}
                  className="brightness-200" />
                
              </div>
              <p className="mt-4 text-background/70 max-w-sm">
                Tu aliada ideal en planificación médica VIP y experiencias personalizadas en Medellín.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:patryallytravel@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                
                <Mail className="h-5 w-5" />
                patryallytravel@gmail.com
              </a>
              <a
                href="https://instagram.com/patryally"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                
                <Instagram className="h-5 w-5" />
                @patryally
              </a>
              <a
                href="https://www.linkedin.com/in/mariaparango"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                
                <Linkedin className="h-5 w-5" />
                Maria Parango
              </a>
              <a
                href="https://www.tiktok.com/@patryally"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                
                <Smartphone className="h-5 w-5" />
                @patryally tik tok
              </a>
             
             
              <a
                href="https://wa.me/573006247456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                
                <Phone className="h-5 w-5" />
                +57 300 624 7456
              </a>

              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5" />
                Medellín, Colombia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Patry Ally. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/medicina" className="text-sm text-background/50 hover:text-background transition-colors">
              {t('nav.medicine')}
            </Link>
            <Link to="/experiencias" className="text-sm text-background/50 hover:text-background transition-colors">
              {t('nav.tours')}
            </Link>
            <Link to="/tarifas" className="text-sm text-background/50 hover:text-background transition-colors">
              {t('nav.pricing')}
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;