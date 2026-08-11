import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  // Replace with your actual live domain name
  const baseUrl = 'https://www.buildoarchitect.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow any private routes if you add them in the future
      // disallow: '/private/', 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
