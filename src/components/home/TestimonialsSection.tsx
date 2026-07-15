import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import googleReviewsData from '@/data/googleReviews.json';

// Testimonios curados a mano — se quedan igual que siempre, traducidos.
const curatedTestimonials = [
  {
    id: 'curated-1',
    nameKey: 'testimonials.1.name',
    locationKey: 'testimonials.1.location',
    textKey: 'testimonials.1.text',
    rating: 5,
  },
  {
    id: 'curated-2',
    nameKey: 'testimonials.2.name',
    locationKey: 'testimonials.2.location',
    textKey: 'testimonials.2.text',
    rating: 5,
  },
  {
    id: 'curated-3',
    nameKey: 'testimonials.3.name',
    locationKey: 'testimonials.3.location',
    textKey: 'testimonials.3.text',
    rating: 5,
  },
];

type DisplayTestimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
};

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();

  // Reseñas de Google, sincronizadas automáticamente por el GitHub Action
  // (ver .github/workflows/sync-google-reviews.yml). Este archivo se
  // regenera solo — no hace falta tocarlo a mano.
  const googleTestimonials: DisplayTestimonial[] = (googleReviewsData.reviews ?? []).map(
    (review) => ({
      id: review.id,
      name: review.author,
      location: 'Reseña de Google',
      text: review.text,
      rating: review.rating,
    })
  );

  const testimonials: DisplayTestimonial[] = [
    ...curatedTestimonials.map((c) => ({
      id: c.id,
      name: t(c.nameKey),
      location: t(c.locationKey),
      text: t(c.textKey),
      rating: c.rating,
    })),
    ...googleTestimonials,
  ];

  // Autoplay suave, igual de espíritu que el resto del sitio (Hero,
  // colaboradores), respetando "reduce motion" y pausando si el usuario
  // interactúa con el carrusel.
  useEffect(() => {
    if (!api) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

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

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-8 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-primary/30 mb-4" />

                    <p className="text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
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
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
