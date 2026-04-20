import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const Projects = () => {
  const projects = [
    {
      title: 'TrackNPrep',
      tag: 'Interview Preparation Platform',
      description:
        'A full-stack platform for structured interview preparation with role-based practice, dashboard insights, and AI-assisted mock interview support.',
      highlights: [
        'Built a React frontend with an Express.js backend using REST-based service design.',
        'Created role-specific question banks, practice flows, and dashboard-driven progress tracking.',
        'Integrated LLM-powered question generation and AI mock interview feedback.',
      ],
      tech: ['React', 'Express.js', 'MongoDB', 'LLM prompts'],
      github: 'https://github.com/Nishu-06/TrackNPrep',
    },
    {
      title: 'Autonomous QA Agent',
      tag: 'Test Case and Script Generation',
      description:
        'An AI-assisted QA system that generates grounded test cases and Python Selenium scripts from source documents and product context.',
      highlights: [
        'Designed REST APIs in FastAPI to expose LLM-driven QA capabilities.',
        'Built a RAG pipeline using ChromaDB and embeddings for grounded generation.',
        'Generated functional test cases and Selenium automation scripts to support testing workflows.',
      ],
      tech: ['FastAPI', 'ChromaDB', 'OpenAI embeddings', 'Selenium'],
      github: 'https://github.com/Nishu-06',
    },
    {
      title: 'FinSight',
      tag: 'AI Personal Finance Manager',
      description:
        'A secure full-stack finance application that combines expense tracking, visualization, and AI-powered financial insights.',
      highlights: [
        'Implemented authentication, expense tracking, and interactive data visualizations.',
        'Designed prompt-driven expense categorization and personalized AI financial insights.',
        'Developed Express.js APIs with MongoDB Atlas and JWT-based authentication.',
      ],
      tech: ['React', 'Express.js', 'MongoDB Atlas', 'JWT', 'OpenAI API'],
      github: 'https://github.com/Nishu-06/FinSight',
    },
  ]

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Selected work that reflects how I build.</h2>
        <p className="section-copy">
          These projects show the kind of problems I enjoy: structured product flows, backend logic, and AI features that add clear user value.
        </p>
        <div className="section-rule" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card flex h-full flex-col p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {project.tag}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{project.title}</h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:text-slate-950"
                aria-label={`Open ${project.title} GitHub repository`}
              >
                <FaArrowUpRightFromSquare className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">{project.description}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-slate-900" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-950"
            >
              <FaGithub className="h-4 w-4" />
              View repository
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
