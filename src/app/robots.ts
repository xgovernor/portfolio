export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/_next/data/*', '/_next/static/*'],
    },
    sitemap: 'https://at-mah.vercel.app/sitemap.xml',
  }
}
