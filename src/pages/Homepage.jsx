import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SocialSection from '../components/sections/SocialSection';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <SocialSection />
    </div>
  );
};

export default Homepage;