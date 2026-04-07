import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import logoWatermark from '@/assets/logo-watermark.png';

const VipBudgetForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated submission - will be connected to backend later
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('form.success.title'),
      description: t('form.success.desc'),
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              {t('form.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('form.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative bg-card rounded-3xl p-8 md:p-10 shadow-soft border border-border overflow-hidden">
            {/* Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img 
                src={logoWatermark} 
                alt="" 
                className="w-64 md:w-80 opacity-[0.04]"
              />
            </div>
            <div className="relative z-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  name="name"
                  placeholder={t('footer.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border rounded-2xl h-12"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder={t('footer.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border rounded-2xl h-12"
                />
              </div>
              <Input
                name="phone"
                type="tel"
                placeholder={t('footer.phone')}
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-background border-border rounded-2xl h-12"
              />
              <Input
                name="service"
                placeholder={t('form.service')}
                value={formData.service}
                onChange={handleChange}
                className="bg-background border-border rounded-2xl h-12"
              />
              <Textarea
                name="message"
                placeholder={t('form.details')}
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-background border-border rounded-2xl resize-none"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full h-12 text-base font-semibold"
              >
                {isSubmitting ? '...' : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('form.submit')}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VipBudgetForm;
