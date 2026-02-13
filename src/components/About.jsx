import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m an aspiring <span className="font-semibold text-primary-600">Software Engineer</span>{' '}
              currently pursuing B.Tech in Computer Science Engineering at Vellore Institute of Technology,
              Andhra Pradesh with a CGPA of 8.71.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in building modern web applications using the <span className="font-semibold">MERN stack</span>{' '}
              and enjoy designing both frontend experiences and backend services. With 350+ LeetCode problems solved and
              consistent contest participation, I enjoy tackling algorithmic challenges and writing efficient, maintainable code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My experience spans React and Next.js on the frontend and Node.js, Express.js, and FastAPI on the backend, 
              along with databases like MongoDB, MySQL, and PostgreSQL. I&apos;m actively exploring Generative AI (LangChain, RAG, LLM-based systems)
              and cloud platforms including AWS and Oracle Cloud.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-50 to-purple-50 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600 text-white rounded-lg">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-600">Location</p>
                  <p className="font-semibold text-gray-800">Jharkhand, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600 text-white rounded-lg">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <a href="mailto:kumarinishu407@gmail.com" className="font-semibold text-primary-600 hover:underline">
                    kumarinishu407@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-600 text-white rounded-lg">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <a href="tel:+919060745230" className="font-semibold text-primary-600 hover:underline">
                    +91 9060745230
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

