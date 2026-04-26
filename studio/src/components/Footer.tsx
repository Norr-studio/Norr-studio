import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'

const PRODUCT_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Our work', href: '/work' },
]

const COMPANY_LINKS = [
  { label: 'Contact', href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
]

export function Footer() {
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
              AI-powered web design for ambitious founders.
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
              Product
            </p>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-body font-medium text-[11px] text-white/25 uppercase tracking-[0.15em] mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body font-medium text-[11px] text-white/25 uppercase tracking-[0.15em] mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="font-body font-light text-[13px] text-white/35 hover:text-white/70 transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="font-body font-light text-[12px] text-white/20">
            © 2026 Norr Studio. All rights reserved.
          </p>
          <p className="font-body font-light text-[12px] text-white/15">
            Crafted with AI. Refined by humans.
          </p>
        </div>
      </div>
    </div>
  )
}
