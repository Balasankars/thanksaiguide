import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PostCard, toCardPost } from '@/components/post-card'
import { CATEGORIES, formatDate, getCategory, getPostsByCategory } from '@/lib/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: `${category.name} guides`,
    description: category.description,
    alternates: { canonical: `/category/${slug}/` },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()
  const posts = getPostsByCategory(slug)

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-12 sm:px-6 md:pt-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          All guides
        </Link>
        <span aria-hidden="true">{' / '}</span>
        <span aria-current="page" className="text-foreground">
          {category.name}
        </span>
      </nav>
      <header className="flex max-w-2xl flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{`${posts.length} guides`}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">{category.name}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground text-pretty">{category.description}</p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={toCardPost(post, formatDate(post.date))} />
        ))}
      </div>
    </div>
  )
}
