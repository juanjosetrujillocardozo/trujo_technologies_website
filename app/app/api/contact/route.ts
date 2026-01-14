import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, formType = 'contact' } = body

    // 1. Validaciones básicas
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos obligatorios' },
        { status: 400 }
      )
    }

    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      message: message.trim(),
      formType,
      timestamp: new Date().toISOString()
    }

    console.log('Enviando a n8n:', submissionData)

    // 2. Llamada al Webhook de n8n
    // Usamos la URL que me pasaste directamente
    const n8nWebhookUrl = "https://n8n.trujotechnologies.com/webhook/contacto-web"
    
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    })

    if (!n8nResponse.ok) {
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
    console.error('Error en el envío del formulario:', error)
    return NextResponse.json(
      { error: 'Error al procesar el mensaje. Por favor, inténtalo más tarde.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
