import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export const SITE_URL = 'https://thanksaiguide.blog'
export const SITE_NAME = 'ThanksAI Guide'

export type Category = {
  slug: string
  name: string
  description: string
}

export const CATEGORIES: Category[] = [
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    description: 'Claude, Claude Code skills, AI video, animation and free tools — step by step.',
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, AI search, ads and competitor tracking with AI doing the heavy lifting.',
  },
  {
    slug: 'make-money-online',
    name: 'Make Money Online',
    description: 'Websites, apps and services you can build with AI and sell to local businesses.',
  },
  {
    slug: 'social-media',
    name: 'Social Media',
    description: 'Reels, Shorts, Instagram and LinkedIn workflows powered by AI.',
  },
  {
    slug: 'prompts',
    name: 'Prompts',
    description: 'Copy-paste prompt systems for animation, motion graphics and edits.',
  },
  { slug: 'other', name: 'Other', description: 'Everyday AI helpers for money, subscriptions and more.' },
]

export type PostMeta = {
  slug: string
  title: string
  description: string
  category: Category
  date: string
  updated: string
  tags: string[]
  author: string
  readingMinutes: number
  commentKeyword: string | null
  cover: string | null
}

export type Post = PostMeta & {
  body: string
  headings: { id: string; text: string }[]
}

export function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}

function parseFile(categorySlug: string, file: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, categorySlug, file), 'utf8')
  const { data, content } = matter(raw)
  const category = CATEGORIES.find((c) => c.slug === categorySlug) ?? CATEGORIES[CATEGORIES.length - 1]

  let commentKeyword: string | null = null
  const body = content
    .replace(/^\s*# .+\n+/, '')
    .replace(/^Comment keyword: \*\*(.+?)\*\*.*\n+/m, (_, keyword: string) => {
      commentKeyword = keyword
      return ''
    })
    .replace(/^Topic: .+· Last checked: .+\n+/m, '')

  const headings = [...body.matchAll(/^## (.+)$/gm)].map((m) => ({ id: slugifyHeading(m[1]), text: m[1] }))
  const cover = body.match(/!\[[^\]]*\]\((\/images\/guides\/[^)]+\/cover\.[a-z]+)\)/)?.[1] ?? null
  const words = body.split(/\s+/).filter(Boolean).length

  return {
    slug: String(data.slug ?? file.replace(/\.md$/, '')),
    title: String(data.title),
    description: String(data.description ?? ''),
    category,
    date: String(data.date ?? ''),
    updated: String(data.updated ?? data.date ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: String(data.author ?? ''),
    readingMinutes: Math.max(1, Math.round(words / 200)),
    commentKeyword,
    cover,
    body,
    headings,
  }
}

const loadPosts = cache((): Post[] => {
  const posts: Post[] = []
  for (const dir of fs.readdirSync(POSTS_DIR)) {
    const full = path.join(POSTS_DIR, dir)
    if (!fs.statSync(full).isDirectory()) continue
    for (const file of fs.readdirSync(full)) {
      if (file.endsWith('.md')) posts.push(parseFile(dir, file))
    }
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)))
})

function toMeta({ body: _body, headings: _headings, ...meta }: Post): PostMeta {
  return meta
}

export function getAllPosts(): PostMeta[] {
  return loadPosts().map(toMeta)
}

export function getPost(slug: string): Post | undefined {
  return loadPosts().find((p) => p.slug === slug)
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function getPostsByCategory(slug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category.slug === slug)
}

export function getCategoryCounts() {
  const posts = getAllPosts()
  return CATEGORIES.map((c) => ({ ...c, count: posts.filter((p) => p.category.slug === c.slug).length }))
}

export function formatDate(date: string) {
  if (!date) return ''
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
