import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const PROJECT = {
  number:      '01',
  name:        'Extendd',
  tag:         'Web design · Development',
  client:      'Extendd Oy',
  services:    'Web design, Development',
  year:        '2025',
  url:         'extendd.fi',
  urlHref:     'https://www.extendd.fi/',
  description: `Extendd needed a site that matched the ambition of their offer — combining technology and personal consulting to grow businesses sustainably. We built a fast, conversion-focused site delivered in under two weeks.`,
  heroImg:     '/extendd-hero.png',     // ← save your Screely image to studio/public/extendd-hero.png
  detailImg:   '/extendd-detail.png',
  outcomes: [
    { value: '2 wks', label: 'Delivered in'  },
    { value: '100%',  label: 'Client satisfaction' },
    { value: '↗',     label: 'Live at extendd.fi'  },
  ],
}

export default function Work() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <main>

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-8 md:px-16">
        {/* Teal rule */}
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

        {/* Label row */}
        <motion.p
          className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected work — {PROJECT.number}
        </motion.p>

        {/* Project name + one-liner */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h1
            className="font-heading font-bold text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-tight text-white"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {PROJECT.name}
          </motion.h1>

          <motion.p
            className="font-body font-light text-[13px] text-white/30 pb-2 md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {PROJECT.tag}
          </motion.p>
        </div>
      </section>

      {/* ── Hero image ──────────────────────────────────────────────────── */}
      <motion.div
        className="px-8 md:px-16 mb-16"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full overflow-hidden">
          <img
            src={PROJECT.heroImg}
            alt={`${PROJECT.name} — hero screenshot`}
            className="w-full object-contain"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* ── Project details ──────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 mb-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">

          {/* Description */}
          <motion.p
            className="font-body font-light text-[clamp(0.95rem,1.5vw,1.1rem)] text-white/55 leading-[1.8] max-w-[52ch]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {PROJECT.description}
          </motion.p>

          {/* Metadata */}
          <motion.div
            className="flex flex-col gap-5 flex-shrink-0 md:min-w-[200px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { label: 'Client',   value: PROJECT.client   },
              { label: 'Services', value: PROJECT.services },
              { label: 'Year',     value: PROJECT.year     },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] font-body font-medium text-white/20 uppercase tracking-[0.15em] mb-1">
                  {label}
                </p>
                <p className="font-body font-light text-[14px] text-white/60">
                  {value}
                </p>
              </div>
            ))}

            {/* Live URL */}
            <div>
              <p className="text-[10px] font-body font-medium text-white/20 uppercase tracking-[0.15em] mb-1">
                Live site
              </p>
              <a
                href={PROJECT.urlHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-light text-[14px] text-brand hover:text-[#00cfa0] transition-colors duration-200 flex items-center gap-1.5 group"
              >
                {PROJECT.url}
                <span className="inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-[11px]">↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail image ─────────────────────────────────────────────────── */}
      <motion.div
        className="px-8 md:px-16 mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full overflow-hidden">
          <img
            src={PROJECT.detailImg}
            alt={`${PROJECT.name} — detail view`}
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* ── Outcomes ─────────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 mb-24">
        <motion.div
          className="flex flex-col sm:flex-row gap-px bg-white/[0.05] overflow-hidden rounded-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {PROJECT.outcomes.map((o, i) => (
            <div
              key={o.label}
              className="flex-1 px-8 py-10 bg-[#020d0a]"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <div className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] leading-none text-white mb-2">
                  {o.value}
                </div>
                <div className="font-body font-light text-[11px] text-white/30 uppercase tracking-[0.12em]">
                  {o.label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── More work CTA ────────────────────────────────────────────────── */}
      <section className="px-8 md:px-16 pb-24">
        <motion.div
          className="border-t border-white/[0.06] pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body font-light text-[14px] text-white/30 max-w-[42ch]">
            More case studies available on request — each project is presented in a dedicated deck.
          </p>
          <Link
            to="/contact"
            className="group font-body font-medium text-[15px] text-brand hover:text-[#00cfa0] transition-colors duration-200 flex items-center gap-2 flex-shrink-0"
          >
            Book a call
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
