import { useEffect } from 'react';

const SEOHelmet = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = "website",
  author = "Kennedy Kamau Kamande" 
}) => {
  const siteUrl = "https://kamande14918.github.io/my-portfolio";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/Kennedy_img.jpg`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Helper function to create or update meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update canonical link
    const updateCanonical = (href) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
    };

    // Primary Meta Tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateCanonical(fullUrl);

    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImage, true);
    updateMetaTag('og:image:alt', `${author} - Professional Portrait`, true);
    updateMetaTag('og:site_name', 'Kennedy Kamande Portfolio', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', fullUrl, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', fullImage, true);
    updateMetaTag('twitter:image:alt', `${author} - Professional Portrait`, true);
    updateMetaTag('twitter:creator', '@KennedyKamande', true);

    // LinkedIn
    updateMetaTag('linkedin:owner', 'kennedy-kamande-100a78216', true);

    // Additional SEO Meta Tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

  }, [title, description, keywords, image, url, type, author, fullUrl, fullImage]);

  // React 19 component returns null for head management
  return null;
};

export default SEOHelmet;
