import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    nameKey: 'testimonials.1.name',
    locationKey: 'testimonials.1.location',
    textKey: 'testimonials.1.text',
    rating: 5,
  },
  {
    id: 2,
    nameKey: 'testimonials.2.name',
    locationKey: 'testimonials.2.location',
    textKey: 'testimonials.2.text',
    rating: 5,
  },
  {
    id: 3,
    nameKey: 'testimonials.3.name',
    locationKey: 'testimonials.3.location',
    textKey: 'testimonials.3.text',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{t(testimonial.textKey)}"
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary" 
                    />
                  ))}
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {t(testimonial.nameKey)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(testimonial.locationKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
