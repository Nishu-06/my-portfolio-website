import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaCopy, FaCheck } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('kumarinishu407@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kumarinishu407@gmail.com',
      href: 'mailto:kumarinishu407@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9060745230',
      href: 'tel:+919060745230',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Jharkhand, India',
      href: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Nishu-06',
      href: 'https://github.com/Nishu-06',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Nishu Kumari',
      href: 'https://www.linkedin.com/in/nishu-kumari-5b4b61266',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: FaCode,
      label: 'LeetCode',
      value: 'Nishu_kumari6',
      href: 'https://leetcode.com/Nishu_kumari6',
      color: 'from-orange-500 to-yellow-500',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${method.color} text-white mb-4`}>
                <method.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{method.label}</h3>
              <p className="text-gray-600">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
            <p className="mb-6 text-lg">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kumarinishu407@gmail.com?subject=Portfolio%20Contact&body=Hello%20Nishu,"
                className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Send Email
              </a>
              <button
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer border border-white/30"
              >
                {emailCopied ? (
                  <>
                    <FaCheck className="w-5 h-5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="w-5 h-5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-4 text-white/80 text-sm">
              Email: <a href="mailto:kumarinishu407@gmail.com" className="underline hover:text-white">kumarinishu407@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center text-gray-600 py-8 border-t border-gray-200"
      >
        <p>© 2024 Nishu Kumari. All rights reserved.</p>
      </motion.div>
    </section>
  )
}

export default Contact

