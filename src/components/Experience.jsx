import { motion } from 'framer-motion'
import { FaBriefcase, FaTrophy, FaUsers } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Team Member',
      organization: 'NextGen Cloud Club 2024',
      period: '2024',
      description: 'Contributed as Web development team member. Student coordinator in Run Raise Repeat, a nationwide event with NGC club.',
      icon: FaBriefcase,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Hackathon Finalist',
      organization: 'Aerospanza (Hackathon) 2024',
      period: '2024',
      description: 'Collaborated in a team of 4 in Aerospanza aviation challenge. Reached final 4th round, top 10 teams nationwide.',
      icon: FaTrophy,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-600"
            >
              <div className="flex items-start space-x-6">
                <div className={`p-4 bg-gradient-to-r ${exp.color} rounded-lg text-white`}>
                  <exp.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary-600 font-semibold mb-2">{exp.organization}</p>
                  <p className="text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

