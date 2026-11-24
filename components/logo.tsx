export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-lg bg-ink font-mono text-sm font-semibold text-ink-foreground"
      >
        T
      </span>
      <span className="text-base font-semibold tracking-tight">
        ThanksAI<span className="text-primary">Guide</span>
      </span>
    </span>
  )
}
