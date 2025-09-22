
import Hero from '@/components/hero'
import Services from '@/components/services'
import WhyChooseUs from '@/components/why-choose-us'
import AboutPreview from '@/components/about-preview'
import ContactCTA from '@/components/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <AboutPreview />
      <ContactCTA />
    </>
  )
}
