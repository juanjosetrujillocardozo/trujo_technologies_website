
'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  FileType2, 
  Cloud, 
  Monitor,
  Code2,
  Database,
  GitBranch,
  Shield
} from 'lucide-react'

const ServiceHero = () => {
  const services = [
    { icon: Globe, label: 'Desarrollo Web' },
    { icon: FileType2, label: 'WordPress' },
    { icon: Cloud, label: 'Cloud Computing' },
    { icon: Monitor, label: 'Soporte Técnico' },
    { icon: Code2, label: 'Apps Corporativas' },
    { icon: Database, label: 'Bases de Datos' },
    { icon: GitBranch, label: 'DevOps' },
    { icon: Shield, label: 'Seguridad' }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Soluciones tecnológicas completas adaptadas a las necesidades específicas 
              de tu negocio. Desde el desarrollo hasta el soporte continuo.
            </p>
          </motion.div>

          {/* Services Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:border-blue-300 group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center">
                    {service.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '2-6', label: 'Semanas de entrega' },
              { number: '100%', label: 'Satisfacción garantizada' },
              { number: '24/7', label: 'Soporte incluido' },
              { number: '2+', label: 'Años de experiencia' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
