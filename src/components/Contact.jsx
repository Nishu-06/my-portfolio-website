import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaCode, FaCopy, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kumarinishu407@gmail.com',
      href: 'mailto:kumarinishu407@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9060745230',
      href: 'tel:+919060745230',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Jharkhand, India',
      href: null,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Nishu-06',
      href: 'https://github.com/Nishu-06',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nishu-kumari-5b4b61266',
      href: 'https://www.linkedin.com/in/nishu-kumari-5b4b61266',
    },
    {
      icon: FaCode,
      label: 'LeetCode',
      value: 'leetcode.com/Nishu_kumari6',
      href: 'https://leetcode.com/Nishu_kumari6',
    },
  ]

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('kumarinishu407@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let&apos;s build something useful together.</h2>
        <p className="section-copy">
          I&apos;m open to internships, full-stack development opportunities, and teams working on strong product and engineering problems.
        </p>
        <div className="section-rule" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Reach Out
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-950">Available for the next meaningful opportunity.</h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            If you&apos;re hiring, collaborating on a project, or just want to discuss software engineering, I&apos;d be happy to connect. The quickest way to reach me is by email.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactMethods.map((method) => {
              const content = (
                <div className="rounded-[1.25rem] border border-slate-200 bg-white/85 p-5 transition-colors duration-200 hover:bg-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <method.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {method.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </div>
              )

              if (!method.href) {
                return <div key={method.label}>{content}</div>
              }

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass-card flex flex-col justify-between p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Quick Actions
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">Simple ways to start a conversation.</h3>
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="mailto:kumarinishu407@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Nishu,"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Send an Email
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-white"
            >
              {emailCopied ? (
                <>
                  <FaCheck className="h-4 w-4" />
                  Copied Email
                </>
              ) : (
                <>
                  <FaCopy className="h-4 w-4" />
                  Copy Email Address
                </>
              )}
            </button>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500">
            <p>Nishu Kumari</p>
            <p>Full-stack Developer and AI-focused Software Engineer</p>
            <p className="mt-3">© 2026 All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
