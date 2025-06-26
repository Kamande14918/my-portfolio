import { useEffect } from 'react';

export const ProjectStructuredData = ({ projects }) => {
  useEffect(() => {
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

    // Remove existing structured data script
    const existingScript = document.querySelector('script[data-structured-data="projects"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-structured-data', 'projects');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-structured-data="projects"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [projects]);

  return null;
};
