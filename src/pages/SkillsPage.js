import React from 'react';
import Skills from '../components/Skills';
import SEOHelmet from '../components/SEOHelmet';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <SEOHelmet
        title="Technical Skills - Kennedy Kamande | React.js, Node.js, Python, AI Integration"
        description="Explore Kennedy Kamande's comprehensive technical skills including React.js, Node.js, Python, Flask, JavaScript, AI integration, machine learning, hardware engineering, and modern web development technologies."
        keywords="React.js Skills, Node.js Developer, Python Programming, Flask Framework, JavaScript Expert, AI Integration, Machine Learning, TypeScript, MongoDB, MySQL, PostgreSQL, Hardware Engineering, Electronics Skills, Web Development Skills"
        url="/#/skills"
        image="/images/Kennedy_img.jpg"
      />
      <Skills />
    </div>
  );
};

export default SkillsPage;
