import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/css/', '/_next/static/js/'],
      disallow: '/private/',
    },
    sitemap: 'https://globify.ae/sitemap.xml',
  };
}
