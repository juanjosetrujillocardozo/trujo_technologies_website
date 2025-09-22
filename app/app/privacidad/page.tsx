
'use client'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Política de Privacidad
            </h1>
            <p className="text-lg text-gray-600">
              Última actualización: 15 de septiembre de 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-4">
              En TRUJO TECHNOLOGIES recopilamos únicamente la información necesaria para proporcionar nuestros servicios:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nombre completo y datos de contacto (email, teléfono)</li>
              <li>Información de la empresa (nombre, sector)</li>
              <li>Detalles del proyecto y consultas técnicas</li>
              <li>Datos de navegación y uso del sitio web</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso de la Información</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Responder a sus consultas y proporcionar cotizaciones</li>
              <li>Entregar nuestros servicios de desarrollo y soporte</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Enviar comunicaciones relacionadas con proyectos activos</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Protección de Datos</h2>
            <p className="text-gray-700 mb-6">
              Nos comprometemos a proteger su información personal mediante medidas de seguridad técnicas y organizacionales apropiadas. Sus datos se almacenan de forma segura y solo son accesibles por personal autorizado.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Compartir Información</h2>
            <p className="text-gray-700 mb-6">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios (por ejemplo, servicios de hosting o herramientas de desarrollo).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Sus Derechos</h2>
            <p className="text-gray-700 mb-4">
              De acuerdo con la Ley 1581 de 2012 de Colombia, usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Acceder a su información personal</li>
              <li>Solicitar corrección de datos inexactos</li>
              <li>Solicitar eliminación de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contacto</h2>
            <p className="text-gray-700 mb-6">
              Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos, contáctenos en:
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
