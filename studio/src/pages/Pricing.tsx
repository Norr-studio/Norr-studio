import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const TIERS = [
  {
    name: 'Launch',
    tagline: 'A sharp landing page, fast.',
    price: '800€',
    priceLabel: 'one-time project fee',
    features: [
      'Single landing page',
      'Up to 5 sections',
      'Mobile responsive',
      'Contact form included',
      '2 rounds of revisions',
      'Delivered in 1 week',
    ],
    cta: 'Get started',
    ctaHref: '/contact',
    highlight: false,
  },
  {
    name: 'Studio',
    tagline: 'A full site built to convert.',
    price: '1500€',
    priceLabel: 'one-time project fee',
    features: [
      'Everything in Launch',
      'Up to 8 pages',
      'Custom animations',
      'CMS integration',
      'SEO setup',
      '3 rounds of revisions',
      'Delivered in 2 weeks',
    ],
    cta: 'Get started',
    ctaHref: '/contact',
    highlight: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    tagline: 'Bespoke scope, dedicated team.',
    price: "Let's talk",
    priceLabel: 'custom quote',
    features: [
      'Everything in Studio',
      'Custom functionality',
      'Priority delivery',
      'Dedicated designer',
      'Ongoing support available',
      'Unlimited revisions',
    ],
    cta: 'Book a call',
    ctaHref: '/contact',
    highlight: false,
  },
]

function Check() {
  return (
    <svg className="w-3.5 h-3.5 text-white/35 flex-shrink-0 mt-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Pricing() {
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
            Pricing
          </motion.p>
          <motion.h1
            className="font-heading italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Simple, transparent
            <br />
            <span className="text-white/40">pricing</span>
          </motion.h1>
          <motion.p
            className="font-body font-light text-white/35 text-[15px] max-w-[48ch] leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            One price to launch. No hidden fees. No retainers unless you want one.
          </motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                tier.highlight ? 'liquid-glass-strong' : 'liquid-glass'
              }`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              {'badge' in tier && (
                <span className="absolute top-6 right-6 liquid-glass rounded-full px-3 py-1 text-[11px] font-body font-medium text-white/60 uppercase tracking-[0.1em]">
                  {tier.badge}
                </span>
              )}

              {/* Tier name + tagline */}
              <p className="font-body font-medium text-white text-[18px] mb-1">{tier.name}</p>
              <p className="font-body font-light text-white/35 text-[13px] mb-8">{tier.tagline}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="font-heading italic text-[clamp(2.4rem,4vw,3.2rem)] leading-none text-white mb-1.5">
                  {tier.price}
                </div>
                <p className="font-body font-light text-white/25 text-[12px] uppercase tracking-[0.1em]">
                  {tier.priceLabel}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/[0.07] mb-7" />

              {/* Features */}
              <ul className="space-y-3.5 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check />
                    <span className="font-body font-light text-[14px] text-white/55 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to={tier.ctaHref}
                  className={`block w-full text-center py-3 rounded-full text-[14px] font-body font-medium transition-all duration-200 ${
                    tier.highlight
                      ? 'liquid-glass-strong text-white hover:bg-white/10'
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

      {/* Bottom note */}
      <motion.div
        className="py-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <p className="font-body font-light text-white/25 text-[13px]">
          All projects include a free strategy call before work begins.
        </p>
      </motion.div>

      <div className="pb-16" />
      </main>
      <Footer />
    </div>
  )
}
