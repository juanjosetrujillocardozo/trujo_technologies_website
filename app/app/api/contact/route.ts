import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, formType = 'contact' } = body

    // 1. Validaciones
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos obligatorios' },
        { status: 400 }
      )
    }

    // 2. Mapeo de datos para n8n (según lo que espera tu workflow)
    const n8nPayload = {
      nombre: name.trim(),
      email: email.trim().toLowerCase(),
      telefono: phone?.trim() || 'No proporcionado',
      empresa: company?.trim() || 'No proporcionada',
      mensaje: message.trim(),
      formType,
      timestamp: new Date().toISOString()
    }

    console.log('🚀 Enviando lead a n8n:', n8nPayload)

    // 3. Llamada al Webhook de n8n
    const n8nWebhookUrl = "https://n8n.trujotechnologies.com/webhook/contacto-web"
    
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(n8nPayload),
    })

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text()
      console.error('❌ Error en n8n:', n8nResponse.status, errorText)
      throw new Error(`n8n responded with ${n8nResponse.status}`)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
        submissionId: `n8n_${Date.now()}`
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('❌ Error procesando contacto:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, inténtalo más tarde.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
