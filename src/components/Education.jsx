import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Vellore Institute of Technology, Andhra Pradesh',
      period: '2022 - 2026',
      score: 'CGPA: 8.71',
    },
    {
      degree: '12th CBSE - Science (Maths)',
      institution: 'Delhi Public School, BS City',
      period: 'School Education',
      score: 'Percentage: 92.4%',
    },
    {
      degree: '10th ICSE',
      institution: 'Mount Carmel School, Bokaro Thermal',
      period: 'School Education',
      score: 'Percentage: 91.8%',
    },
  ]

  return (
    <section id="education" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Education</span>
        <h2 className="section-title">Academic foundation backed by strong consistency.</h2>
        <div className="section-rule" />
      </div>

      <div className="space-y-5">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <FaGraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 md:text-2xl">{item.degree}</h3>
                  <p className="mt-2 text-base font-medium text-slate-700">{item.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2">
                  {item.period}
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2">
                  {item.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education
