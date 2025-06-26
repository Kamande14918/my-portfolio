import React from 'react';

const SocialMediaSEO = ({ 
  title = "Kennedy Kamau Kamande - Full-Stack Developer & Electronics Engineer",
  description = "Passionate Electronics & Computer Engineering student at JKUAT specializing in full-stack development, AI integration, and hardware solutions.",
  image = "/images/Kennedy_img.jpg",
  url = "" 
}) => {
  const siteUrl = "https://kamande14918.github.io/my-portfolio";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = `${siteUrl}${image}`;

  return (
    <>
      {/* WhatsApp Sharing Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Additional Twitter Meta Tags */}
      <meta name="twitter:site" content="@KennedyKamande" />
      <meta name="twitter:creator" content="@KennedyKamande" />
      
      {/* LinkedIn Specific Meta Tags */}
      <meta property="linkedin:owner" content="kennedy-kamande-100a78216" />
      
      {/* Pinterest Meta Tags */}
      <meta name="pinterest" content="nopin" description="This content is not available for pinning" />
      
      {/* Schema.org Article for Individual Projects */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "image": fullImage,
          "author": {
            "@type": "Person",
            "name": "Kennedy Kamau Kamande",
            "url": siteUrl
          },
          "publisher": {
            "@type": "Person",
            "name": "Kennedy Kamau Kamande",
            "logo": {
              "@type": "ImageObject",
              "url": fullImage
            }
          },
          "datePublished": "2025-06-26",
          "dateModified": "2025-06-26",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
          }
        })}
      </script>

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": siteUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": title,
              "item": fullUrl
            }
          ]
        })}
      </script>

      {/* FAQ Structured Data (for Skills/Services page) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What technologies do you specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I specialize in React.js, Node.js, Python, Flask, JavaScript, TypeScript, MongoDB, MySQL, PostgreSQL, Machine Learning, AI Integration, and Hardware Engineering."
              }
            },
            {
              "@type": "Question",
              "name": "Are you available for freelance work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, I am available for freelance projects and full-time opportunities. I offer full-stack web development, AI integration, and hardware engineering services."
              }
            },
            {
              "@type": "Question",
              "name": "What is your educational background?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I am currently pursuing Electronics and Computer Engineering at Jomo Kenyatta University of Agriculture and Technology (JKUAT) in Kenya."
              }
            }
          ]
        })}
      </script>
    </>
  );
};

export default SocialMediaSEO;
