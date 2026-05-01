import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BlurText } from '../components/BlurText'

type Section = { title: string; body: string }

export default function Privacy() {
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true }) as Section[]

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
            {t('privacy.label')}
          </motion.p>
          <h1 className="font-heading italic text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] text-white mb-4">
            <BlurText text={t('privacy.title')} delay={80} />
          </h1>
          <motion.p
            className="font-body font-light text-white/25 text-[13px] mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('privacy.lastUpdated')}
          </motion.p>

          <div>
            {sections.map((section, i) => (
              <motion.div
                key={i}
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
