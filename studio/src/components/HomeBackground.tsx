import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  baseOpacity: number
  phase: number
  color: [number, number, number]
  glow: boolean
}

function pickColor(): [number, number, number] {
  const r = Math.random()
  if (r < 0.35) return [0, 80, 65]       // deep teal — far, barely there
  if (r < 0.65) return [0, 155, 120]     // mid teal — standard
  if (r < 0.85) return [0, 229, 160]     // brand teal — Norr accent
  if (r < 0.97) return [150, 245, 220]   // pale teal — near-white highlight
  return [230, 255, 250]                  // ghost white — extremely rare
}

const LAYERS = [
  { count: 260, sizeRange: [0.3, 0.5]   as [number,number], speedRange: [0.015, 0.05] as [number,number], opacityRange: [0.08, 0.20] as [number,number], glow: false, maxAngle: 3  },
  { count: 120, sizeRange: [0.55, 0.95] as [number,number], speedRange: [0.055, 0.13] as [number,number], opacityRange: [0.18, 0.35] as [number,number], glow: false, maxAngle: 6  },
  { count: 45,  sizeRange: [1.0, 2.0]   as [number,number], speedRange: [0.28, 0.48]  as [number,number], opacityRange: [0.30, 0.55] as [number,number], glow: true,  maxAngle: 11 },
]

function rnd(min: number, max: number) { return min + Math.random() * (max - min) }

function buildStars(w: number, h: number): Star[] {
  const stars: Star[] = []
  for (const layer of LAYERS) {
    for (let i = 0; i < layer.count; i++) {
      const speedX = rnd(layer.speedRange[0], layer.speedRange[1])
      const angleRad = rnd(-layer.maxAngle, layer.maxAngle) * (Math.PI / 180)
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: rnd(layer.sizeRange[0], layer.sizeRange[1]),
        speedX,
        speedY: speedX * Math.tan(angleRad),
        baseOpacity: rnd(layer.opacityRange[0], layer.opacityRange[1]),
        phase: Math.random() * Math.PI * 2,
        color: pickColor(),
        glow: layer.glow,
      })
    }
  }
  return stars
}

export function HomeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = 0
    let stars: Star[] = []
    let time = 0

    function resize(cv: HTMLCanvasElement, cx: CanvasRenderingContext2D) {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      cv.width = w * dpr
      cv.height = h * dpr
      cv.style.width = w + 'px'
      cv.style.height = h + 'px'
      cx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = buildStars(w, h)
    }

    function draw(cx: CanvasRenderingContext2D) {
      const w = window.innerWidth
      const h = window.innerHeight
      cx.clearRect(0, 0, w, h)
      time += 0.008

      for (const star of stars) {
        star.x -= star.speedX
        star.y += star.speedY
        if (star.x < -2) star.x = w + 2
        if (star.y < -2) star.y = h + 2
        if (star.y > h + 2) star.y = -2

        const opacity = Math.max(0, star.baseOpacity + 0.04 * Math.sin(time + star.phase))
        const [r, g, b] = star.color

        if (star.glow) {
          cx.shadowBlur = star.size * 10
          cx.shadowColor = `rgba(${r},${g},${b},${opacity * 0.7})`
        } else {
          cx.shadowBlur = 0
        }

        cx.beginPath()
        cx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        cx.fillStyle = `rgba(${r},${g},${b},${opacity})`
        cx.fill()
      }

      cx.shadowBlur = 0
      animId = requestAnimationFrame(() => draw(cx))
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => resize(canvas, ctx), 150)
    }
    resize(canvas, ctx)
    window.addEventListener('resize', onResize)
    animId = requestAnimationFrame(() => draw(ctx))

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1, background: '#020d0a' }}
    >
      {/* Ambient teal light source — upper left */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 20% 25%, rgba(0,140,108,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Edge vignette — darkens perimeter, adds depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 130% 110% at 50% 50%, transparent 45%, rgba(0,0,0,0.40) 100%)',
        }}
      />

      {/* Star field */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
