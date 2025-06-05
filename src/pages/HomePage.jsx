import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import FaqSection from '../components/sections/FaqSection';

const HomePage = () => {
  useEffect(() => {
    // পেজ লোড হওয়ার সময় স্ক্রল পজিশন রিসেট করা
    window.scrollTo(0, 0);
    
    // পেজ টাইটেল আপডেট করা
    document.title = 'মামুনুর রহমান - ডিজিটাল সার্ভিস প্রদানকারী';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

