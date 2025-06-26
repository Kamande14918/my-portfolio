import React from 'react';
import Projects from '../components/Projects';
import SEOHelmet from '../components/SEOHelmet';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <SEOHelmet
        title="Projects Portfolio - Kennedy Kamande | CBC SmartLearning, Blog App & More"
        description="View Kennedy Kamande's impressive project portfolio including CBC SmartLearning AI-powered education platform, Flask blog application, and innovative full-stack web development projects showcasing React.js, Python, and AI integration."
        keywords="Kennedy Kamande Projects, CBC SmartLearning, AI Education Platform, Flask Blog App, React.js Projects, Python Projects, Full-Stack Projects, Web Development Portfolio, AI Integration Projects, Educational Technology"
        url="/#/projects"
        image="/images/CBC-SmartLearning.jpg"
      />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
