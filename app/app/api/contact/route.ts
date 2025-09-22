
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, company, message, formType = 'contact' } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos obligatorios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, ingresa un email válido' },
        { status: 400 }
      )
    }

    // Log the submission (temporarily, until database is properly configured)
    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      message: message.trim(),
      formType,
      timestamp: new Date().toISOString()
    }
    
    console.log('Contact form submission:', submissionData)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
        submissionId: `temp_${Date.now()}`
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error processing contact submission:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor. Por favor, inténtalo más tarde.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
