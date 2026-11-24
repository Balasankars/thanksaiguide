import Link from 'next/link'
import { CATEGORIES } from '@/lib/posts'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo />
          <p className="text-sm leading-relaxed text-ink-foreground/70">
            Free, step-by-step AI guides in Telugu and English. ఉచిత AI గైడ్స్ — అన్నీ ఒకే చోట.
          </p>
        </div>
        <nav aria-label="Footer categories" className="flex flex-col gap-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-ink-foreground/60">Categories</h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="text-ink-foreground/85 hover:text-ink-foreground">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink-foreground/60 sm:px-6">
          {`© ${new Date().getFullYear()} ThanksAI Guide. Guides originally published on `}
          <a href="https://thanksai.blog" className="underline underline-offset-2 hover:text-ink-foreground">
            thanksai.blog
          </a>
          , republished with permission.
        </p>
      </div>
    </footer>
  )
}
