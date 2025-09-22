
import { Metadata } from 'next'
import ServiceHero from '@/components/service-hero'
import ServicePackages from '@/components/service-packages'
import ServiceDetails from '@/components/service-details'
import ServiceProcess from '@/components/service-process'
import ServiceFAQ from '@/components/service-faq'
import ContactCTA from '@/components/contact-cta'

export const metadata: Metadata = {
  title: 'Servicios - TRUJO TECHNOLOGIES | Desarrollo Web y Cloud en Bogotá',
  description: 'Conoce nuestros servicios: Desarrollo web a medida, WordPress, Cloud Computing (AWS/Azure), Soporte técnico y más. Soluciones completas para pymes en Bogotá.',
  keywords: 'servicios desarrollo web, WordPress Bogotá, AWS Azure Colombia, soporte técnico, aplicaciones corporativas'
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceDetails />
      <ServicePackages />
      <ServiceProcess />
      <ServiceFAQ />
      <ContactCTA />
    </>
  )
}
