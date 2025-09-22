
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Headphones, Shield, CheckCircle } from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Clock,
      title: 'Implementación Rápida',
      description: 'Proyectos listos en semanas, no meses. Metodología ágil y entregas incrementales.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Headphones,
      title: 'Soporte Cercano',
      description: 'Acompañamiento técnico continuo en español. Respuesta en 24-48 horas garantizada.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Seguridad y Rendimiento',
      description: 'Buenas prácticas, copias de seguridad automáticas y monitoreo proactivo.',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
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
            ¿Por qué elegir 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> TRUJO TECHNOLOGIES</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos especializamos en entregar soluciones tecnológicas que realmente funcionan para tu negocio, 
            con el respaldo de un equipo comprometido con tu éxito.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <span className="text-2xl font-bold text-gray-900">Garantía de Satisfacción</span>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trabajamos hasta que estés 100% satisfecho con tu proyecto. Tu éxito es nuestro éxito.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
