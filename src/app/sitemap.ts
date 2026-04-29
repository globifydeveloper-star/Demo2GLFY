import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/services', '/web-development', '/app-development',
    '/digital-marketing', '/ecommerce', '/ai-automation',
    '/erp-solutions', '/about', '/projects', '/products',
    // Comprehensive sub-routes discovered to fix "Discovered but not indexed"
    '/shopify-uae', '/woocommerce-development', '/wix-ecommerce',
    '/shopify-plus', '/shopify-themes', '/magento-development',
    '/prestashop-development', '/performance-marketing',
    '/seo-content-strategy', '/process-automation', '/seo-aeo',
    '/social-media-marketing', '/predictive-analytics', '/migration-services'
  ];

  return staticPages.map(url => ({
    url: `https://globify.ae${url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: url === '' ? 1.0 : 0.8,
  }));
}
