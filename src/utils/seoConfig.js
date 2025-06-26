// SEO utilities for the portfolio

export const siteConfig = {
  siteUrl: "https://kamande14918.github.io/my-portfolio",
  siteName: "Kennedy Kamande Portfolio",
  author: "Kennedy Kamau Kamande",
  description: "Passionate Electronics & Computer Engineering student at JKUAT specializing in full-stack development, AI integration, and hardware solutions.",
  keywords: [
    "Kennedy Kamande",
    "Full-Stack Developer",
    "Electronics Engineer", 
    "React.js",
    "Node.js",
    "Python",
    "Flask",
    "AI Integration",
    "Machine Learning",
    "JKUAT",
    "Kenya",
    "Web Development",
    "Hardware Engineering",
    "Software Developer",
    "Portfolio"
  ],
  social: {
    github: "https://github.com/Kamande14918",
    linkedin: "http://www.linkedin.com/in/kennedy-kamande-100a78216",
    twitter: "@KennedyKamande",
    email: "kennedykamande@email.com" // Replace with actual email
  },
  location: {
    country: "Kenya",
    city: "Nairobi",
    region: "KE",
    coordinates: {
      lat: "-1.286389",
      lng: "36.817223"
    }
  }
};

export const pageConfigs = {
  home: {
    title: "Kennedy Kamau Kamande - Full-Stack Developer & Electronics Engineer | Portfolio",
    description: "Passionate Electronics & Computer Engineering student at JKUAT specializing in full-stack development, AI integration, and hardware solutions.",
    keywords: "Kennedy Kamande, Full-Stack Developer, Electronics Engineer, React.js, Node.js, Python, Portfolio",
    path: "/",
    image: "/images/Kennedy_img.jpg"
  },
  about: {
    title: "About Kennedy Kamande - Electronics Engineering Student & Full-Stack Developer",
    description: "Learn about Kennedy Kamande's journey in Electronics & Computer Engineering at JKUAT, passion for full-stack development, and expertise in AI integration.",
    keywords: "About Kennedy Kamande, Electronics Engineering Student, JKUAT, Full-Stack Developer, AI Integration",
    path: "/#/about",
    image: "/images/Kennedy_img.jpg"
  },
  skills: {
    title: "Technical Skills - React.js, Node.js, Python, AI & Hardware Engineering",
    description: "Explore Kennedy Kamande's technical skills including React.js, Node.js, Python, Flask, Machine Learning, AI Integration, and Hardware Engineering expertise.",
    keywords: "Technical Skills, React.js, Node.js, Python, Flask, Machine Learning, AI Integration, Hardware Engineering",
    path: "/#/skills",
    image: "/images/Kennedy_img.jpg"
  },
  projects: {
    title: "Portfolio Projects - Full-Stack Development & AI Integration Projects",
    description: "Discover Kennedy Kamande's portfolio of full-stack development projects, AI integration work, and innovative hardware solutions.",
    keywords: "Portfolio Projects, Full-Stack Development, AI Integration, React.js Projects, Node.js Applications",
    path: "/#/projects",
    image: "/images/Blog-app.png"
  },
  contact: {
    title: "Contact Kennedy Kamande - Available for Hire & Collaboration",
    description: "Get in touch with Kennedy Kamande for full-stack development projects, AI integration work, or collaboration opportunities.",
    keywords: "Contact Kennedy Kamande, Hire Full-Stack Developer, AI Integration Services, Collaboration",
    path: "/#/contact",
    image: "/images/Kennedy_img.jpg"
  }
};

export const generatePageSEO = (pageName) => {
  const config = pageConfigs[pageName] || pageConfigs.home;
  return {
    ...config,
    url: `${siteConfig.siteUrl}${config.path}`,
    fullImage: `${siteConfig.siteUrl}${config.image}`,
    keywords: config.keywords + ", " + siteConfig.keywords.join(", ")
  };
};

export const generateStructuredData = (type, data = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type
  };

  switch (type) {
    case "Person":
      return {
        ...baseData,
        "name": siteConfig.author,
        "url": siteConfig.siteUrl,
        "image": `${siteConfig.siteUrl}/images/Kennedy_img.jpg`,
        "sameAs": [
          siteConfig.social.github,
          siteConfig.social.linkedin
        ],
        "jobTitle": "Full-Stack Developer & Electronics Engineering Student",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Jomo Kenyatta University of Agriculture and Technology",
          "url": "https://www.jkuat.ac.ke/"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": siteConfig.location.city,
          "addressCountry": siteConfig.location.country
        },
        "nationality": "Kenyan",
        "knowsAbout": [
          "Full-Stack Web Development",
          "React.js", "Node.js", "Python", "Flask",
          "JavaScript", "Machine Learning", "AI Integration",
          "Hardware Engineering", "Electronics Engineering"
        ],
        ...data
      };

    case "WebSite":
      return {
        ...baseData,
        "name": siteConfig.siteName,
        "url": siteConfig.siteUrl,
        "description": siteConfig.description,
        "author": {
          "@type": "Person",
          "name": siteConfig.author
        },
        "inLanguage": "en-US",
        "copyrightYear": "2025",
        "copyrightHolder": {
          "@type": "Person",
          "name": siteConfig.author
        },
        ...data
      };

    case "SoftwareApplication":
      return {
        ...baseData,
        "name": data.name || "Portfolio Project",
        "description": data.description || "Full-stack web application",
        "author": {
          "@type": "Person",
          "name": siteConfig.author
        },
        "programmingLanguage": data.technologies || ["JavaScript", "React", "Node.js"],
        "url": data.url || siteConfig.siteUrl,
        "image": data.image || `${siteConfig.siteUrl}/images/placeholder-project.png`,
        ...data
      };

    default:
      return baseData;
  }
};

// SEO monitoring and analytics helpers
export const trackSEOEvent = (eventName, data = {}) => {
  // Google Analytics 4 event tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'SEO',
      event_label: data.label || '',
      value: data.value || 1,
      ...data
    });
  }

  // Microsoft Clarity custom event
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', eventName, data);
  }
};

export const generateCanonicalUrl = (path = "") => {
  return `${siteConfig.siteUrl}${path}`;
};

export const generateRobotsMeta = (index = true, follow = true) => {
  const indexValue = index ? "index" : "noindex";
  const followValue = follow ? "follow" : "nofollow";
  return `${indexValue}, ${followValue}`;
};
