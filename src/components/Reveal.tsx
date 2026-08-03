import { useEffect, useRef, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom'
  delay?: number // ms
  duration?: number // ms, default 850
}

export default function Reveal({
  children,
  className = '',
  direction,
  delay,
  duration,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-direction={direction}
      style={{
        transitionDelay: delay !== undefined ? `${delay}ms` : undefined,
        transitionDuration: duration !== undefined ? `${duration}ms` : undefined,
      }}
    >
      {children}
    </div>
  )
}
