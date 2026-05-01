import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[11px] font-body font-medium text-white/30 uppercase tracking-[0.15em] mb-2"
    >
      {children}
    </label>
  )
}

type TrustPoint = { label: string; value: string }

export default function Contact() {
  const [state, handleSubmit] = useForm('mvzdyevz')
  const [projectType, setProjectType] = useState('')
  const [budget, setBudget] = useState('')
  const { t } = useTranslation()

  const projectTypes = t('contact.projectTypes', { returnObjects: true }) as string[]
  const budgetRanges = t('contact.budgetRanges', { returnObjects: true }) as string[]
  const trustPoints = t('contact.trustPoints', { returnObjects: true }) as TrustPoint[]

  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      <main>
        {/* Page header */}
        <section className="pt-40 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {t('contact.label')}
            </motion.p>
            <motion.h1
              className="font-heading italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('contact.heading1')}
              <br />
              <span className="text-white">{t('contact.heading2')}</span>
            </motion.h1>
            <motion.p
              className="font-body font-light text-white/35 text-[15px] max-w-[45ch] leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {t('contact.subheading')}
            </motion.p>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="px-6 pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Form — col-span-3 */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {state.succeeded ? (
                <div className="liquid-glass rounded-2xl p-12 text-center">
                  <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center mx-auto mb-6">
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="font-heading italic text-2xl text-white mb-3">{t('contact.successHeading')}</h2>
                  <p className="font-body font-light text-white/40 text-[14px]">
                    {t('contact.successBody')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Hidden fields for toggle selections */}
                  <input type="hidden" name="projectType" value={projectType} />
                  <input type="hidden" name="budget" value={budget} />

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <FieldLabel htmlFor="contact-name">{t('contact.fieldName')}</FieldLabel>
                      <div className="liquid-glass rounded-xl px-5 py-3.5 focus-within:ring-1 focus-within:ring-white/20 transition-[box-shadow] duration-200">
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          placeholder={t('contact.placeholderName')}
                          className="w-full bg-transparent text-white/80 placeholder:text-white/15 font-body font-light text-[14px] focus:outline-none"
                        />
                      </div>
                      <ValidationError field="name" errors={state.errors} className="text-red-400 text-[12px] mt-1" />
                    </div>
                    <div>
                      <FieldLabel htmlFor="contact-email">{t('contact.fieldEmail')}</FieldLabel>
                      <div className="liquid-glass rounded-xl px-5 py-3.5 focus-within:ring-1 focus-within:ring-white/20 transition-[box-shadow] duration-200">
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          placeholder={t('contact.placeholderEmail')}
                          className="w-full bg-transparent text-white/80 placeholder:text-white/15 font-body font-light text-[14px] focus:outline-none"
                        />
                      </div>
                      <ValidationError field="email" errors={state.errors} className="text-red-400 text-[12px] mt-1" />
                    </div>
                  </div>

                  {/* Project type */}
                  <div>
                    <p
                      id="project-type-label"
                      className="block text-[11px] font-body font-medium text-white/30 uppercase tracking-[0.15em] mb-2"
                    >
                      {t('contact.fieldProjectType')}
                    </p>
                    <div className="flex flex-wrap gap-2" role="group" aria-labelledby="project-type-label">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          aria-pressed={projectType === type}
                          className={`px-4 py-2 rounded-full text-[13px] font-body font-medium transition-[background-color,color] duration-200 ${
                            projectType === type
                              ? 'bg-white/[0.12] border border-white/25 text-white'
                              : 'liquid-glass text-white/40 hover:text-white/70'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <p
                      id="budget-label"
                      className="block text-[11px] font-body font-medium text-white/30 uppercase tracking-[0.15em] mb-2"
                    >
                      {t('contact.fieldBudget')}
                    </p>
                    <div className="flex flex-wrap gap-2" role="group" aria-labelledby="budget-label">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setBudget(range)}
                          aria-pressed={budget === range}
                          className={`px-4 py-2 rounded-full text-[13px] font-body font-medium transition-[background-color,color] duration-200 ${
                            budget === range
                              ? 'bg-white/[0.12] border border-white/25 text-white'
                              : 'liquid-glass text-white/40 hover:text-white/70'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <FieldLabel htmlFor="contact-message">{t('contact.fieldMessage')}</FieldLabel>
                    <div className="liquid-glass rounded-xl px-5 py-3.5 focus-within:ring-1 focus-within:ring-white/20 transition-[box-shadow] duration-200">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder={t('contact.placeholderMessage')}
                        className="w-full bg-transparent text-white/80 placeholder:text-white/15 font-body font-light text-[14px] focus:outline-none resize-none leading-relaxed"
                      />
                    </div>
                    <ValidationError field="message" errors={state.errors} className="text-red-400 text-[12px] mt-1" />
                  </div>

                  {/* Form-level error */}
                  <ValidationError errors={state.errors} className="font-body font-light text-red-400 text-[13px]" />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-white/[0.12] border border-white/25 px-10 py-4 rounded-full text-[14px] font-body font-medium text-white hover:bg-white/20 transition-[background-color,border-color] duration-200 disabled:opacity-60 flex items-center gap-3"
                  >
                    {state.submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        {t('contact.sending')}
                      </>
                    ) : (
                      t('contact.send')
                    )}
                  </button>

                </form>
              )}
            </motion.div>

            {/* Sidebar — col-span-2 */}
            <motion.div
              className="lg:col-span-2 pt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Direct email */}
              <div className="mb-10">
                <p className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.15em] mb-3">
                  {t('contact.orWriteDirectly')}
                </p>
                <a
                  href="mailto:marijus@norrstudio.fi"
                  className="font-heading italic text-[clamp(1.1rem,2vw,1.4rem)] text-white/70 hover:text-white transition-colors duration-200"
                >
                  marijus@norrstudio.fi
                </a>
              </div>

              {/* Trust points */}
              <div className="space-y-0">
                {trustPoints.map((point) => (
                  <div
                    key={point.label}
                    className="py-5 border-t border-white/[0.05] first:border-t-0"
                  >
                    <p className="font-body font-medium text-white/70 text-[13px] mb-1">
                      {point.label}
                    </p>
                    <p className="font-body font-light text-white/30 text-[13px]">
                      {point.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
