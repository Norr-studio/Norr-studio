import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  const productLinks = [
    { labelKey: 'footer.links.howItWorks', href: '/#how-it-works' },
    { labelKey: 'footer.links.features', href: '/#features' },
    { labelKey: 'footer.links.pricing', href: '/pricing' },
    { labelKey: 'footer.links.ourWork', href: '/work' },
  ]

  const companyLinks = [
    { labelKey: 'footer.links.contact', href: '/contact' },
  ]

  const legalLinks = [
    { labelKey: 'footer.links.privacy', href: '/privacy' },
    { labelKey: 'footer.links.terms', href: '/terms' },
    { labelKey: 'footer.links.cookies', href: '/cookies' },
  ]

  return (
    <div className="border-t border-white/[0.06] px-6 py-16 bg-[#020d0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4 w-fit opacity-50 hover:opacity-70 transition-opacity duration-200">
              <img src="/images/logo.svg" alt="Norr Studio" className="h-9 w-auto" />
            </Link>
            <p className="font-body font-light text-white/25 text-[13px] leading-relaxed max-w-[22ch]">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.linkedin.com/company/norr-studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Norr Studio on LinkedIn"
                className="text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="font-body font-medium text-[11px] text-white/25 uppercase tracking-[0.15em] mb-4">
              {t('footer.product')}
            </p>
            <ul className="space-y-2.5">
              {productLinks.map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body font-medium text-[11px] text-white/25 uppercase tracking-[0.15em] mb-4">
              {t('footer.company')}
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body font-medium text-[11px] text-white/25 uppercase tracking-[0.15em] mb-4">
              {t('footer.legal')}
            </p>
            <ul className="space-y-2.5">
              {legalLinks.map(({ labelKey, href }) => (
                <li key={labelKey}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="font-body font-light text-[12px] text-white/30">
            {t('footer.copyright')}
          </p>
          <p className="font-body font-light text-[12px] text-white/20">
            Y-tunnus 3618179-8
          </p>
          <p className="font-body font-light text-[12px] text-white/25">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </div>
  )
}
