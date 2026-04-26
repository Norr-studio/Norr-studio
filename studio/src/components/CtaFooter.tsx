import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Hls from 'hls.js'
import { Footer } from './Footer'

const HLS_URL = ''

export function CtaFooter() {
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
    <footer id="contact" className="relative overflow-hidden">
      <div className="relative py-32 px-8 md:px-16 overflow-hidden">
        {/* Video / ambient bg */}
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
            <div className="w-full h-full bg-[radial-gradient(ellipse_70%_50%_at_20%_50%,rgba(0,140,108,0.07)_0%,transparent_70%)]" />
          )}
          <div className="absolute inset-0 bg-[#020d0a]/20" />
        </div>

        <div className="relative z-10">
          {/* Teal rule — mirrors Hero */}
          <motion.div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--brand)',
              transformOrigin: 'left',
              marginBottom: '24px',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Headline */}
          <motion.h2
            className="font-heading italic font-bold text-[clamp(3.5rem,8vw,8rem)] leading-[0.92] mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white">Ready to build</span>
            <br />
            <span className="text-white/60">something great?</span>
          </motion.h2>

          {/* Body + CTA row */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body font-light text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/50 max-w-[45ch] leading-relaxed">
              Book a free strategy call. No commitment, no jargon — just a clear plan for your site.
            </p>

            <div className="flex flex-col gap-2 flex-shrink-0">
              <Link
                to="/contact"
                className="group font-body font-medium text-[15px] text-brand hover:text-[#00cfa0] transition-colors duration-200 flex items-center gap-2"
              >
                Book a call
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
              <span className="font-body font-light text-[12px] text-white/25 tracking-wide">
                marijus@norrstudio.fi
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </footer>
  )
}
