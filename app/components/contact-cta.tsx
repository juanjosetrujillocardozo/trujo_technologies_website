
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Clock,
  MessageCircle
} from 'lucide-react'

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'contacto@trujotechnologies.com',
      action: 'Enviar Email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Respuesta inmediata',
      action: 'Escribir WhatsApp',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      description: 'Bogotá, Colombia',
      action: 'Ver Ubicación',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Cuéntanos tu proyecto y te respondemos en 24-48 horas con una propuesta personalizada.
            </p>
          </motion.div>
        </div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 border border-white/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center text-blue-100 mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Respuesta garantizada en 24-48 horas</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Solicita tu cotización gratuita
              </h3>
              
              <p className="text-blue-100 leading-relaxed">
                Sin compromisos. Analizamos tu proyecto y te enviamos una propuesta 
                detallada con alcance, timeline y precios transparentes.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Comenzar Proyecto
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link href="/servicios">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-blue-100 text-sm">Tiempo de respuesta</div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-blue-100 text-sm">Satisfacción</div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">2-6</div>
                <div className="text-blue-100 text-sm">Semanas entrega</div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Soporte incluido</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10 group-hover:border-white/20">
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                
                <h4 className="font-semibold text-white mb-2">{method.title}</h4>
                <p className="text-blue-100 text-sm mb-4">{method.description}</p>
                
                <Link href="/contacto" className="text-white text-sm font-medium hover:text-blue-200 transition-colors">
                  {method.action} →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
