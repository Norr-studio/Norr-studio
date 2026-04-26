import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { StartSection } from '../components/StartSection'
import { FeaturesChess } from '../components/FeaturesChess'
import { FeaturesGrid } from '../components/FeaturesGrid'
import { CtaFooter } from '../components/CtaFooter'
import { Marquee } from '../components/Marquee'

// Archived — restore when ready:
// import { Stats } from '../components/Stats'
// import { Testimonials } from '../components/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StartSection />
        <FeaturesChess />
        <FeaturesGrid />
        <CtaFooter />
      </main>
    </div>
  )
}
