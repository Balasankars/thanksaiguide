import type { MetadataRoute } from 'next'
import { CATEGORIES, SITE_URL, getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'daily', priority: 1 },
    ...CATEGORIES.map((c) => ({ url: `${SITE_URL}/category/${c.slug}/`, changeFrequency: 'weekly' as const, priority: 0.7 })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/guides/${p.slug}/`,
      lastModified: p.updated || p.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
