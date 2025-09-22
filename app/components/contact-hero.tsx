
'use client'

import { motion } from 'framer-motion'
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle
} from 'lucide-react'

const ContactHero = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@trujotechnologies.com',
      description: 'Te respondemos en 24-48 horas'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Próximamente',
      description: 'Respuesta inmediata'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Bogotá, Colombia',
      description: 'Cra 65 #75B-23, Barrios Unidos'
    }
  ]

  const guarantees = [
    'Respuesta garantizada en 24-48 horas',
    'Cotización sin compromiso',
    'Asesoría técnica gratuita',
    'Presupuestos transparentes'
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center space-y-8 mb-16">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hablemos de tu Proyecto
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cuéntanos tu idea y te haremos una propuesta personalizada. 
              <strong> Respuesta garantizada en 24-48 horas</strong>.
            </p>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-blue-100 text-center">
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{guarantee}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-blue-600 font-medium mb-2">{method.value}</p>
              <p className="text-sm text-gray-600">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-3">
            <Clock className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="font-bold text-gray-900">Horario de Atención</h3>
          </div>
          <p className="text-gray-700">
            <strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM (COT)<br />
            <strong>Sábados:</strong> 9:00 AM - 2:00 PM (COT)
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Para urgencias, contáctanos por WhatsApp las 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
