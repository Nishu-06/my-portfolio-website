import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiOpenai, SiGooglecloud } from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'FinSight – AI Powered Personal Finance Manager',
      description: 'Built a full-stack personal finance manager with secure authentication, expense tracking, and interactive visualizations.',
      features: [
        'Integrated OpenAI API for personalized financial insights',
        'Automated expense categorization using LLM prompts',
        'Responsive React frontend with TailwindCSS',
        'Interactive charts using Chart.js',
        'REST APIs in Express.js with MongoDB Atlas',
        'JWT-based authentication'
      ],
      tech: ['MERN Stack', 'OpenAI API', 'Chart.js', 'JWT'],
      icons: [SiReact, SiNodedotjs, SiMongodb, SiExpress, SiOpenai],
      github: 'https://github.com/Nishu-06/FinSight',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'TrackNPrep - Smart Interview Preparation Platform',
      description: 'Developed a full-stack interview preparation platform with role-based question banks, practice modules, and personalized dashboards.',
      features: [
        'LLM-powered question generation using refined prompts',
        'AI Mock Interview module with automated feedback',
        'Role-based questions and practice modules',
        'Dashboard for tracking preparation progress',
        'React + TailwindCSS UI',
        'Express.js backend with MongoDB Atlas'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'Google Cloud API', 'MongoDB'],
      icons: [SiReact, SiNodedotjs, SiExpress, SiGooglecloud, SiMongodb],
      github: 'https://github.com/Nishu-06/TrackNPrep',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Autonomous QA Agent - Test Case & Script Generation',
      description: 'Designed an autonomous QA agent that generates functional test cases and Selenium scripts using LLM-based reasoning.',
      features: [
        'FastAPI-based REST APIs to expose LLM-driven QA services',
        'RAG pipeline using ChromaDB and OpenAI embeddings',
        'Grounded functional test-case generation from documents',
        'Automatic Python Selenium script generation',
        'Semantic search for retrieving relevant context'
      ],
      tech: ['FastAPI', 'ChromaDB', 'OpenAI API', 'Selenium', 'RAG'],
      icons: [SiNodedotjs, SiOpenai],
      github: 'https://github.com/Nishu-06',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="w-5 h-5 text-gray-600" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-50 text-primary-600 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

