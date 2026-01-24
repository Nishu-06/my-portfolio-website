import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Vellore Institute of Technology, Andhra Pradesh',
      period: '2022-2026',
      score: 'CGPA: 8.71',
      icon: FaGraduationCap,
    },
    {
      degree: '12th CBSE – Science (Maths)',
      institution: 'Delhi Public School, BS City',
      period: '',
      score: 'Percentage: 92.4%',
      icon: FaGraduationCap,
    },
    {
      degree: '10th ICSE',
      institution: 'Mount Carmel School, Bokaro Thermal',
      period: '',
      score: 'Percentage: 91.8%',
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg text-white">
                  <edu.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    {edu.period && (
                      <span className="flex items-center">
                        <span className="font-medium">{edu.period}</span>
                      </span>
                    )}
                    <span className="flex items-center">
                      <span className="font-medium">{edu.score}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

