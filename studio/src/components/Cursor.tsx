import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 })
  const ringX = useSpring(mouseX, { stiffness: 450, damping: 35 })
  const ringY = useSpring(mouseY, { stiffness: 450, damping: 35 })

  useEffect(() => {
    // Only enable on true pointer devices (mouse / trackpad), not touch
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as Element
      setHovered(!!t.closest('a, button, [role="button"]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      {/* Outer ring — lags behind with spring physics */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-7 h-7 rounded-full border z-[99999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)',
        }}
        animate={{ scale: hovered ? 1.57 : 1 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Inner dot — precise tracking */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-1 h-1 rounded-full bg-white/80 z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
