
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare,
  CheckCircle,
  Loader2
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const ContactForm = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name?.trim()) {
      toast({
        title: "Error de validación",
        description: "El nombre es obligatorio",
        variant: "destructive",
      })
      return false
    }

    if (!formData.email?.trim()) {
      toast({
        title: "Error de validación", 
        description: "El email es obligatorio",
        variant: "destructive",
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error de validación",
        description: "Por favor, ingresa un email válido",
        variant: "destructive",
      })
      return false
    }

    if (!formData.message?.trim()) {
      toast({
        title: "Error de validación",
        description: "El mensaje es obligatorio", 
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: data.message || "Te contactaremos pronto.",
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error al enviar",
        description: error instanceof Error ? error.message : "Por favor, inténtalo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white lg:border-r border-gray-200">
      <div className="h-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envía tu Consulta
            </h2>
            <p className="text-lg text-gray-600">
              Completa el formulario y te responderemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-900 flex items-center">
                <User className="h-4 w-4 mr-2 text-blue-600" />
                Nombre completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                className="w-full pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-900 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-600" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                className="w-full pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
                disabled={isSubmitting}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-900 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-600" />
                Teléfono (opcional)
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+57 300 123 4567"
                className="w-full pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-900 flex items-center">
                <Building className="h-4 w-4 mr-2 text-purple-600" />
                Empresa (opcional)
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de tu empresa"
                className="w-full pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                disabled={isSubmitting}
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-900 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-orange-600" />
                Mensaje *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre tu proyecto: qué necesitas, objetivos, timeline, presupuesto estimado, etc."
                rows={5}
                className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Protección de datos:</strong> Tus datos se almacenan de forma segura 
                    conforme a la Ley 1581 de 2012. Solo los utilizamos para responder tu consulta 
                    y proporcionarte nuestros servicios.
                  </p>
                </div>
              </div>
            </div>
          </motion.form>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center text-sm text-gray-600"
          >
            <p>
              ¿Prefieres llamar? Pronto habilitaremos nuestro número de WhatsApp Business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
