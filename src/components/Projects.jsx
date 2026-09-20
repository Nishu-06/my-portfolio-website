import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const Projects = () => {
  const projects = [
    {
      title: 'TrackNPrep',
      tag: 'Smart Interview Preparation Platform',
      description:
        'A full-stack interview preparation platform that combines structured practice flows with LLM-powered question generation and adaptive feedback.',
      highlights: [
        'Built a full-stack interview preparation platform with REST APIs for question generation and answer evaluation.',
        'Engineered prompts and conversational workflows to integrate LLM APIs for question generation and adaptive feedback.',
        'Developed an AI mock-interview system that evaluates candidate responses and delivers personalized feedback.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'LLMs'],
      github: 'https://github.com/Nishu-06/TrackNPrep',
    },
    {
      title: 'AI Talent Scouting Agent',
      tag: 'Recruiter Copilot & Engagement Agent',
      description:
        'A recruiter copilot that turns job descriptions into ranked candidate shortlists with explainable summaries and AI-powered outreach.',
      highlights: [
        'Built a recruiter copilot that converts job descriptions into ranked candidate shortlists with explainable profile summaries.',
        'Designed backend APIs and prompt workflows for candidate matching and explainable profile summarization.',
        'Integrated OpenAI-powered outreach and built an analytics dashboard with candidate rankings and hiring insights.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'OpenAI API', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Nishu-06/ai-talent-scouting-agent',
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
      tech: ['React.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'OpenAI API'],
      github: 'https://github.com/Nishu-06/FinSight',
    },
    {
      title: 'Autonomous QA Agent',
      tag: 'Test Case and Script Generation',
      description:
        'An AI-assisted QA system that generates grounded test cases and Python Selenium scripts from source documents and product context.',
      highlights: [
        'Designed REST APIs to expose LLM-driven QA capabilities for test generation.',
        'Built a RAG pipeline using ChromaDB and embeddings for grounded generation.',
        'Generated functional test cases and Selenium automation scripts to support testing workflows.',
      ],
      tech: ['Python', 'RAG', 'ChromaDB', 'OpenAI APIs', 'Selenium'],
      github: 'https://github.com/Nishu-06/qa-agent-project',
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

      <div className="grid gap-6 md:grid-cols-2">
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
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:text-slate-950"
                aria-label={`Open ${project.title} GitHub repository`}
              >
                <FaArrowUpRightFromSquare className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600">{project.description}</p>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900" />
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
