
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Globe, 
  FileType2, 
  Cloud, 
  Monitor,
  Code2,
  Database,
  GitBranch,
  CheckCircle
} from 'lucide-react'

const ServiceDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web a la Medida',
      description: 'Aplicaciones ligeras para procesos internos, integraciones con APIs y paneles de control personalizados.',
      features: [
        'HTML, CSS, JavaScript avanzado',
        'React & Next.js',
        'APIs REST y GraphQL',
        'Responsive Design',
        'SEO técnico optimizado',
        'Integración con servicios externos'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileType2,
      title: 'Sitios Web con WordPress',
      description: 'Diseño responsivo, SEO técnico, temas a medida, optimización de velocidad y seguridad.',
      features: [
        'Temas personalizados',
        'SEO on-page optimizado',
        'Plugins a medida',
        'Optimización Core Web Vitals',
        'Seguridad avanzada',
        'Capacitación para autogestión'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'Elementor'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Cloud,
      title: 'Nube (AWS / Azure)',
      description: 'Arquitectura básica, despliegues, bases de datos gestionadas, copias de seguridad y monitoreo.',
      features: [
        'Arquitectura cloud escalable',
        'Despliegues automáticos',
        'Bases de datos gestionadas',
        'Backup automático diario',
        'Monitoreo proactivo 24/7',
        'CDN y optimización global'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Monitor,
      title: 'Soporte Técnico',
      description: 'Instalación/actualización de sistemas operativos, antivirus, respaldo, redes y helpdesk remoto.',
      features: [
        'Instalación Windows & Linux',
        'Configuración de redes',
        'Antivirus y seguridad',
        'Backup y recuperación',
        'Soporte remoto',
        'Mantenimiento preventivo'
      ],
      technologies: ['Windows', 'Linux', 'VMware', 'Active Directory', 'PowerShell'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Code2,
      title: 'Aplicaciones Corporativas',
      description: 'Gestión de solicitudes, inventarios, agenda de servicio con autenticación, roles y auditoría.',
      features: [
        'Aplicaciones web internas',
        'Gestión de usuarios y roles',
        'Integración con APIs',
        'Reportes y dashboards',
        'Auditoría completa',
        'Escalabilidad empresarial'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: GitBranch,
      title: 'Control de Versiones y CI/CD',
      description: 'Git/GitHub, CI/CD básico, pipelines de construcción y despliegue con buenas prácticas DevOps.',
      features: [
        'Configuración de repositorios',
        'Branching strategies',
        'Pipelines CI/CD',
        'Despliegues automáticos',
        'Code review process',
        'Monitoreo de deployments'
      ],
      technologies: ['Git', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker'],
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
            Servicios 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Detallados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada servicio está diseñado para entregar resultados tangibles y escalables, 
            con tecnologías modernas y mejores prácticas de la industria.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${service.bgColor} rounded-3xl p-8 md:p-12`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">¿Qué incluye?</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
