import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden px-8 md:px-16 pb-20 pt-28">
      {/* Subtle bottom fade for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />

      <div className="relative z-10">
        {/* Teal editorial rule — draws in from left */}
        <motion.div
          style={{
            width: '40px',
            height: '1px',
            backgroundColor: 'var(--brand)',
            transformOrigin: 'left',
            marginBottom: '24px',
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Headline — single unified entrance, no per-word stagger */}
        <motion.h1
          className="font-heading italic font-bold text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.92] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-white">A website that gets you</span>
          <br />
          <span className="text-white">more customers, live in two weeks</span>
        </motion.h1>

        {/* Body copy + CTAs — side by side on desktop, stacked on mobile */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body font-light text-[clamp(0.9rem,1.5vw,1.05rem)] text-white/50 max-w-[45ch] leading-relaxed">
            We take care of the design, the build, the launch. You run your business.
          </p>

          <div className="flex items-center gap-8 flex-shrink-0">
            <Link
              to="/contact"
              className="group font-body font-medium text-[15px] text-brand hover:text-[#00cfa0] transition-colors duration-200 flex items-center gap-2"
            >
              Book a call
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <a
              href="#how-it-works"
              className="font-body font-light text-[13px] text-white/35 hover:text-white/60 transition-colors duration-200"
            >
              See how it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
