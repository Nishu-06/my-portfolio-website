import { motion } from 'framer-motion'
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      name: 'MERN Full-Stack Development',
      issuer: 'Ethnus',
      date: 'Aug 2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1Wj1f7ue38rSXnV1iNr9LNEHz7-_5hQYG/view?usp=sharing',
    },
    {
      name: 'Oracle Cloud Infrastructure - Foundations Associate',
      issuer: 'Oracle',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1oJFTudSGki0-HB6LsnlIQPUFyJCyH7V-/view?usp=sharing',
    },
    {
      name: 'Oracle Cloud Infrastructure Generative AI',
      issuer: 'Oracle',
      date: '2025',
      icon: FaAward,
      link: 'https://drive.google.com/file/d/1_6Lx4fgEpqK16f73FVMCg1QvwqQ1lePU/view?usp=sharing',
    },
    {
      name: 'AWS Cloud Foundations',
      issuer: 'AWS',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1NypCyhmIjJoaqVLXhvhskyiEMhcl1c1X/view?usp=sharing',
    },
    {
      name: 'MongoDB Certified Database Administrator',
      issuer: 'MongoDB',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1eLdjMDPT8lcFoQFpjnevTLio3GP5dQGl/view?usp=sharing',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg text-white flex-shrink-0">
                  <cert.icon className="w-6 h-6" />
                </div>
                <FaExternalLinkAlt className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{cert.name}</h3>
                <p className="text-primary-600 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

