import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import logoWatermark from '@/assets/logo-watermark.png';
import footerBg from '@/assets/footer-bg.png';

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
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5" />
                Medellín, Colombia
              </div>
            </div>

            {/* Partners */}
            <div className="mt-10 pt-10 border-t border-background/10">
              
              







              
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