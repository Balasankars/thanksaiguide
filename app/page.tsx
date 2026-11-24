import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GuideBrowser } from '@/components/guide-browser'
import { toCardPost } from '@/components/post-card'
import { formatDate, getAllPosts, getCategoryCounts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()
  const categories = getCategoryCounts()
  const latest = posts[0]

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pt-12 sm:px-6 md:pt-20">
      <section className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-5">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{`${posts.length} free AI guides`}</p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-6xl">
            Learn AI step by step.
            <span className="mt-2 block text-3xl text-muted-foreground md:text-4xl" lang="te">
              ఉచిత AI గైడ్స్ — అన్నీ ఒకే చోట
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Claude, AI video, reels, digital marketing and ways to earn online — with copy-paste prompts in every guide.
          </p>
        </div>
        {latest ? (
          <Link
            href={`/guides/${latest.slug}`}
            className="group flex max-w-sm flex-col gap-2 rounded-2xl border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-foreground/5"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Latest guide</span>
            <span className="font-semibold leading-snug text-balance">{latest.title}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              Read now
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ) : null}
      </section>

      <section aria-label="Categories" className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="group flex flex-col gap-2 bg-card p-5 transition-colors hover:bg-muted">
            <span className="flex items-baseline justify-between gap-2">
              <span className="font-semibold">{c.name}</span>
              <span className="font-mono text-sm text-primary">{c.count}</span>
            </span>
            <span className="hidden text-sm leading-relaxed text-muted-foreground sm:block">{c.description}</span>
          </Link>
        ))}
      </section>

      <GuideBrowser
        posts={posts.map((p) => toCardPost(p, formatDate(p.date)))}
        categories={categories.filter((c) => c.count > 0).map(({ name, count }) => ({ name, count }))}
      />
    </div>
  )
}
