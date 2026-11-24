'use client'

import { useDeferredValue, useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PostCard } from '@/components/post-card'
import type { toCardPost } from '@/components/post-card'
import { cn } from '@/lib/utils'

type CardPost = ReturnType<typeof toCardPost>

export function GuideBrowser({
  posts,
  categories,
}: {
  posts: CardPost[]
  categories: { name: string; count: number }[]
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase()
    return posts.filter(
      (p) =>
        (!category || p.categoryName === category) &&
        (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)),
    )
  }, [posts, category, deferredQuery])

  const chips = [{ name: null as string | null, label: 'All', count: posts.length }].concat(
    categories.map((c) => ({ name: c.name, label: c.name, count: c.count })),
  )

  return (
    <section aria-labelledby="all-guides" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 id="all-guides" className="text-2xl font-semibold tracking-tight">
          All guides
        </h2>
        <label className="relative w-full md:w-80">
          <span className="sr-only">Search guides</span>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Claude, reels, SEO…"
            className="h-10 w-full rounded-full border bg-card pr-4 pl-9 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>
      </div>

      <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
        {chips.map((chip) => {
          const active = category === chip.name
          return (
            <button
              key={chip.label}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(chip.name)}
              className={cn(
                'flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                active ? 'border-ink bg-ink text-ink-foreground' : 'bg-card hover:bg-muted',
              )}
            >
              {chip.label}
              <span className={cn('text-xs', active ? 'text-ink-foreground/70' : 'text-muted-foreground')}>{chip.count}</span>
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="text-sm text-muted-foreground">
        {`Showing ${filtered.length} of ${posts.length} guides`}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed p-12 text-center text-muted-foreground">
          No guides match that search. Try a different word.
        </div>
      )}
    </section>
  )
}
