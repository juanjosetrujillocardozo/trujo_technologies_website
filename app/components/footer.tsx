
import Link from 'next/link'
import { Code2, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  TRUJO
                </span>
                <span className="text-xl font-light text-gray-300 ml-1">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones web y en la nube para pymes en Bogotá. Desarrollo, implementación y soporte técnico cercano.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors">Desarrollo Web</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors">WordPress</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors">Cloud Computing</Link></li>
              <li><Link href="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors">Soporte Técnico</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="text-gray-400 hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-400 hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Cra 65 #75B-23, Simón Bolívar<br />
                  Barrios Unidos, Bogotá
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">contacto@trujotechnologies.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TRUJO TECHNOLOGIES. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacidad" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
