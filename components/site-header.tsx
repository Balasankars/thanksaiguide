import Link from 'next/link'
import { CATEGORIES } from '@/lib/posts'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2 rounded-md" aria-label="ThanksAI Guide home">
          <Logo />
        </Link>
        <nav aria-label="Categories" className="-mx-2 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto px-2 [scrollbar-width:none]">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="shrink-0 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
