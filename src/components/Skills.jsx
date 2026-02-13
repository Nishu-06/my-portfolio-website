import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaTools, FaBrain, FaChartLine, FaCloud } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Frontend & Backend',
      icon: FaTools,
      skills: [
        'React', 'Next.js', 'Express.js', 'FastAPI', 'Node.js',
        'Tailwind CSS', 'Bootstrap'
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Concepts',
      icon: FaBrain,
      skills: [
        'OOPs', 'Operating Systems', 'System Design', 'SOLID Principles',
        'Design Patterns', 'CI/CD pipelines'
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Problem Solving',
      icon: FaChartLine,
      skills: [
        '350+ LeetCode problems solved',
        'Top 37% in LeetCode Contests',
        'Data Structures & Algorithms'
      ],
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'AI & Cloud',
      icon: FaCloud,
      skills: [
        'Generative AI', 'LangChain', 'RAG Pipelines',
        'Prompt Engineering', 'LLM-based Systems',
        'Embeddings & Semantic Search',
        'AWS (Basics)', 'Oracle Cloud Infrastructure'
      ],
      color: 'from-cyan-500 to-blue-600',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Communication', 'Analytical Thinking', 'Aptitude', 'Team Collaboration', 
              'Logical Reasoning', 'Agile'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

