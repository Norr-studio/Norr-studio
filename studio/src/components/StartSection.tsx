import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Hls from 'hls.js'

// Replace with your actual Mux HLS URL
const HLS_URL = ''

const STEPS = [
  {
    number: '01',
    title: 'Brief & Strategy',
    body: 'We learn your business, audience, and goals in a single 30-minute call. Our AI drafts a conversion-focused sitemap before the call ends.',
  },
  {
    number: '02',
    title: 'Design & Build',
    body: 'AI-generated designs are refined by senior designers. Development runs in parallel — most sites ship in under two weeks.',
  },
  {
    number: '03',
    title: 'Launch & Iterate',
    body: 'We deploy to a global CDN, monitor performance, and push ongoing improvements based on real user data.',
  },
]

export function StartSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v || !HLS_URL) return
    if (Hls.isSupported()) {
      const hls = new Hls({ autoStartLoad: true })
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
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      {/* Video / gradient bg */}
      <div className="absolute inset-0 z-0">
        {HLS_URL ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-20"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        )}
        <div className="absolute inset-0 bg-[#020d0a]/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="text-[11px] font-body font-medium text-white/30 uppercase tracking-[0.15em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The process
          </motion.p>
          <motion.h2
            className="font-heading italic font-bold text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            From brief to live site in days
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="p-8 lg:p-12 bg-[#020d0a] hover:bg-white/[0.02] transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-[11px] font-body font-medium text-white/20 tracking-[0.2em] mb-6">
                {step.number}
              </span>
              <h3 className="font-body font-medium text-white text-xl mb-4">{step.title}</h3>
              <p className="font-body font-light text-white/40 text-[15px] leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
