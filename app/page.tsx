import Home from '@/components/home/Home';
import React from 'react'

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ved Chaudhari",
    "url": "https://vedchaudhari.vercel.app",
    "image": "https://vedchaudhari.vercel.app/images/s12.png",
    "sameAs": [
      "https://github.com/vedchaudhari",
      "https://linkedin.com/in/vedchaudhari",
      // Add other social profiles here
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}

export default HomePage;