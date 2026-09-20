import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaDatabase, FaLayerGroup, FaRobot, FaServer, FaTools } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Java', 'JavaScript', 'Python', 'SQL'],
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JWT Authentication', 'Microservices'],
    },
    {
      title: 'Frontend',
      icon: FaLayerGroup,
      skills: ['React.js', 'Next.js', 'Zustand', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['PostgreSQL', 'MySQL', 'MS SQL Server', 'Oracle', 'MongoDB', 'Redis'],
    },
    {
      title: 'DevOps & Tools',
      icon: FaTools,
      skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Docker', 'AWS', 'Linux', 'Postman', 'Jira', 'Vercel', 'Render'],
    },
    {
      title: 'AI & Generative AI',
      icon: FaRobot,
      skills: ['LLMs', 'RAG', 'Agentic AI', 'Prompt Engineering', 'OpenAI APIs'],
    },
    {
      title: 'Core Computer Science',
      icon: FaBrain,
      skills: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
    },
  ]

  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">A practical toolkit across backend, frontend, and AI workflows.</h2>
        <p className="section-copy">
          I focus on technologies that help me move from idea to working product, with enough depth to build reliable services and enough range to collaborate across the stack.
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
