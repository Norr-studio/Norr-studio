import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    quote:
      "Studio shipped our entire rebrand in 11 days. The AI-generated design was better than what we'd received from agencies charging 10x the price.",
    author: 'Maya Chen',
    role: 'Co-founder, Meridian',
    initials: 'MC',
  },
  {
    quote:
      'We went from a DIY Webflow template to a fully custom site that converts at 4.1%. The team is obsessively detail-oriented.',
    author: 'James Okafor',
    role: 'Head of Growth, Vault',
    initials: 'JO',
  },
  {
    quote:
      'What surprised me most was how much they understood our product without us having to explain it twice. The result felt like it came from inside the team.',
    author: 'Sofia Reinholt',
    role: 'CEO, Arkade',
    initials: 'SR',
  },
]

export function Testimonials() {
  return (
    <section className="py-28 px-6 bg-transparent border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.15em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Client stories
          </motion.p>
          <motion.h2
            className="font-heading font-bold text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            What founders say
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              className="bg-[#020d0a] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote marks */}
              <span className="block font-heading italic text-white/10 text-6xl leading-none mb-4 select-none">
                "
              </span>
              <p className="font-body font-light text-white/55 text-[15px] leading-[1.75] mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-medium text-[11px] text-white/60">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body font-medium text-white/80 text-[13px]">{t.author}</p>
                  <p className="font-body font-light text-white/30 text-[12px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
