import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

type Tier = {
  name: string
  tagline: string
  price: string
  priceLabel: string
  features: string[]
  cta: string
  ctaHref: string
  highlight: boolean
  badge?: string
}

type AddOnItem = { service: string; price: string }
type MonthlyPlan = { name: string; price: string; tagline: string; body: string }
type FaqItem = { q: string; a: string }

function Check() {
  return (
    <svg className="w-3.5 h-3.5 text-white/35 flex-shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6">
      {children}
    </p>
  )
}

export default function Pricing() {
  const { t } = useTranslation()
  const tiers = t('pricing.tiers', { returnObjects: true }) as Tier[]
  const addOns = t('pricing.addOns.items', { returnObjects: true }) as AddOnItem[]
  const plans = t('pricing.monthly.plans', { returnObjects: true }) as MonthlyPlan[]
  const faqs = t('pricing.faq.items', { returnObjects: true }) as FaqItem[]
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <main>

      {/* Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t('pricing.label')}
          </motion.p>
          <motion.h1
            className="font-heading italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('pricing.heading1')}
            <br />
            <span className="text-white">{t('pricing.heading2')}</span>
          </motion.h1>
          <motion.p
            className="font-body font-light text-white/35 text-[15px] max-w-[48ch] leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t('pricing.subheading')}
          </motion.p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.highlight ? 'liquid-glass-strong' : 'liquid-glass'
              }`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {tier.badge && (
                <span className="absolute top-6 right-6 liquid-glass rounded-full px-3 py-1 text-[11px] font-body font-medium text-white/60 uppercase tracking-[0.1em]">
                  {tier.badge}
                </span>
              )}
              <p className="font-body font-medium text-white text-[18px] mb-1">{tier.name}</p>
              <p className="font-body font-light text-white/35 text-[13px] mb-8">{tier.tagline}</p>
              <div className="mb-8">
                <div className="font-heading italic text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-white mb-1.5">
                  {tier.price}
                </div>
                <p className="font-body font-light text-white/25 text-[12px] uppercase tracking-[0.1em]">
                  {tier.priceLabel}
                </p>
              </div>
              <div className="border-t border-white/[0.07] mb-7" />
              <ul className="space-y-3.5 flex-1">
                {tier.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check />
                    <span className="font-body font-light text-[14px] text-white/55 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to={tier.ctaHref}
                  className={`block w-full text-center py-3 rounded-full text-[14px] font-body font-medium transition-[background-color,border-color,color] duration-200 ${
                    tier.highlight
                      ? 'bg-white/[0.12] border border-white/25 text-white hover:bg-white/20'
                      : 'border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust line */}
      <motion.div
        className="py-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <p className="font-body font-light text-white/25 text-[13px]">
          {t('pricing.footnote')}
        </p>
      </motion.div>

      {/* Add-ons */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <SectionEyebrow>{t('pricing.addOns.eyebrow')}</SectionEyebrow>
            <h2 className="font-heading italic text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] text-white mb-4">
              {t('pricing.addOns.headline')}
            </h2>
            <p className="font-body font-light text-white/35 text-[15px] max-w-[48ch] leading-relaxed">
              {t('pricing.addOns.sub')}
            </p>
          </motion.div>

          <motion.div
            className="liquid-glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {addOns.map((item, i) => (
              <div
                key={i}
                className={`flex items-start justify-between gap-8 px-8 py-5 ${
                  i < addOns.length - 1 ? 'border-b border-white/[0.06]' : ''
                }`}
              >
                <span className="font-body font-light text-[14px] text-white/55 leading-snug">
                  {item.service}
                </span>
                <span className="font-body font-medium text-[14px] text-white/80 flex-shrink-0 text-right">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Monthly plans */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <SectionEyebrow>{t('pricing.monthly.eyebrow')}</SectionEyebrow>
            <h2 className="font-heading italic text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] text-white mb-4">
              {t('pricing.monthly.headline')}
            </h2>
            <p className="font-body font-light text-white/35 text-[15px] max-w-[48ch] leading-relaxed">
              {t('pricing.monthly.sub')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="liquid-glass rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-body font-medium text-white text-[18px] mb-1">{plan.name}</p>
                    <p className="font-body font-light text-white/35 text-[13px]">{plan.tagline}</p>
                  </div>
                  <div className="font-heading italic text-[clamp(1.6rem,3vw,2.2rem)] leading-none text-white flex-shrink-0">
                    {plan.price}
                  </div>
                </div>
                <div className="border-t border-white/[0.07] mb-6" />
                <p className="font-body font-light text-[14px] text-white/45 leading-[1.8] max-w-[52ch]">
                  {plan.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-heading italic text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] text-white mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('pricing.faq.headline')}
          </motion.h2>

          <div className="max-w-3xl">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="border-t border-white/[0.06]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-body font-medium text-[15px] text-white/60 group-hover:text-white/85 transition-colors duration-200">
                    {item.q}
                  </span>
                  <span
                    className="text-white/25 text-xl leading-none flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none' }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body font-light text-[14px] text-white/40 leading-[1.85] pb-6 max-w-[65ch]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32 px-6">
        <motion.div
          className="max-w-6xl mx-auto border-t border-white/[0.06] pt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="font-heading italic text-[clamp(1.8rem,4vw,3rem)] leading-[0.95] text-white mb-3">
              {t('pricing.finalCta.headline')}
            </h2>
            <p className="font-body font-light text-white/35 text-[15px] max-w-[42ch] leading-relaxed">
              {t('pricing.finalCta.sub')}
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-white/[0.12] border border-white/25 px-8 py-4 rounded-full text-[14px] font-body font-medium text-white hover:bg-white/20 transition-[background-color,border-color] duration-200"
          >
            {t('pricing.finalCta.cta')}
          </Link>
        </motion.div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
