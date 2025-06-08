
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
