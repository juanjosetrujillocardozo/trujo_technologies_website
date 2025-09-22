
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Code2, Cloud, Shield } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Disponible para nuevos proyectos</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Soluciones Web
                </span>
                <br />
                <span className="text-gray-800">y en la Nube</span>
                <br />
                <span className="text-2xl md:text-4xl font-normal text-gray-600">
                  para pymes en Bogotá
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Desarrollamos sitios y aplicaciones <strong>rápidas, seguras y administrables</strong>. 
                Implementamos WordPress y AWS/Azure con soporte técnico cercano.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link href="/contacto">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  Cotiza tu Proyecto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/servicios">
                <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-400 hover:bg-blue-50 group">
                  Ver Portafolio
                  <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Features Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center space-x-8 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <Code2 className="h-5 w-5 text-blue-600" />
                <span>Desarrollo Web</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-indigo-600" />
                <span>Cloud Computing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span>Soporte 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:ml-8"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 relative overflow-hidden">
                {/* Code-like pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 text-white font-mono text-xs">
                    <div>&lt;html&gt;</div>
                    <div className="ml-2">&lt;head&gt;</div>
                    <div className="ml-4">&lt;title&gt;TRUJO TECHNOLOGIES&lt;/title&gt;</div>
                    <div className="ml-2">&lt;/head&gt;</div>
                    <div className="ml-2">&lt;body&gt;</div>
                    <div className="ml-4">&lt;main className="hero"&gt;</div>
                    <div className="ml-6">// Desarrollo web profesional</div>
                    <div className="ml-6">// Cloud computing</div>
                    <div className="ml-6">// Soporte técnico</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                
                <div className="absolute bottom-8 left-8 w-20 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute bottom-16 right-12 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Shield className="h-7 w-7 text-white" />
                </div>
              </div>
              
              {/* Browser bar simulation */}
              <div className="bg-gray-100 p-3 border-b flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  trujotechnologies.com
                </div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100"
            >
              <div className="text-2xl font-bold text-blue-600">2+</div>
              <div className="text-xs text-gray-600">Años de experiencia</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-green-100"
            >
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-xs text-gray-600">Satisfacción</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
