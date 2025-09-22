
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar,
  MapPin,
  Lightbulb,
  Users,
  Award,
  TrendingUp
} from 'lucide-react'

const CompanyHistory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const timeline = [
    {
      year: '2023',
      title: 'Fundación de TRUJO TECHNOLOGIES',
      description: 'Juan José Trujillo Cardozo funda la empresa en Bogotá con la visión de ayudar a las pymes colombianas en su transformación digital.',
      icon: Lightbulb,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2023',
      title: 'Primeros Servicios',
      description: 'Lanzamiento de servicios de desarrollo web, WordPress, soporte técnico y consultoría en cloud computing (AWS/Azure).',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2024',
      title: 'Consolidación del Equipo',
      description: 'Expansión del equipo técnico y establecimiento de procesos metodológicos para garantizar entregas exitosas.',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2024+',
      title: 'Crecimiento Continuo',
      description: 'Enfoque en la especialización de servicios cloud, aplicaciones corporativas y soluciones escalables para pymes.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const stats = [
    {
      icon: Calendar,
      number: '2+',
      label: 'Años en el Mercado',
      description: 'Desde 2023 sirviendo a pymes en Bogotá'
    },
    {
      icon: MapPin,
      number: '1',
      label: 'Oficina Principal',
      description: 'Barrios Unidos, Bogotá, Colombia'
    },
    {
      icon: Users,
      number: '2-10',
      label: 'Equipo Especializado',
      description: 'Profesionales en desarrollo y soporte'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nuestra 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Historia</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde nuestros inicios en 2023, hemos estado comprometidos con la transformación digital 
            de las pequeñas y medianas empresas en Colombia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Línea de Tiempo</h3>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>
              
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start space-x-6 pb-8"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-2">
                    <div className="flex items-center mb-2">
                      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {event.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats and Context */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">En Cifras</h3>
            
            {/* Stats Cards */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.number}
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        {stat.label}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Context Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100"
            >
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-green-600 mr-2" />
                Ubicación Estratégica
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Cra 65 #75B-23, Simón Bolívar, Barrios Unidos, Bogotá</strong>
              </p>
              <p className="text-sm text-gray-600">
                Estratégicamente ubicados en el corazón de Bogotá para servir mejor 
                a las empresas de la capital y todo Colombia.
              </p>
            </motion.div>

            {/* Market Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100"
            >
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
                Contexto de Mercado
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                El sector digital en Colombia creció 25.7% en 2023, alcanzando $57.2 billones COP. 
                Las exportaciones de software crecieron 13% y TRUJO TECHNOLOGIES nace para aprovechar 
                esta oportunidad, especializándose en pymes que necesitan soluciones accesibles y efectivas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CompanyHistory
