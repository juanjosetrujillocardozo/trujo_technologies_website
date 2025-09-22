
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRUJO TECHNOLOGIES - Soluciones Web y en la Nube para Pymes en Bogotá',
  description: 'Desarrollamos sitios y aplicaciones rápidas, seguras y administrables. Implementamos WordPress y AWS/Azure con soporte técnico cercano para pymes en Bogotá, Colombia.',
  keywords: 'desarrollo web Bogotá, WordPress, AWS, Azure, aplicaciones corporativas, soporte técnico, desarrollo full stack',
  openGraph: {
    title: 'TRUJO TECHNOLOGIES - Soluciones Web y en la Nube para Pymes',
    description: 'Soluciones tecnológicas para pymes en Bogotá. Desarrollo web, WordPress, cloud computing y soporte técnico.',
    locale: 'es_CO',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
