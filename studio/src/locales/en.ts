const en = {
  nav: {
    howItWorks: 'How it works',
    features: 'Features',
    work: 'Work',
    pricing: 'Pricing',
    getStarted: 'Get started',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    line1: 'Websites that',
    line2: 'think for you',
    body: 'We take care of the design, the build, the launch. You run your business.',
    bookCall: 'Book a call',
    seeHow: 'See how it works',
  },

  marquee: {
    items: [
      'Brand Design',
      'Conversion Optimization',
      'AI-Powered Builds',
      '2-Week Delivery',
      'Motion Design',
      'Design Systems',
      'Norr Studio',
    ],
  },

  start: {
    label: 'The process',
    heading: 'Brief to live site in days',
    steps: [
      {
        number: '01',
        title: 'Brief & Strategy',
        body: 'One 30-minute call. We ask the right questions about your business, your customers, and what you want people to do when they land on your site.',
      },
      {
        number: '02',
        title: 'Design & Build',
        body: 'Senior designers build it. AI cuts the waiting time. Most sites ship in two weeks.',
      },
      {
        number: '03',
        title: 'Launch & Iterate',
        body: "We go live. Then we track what's working and fix what isn't. No ticket, no waiting.",
      },
    ],
  },

  features: {
    items: [
      {
        tag: 'Design Intelligence',
        title: 'Built for your business, not borrowed from a template',
        body: 'We look at your market and your competitors before touching a layout. The site you get feels like it was made for your business specifically, because it was.',
        alt: 'AI design preview',
      },
      {
        tag: 'Speed',
        title: 'Live in two weeks',
        body: "Design and development happen in parallel. No waiting for one to finish before the other starts. You get a real site on a real date.",
        alt: 'Rapid build preview',
      },
    ],
  },

  services: {
    label: 'What we do',
    items: [
      {
        number: '01',
        title: 'Instant iterations',
        body: 'Ask for a change. See it live the same day, not in a week.',
      },
      {
        number: '02',
        title: 'Conversion-first',
        body: 'Every decision on the page comes down to one question: will this make the visitor take action?',
      },
      {
        number: '03',
        title: 'Consistent brand',
        body: 'Same colours, fonts, and feel everywhere. Nothing drifts.',
      },
      {
        number: '04',
        title: 'Monthly updates',
        body: 'Your site stays current. No rebuilds, no re-platforming, no extra cost.',
      },
    ],
  },

  cta: {
    line1: 'Want to see what',
    line2: 'your site could do?',
    body: "Book a free call. We'll map out exactly what your site needs. Takes 30 minutes, no strings attached. You'll have a clear plan by the end of it.",
    bookCall: 'Book a call',
  },

  footer: {
    tagline: 'Websites for Finnish businesses.',
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    copyright: '© 2026 Norr Studio. All rights reserved.',
    links: {
      howItWorks: 'How it works',
      features: 'Features',
      pricing: 'Pricing',
      ourWork: 'Our work',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
  },

  cookieBanner: {
    text: 'We use cookies to understand how visitors use our site and improve the experience.',
    policy: 'Cookie Policy',
    essential: 'Essential only',
    acceptAll: 'Accept all',
  },

  pricing: {
    label: 'Pricing',
    heading1: 'Simple, transparent',
    heading2: 'pricing.',
    subheading: 'No hidden fees. No monthly bills unless you want them. Every project starts with a free strategy call.',
    footnote: 'All projects include a free strategy call before work begins.',
    tiers: [
      {
        name: 'Launch',
        tagline: 'Everything a local business needs to show up online.',
        price: '€500',
        priceLabel: 'one-time project fee',
        features: [
          '3-page site: home, services, contact',
          'Mobile-ready and SSL secured',
          'Contact form straight to your inbox',
          'Google Maps embedded',
          'Basic SEO, Google-ready from day one',
          '1 round of revisions',
          'You provide: text and photos',
        ],
        cta: 'Get started',
        ctaHref: '/contact',
        highlight: false,
      },
      {
        name: 'Grow',
        tagline: 'A full site built to bring in customers, not just traffic.',
        price: '€800',
        priceLabel: 'one-time project fee',
        features: [
          'Everything in Launch',
          '6 pages to tell your full story',
          '1 integration: booking calendar, live chat, or reservation system',
          'Google Business profile optimisation (€195 value, included free)',
          'Google Analytics set up and ready',
          '2 rounds of revisions',
        ],
        cta: 'Get started',
        ctaHref: '/contact',
        highlight: true,
        badge: 'Most popular',
      },
      {
        name: 'Enterprise',
        tagline: 'Bespoke scope, dedicated attention.',
        price: "Let's talk",
        priceLabel: 'custom quote',
        features: [
          'Everything in Grow',
          '10–12 pages',
          'Multiple integrations',
          'Copywriting in Finnish. We handle the words.',
          'Foundational search visibility strategy',
          '3 rounds of revisions',
          'Priority delivery',
        ],
        cta: 'Book a call',
        ctaHref: '/contact',
        highlight: false,
      },
    ],
    addOns: {
      eyebrow: 'Add-ons',
      headline: 'Need something extra?',
      sub: 'Every business is different. Add what fits your project, nothing more.',
      items: [
        { service: 'Extra page', price: '€125 / page' },
        { service: 'Google Business profile setup', price: '€195 (free in Grow and Enterprise)' },
        { service: 'Copywriting, full site in Finnish', price: '€250' },
        { service: 'Photography and image sourcing', price: 'Quote' },
        { service: 'Logo or visual identity refresh', price: '€150' },
      ],
    },
    monthly: {
      eyebrow: 'Ongoing support',
      headline: 'Your site keeps working. So do we.',
      sub: 'Optional monthly plans for businesses that want to stay hands-off and stay visible.',
      plans: [
        {
          name: 'Ylläpito',
          price: '€29/mo',
          tagline: 'The peace-of-mind plan.',
          body: 'Hosting, SSL, backups, and software updates. All handled. Plus one small text change per quarter so your site stays current.',
        },
        {
          name: 'Näkyvyys',
          price: '€49/mo',
          tagline: 'For businesses that want to keep climbing.',
          body: 'Everything in Ylläpito, plus a quarterly content update, a visibility report, and competitor tracking. You focus on running your business. We watch the numbers.',
        },
      ],
    },
    faq: {
      headline: 'Common questions',
      items: [
        {
          q: 'What if I already have a site?',
          a: 'We can redesign it or improve what is there. Book a call and we will figure out what makes sense.',
        },
        {
          q: 'Do I need a monthly plan?',
          a: 'No. Every project is a one-time fee. Monthly plans are optional, for businesses that want ongoing support without lifting a finger.',
        },
        {
          q: 'How long does it take?',
          a: 'Launch sites are ready in 1 week. Grow sites in 2 weeks. Enterprise timelines are agreed upfront.',
        },
        {
          q: 'What do I need to provide?',
          a: 'For Launch and Grow, you send us your text and photos. For Enterprise, we can write the copy for you.',
        },
      ],
    },
    finalCta: {
      headline: 'Not sure which plan fits?',
      sub: 'Book a free 20-minute call. No sales pitch. Just a straight answer.',
      cta: 'Book a free call',
    },
  },

  contact: {
    label: "Let's talk",
    heading1: 'Tell us about',
    heading2: 'your project',
    subheading: "Fill in the form and we'll reply within one business day. Honest assessment of what your project needs, no sales pitch.",
    fieldName: 'Name',
    fieldEmail: 'Email',
    fieldProjectType: 'Project type',
    fieldBudget: 'Package',
    fieldMessage: 'Tell us more',
    placeholderName: 'Your name',
    placeholderEmail: 'you@company.com',
    placeholderMessage: "What are you building? Any deadline? Anything else we should know?",
    projectTypes: ['Website', 'Landing page', 'Other'],
    budgetRanges: ['Launch', 'Grow', 'Enterprise'],
    sending: 'Sending…',
    send: 'Send message',
    successHeading: 'Message received',
    successBody: "We'll be in touch within one business day.",
    orWriteDirectly: 'Or write directly',
    trustPoints: [
      { label: 'Response time', value: 'Within one business day' },
      { label: 'No commitment', value: 'First call is always free' },
      { label: 'NDA available', value: 'On request before briefing' },
    ],
  },

  work: {
    selectedWork: 'Selected work',
    project: {
      tag: 'Web design · Development',
      description: 'Extendd helps businesses grow their sales pipeline with a combination of CRM tools and hands-on consulting. Their site needed to say that clearly, fast, and to someone who lands on it cold. We built it in under two weeks.',
    },
    metaClient: 'Client',
    metaServices: 'Services',
    metaYear: 'Year',
    metaLiveSite: 'Live site',
    moreCaseStudies: 'More case studies available on request. Each project gets its own walkthrough.',
    bookCall: 'Book a call',
  },

  privacy: {
    label: 'Legal',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'Introduction',
        body: 'Norr Studio ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard data when you visit our website or engage our services. By using this site you agree to the practices described below.',
      },
      {
        title: 'Information We Collect',
        body: 'We collect information you provide directly — such as your name, email address, and project details when you submit our contact form. We also automatically collect certain technical data, including your IP address, browser type, referring URLs, and pages visited, through standard server logs and analytics tools.',
      },
      {
        title: 'How We Use Your Information',
        body: 'We use your information to respond to enquiries and deliver the services you have requested, to improve our website and understand how visitors interact with it, to send you project updates or relevant communications you have opted into, and to comply with our legal obligations. We do not sell your personal data to third parties.',
      },
      {
        title: 'Cookies',
        body: 'Our website uses cookies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. For full details on what cookies we set and why, please see our Cookie Policy.',
      },
      {
        title: 'Third-Party Services',
        body: 'We may use trusted third-party tools — including analytics providers, form processors, and hosting platforms — that process data on our behalf. These providers are contractually obligated to handle your data securely and only for the purposes we specify.',
      },
      {
        title: 'Data Retention',
        body: 'We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Enquiry data is typically retained for 24 months. You may request deletion of your data at any time by contacting us.',
      },
      {
        title: 'Your Rights',
        body: 'Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. You also have the right to object to processing and, where applicable, to data portability. To exercise any of these rights, please contact us at the address below.',
      },
      {
        title: 'Contact Us',
        body: 'If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at hello@norrstudio.com. We will respond within 30 days.',
      },
    ],
  },

  terms: {
    label: 'Legal',
    title: 'Terms of Service',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'Acceptance of Terms',
        body: 'By engaging Norr Studio for design or development services, you agree to be bound by these Terms of Service. If you do not agree, please do not proceed with any project engagement. These terms constitute the full agreement between you and Norr Studio unless a separate written contract has been signed.',
      },
      {
        title: 'Services',
        body: 'Norr Studio provides website design, development, branding, and related digital services as agreed in each project brief or proposal. The scope of work, deliverables, and timeline are confirmed in writing before work commences. Any changes to agreed scope may result in revised timelines and fees.',
      },
      {
        title: 'Payment',
        body: 'Projects require a deposit of 50% before work begins, with the remaining balance due upon completion. Invoices are payable within 14 days of issue. Late payments may incur interest at 5% per month. Norr Studio reserves the right to pause or withhold delivery of work until outstanding balances are settled.',
      },
      {
        title: 'Intellectual Property',
        body: 'Upon receipt of full payment, all custom design and code created for your project becomes your property. Norr Studio retains the right to display completed work in its portfolio unless otherwise agreed in writing. Any third-party assets (fonts, stock imagery, plugins) remain subject to their respective licences and are your responsibility to maintain.',
      },
      {
        title: 'Client Responsibilities',
        body: 'You agree to provide accurate briefs, timely feedback, and any required materials (copy, images, brand assets) within agreed timeframes. Delays caused by late provision of materials may affect project delivery dates. You are responsible for ensuring all content you provide does not infringe third-party rights.',
      },
      {
        title: 'Limitation of Liability',
        body: "Norr Studio's total liability arising from any project shall not exceed the fees paid for that specific project. We are not liable for indirect, consequential, or incidental losses, including loss of revenue or business opportunities, arising from the use of our deliverables.",
      },
      {
        title: 'Termination',
        body: 'Either party may terminate a project engagement with 14 days written notice. In the event of termination, you are liable for payment of all work completed to that point at a pro-rated rate. Deposits are non-refundable once work has commenced.',
      },
      {
        title: 'Governing Law',
        body: 'These terms are governed by the laws of Finland. Any disputes shall first be attempted to be resolved through negotiation. If no settlement is reached, disputes shall be resolved in the Helsinki District Court.',
      },
    ],
  },

  cookiesPage: {
    label: 'Legal',
    title: 'Cookie Policy',
    lastUpdated: 'Last updated: April 2026',
    sections: [
      {
        title: 'What Are Cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and understand how you interact with its pages. Cookies do not contain personally identifiable information by themselves, though they may be linked to it.',
      },
      {
        title: 'How We Use Cookies',
        body: 'Norr Studio uses cookies to understand how visitors navigate our site, measure the effectiveness of our pages, and improve the overall experience. We do not use cookies to serve targeted advertising or to track you across unrelated third-party websites.',
      },
      {
        title: 'Types of Cookies We Use',
        body: 'Essential cookies are required for basic site functionality such as navigation and form submission — these cannot be disabled. Analytics cookies (such as those set by Google Analytics or similar tools) help us understand visitor behaviour in aggregate. No personally identifiable data is stored in analytics cookies.',
      },
      {
        title: 'Managing Cookies',
        body: "You can control and delete cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, and set preferences for specific websites. Note that disabling cookies may affect the functionality of some parts of this site. For guidance on managing cookies in your browser, visit your browser's help section.",
      },
      {
        title: 'Contact',
        body: 'If you have questions about how we use cookies, please contact us at hello@norrstudio.com.',
      },
    ],
  },
} as const

export default en
