import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  splitBy?: 'words' | 'letters'
  direction?: 'bottom' | 'top'
}

export function BlurText({
  text,
  className,
  delay = 200,
  splitBy = 'words',
  direction = 'bottom',
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const tokens = splitBy === 'words' ? text.split(' ') : text.split('')

  const yInitial = direction === 'bottom' ? 50 : -50

  return (
    <span ref={ref} className={cn('inline', className)}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: splitBy === 'words' ? '0.25em' : undefined }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: yInitial }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: yInitial }
          }
          transition={{
            duration: 0.7,
            delay: i * (delay / 1000),
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  )
}
