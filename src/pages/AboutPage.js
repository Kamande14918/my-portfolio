import React from 'react';
import About from '../components/About';
import SEOHelmet from '../components/SEOHelmet';

const AboutPage = () => {
  return (
    <div className="about-page">
      <SEOHelmet
        title="About Kennedy Kamau Kamande - Electronics & Computer Engineering Student | JKUAT"
        description="Learn about Kennedy Kamau Kamande, a passionate Electronics & Computer Engineering student at JKUAT with expertise in full-stack development, AI integration, hardware assembly, and community mentorship."
        keywords="Kennedy Kamande About, Electronics Engineering, Computer Engineering, JKUAT, Full-Stack Developer, AI Integration, Hardware Assembly, Community Mentorship, Taifa Laptops, Educational Technology"
        url="/#/about"
        image="/images/Kennedy_img.jpg"
      />
      <About />
    </div>
  );
};

export default AboutPage;
