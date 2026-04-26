import { motion } from 'motion/react'

const SERVICES = [
  {
    number: '01',
    title: 'Instant iterations',
    body: 'Request a layout change and see it live within hours — not a ticket queue.',
  },
  {
    number: '02',
    title: 'Conversion-first',
    body: 'Every design decision is backed by A/B data and heatmap analysis from 500+ client sites.',
  },
  {
    number: '03',
    title: 'Brand-locked design',
    body: 'Your colour system, typography, and motion language are codified as tokens — never broken.',
  },
  {
    number: '04',
    title: 'Continuous updates',
    body: 'Monthly design refreshes keep your site ahead of the curve with zero re-platforming cost.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.15em] mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What we do
        </motion.p>

        <div>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              className="group flex items-start gap-8 md:gap-16 py-8 border-b border-white/[0.06] hover:bg-white/[0.015] -mx-4 px-4 transition-colors duration-300 cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-body font-light text-[13px] text-white/20 group-hover:text-white/35 transition-colors duration-300 pt-1 w-6 flex-shrink-0 tabular-nums">
                {s.number}
              </span>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-12 flex-1">
                <h3 className="font-heading text-[clamp(1.15rem,2.5vw,1.5rem)] text-white/85 leading-tight mb-2 md:mb-0 md:w-56 flex-shrink-0">
                  {s.title}
                </h3>
                <p className="font-body font-light text-white/35 text-[14px] leading-relaxed max-w-[48ch]">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
