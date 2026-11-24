import Link from 'next/link'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from '@/components/code-block'
import { slugifyHeading } from '@/lib/posts'

const ORIGINAL_GUIDE_PREFIX = 'https://thanksai.blog/guides/'

function textOf(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (node && typeof node === 'object' && 'props' in node) {
    return textOf((node as { props: { children?: React.ReactNode } }).props.children)
  }
  return ''
}

export function GuideMarkdown({ source }: { source: string }) {
  return (
    <div className="guide-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 id={slugifyHeading(textOf(children))}>{children}</h2>,
          pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
          img: ({ src, alt }) => <img src={typeof src === 'string' ? src : ''} alt={alt ?? ''} loading="lazy" />,
          blockquote: ({ children }) => <blockquote lang="te">{children}</blockquote>,
          a: ({ href = '', children }) => {
            if (href.startsWith(ORIGINAL_GUIDE_PREFIX)) {
              return <Link href={href.replace('https://thanksai.blog', '')}>{children}</Link>
            }
            if (href.startsWith('http')) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              )
            }
            return <Link href={href}>{children}</Link>
          },
        }}
      >
        {source}
      </Markdown>
    </div>
  )
}
