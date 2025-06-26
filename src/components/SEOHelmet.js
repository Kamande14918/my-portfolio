import React from 'react';
import { Helmet } from 'react-helmet-async';

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

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={`${title} - Kennedy Kamande`} />
      <meta property="og:site_name" content="Kennedy Kamande Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      <meta property="twitter:image:alt" content={`${title} - Kennedy Kamande`} />
      <meta property="twitter:creator" content="@KennedyKamande" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="kennedy-kamande-100a78216" />
    </Helmet>
  );
};

export default SEOHelmet;
