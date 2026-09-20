import { motion } from 'framer-motion'
import { FaCode, FaTrophy } from 'react-icons/fa'

const Achievements = () => {
  const stats = [
    { value: '400+', label: 'DSA problems solved on LeetCode' },
    { value: '1525', label: 'LeetCode contest rating' },
    { value: 'Top 10', label: 'Finalist, Aerospanza National Hackathon' },
  ]

  const highlights = [
    {
      icon: FaCode,
      title: 'Competitive Programming',
      description:
        'Solved 400+ DSA problems on LeetCode with a 1525 contest rating, building consistency in algorithms and problem solving.',
    },
    {
      icon: FaTrophy,
      title: 'Hackathon',
      description:
        'Secured a Top 10 Finalist position at the Aerospanza National Hackathon, building and presenting a working product under time constraints.',
    },
  ]

  return (
    <section id="achievements" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Achievements</span>
        <h2 className="section-title">Consistency in problem solving and building under pressure.</h2>
        <div className="section-rule" />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="glass-card p-6 text-center"
          >
            <p className="text-4xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
