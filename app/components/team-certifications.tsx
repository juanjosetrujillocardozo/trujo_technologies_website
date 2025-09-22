
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Award,
  Star,
  Users,
  Code2,
  Cloud,
  Database,
  Shield,
  TrendingUp
} from 'lucide-react'

const TeamCertifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const certifications = [
    {
      icon: Award,
      title: 'Meta Certified Digital Marketing Associate',
      issuer: 'Meta (Facebook)',
      date: '2024',
      description: 'Certificación oficial en marketing digital y estrategias publicitarias',
      verified: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Star,
      title: 'Oracle Next Education',
      issuer: 'Alura Latam - Oracle',
      date: '2023',
      description: 'Programa especializado en tecnologías Oracle y desarrollo empresarial',
      verified: true,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Code2,
      title: 'Ingeniería de Sistemas',
      issuer: 'Universidad Acreditada',
      date: 'Graduado',
      description: 'Formación profesional completa en ingeniería de sistemas y software',
      verified: true,
      color: 'from-green-500 to-green-600'
    }
  ]

  const teamStructure = [
    {
      role: 'Dirección/CTO',
      description: 'Liderazgo técnico y estratégico',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      role: 'Desarrollo Full-Stack',
      description: '1-3 desarrolladores especializados',
      icon: Code2,
      color: 'from-blue-500 to-blue-600'
    },
    {
      role: 'Soporte e Infraestructura',
      description: 'Especialista en cloud y sistemas',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600'
    },
    {
      role: 'Comercial y Éxito del Cliente',
      description: 'Gestión de proyectos y relaciones',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    }
  ]

  const upcomingCertifications = [
    'AWS Solutions Architect Associate',
    'Azure Fundamentals (AZ-900)',
    'Google Cloud Platform Fundamentals',
    'Certified Kubernetes Administrator'
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Equipo y 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Certificaciones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un equipo especializado con certificaciones oficiales y experiencia comprobada 
            en las tecnologías más demandadas del mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Certificaciones Oficiales
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">
                          {cert.title}
                        </h4>
                        {cert.verified && (
                          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium ml-2">
                            Verificado
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center mb-3 text-sm text-gray-600">
                        <span className="font-medium">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.date}</span>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                Próximas Certificaciones (2024-2025)
              </h4>
              <div className="space-y-2">
                {upcomingCertifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {cert}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Team Structure */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Estructura del Equipo
            </h3>

            <div className="space-y-6">
              {teamStructure.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {role.role}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Team Size Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100"
            >
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="font-bold text-gray-900">Tamaño Actual del Equipo</h4>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">2-10</div>
                  <div className="text-xs text-gray-600">Miembros</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-xs text-gray-600">Dedicación</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-xs text-gray-600">Disponibilidad</div>
                </div>
              </div>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-5 w-5 text-purple-600 mr-2" />
                Garantía de Calidad
              </h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Procesos de desarrollo certificados y documentados
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Code review obligatorio en todos los proyectos
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Formación continua del equipo en nuevas tecnologías
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Métricas de satisfacción del cliente monitoreadas
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamCertifications
