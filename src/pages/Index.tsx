import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import AboutSection from '@/components/home/AboutSection';
import SpecialtiesGrid from '@/components/home/SpecialtiesGrid';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import ServicesGrid from '@/components/home/ServicesGrid';
import TestimonialsSection from '@/components/home/TestimonialsSection';


const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WhoWeAreSection />
      <AboutSection />
      <SpecialtiesGrid />
      <ProcessTimeline />
      <ServicesGrid />
      <TestimonialsSection />
      
    </Layout>
  );
};

export default Index;
