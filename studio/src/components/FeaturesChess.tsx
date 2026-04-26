import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import feature1 from '../assets/feature-1.gif'
import feature2 from '../assets/feature-2.gif'

const FEATURES = [
  {
    tag: 'Design Intelligence',
    title: 'AI that understands your brand',
    body: 'Our model analyses your competitors, industry patterns, and conversion benchmarks before generating a single pixel. The result is a design that feels unmistakably yours.',
    gif: feature1,
    alt: 'AI design preview',
  },
  {
    tag: 'Speed',
    title: 'Production-ready in two weeks',
    body: 'Parallel AI-assisted workflows mean design and development happen simultaneously. No waterfall. No bottlenecks. Just a live, optimised site shipped on a fixed timeline.',
    gif: feature2,
    alt: 'Rapid build preview',
  },
]

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const reversed = index % 2 !== 0

  return (
    <div ref={ref} className="py-20 lg:py-32 border-t border-white/[0.05]">
      <div
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reversed ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[11px] font-body font-medium text-white/30 uppercase tracking-[0.2em] mb-6">
            {feature.tag}
          </span>
          <h2 className="font-heading italic text-[clamp(1.8rem,4vw,3rem)] leading-tight text-white mb-6">
            {feature.title}
          </h2>
          <p className="font-body font-light text-white/40 text-[15px] leading-[1.8] max-w-[42ch]">
            {feature.body}
          </p>
        </motion.div>

        {/* GIF */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
            <img
              src={feature.gif}
              alt={feature.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Subtle glow */}
          <div className="absolute -inset-4 bg-white/[0.015] rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </div>
  )
}

export function FeaturesChess() {
  return (
    <section id="features" className="bg-transparent">
      {FEATURES.map((feature, i) => (
        <FeatureRow key={feature.tag} feature={feature} index={i} />
      ))}
    </section>
  )
}
