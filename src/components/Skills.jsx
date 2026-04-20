import { motion } from 'framer-motion'
import { FaBrain, FaCloud, FaCode, FaDatabase, FaLayerGroup, FaTools } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      icon: FaLayerGroup,
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Engineering',
      icon: FaTools,
      skills: ['REST APIs', 'Git', 'Postman', 'Microservices basics', 'CI/CD basics'],
    },
    {
      title: 'Core Concepts',
      icon: FaBrain,
      skills: ['OOP', 'System Design', 'SOLID Principles', 'Problem Solving', 'DSA'],
    },
    {
      title: 'AI and Cloud',
      icon: FaCloud,
      skills: ['LLMs', 'RAG', 'LangChain', 'Prompt Engineering', 'AWS basics', 'Oracle Cloud'],
    },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">A practical toolkit across product, backend, and AI workflows.</h2>
        <p className="section-copy">
          I focus on technologies that help me move from idea to working product, with enough depth to build reliable features and enough range to collaborate across the stack.
        </p>
        <div className="section-rule" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <category.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
