import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const About = () => {
  const quickFacts = [
    { label: 'Education', value: 'B.Tech in Computer Science Engineering, VIT Andhra Pradesh' },
    { label: 'Core Stack', value: 'React, Node.js, Express.js, FastAPI, MongoDB' },
    { label: 'Interests', value: 'Applied AI, backend engineering, problem solving' },
  ]

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Jharkhand, India', href: null },
    { icon: FaEnvelope, label: 'Email', value: 'kumarinishu407@gmail.com', href: 'mailto:kumarinishu407@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 9060745230', href: 'tel:+919060745230' },
  ]

  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">About</span>
        <h2 className="section-title">A developer focused on execution, clarity, and growth.</h2>
        <p className="section-copy">
          I enjoy turning ideas into polished software experiences, combining solid engineering fundamentals with a practical product mindset.
        </p>
        <div className="section-rule" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="space-y-5 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              I&apos;m currently pursuing my B.Tech in Computer Science Engineering and building projects across full-stack development, backend services, and AI-assisted applications. My goal is to create software that feels dependable, intuitive, and ready for real users.
            </p>
            <p>
              I work with JavaScript, Java, Python, SQL, React, Express.js, FastAPI, and MongoDB, and I&apos;m especially interested in systems where product thinking and technical execution need to work closely together.
            </p>
            <p>
              Beyond development, I spend time strengthening problem-solving through data structures and algorithms, and I&apos;m actively exploring modern AI workflows such as prompt design, RAG pipelines, and LLM-powered features.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-[1.25rem] border border-slate-200 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {fact.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-800">{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Contact Snapshot
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">Professional and easy to reach.</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            I&apos;m open to internships, software engineering roles, and opportunities where I can contribute across frontend, backend, and AI-enabled product work.
          </p>

          <div className="mt-8 space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-[1.25rem] border border-slate-200 bg-white/80 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="mt-2 inline-block text-sm font-medium text-slate-800 hover:text-slate-950">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-medium text-slate-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
