import { motion } from 'motion/react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BlurText } from '../components/BlurText'

const LAST_UPDATED = 'April 2026'

const SECTIONS = [
  {
    title: 'Introduction',
    body: `Norr Studio ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you visit our website or engage our services. By using this site you agree to the practices described below.`,
  },
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly — such as your name, email address, and project details when you submit our contact form. We also automatically collect certain technical data, including your IP address, browser type, referring URLs, and pages visited, through standard server logs and analytics tools.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use your information to respond to enquiries and deliver the services you have requested, to improve our website and understand how visitors interact with it, to send you project updates or relevant communications you have opted into, and to comply with our legal obligations. We do not sell your personal data to third parties.`,
  },
  {
    title: 'Cookies',
    body: `Our website uses cookies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. For full details on what cookies we set and why, please see our Cookie Policy.`,
  },
  {
    title: 'Third-Party Services',
    body: `We may use trusted third-party tools — including analytics providers, form processors, and hosting platforms — that process data on our behalf. These providers are contractually obligated to handle your data securely and only for the purposes we specify.`,
  },
  {
    title: 'Data Retention',
    body: `We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Enquiry data is typically retained for 24 months. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Your Rights',
    body: `Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. You also have the right to object to processing and, where applicable, to data portability. To exercise any of these rights, please contact us at the address below.`,
  },
  {
    title: 'Contact Us',
    body: `If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at hello@norrstudio.com. We will respond within 30 days.`,
  },
]

export default function Privacy() {
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
            <BlurText text="Privacy Policy" delay={80} />
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
