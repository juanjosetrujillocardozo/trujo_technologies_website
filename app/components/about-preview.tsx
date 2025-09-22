
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Award, 
  Users, 
  Calendar, 
  ArrowRight,
  GraduationCap,
  Globe
} from 'lucide-react'

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: Calendar,
      number: '2+',
      label: 'Años de Experiencia',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      number: '2-10',
      label: 'Equipo Especializado',
      color: 'text-green-600'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfacción del Cliente',
      color: 'text-purple-600'
    }
  ]

  const achievements = [
    'Meta Certified Digital Marketing Associate',
    'Oracle Next Education - Alura Latam',
    'Ingeniero de Sistemas',
    'Desarrollador Full-Stack certificado'
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre 
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"> TRUJO TECHNOLOGIES</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nacimos en 2023 en Bogotá para ayudar a pequeñas y medianas empresas a dar el salto digital 
                con soluciones sencillas y efectivas. Combinamos desarrollo web, WordPress y nube pública 
                (AWS/Azure) con soporte técnico cercano.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Impulsar a las pymes de Colombia con soluciones web y de nube simples, 
                seguras y de rápida implementación que mejoran sus procesos y presencia digital.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/sobre-nosotros">
                <Button size="lg" variant="outline" className="border-red-300 hover:border-red-500 hover:bg-red-50 text-red-700 group">
                  Conoce Más Sobre Nosotros
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Founder Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/juan-jose-foto.jpg"
                    alt="Juan José Trujillo Cardozo"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Juan José Trujillo Cardozo</h3>
                <p className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-medium">Fundador y Desarrollador Full-Stack</p>
              </div>
              
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Ingeniero de Sistemas con experiencia en frontend, backend y nube. 
                Inglés C2. Apasionado por enseñar y crear soluciones simples que generan valor.
              </p>

              <div className="flex justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  Ing. Sistemas
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  Inglés C2
                </div>
              </div>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                Certificaciones y Logros
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {achievement}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
