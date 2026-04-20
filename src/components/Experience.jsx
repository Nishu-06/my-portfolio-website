import { motion } from 'framer-motion'
import { FaBriefcase, FaCode, FaRobot } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      organization: 'UV Netware',
      period: 'Feb 2026 - Present',
      achievements: [
        'Developed an interactive seat layout editor for a SaaS ticket-booking platform, enabling dynamic venue configuration.',
        'Implemented automated seat management features including numbering, row labeling, and pricing categories.',
        'Designed row-based and arc-based seat generation tools to create diverse seating layouts efficiently.',
        'Integrated Zustand for scalable state management across seat data, selections, and editor interactions.',
        'Collaborated in an agile team using Git while contributing modular, reusable UI components.',
      ],
      icon: FaBriefcase,
    },
    {
      title: 'Freelance AI Data Specialist',
      organization: 'Deccan AI Experts',
      period: 'Feb 2026 - Present',
      achievements: [
        'Evaluated and validated AI-generated tool and API implementations for logic, parameters, and output behavior.',
        'Reviewed Python and SQL backend functions to identify syntax errors, logical issues, and edge cases.',
        'Conducted rubric-based assessments to improve the quality and accuracy of LLM-generated responses.',
        'Provided structured rationales and corrections to strengthen model performance and system reliability.',
      ],
      icon: FaRobot,
    },
  ]

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Hands-on work across product development and AI evaluation.</h2>
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
