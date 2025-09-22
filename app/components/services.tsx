
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  FileType2, 
  Cloud, 
  Monitor, 
  ArrowRight,
  Code2,
  Database,
  GitBranch
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web a la Medida',
      description: 'Aplicaciones ligeras para procesos internos, integraciones con APIs y paneles de control personalizados.',
      features: ['HTML, CSS, JavaScript', 'React & Next.js', 'APIs REST', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: FileType2,
      title: 'Sitios Web con WordPress',
      description: 'Diseño responsivo, SEO técnico, temas a medida, optimización de velocidad y seguridad.',
      features: ['Temas personalizados', 'SEO optimizado', 'Plugins a medida', 'Capacitación incluida'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Cloud,
      title: 'Nube (AWS / Azure)',
      description: 'Arquitectura básica, despliegues, bases de datos gestionadas, copias de seguridad y monitoreo.',
      features: ['Arquitectura cloud', 'Despliegues automáticos', 'Backup automático', 'Monitoreo 24/7'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Monitor,
      title: 'Soporte Técnico',
      description: 'Instalación/actualización de sistemas operativos, antivirus, respaldo, redes y helpdesk remoto.',
      features: ['Windows & Linux', 'Configuración de redes', 'Antivirus & seguridad', 'Soporte remoto'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nuestros 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas desde el desarrollo hasta el soporte, 
            adaptadas a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${service.borderColor} hover:border-opacity-50 group-hover:-translate-y-1`}>
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Servicios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Aplicaciones Corporativas</h4>
              <p className="text-sm text-gray-600">Gestión de solicitudes, inventarios, agenda de servicio con autenticación y roles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GitBranch className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Control de Versiones</h4>
              <p className="text-sm text-gray-600">Git/GitHub, CI/CD básico, pipelines de construcción y despliegue.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Consultoría Técnica</h4>
              <p className="text-sm text-gray-600">Arquitectura de software, mejores prácticas y optimización de procesos.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/servicios">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
