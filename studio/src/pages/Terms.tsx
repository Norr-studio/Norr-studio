import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BlurText } from '../components/BlurText'

const LAST_UPDATED = 'April 2026'

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By engaging Norr Studio for design or development services, you agree to be bound by these Terms of Service. If you do not agree, please do not proceed with any project engagement. These terms constitute the full agreement between you and Norr Studio unless a separate written contract has been signed.`,
  },
  {
    title: 'Services',
    body: `Norr Studio provides website design, development, branding, and related digital services as agreed in each project brief or proposal. The scope of work, deliverables, and timeline are confirmed in writing before work commences. Any changes to agreed scope may result in revised timelines and fees.`,
  },
  {
    title: 'Payment',
    body: `Projects require a deposit of 50% before work begins, with the remaining balance due upon completion. Invoices are payable within 14 days of issue. Late payments may incur interest at 5% per month. Norr Studio reserves the right to pause or withhold delivery of work until outstanding balances are settled.`,
  },
  {
    title: 'Intellectual Property',
    body: `Upon receipt of full payment, all custom design and code created for your project becomes your property. Norr Studio retains the right to display completed work in its portfolio unless otherwise agreed in writing. Any third-party assets (fonts, stock imagery, plugins) remain subject to their respective licences and are your responsibility to maintain.`,
  },
  {
    title: 'Client Responsibilities',
    body: `You agree to provide accurate briefs, timely feedback, and any required materials (copy, images, brand assets) within agreed timeframes. Delays caused by late provision of materials may affect project delivery dates. You are responsible for ensuring all content you provide does not infringe third-party rights.`,
  },
  {
    title: 'Limitation of Liability',
    body: `Norr Studio's total liability arising from any project shall not exceed the fees paid for that specific project. We are not liable for indirect, consequential, or incidental losses, including loss of revenue or business opportunities, arising from the use of our deliverables.`,
  },
  {
    title: 'Termination',
    body: `Either party may terminate a project engagement with 14 days written notice. In the event of termination, you are liable for payment of all work completed to that point at a pro-rated rate. Deposits are non-refundable once work has commenced.`,
  },
  {
    title: 'Governing Law',
    body: `These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Legal
          </motion.p>
          <h1 className="font-heading italic text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white mb-4">
            <BlurText text="Terms of Service" delay={80} />
          </h1>
          <motion.p
            className="font-body font-light text-white/25 text-[13px] mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Last updated: {LAST_UPDATED}
          </motion.p>

          <div>
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-body font-medium text-white/80 text-lg mt-12 mb-4">
                  {section.title}
                </h2>
                <p className="font-body font-light text-white/40 text-[15px] leading-[1.85] mb-4 max-w-[65ch]">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
