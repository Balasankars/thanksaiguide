'use client'

import { useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const preRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  async function copy() {
    const text = preRef.current?.textContent ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-ink bg-ink text-ink-foreground">
      <div className="flex items-center justify-between border-b border-ink-foreground/10 px-4 py-2">
        <span className="font-mono text-xs text-ink-foreground/60">prompt</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-ink-foreground/80 transition-colors hover:bg-ink-foreground/10 hover:text-ink-foreground"
        >
          {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre
        ref={preRef}
        className="max-h-[32rem] overflow-auto px-4 py-4 font-mono text-[0.8125rem] leading-relaxed whitespace-pre-wrap"
      >
        {children}
      </pre>
    </div>
  )
}
