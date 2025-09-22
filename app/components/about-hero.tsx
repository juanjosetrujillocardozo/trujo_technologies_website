
'use client'

import { motion } from 'framer-motion'
import { 
  Calendar,
  MapPin,
  Users,
  Award,
  Lightbulb,
  Heart
} from 'lucide-react'

const AboutHero = () => {
  const highlights = [
    {
      icon: Calendar,
      label: 'Fundada en 2023',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      label: 'Bogotá, Colombia',
      color: 'text-green-600'
    },
    {
      icon: Users,
      label: 'Equipo 2-10',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      label: '100% Satisfacción',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
              <span className="text-gray-800">Sobre</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TRUJO TECHNOLOGIES
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Nacimos en 2023 en Bogotá para ayudar a pequeñas y medianas empresas a dar el salto digital 
              con <strong>soluciones sencillas y efectivas</strong>.
            </p>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovación</h3>
              <p className="text-sm text-gray-600">Soluciones modernas con tecnologías actualizadas</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Compromiso</h3>
              <p className="text-sm text-gray-600">Tu éxito es nuestro éxito, trabajamos hasta lograrlo</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cercanía</h3>
              <p className="text-sm text-gray-600">Soporte técnico cercano y comunicación clara</p>
            </div>
          </motion.div>

          {/* Company Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
                <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center`}>
                  <highlight.icon className={`h-5 w-5 ${highlight.color}`} />
                </div>
                <div className="text-sm font-medium text-gray-700">{highlight.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Filosofía</h2>
            <p className="text-lg leading-relaxed opacity-95">
              Combinamos desarrollo web, WordPress y nube pública (AWS/Azure) con 
              <strong> soporte técnico cercano</strong> para impulsar el crecimiento digital 
              de las pymes colombianas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
