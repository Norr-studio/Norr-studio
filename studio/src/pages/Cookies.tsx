import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BlurText } from '../components/BlurText'

const LAST_UPDATED = 'April 2026'

const SECTIONS = [
  {
    title: 'What Are Cookies',
    body: `Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and understand how you interact with its pages. Cookies do not contain personally identifiable information by themselves, though they may be linked to it.`,
  },
  {
    title: 'How We Use Cookies',
    body: `Norr Studio uses cookies to understand how visitors navigate our site, measure the effectiveness of our pages, and improve the overall experience. We do not use cookies to serve targeted advertising or to track you across unrelated third-party websites.`,
  },
  {
    title: 'Types of Cookies We Use',
    body: `Essential cookies are required for basic site functionality such as navigation and form submission — these cannot be disabled. Analytics cookies (such as those set by Google Analytics or similar tools) help us understand visitor behaviour in aggregate. No personally identifiable data is stored in analytics cookies.`,
  },
  {
    title: 'Managing Cookies',
    body: `You can control and delete cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, and set preferences for specific websites. Note that disabling cookies may affect the functionality of some parts of this site. For guidance on managing cookies in your browser, visit your browser's help section.`,
  },
  {
    title: 'Contact',
    body: `If you have questions about how we use cookies, please contact us at hello@norrstudio.com.`,
  },
]

export default function Cookies() {
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
            <BlurText text="Cookie Policy" delay={80} />
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
