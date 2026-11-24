import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GuideMarkdown } from '@/components/guide-markdown'
import { PostCard, toCardPost } from '@/components/post-card'
import { SITE_NAME, SITE_URL, formatDate, getAllPosts, getPost, getPostsByCategory } from '@/lib/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: post.author ? [{ name: post.author }] : undefined,
    alternates: { canonical: `/guides/${post.slug}/` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      section: post.category.name,
      tags: post.tags,
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getPostsByCategory(post.category.slug)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    articleSection: post.category.name,
    keywords: post.tags.join(', '),
    inLanguage: 'en-IN',
    author: post.author ? { '@type': 'Person', name: post.author } : undefined,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/guides/${post.slug}/`,
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 md:pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <article className="min-w-0 max-w-3xl flex-1">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              All guides
            </Link>
            <span aria-hidden="true">{' / '}</span>
            <Link href={`/category/${post.category.slug}`} className="hover:text-foreground">
              {post.category.name}
            </Link>
          </nav>

          <header className="mb-10 flex flex-col gap-5">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              {post.author ? <span className="font-medium text-foreground">{post.author}</span> : null}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{`${post.readingMinutes} min read`}</span>
              {post.commentKeyword ? (
                <span className="rounded-full border border-primary/30 bg-secondary px-2.5 py-0.5 font-mono text-xs text-secondary-foreground">
                  {`Keyword: ${post.commentKeyword}`}
                </span>
              ) : null}
            </div>
          </header>

          <GuideMarkdown source={post.body} />

          {post.tags.length > 0 ? (
            <ul aria-label="Tags" className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </article>

        {post.headings.length > 0 ? (
          <aside className="hidden w-60 shrink-0 lg:block">
            <nav aria-label="On this page" className="sticky top-24 flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">On this page</h2>
              <ul className="flex flex-col gap-2 border-l text-sm">
                {post.headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-muted-foreground hover:border-primary hover:text-foreground">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        ) : null}
      </div>

      {related.length > 0 ? (
        <section aria-labelledby="related" className="mt-20 flex flex-col gap-6 border-t pt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="related" className="text-2xl font-semibold tracking-tight">
              {`More in ${post.category.name}`}
            </h2>
            <Link href={`/category/${post.category.slug}`} className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={toCardPost(p, formatDate(p.date))} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
