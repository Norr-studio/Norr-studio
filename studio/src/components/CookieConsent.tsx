import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

const STORAGE_KEY = 'norr-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY))

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'all')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'essential')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.06] liquid-glass bg-black/80 px-6 py-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-body font-light text-white/50 text-[13px] leading-relaxed">
              We use cookies to understand how visitors use our site and improve the experience.{' '}
              <Link
                to="/cookies"
                className="text-white/30 hover:text-white/60 underline underline-offset-2 transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-1.5 rounded-full border border-white/20 text-[13px] font-body font-medium text-white/70 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Essential only
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 rounded-full border border-white/40 text-[13px] font-body font-medium text-white hover:bg-white/10 transition-[background-color,border-color] duration-200"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
