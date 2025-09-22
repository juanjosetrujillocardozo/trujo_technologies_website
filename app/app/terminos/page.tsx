
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - TRUJO TECHNOLOGIES',
  description: 'Términos y condiciones de uso de los servicios de TRUJO TECHNOLOGIES. Lea nuestras políticas y condiciones.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-lg text-gray-600">
              Última actualización: Septiembre 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceptación de Términos</h2>
            <p className="text-gray-700 mb-6">
              Al utilizar los servicios de TRUJO TECHNOLOGIES, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con algún aspecto de estos términos, no debe utilizar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Servicios Ofrecidos</h2>
            <p className="text-gray-700 mb-4">
              TRUJO TECHNOLOGIES ofrece los siguientes servicios:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Desarrollo web y aplicaciones a medida</li>
              <li>Implementación y personalización de WordPress</li>
              <li>Servicios de cloud computing (AWS/Azure)</li>
              <li>Soporte técnico y mantenimiento</li>
              <li>Consultoría en tecnologías de información</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Proceso de Contratación</h2>
            <p className="text-gray-700 mb-6">
              Los proyectos inician con una consulta inicial gratuita. Posteriormente, se proporciona una cotización detallada con alcance, timeline y costos. El trabajo comienza una vez firmado el contrato y recibido el anticipo acordado.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Pagos y Facturación</h2>
            <p className="text-gray-700 mb-4">
              Las condiciones de pago se establecen en cada propuesta específica. Generalmente incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Anticipo del 50% para iniciar el proyecto</li>
              <li>Pagos parciales según hitos del proyecto</li>
              <li>Saldo final antes de la entrega</li>
              <li>Pagos mensuales para servicios de mantenimiento</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-6">
              Una vez completado el pago total, el cliente obtiene todos los derechos sobre el trabajo desarrollado específicamente para su proyecto. TRUJO TECHNOLOGIES conserva los derechos sobre metodologías, frameworks y código reutilizable genérico.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Garantías y Soporte</h2>
            <p className="text-gray-700 mb-6">
              Todos los proyectos incluyen 30 días de soporte gratuito post-lanzamiento para corrección de errores y ajustes menores. Los servicios de mantenimiento continuo y nuevas funcionalidades se facturan por separado.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-6">
              TRUJO TECHNOLOGIES se compromete a entregar servicios de alta calidad, pero no será responsable por daños indirectos, pérdidas de ingresos o interrupciones del negocio. Nuestra responsabilidad máxima se limita al valor del contrato específico.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Modificaciones</h2>
            <p className="text-gray-700 mb-6">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se publicarán en nuestro sitio web y entrarán en vigor inmediatamente.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Ley Aplicable</h2>
            <p className="text-gray-700 mb-6">
              Estos términos se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los tribunales competentes de Bogotá, Colombia.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contacto</h2>
            <p className="text-gray-700 mb-6">
              Para cualquier consulta sobre estos términos y condiciones, contáctenos en:
              <br />
              <strong>Email:</strong> contacto@trujotechnologies.com
              <br />
              <strong>Dirección:</strong> Cra 65 #75B-23, Barrios Unidos, Bogotá, Colombia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
