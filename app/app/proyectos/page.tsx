
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  ShoppingCart, 
  BarChart3, 
  Monitor,
  Gamepad2,
  Video,
  ExternalLink,
  ArrowRight
} from 'lucide-react'

const ProyectosPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const proyectos = [
    {
      icon: Video,
      title: 'TRUJO VIDS',
      description: 'Plataforma de streaming y contenido de video gaming, especialmente enfocada en Minecraft y otros juegos populares.',
      image: '/trujo-vids-avatar.jpg',
      url: 'https://truyovids.trujotechnologies.com',
      technologies: ['Node.js', 'React', 'Video Streaming', 'Gaming'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: ShoppingCart,
      title: 'TRUJO Store',
      description: 'Tienda en línea especializada en productos tecnológicos, hardware, software y accesorios para gamers.',
      image: '/logo-trujo-negro.jpg',
      url: 'https://store.trujotechnologies.com',
      technologies: ['E-commerce', 'Payment Gateway', 'Inventory Management'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: BarChart3,
      title: 'Panel de Monitoreo',
      description: 'Sistema integrado de monitoreo con Grafana para visualización de métricas y análisis de rendimiento.',
      image: null,
      url: 'https://grafana.trujotechnologies.com',
      technologies: ['Grafana', 'Monitoring', 'Analytics', 'Real-time Data'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Monitor,
      title: 'Captain Dashboard',
      description: 'Panel de administración y control para gestión de aplicaciones y servicios en la infraestructura.',
      image: null,
      url: 'https://captain.trujotechnologies.com',
      technologies: ['Docker', 'Container Management', 'DevOps', 'Admin Panel'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Gamepad2,
      title: 'Minecraft Server',
      description: 'Servidor de Minecraft personalizado con mods y configuraciones especiales para la comunidad gaming.',
      image: '/trujo-vids-avatar.jpg',
      url: '#',
      technologies: ['Java', 'Minecraft', 'Server Management', 'Gaming'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Globe,
      title: 'API Gateway',
      description: 'Sistema centralizado de APIs para integración de servicios y comunicación entre aplicaciones.',
      image: null,
      url: 'https://api.trujotechnologies.com',
      technologies: ['REST API', 'Node.js', 'Microservices', 'Integration'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros 
              <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"> Proyectos</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explora nuestro ecosistema de aplicaciones y servicios tecnológicos, desde plataformas de streaming 
              hasta tiendas en línea y herramientas de monitoreo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border ${proyecto.borderColor} hover:border-opacity-50 group-hover:-translate-y-1 h-full flex flex-col`}>
                  {/* Image/Icon */}
                  <div className="mb-6">
                    {proyecto.image ? (
                      <div className="relative w-full h-32 rounded-lg overflow-hidden">
                        <Image
                          src={proyecto.image}
                          alt={proyecto.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-16 h-16 bg-gradient-to-r ${proyecto.color} rounded-xl flex items-center justify-center`}>
                        <proyecto.icon className="h-8 w-8 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {proyecto.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {proyecto.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proyecto.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${proyecto.bgColor} text-gray-700`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  {proyecto.url !== '#' && (
                    <div className="mt-auto">
                      <Link href={proyecto.url} target="_blank" rel="noopener noreferrer">
                        <Button 
                          size="sm" 
                          className={`w-full bg-gradient-to-r ${proyecto.color} hover:opacity-90 text-white group/btn`}
                        >
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  )}

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${proyecto.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Tienes una idea para un proyecto?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Trabajemos juntos para crear soluciones tecnológicas innovadoras que impulsen tu negocio al siguiente nivel.
              </p>
              <Link href="/contacto">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Contacta con Nosotros
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProyectosPage
