
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const ServiceFAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda un proyecto típico?',
      answer: 'Los tiempos varían según la complejidad: un sitio WordPress básico toma 2-3 semanas, uno corporativo 4-6 semanas, y aplicaciones a medida entre 6-12 semanas. Siempre proporcionamos un timeline detallado en la propuesta inicial.'
    },
    {
      question: '¿Trabajan con hosting propio o recomiendan alguno?',
      answer: 'Podemos trabajar con tu hosting actual o recomendarte opciones optimizadas. Para proyectos cloud, preferimos AWS o Azure por su escalabilidad y confiabilidad. También gestionamos el hosting si lo prefieres.'
    },
    {
      question: '¿Ofrecen mantenimiento y soporte después del lanzamiento?',
      answer: 'Sí, todos los proyectos incluyen 30 días de soporte gratuito. Después ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups automáticos, monitoreo y soporte técnico prioritario.'
    },
    {
      question: '¿Pueden migrar mi sitio web existente?',
      answer: 'Absolutamente. Tenemos experiencia migrando desde diferentes plataformas (WordPress, Joomla, sitios estáticos, etc.) hacia WordPress o aplicaciones modernas. Incluimos migración de contenido, configuración de redirects y optimización SEO.'
    },
    {
      question: '¿Qué sucede si necesito cambios después de la entrega?',
      answer: 'Los primeros 30 días incluyen ajustes sin costo adicional. Para cambios mayores o nuevas funcionalidades, evaluamos el alcance y proporcionamos una cotización transparente. Siempre priorizamos las necesidades de nuestros clientes.'
    },
    {
      question: '¿Capacitan para manejar el sitio web?',
      answer: 'Sí, incluimos capacitación para que puedas gestionar el contenido de forma autónoma. Esto incluye agregar páginas, actualizar contenido, gestionar el blog y tareas básicas de administración. También proporcionamos documentación detallada.'
    },
    {
      question: '¿Cómo manejan la seguridad de los proyectos?',
      answer: 'Implementamos mejores prácticas de seguridad: SSL, actualizaciones regulares, backups automáticos, usuarios con roles limitados, y monitoreo de vulnerabilidades. Para aplicaciones corporativas, agregamos autenticación robusta y auditoría de accesos.'
    },
    {
      question: '¿Pueden integrar sistemas externos o APIs?',
      answer: 'Sí, tenemos experiencia integrando CRM, sistemas de pago, APIs de terceros, servicios de email marketing, y más. Evaluamos las opciones técnicas y recomendamos las mejores soluciones para tus necesidades específicas.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Preguntas 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y proceso de trabajo.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6"
                >
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ¿No encontraste la respuesta que buscas?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos directamente y resolveremos todas tus dudas en menos de 24 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="mailto:contacto@trujotechnologies.com"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enviar Email
            </a>
            
            <a
              href="https://wa.me/message/EXAMPLE"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceFAQ
