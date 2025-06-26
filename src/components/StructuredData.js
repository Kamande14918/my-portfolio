import { Helmet } from 'react-helmet-async';

export const ProjectStructuredData = ({ projects }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Kennedy Kamande Project Portfolio",
    "description": "A collection of full-stack web development and AI integration projects",
    "author": {
      "@type": "Person",
      "name": "Kennedy Kamau Kamande",
      "url": "https://kamande14918.github.io/my-portfolio/"
    },
    "workExample": projects.map(project => ({
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "url": project.url || project.github,
      "applicationCategory": "WebApplication",
      "operatingSystem": "Any",
      "programmingLanguage": project.technologies
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
