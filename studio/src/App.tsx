import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import Work from './pages/Work'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import { CookieConsent } from './components/CookieConsent'
import { HomeBackground } from './components/HomeBackground'
import { Cursor } from './components/Cursor'

export default function App() {
  return (
    <BrowserRouter>
      <HomeBackground />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  )
}
