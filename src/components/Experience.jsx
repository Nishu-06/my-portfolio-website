import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaLaptopCode, FaRobot } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Technical Content Engineer Intern',
      organization: 'HackerEarth',
      period: 'Jul 2026 - Present',
      achievements: [
        'Engineer technical questions end-to-end across programming, databases, DevOps, and full-stack domains, writing reference solutions, automated test suites, and validation logic that run on HackerEarth\u2019s assessment platform.',
        'Architected full-stack applications from scratch as candidate-ready codebases, building the project structure, boilerplate, and working frontend and backend reference implementation to mirror real-world systems.',
        'Designed relational schemas, queries, and validation logic across PostgreSQL, MS SQL Server, Oracle, and MySQL.',
        'Configured deployment environments and CI/CD pipelines for DevOps problems on real infrastructure workflows.',
        'Prompt-engineered AI-generated product prototypes across multiple domains for Vibe Code Arena, HackerEarth\u2019s in-house product, iterating on outputs for functionality and code quality.',
        'Debugged and root-caused client-reported platform issues across code correctness, test cases, and execution environments.',
      ],
      icon: FaLaptopCode,
    },
    {
      title: 'Software Developer Intern',
      organization: 'UV Netware',
      period: 'Feb 2026 - May 2026',
      achievements: [
        'Developed features for a B2B SaaS seat-layout management platform used to design seating for venues and events.',
        'Built a drag-and-drop visual layout editor in React.js, managing complex client-side state with Zustand.',
        'Integrated REST APIs between the React frontend and backend, handling data persistence, error states, and validation.',
        'Debugged and resolved production issues, delivering tested, production-ready features in an Agile sprint workflow.',
      ],
      icon: FaBriefcase,
    },
    {
      title: 'Freelance AI Specialist',
      organization: 'Outlier AI & Deccan AI Experts',
      period: 'Feb 2026 - Jul 2026',
      achievements: [
        'Reviewed LLM-generated code, APIs, and SQL in Python and Java for correctness and edge-case handling.',
        'Wrote reference solutions and test cases to benchmark AI-generated code against engineering standards.',
        'Performed prompt testing and root-cause error analysis to improve the quality of AI-generated code.',
      ],
      icon: FaRobot,
    },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Hands-on work across platform engineering, product, and AI.</h2>
        <div className="section-rule" />
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card p-7 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <exp.icon className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{exp.title}</h3>
                    <p className="mt-2 text-base font-medium text-slate-700">{exp.organization}</p>
                  </div>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-3">
                      <FaCode className="mt-1 h-4 w-4 flex-shrink-0 text-slate-900" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
