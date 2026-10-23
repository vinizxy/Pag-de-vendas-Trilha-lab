// Ícones desenhados no mesmo traço (1.8) para manter um só sistema visual.

type Props = { className?: string };

export function IconeConversa({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8.2 19z" />
      <path d="M9 10.5c.4 2 1.8 3.4 4 4.2l1.3-1.1 1.9.9-.4 1.5c-3.6-.2-6.6-3.1-7-6.6l1.5-.5.9 1.9z" strokeWidth="1.4" />
    </svg>
  );
}

export function IconeCheck({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M5 12.5l4.2 4L19 7" />
    </svg>
  );
}

export function IconeMais({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconeVistos({ className }: Props) {
  return (
    <svg viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M2 8.5l3.5 3.5L13 4.5M10 12l1 1 7.5-8.5" />
    </svg>
  );
}
