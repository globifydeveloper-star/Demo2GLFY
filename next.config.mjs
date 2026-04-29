/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // Standard hosting cannot run Next.js server-side image optimization
  async redirects() {
    return [
      {
        source: '/checkout',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sample-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
