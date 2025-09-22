
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageSquare,
  FileSearch,
  Code2,
  TestTube,
  Rocket,
  Headphones,
  CheckCircle
} from 'lucide-react'

const ServiceProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consulta Inicial',
      description: 'Conversamos sobre tu proyecto, objetivos y necesidades específicas.',
      duration: '1-2 días',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileSearch,
      title: 'Análisis y Propuesta',
      description: 'Evaluamos los requerimientos y entregamos una propuesta detallada con alcance, timeline y precios.',
      duration: '2-3 días',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Code2,
      title: 'Desarrollo',
      description: 'Implementamos la solución usando metodología ágil con entregas incrementales y revisiones regulares.',
      duration: '2-8 semanas',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TestTube,
      title: 'Pruebas y QA',
      description: 'Realizamos pruebas exhaustivas de funcionalidad, rendimiento y seguridad.',
      duration: '3-5 días',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Rocket,
      title: 'Lanzamiento',
      description: 'Desplegamos la solución en producción y realizamos las configuraciones finales.',
      duration: '1-2 días',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: Headphones,
      title: 'Soporte Continuo',
      description: 'Brindamos soporte técnico, mantenimiento y actualizaciones según el plan acordado.',
      duration: 'Permanente',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
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
            Nuestro 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Proceso</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso probado que garantiza entregas exitosas, comunicación clara y 
            resultados que superan las expectativas.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-0.5 top-24 bottom-24 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} space-y-6 lg:space-y-0 lg:space-x-12`}
              >
                {/* Step Number Circle (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-200 rounded-full items-center justify-center z-10">
                  <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${step.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  {/* Mobile step indicator */}
                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-10 h-10 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-500">{step.duration}</div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <div className="hidden lg:block text-sm font-medium text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nuestros Compromisos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Entregas a Tiempo</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cumplimos con los plazos acordados o comunicamos cualquier cambio con anticipación.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Comunicación Clara</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Updates regulares, revisiones programadas y disponibilidad para consultas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Soporte Post-Lanzamiento</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                30 días de soporte gratuito incluidos para ajustes y resolución de incidencias.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceProcess
