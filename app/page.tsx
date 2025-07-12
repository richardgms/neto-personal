import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PlansSection from '@/components/PlansSection'
import ResultsSection from '@/components/ResultsSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ResultsSection />
      <AboutSection />
      <PlansSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
} 