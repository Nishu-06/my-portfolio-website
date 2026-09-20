import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const About = () => {
  const quickFacts = [
    { label: 'Education', value: 'B.Tech in Computer Science and Engineering, VIT Andhra Pradesh' },
    { label: 'Core Stack', value: 'Java, Node.js, Express.js, Spring Boot, React.js, PostgreSQL, MongoDB' },
    { label: 'Interests', value: 'Backend engineering, generative AI, problem solving' },
  ]

  const contactInfo = [
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Bangalore, India', href: null },
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
              I&apos;m a software engineer working at the intersection of backend systems, full-stack development, and applied AI. I currently engineer technical assessment content end-to-end, writing reference solutions, automated test suites, and candidate-ready full-stack codebases across programming, databases, DevOps, and full-stack domains.
            </p>
            <p>
              I work with Java, JavaScript, Python, and SQL, building services with Node.js, Express.js, and Spring Boot, interfaces with React.js and Next.js, and data layers across PostgreSQL, MySQL, MS SQL Server, Oracle, MongoDB, and Redis.
            </p>
            <p>
              Beyond development, I keep my problem-solving sharp through data structures and algorithms, and I work hands-on with modern AI workflows including prompt engineering, RAG pipelines, agentic AI, and OpenAI APIs.
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
            I&apos;m open to software engineering roles and opportunities where I can contribute across backend, full-stack, and AI-enabled product work.
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
