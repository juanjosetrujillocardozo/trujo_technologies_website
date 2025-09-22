
import { Metadata } from 'next'
import AboutHero from '@/components/about-hero'
import CompanyHistory from '@/components/company-history'
import FounderProfile from '@/components/founder-profile'
import MissionVision from '@/components/mission-vision'
import TeamCertifications from '@/components/team-certifications'
import ContactCTA from '@/components/contact-cta'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - TRUJO TECHNOLOGIES | Nuestra Historia y Equipo',
  description: 'Conoce la historia de TRUJO TECHNOLOGIES, fundada en 2023 en Bogotá por Juan José Trujillo Cardozo. Nuestra misión, visión y el equipo especializado en desarrollo web y cloud.',
  keywords: 'sobre TRUJO TECHNOLOGIES, Juan José Trujillo Cardozo, empresa desarrollo web Bogotá, historia empresa tecnología'
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <FounderProfile />
      <MissionVision />
      <TeamCertifications />
      <ContactCTA />
    </>
  )
}
