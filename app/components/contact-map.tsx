
'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Navigation } from 'lucide-react'

const ContactMap = () => {
  const location = {
    address: 'Cra 65 #75B-23, Apto 201',
    neighborhood: 'Simón Bolívar, Barrios Unidos',
    city: 'Bogotá, Colombia',
    postalCode: '111211',
    coordinates: '4.6745,-74.0818', // Approximate coordinates for Barrios Unidos
    googleMapsUrl: 'https://maps.google.com/?q=Cra+65+75B-23+Barrios+Unidos+Bogotá',
    wazeUrl: 'https://waze.com/ul/hsv14t9yp5'
  }

  const nearbyLandmarks = [
    'Centro Comercial Salitre Plaza',
    'Estación de TransMilenio Carrera 68',
    'Parque Simón Bolívar',
    'Universidad Minuto de Dios (UNIMINUTO)'
  ]

  return (
    <section className="bg-white">
      <div className="h-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-gray-600">
              En el corazón de Bogotá
            </p>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-lg"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                TRUJO TECHNOLOGIES
              </h3>
            </div>

            <div className="space-y-3 text-center text-gray-700">
              <p className="font-semibold text-lg">
                {location.address}
              </p>
              <p>
                {location.neighborhood}
              </p>
              <p>
                {location.city}
              </p>
              <p className="text-sm text-gray-600">
                Código postal: {location.postalCode}
              </p>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 rounded-2xl p-8 text-center border border-gray-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            {/* Map Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
              <div className="absolute top-4 left-4 w-32 h-32 border-2 border-blue-300 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-green-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            <div className="relative z-10">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Mapa Interactivo</h4>
              <p className="text-sm text-gray-600 mb-4">
                Haz clic para ver la ubicación exacta en Google Maps
              </p>
              
              <div className="flex justify-center space-x-4">
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium group"
                >
                  Google Maps
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href={location.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-medium group"
                >
                  Waze
                  <Navigation className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Nearby Landmarks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-green-50 rounded-2xl p-6 border border-green-100"
          >
            <h4 className="font-bold text-gray-900 mb-4 text-center flex items-center justify-center">
              <Navigation className="h-5 w-5 text-green-600 mr-2" />
              Referencias Cercanas
            </h4>
            <div className="space-y-2">
              {nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                  {landmark}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transportation Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100"
          >
            <h4 className="font-bold text-gray-900 mb-3 text-center">
              Cómo Llegar
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="font-medium mr-2">🚌</span>
                <span>TransMilenio: Estación Carrera 68 (Línea Troncal)</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">🚗</span>
                <span>En vehículo: Acceso por Av. Carrera 68 o Calle 80</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium mr-2">🅿️</span>
                <span>Parqueadero disponible en el edificio</span>
              </div>
            </div>
          </motion.div>

          {/* Visit Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center text-sm text-gray-600 bg-blue-50 rounded-xl p-4"
          >
            <p>
              <strong>Nota importante:</strong> Para visitas presenciales, 
              por favor agenda una cita previa mediante email o WhatsApp 
              para garantizar que estemos disponibles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap
