import { motion } from 'framer-motion'
import { FaArrowRight, FaCode, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Nishu-06', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nishu-kumari-5b4b61266', label: 'LinkedIn' },
    { icon: FaCode, href: 'https://leetcode.com/Nishu_kumari6', label: 'LeetCode' },
    { icon: FaEnvelope, href: 'mailto:kumarinishu407@gmail.com', label: 'Email' },
  ]

  const highlights = [
    { label: 'Current Focus', value: 'Full-stack engineering and applied AI' },
    { label: 'Experience', value: 'Software Developer Intern at UV Netware' },
    { label: 'Problem Solving', value: '350+ LeetCode problems solved' },
  ]

  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(244,239,231,0.94))] px-6 py-14 shadow-sm md:px-10 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,76,92,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(180,132,78,0.12),transparent_22%)]" />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
            Software Engineer Portfolio
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Building thoughtful digital products with full-stack engineering and AI.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            I&apos;m Nishu Kumari, a computer science student and software developer focused on clean frontend experiences, reliable backend systems, and practical AI features that solve real user problems.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore Projects
              <FaArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:kumarinishu407@gmail.com?subject=Portfolio%20Inquiry"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:bg-white"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="glass-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-950"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="glass-card max-w-sm p-6">
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-100">
              <img
                src="/profile.jpg"
                alt="Nishu Kumari"
                className="h-[24rem] w-full object-cover"
              />
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Based in India
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Nishu Kumari</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                B.Tech CSE student at VIT Andhra Pradesh, building web applications, backend services, and AI-assisted workflows with a strong focus on clarity and execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
