import React from 'react';
import Contact from '../components/Contact';
import SEOHelmet from '../components/SEOHelmet';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <SEOHelmet
        title="Contact Kennedy Kamande - Hire Full-Stack Developer | Available for Projects"
        description="Get in touch with Kennedy Kamande for full-stack web development, AI integration, and electronics engineering projects. Available for freelance work and collaboration opportunities in Kenya and globally."
        keywords="Contact Kennedy Kamande, Hire Full-Stack Developer, Web Development Services, AI Integration Services, Freelance Developer Kenya, React.js Developer for Hire, Python Developer, Electronics Engineer Contact"
        url="/#/contact"
        image="/images/Kennedy_img.jpg"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
