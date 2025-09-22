
import { Metadata } from 'next'
import ContactHero from '@/components/contact-hero'
import ContactForm from '@/components/contact-form'
import ContactInfo from '@/components/contact-info'
import ContactMap from '@/components/contact-map'

export const metadata: Metadata = {
  title: 'Contacto - TRUJO TECHNOLOGIES | Solicita tu Cotización',
  description: 'Contáctanos para tu proyecto de desarrollo web, WordPress, cloud computing o soporte técnico. Respuesta garantizada en 24-48 horas. Bogotá, Colombia.',
  keywords: 'contacto TRUJO TECHNOLOGIES, cotización desarrollo web Bogotá, contacto empresa tecnología Colombia'
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <div className="space-y-0">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </>
  )
}
