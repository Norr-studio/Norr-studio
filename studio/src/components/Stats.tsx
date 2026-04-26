import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Hls from 'hls.js'

// Replace with your actual Mux HLS URL
const HLS_URL = ''

const STATS = [
  { value: '140+', label: 'Sites launched' },
  { value: '98%', label: 'Client retention' },
  { value: '2 wks', label: 'Avg. delivery' },
  { value: '3.4×', label: 'Avg. conversion lift' },
]

export function Stats() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v || !HLS_URL) return
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(HLS_URL)
      hls.attachMedia(v)
      hls.on(Hls.Events.MANIFEST_PARSED, () => v.play().catch(() => {}))
      return () => hls.destroy()
    } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
      v.src = HLS_URL
      v.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Video / gradient bg */}
      <div className="absolute inset-0 z-0">
        {HLS_URL ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-15 grayscale"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(255,255,255,0.04)_0%,transparent_65%)]" />
        )}
        <div className="absolute inset-0 bg-[#020d0a]/20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="font-heading font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-white text-center mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Results that speak
        </motion.h2>

        {/* Stats card */}
        <motion.div
          className="liquid-glass-strong rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="px-8 py-10 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <div className="font-heading font-bold text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-body font-light text-[12px] text-white/35 uppercase tracking-[0.12em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
