
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  ArrowRight,
  FileType2,
  Globe,
  Cloud,
  Monitor
} from 'lucide-react'

const ServicePackages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const packages = [
    {
      icon: FileType2,
      name: 'WordPress Express',
      description: 'Perfecto para comenzar tu presencia digital rápidamente',
      price: 'Desde $800.000',
      duration: '2 semanas',
      features: [
        '1-3 páginas principales',
        'Tema profesional',
        'SEO on-page inicial',
        'Formulario de contacto',
        'Google Analytics',
        'Capacitación básica'
      ],
      popular: false,
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: FileType2,
      name: 'Corporativo WordPress',
      description: 'Solución completa para empresas establecidas',
      price: 'Desde $1.500.000',
      duration: '4-6 semanas',
      features: [
        '5-10 páginas completas',
        'Tema 100% personalizado',
        'Blog integrado',
        'Optimización Core Web Vitals',
        'Seguridad avanzada',
        'Staging environment',
        'Capacitación completa'
      ],
      popular: true,
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Globe,
      name: 'App Interna Lite',
      description: 'Aplicación corporativa básica para optimizar procesos',
      price: 'Desde $2.500.000',
      duration: '4-8 semanas',
      features: [
        'Autenticación básica',
        '1 flujo de proceso principal',
        'Dashboard administrativo',
        'Base de datos incluida',
        'Despliegue en la nube',
        'Documentación técnica'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      icon: Cloud,
      name: 'Migración Cloud Starter',
      description: 'Mueve tu aplicación a la nube de forma segura',
      price: 'Desde $1.200.000',
      duration: '2-4 semanas',
      features: [
        'Análisis de infraestructura actual',
        'Migración a AWS/Azure',
        'Backups diarios automáticos',
        'Monitoreo básico',
        'SSL y seguridad',
        'Documentación técnica'
      ],
      popular: false,
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-amber-50'
    }
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
            Paquetes 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Listos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones predefinidas con alcance, precios y tiempos claros. 
            También ofrecemos proyectos completamente a la medida.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${pkg.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 group hover:-translate-y-2`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Más Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <pkg.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="text-sm text-gray-600">{pkg.description}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="flex items-center text-2xl font-bold text-gray-900">
                    <DollarSign className="h-6 w-6 mr-1" />
                    {pkg.price}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  Entrega: {pkg.duration}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href="/contacto">
                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg transition-all duration-300 text-white group-hover:shadow-xl`}
                  size="lg"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white rounded-3xl p-8 shadow-lg border border-blue-100"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo diferente?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              También desarrollamos soluciones completamente a la medida. 
              Cuéntanos tu proyecto y te haremos una propuesta personalizada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contacto">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Proyecto a la Medida
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="border-blue-300 hover:border-blue-500 text-blue-700 hover:bg-blue-50">
              Ver Portafolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicePackages
