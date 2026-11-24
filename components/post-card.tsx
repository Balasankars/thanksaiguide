import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

type CardPost = Pick<PostMeta, 'slug' | 'title' | 'description' | 'cover' | 'readingMinutes'> & {
  categoryName: string
  dateLabel: string
}

export function PostCard({ post }: { post: CardPost }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg hover:shadow-foreground/5">
      {post.cover ? (
        <div className="aspect-[16/9] overflow-hidden border-b bg-muted">
          <img
            src={post.cover || '/placeholder.svg'}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-secondary px-2 py-0.5 font-medium text-secondary-foreground">
            {post.categoryName}
          </span>
          <span>{post.dateLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{`${post.readingMinutes} min read`}</span>
        </div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-balance">
          <Link href={`/guides/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
      </div>
    </article>
  )
}

export function toCardPost(post: PostMeta, dateLabel: string): CardPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    cover: post.cover,
    readingMinutes: post.readingMinutes,
    categoryName: post.category.name,
    dateLabel,
  }
}
