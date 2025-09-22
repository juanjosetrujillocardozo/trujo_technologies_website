
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  GraduationCap,
  Globe,
  Award,
  BookOpen,
  Code2,
  Users,
  Linkedin,
  ExternalLink
} from 'lucide-react'

const FounderProfile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: Award,
      title: 'Meta Certified Digital Marketing Associate',
      description: 'Certificación oficial en marketing digital de Meta',
      year: '2024'
    },
    {
      icon: BookOpen,
      title: 'Oracle Next Education - Alura Latam',
      description: 'Programa especializado en tecnologías Oracle',
      year: '2023'
    },
    {
      icon: GraduationCap,
      title: 'Ingeniería de Sistemas',
      description: 'Formación profesional en ingeniería de sistemas',
      year: 'Graduado'
    }
  ]

  const skills = [
    { name: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', tech: ['Node.js', 'Python', 'Java', 'APIs REST'] },
    { name: 'Cloud', tech: ['AWS', 'Azure', 'Docker', 'CI/CD'] },
    { name: 'Databases', tech: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
    { name: 'CMS', tech: ['WordPress', 'Drupal', 'Headless CMS'] },
    { name: 'Tools', tech: ['Git/GitHub', 'Linux', 'DevOps', 'Monitoring'] }
  ]

  const teachingPlatforms = [
    'Clases particulares de programación',
    'Bases de datos y backend',
    'Canal de YouTube tecnológico',
    'Mentoría en desarrollo full-stack'
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conoce al 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Fundador</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Juan José Trujillo Cardozo combina experiencia técnica, pasión por la enseñanza 
            y visión empresarial para crear soluciones que realmente impactan los negocios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Profile Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white">JT</span>
                </div>
                
                {/* Name and Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Juan José Trujillo Cardozo
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  Fundador y Desarrollador Full-Stack
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-blue-50 rounded-xl p-3">
                    <div className="flex items-center justify-center mb-2">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Ing. Sistemas</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-xl p-3">
                    <div className="flex items-center justify-center mb-2">
                      <Globe className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Inglés C2</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Ingeniero de Sistemas con <strong>experiencia especializada en desarrollo full-stack</strong>, 
                  cloud computing y gestión de proyectos tecnológicos. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Apasionado por <strong>enseñar y crear soluciones simples</strong> que generen valor real 
                  para los negocios. Combina conocimiento técnico profundo con habilidades de comunicación 
                  excepcionales (Inglés C2).
                </p>
              </div>

              {/* Links */}
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="https://co.linkedin.com/in/juanjosetrujillocardozo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://about.me/juanjosetrujillocardozo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Perfil
                </a>
              </div>
            </div>

            {/* Teaching & Mentoring */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100"
            >
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 text-green-600 mr-2" />
                Docencia y Mentoría
              </h4>
              <div className="space-y-2">
                {teachingPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {platform}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Experiencia enseñando programación, bases de datos y desarrollo backend, 
                ayudando a formar nuevos talentos tecnológicos.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Certificaciones y Logros
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-gray-900 text-sm">{achievement.title}</h5>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Stack Tecnológico
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Code2 className="h-4 w-4 text-blue-600 mr-2" />
                      {skillCategory.name}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderProfile
