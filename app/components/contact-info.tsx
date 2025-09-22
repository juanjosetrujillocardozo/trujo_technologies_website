
'use client'

import { motion } from 'framer-motion'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Linkedin,
  Globe
} from 'lucide-react'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Principal',
      value: 'contacto@trujotechnologies.com',
      description: 'Te respondemos en 24-48 horas',
      action: 'mailto:contacto@trujotechnologies.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business',
      value: 'Próximamente disponible',
      description: 'Chat directo para consultas rápidas',
      action: null,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      value: 'Cra 65 #75B-23, Apto 201',
      description: 'Simón Bolívar, Barrios Unidos, Bogotá 111211',
      action: 'https://maps.google.com/?q=Cra+65+75B-23+Bogotá',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      value: 'Lunes - Viernes: 8AM - 6PM',
      description: 'Sábados: 9AM - 2PM (COT)',
      action: null,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn Empresa',
      url: 'https://co.linkedin.com/company/trujotechnologies',
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      icon: Globe,
      name: 'Sitio Web',
      url: 'http://trujotechnologies.com',
      color: 'text-gray-700 hover:text-gray-800'
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="h-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Información de Contacto
            </h2>
            <p className="text-lg text-gray-600">
              Múltiples formas de comunicarte con nosotros
            </p>
          </motion.div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className={`${detail.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${detail.action ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''}`}>
                  {detail.action ? (
                    <a 
                      href={detail.action} 
                      target={detail.action.startsWith('http') ? '_blank' : undefined}
                      rel={detail.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      <ContactDetailContent detail={detail} />
                    </a>
                  ) : (
                    <ContactDetailContent detail={detail} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Síguenos
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 ${link.color}`}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{link.name}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100 text-center"
          >
            <h3 className="font-bold text-gray-900 mb-2 flex items-center justify-center">
              <Phone className="h-5 w-5 text-red-600 mr-2" />
              Soporte de Emergencia
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Para clientes existentes con sitios críticos
            </p>
            <p className="text-xs text-gray-600">
              WhatsApp Business (próximamente) - 24/7
            </p>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center text-sm text-gray-600 bg-blue-50 rounded-xl p-4"
          >
            <p>
              <strong>Tiempo de respuesta garantizado:</strong> Todas las consultas recibidas 
              durante horario laboral se responden el mismo día. Fuera de horario, en 24-48 horas máximo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Componente helper para evitar repetición
const ContactDetailContent = ({ detail }: { detail: any }) => (
  <div className="flex items-start space-x-4">
    <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
      <detail.icon className={`h-6 w-6 ${detail.color}`} />
    </div>
    
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-bold text-gray-900 text-sm">
          {detail.title}
        </h3>
        {detail.action && (
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        )}
      </div>
      
      <p className="font-medium text-gray-800 text-sm mb-1">
        {detail.value}
      </p>
      
      <p className="text-xs text-gray-600">
        {detail.description}
      </p>
    </div>
  </div>
)

export default ContactInfo
