import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { t, i18n } = useTranslation()

  const hashLinks = [
    { label: t('nav.howItWorks'), href: '#how-it-works' },
    { label: t('nav.features'), href: '#features' },
  ]

  const routeLinks = [
    { label: t('nav.work'), href: '/work' },
    { label: t('nav.pricing'), href: '/pricing' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fi' ? 'en' : 'fi')
  }

  const LangToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleLang}
      aria-label={i18n.language === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}
      className={`flex items-center gap-0.5 text-[12px] font-body font-medium tracking-[0.08em] transition-colors duration-200 ${className}`}
    >
      <span className={i18n.language === 'fi' ? 'text-white/90' : 'text-white/30 hover:text-white/60'}>FI</span>
      <span className="text-white/20 mx-0.5">/</span>
      <span className={i18n.language === 'en' ? 'text-white/90' : 'text-white/30 hover:text-white/60'}>EN</span>
    </button>
  )

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        aria-label="Main navigation"
        className={`liquid-glass flex items-center gap-8 px-5 py-2.5 rounded-full transition-[background-color,box-shadow] duration-500 ${
          scrolled ? 'bg-white/[0.06]' : 'bg-white/[0.03]'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center mr-2" aria-label="Norr Studio — home">
          <img
            src="/images/logo.svg"
            alt="Norr Studio"
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {hashLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="text-[13px] font-body font-light text-white/50 hover:text-white/90 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          {routeLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-[13px] font-body font-light text-white/50 hover:text-white/90 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Language toggle — desktop */}
        <LangToggle className="hidden md:flex" />

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block ml-2 px-4 py-1.5 rounded-full border border-white/20 text-[13px] font-body font-medium text-white/90 hover:bg-white/10 hover:border-white/40 transition-[background-color,border-color,color] duration-200"
        >
          {t('nav.getStarted')}
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2 flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            className="block w-5 h-px bg-white/70 origin-center"
            animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
          <motion.span
            className="block w-5 h-px bg-white/70 origin-center"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-px bg-white/70 origin-center"
            animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22 }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-full mt-2 left-4 right-4 liquid-glass rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
          >
            <div className="flex flex-col py-3">
              {hashLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 text-[14px] font-body font-light text-white/90 hover:text-white hover:bg-white/[0.03] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
              {routeLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-6 py-3 text-[14px] font-body font-light text-white/90 hover:text-white hover:bg-white/[0.03] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mx-6 my-2 border-t border-white/[0.06]" />
              <div className="mx-6 mb-3 flex items-center justify-between">
                <LangToggle />
              </div>
              <Link
                to="/contact"
                className="mx-6 mb-2 px-4 py-2.5 rounded-full border border-white/20 text-[13px] font-body font-medium text-white/90 hover:bg-white/10 text-center transition-[background-color,border-color] duration-200"
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
