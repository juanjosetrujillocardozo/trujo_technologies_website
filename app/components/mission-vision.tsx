
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target,
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle
} from 'lucide-react'

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: CheckCircle,
      title: 'Calidad y Simplicidad',
      description: 'Desarrollamos soluciones robustas pero fáciles de usar, priorizando la experiencia del usuario final.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'Transparencia',
      description: 'Comunicación clara sobre alcances, tiempos y costos. Sin sorpresas ni cobros ocultos.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Aprendizaje Continuo',
      description: 'Nos mantenemos actualizados con las últimas tecnologías para ofrecer soluciones modernas.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Orientación al Cliente',
      description: 'Tu éxito es nuestro éxito. Trabajamos hasta que estés 100% satisfecho con el resultado.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Seguridad por Diseño',
      description: 'Implementamos mejores prácticas de seguridad desde el inicio de cada proyecto.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovación Práctica',
      description: 'Aplicamos tecnologías innovadoras solo cuando realmente agregan valor al negocio.',
      color: 'from-indigo-500 to-indigo-600'
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
            Misión, Visión y 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Valores</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestros principios guían cada decisión y proyecto, asegurando que entreguemos 
            valor real y duradero a nuestros clientes.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Impulsar a las pymes de Colombia con <strong>soluciones web y de nube simples, 
              seguras y de rápida implementación</strong> que mejoran sus procesos y presencia digital.
            </p>

            <div className="bg-white/50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Cómo lo hacemos:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Desarrollo web profesional con WordPress y tecnologías modernas</li>
                <li>• Implementación de soluciones cloud (AWS/Azure)</li>
                <li>• Soporte técnico cercano y en español</li>
                <li>• Procesos ágiles con entregas rápidas y transparentes</li>
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ser el <strong>aliado tecnológico preferido por las pymes en Bogotá</strong> para transformar 
              sus operaciones con soluciones accesibles y escalables.
            </p>

            <div className="bg-white/50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Hacia dónde vamos:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Convertirnos en referente de calidad en desarrollo web</li>
                <li>• Expandir servicios de cloud computing y DevOps</li>
                <li>• Formar un equipo especializado de 10-20 personas</li>
                <li>• Contribuir al crecimiento digital del país</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Nuestros Valores Fundamentales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Nuestro Compromiso Contigo
          </h3>
          <p className="text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
            Cada proyecto es una oportunidad para demostrar nuestros valores en acción. 
            Trabajamos con <strong>pasión, integridad y excelencia</strong> para que tu inversión 
            en tecnología genere resultados tangibles y duraderos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision
