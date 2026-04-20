import { motion } from 'framer-motion'
import { FaAward, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      name: 'MERN Full-Stack Development',
      issuer: 'Ethnus',
      date: 'Aug 2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1Wj1f7ue38rSXnV1iNr9LNEHz7-_5hQYG/view?usp=sharing',
    },
    {
      name: 'Oracle Cloud Infrastructure Foundations Associate',
      issuer: 'Oracle',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1oJFTudSGki0-HB6LsnlIQPUFyJCyH7V-/view?usp=sharing',
    },
    {
      name: 'Oracle Cloud Infrastructure Generative AI',
      issuer: 'Oracle',
      date: '2025',
      icon: FaAward,
      link: 'https://drive.google.com/file/d/1_6Lx4fgEpqK16f73FVMCg1QvwqQ1lePU/view?usp=sharing',
    },
    {
      name: 'AWS Cloud Foundations',
      issuer: 'AWS',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1NypCyhmIjJoaqVLXhvhskyiEMhcl1c1X/view?usp=sharing',
    },
    {
      name: 'MongoDB Certified Database Administrator',
      issuer: 'MongoDB',
      date: '2024',
      icon: FaCertificate,
      link: 'https://drive.google.com/file/d/1eLdjMDPT8lcFoQFpjnevTLio3GP5dQGl/view?usp=sharing',
    },
  ]

  return (
    <section id="certifications" className="section-shell">
      <div className="section-heading">
        <span className="section-kicker">Certifications</span>
        <h2 className="section-title">Additional proof of discipline and continued learning.</h2>
        <div className="section-rule" />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="glass-card flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <cert.icon className="h-5 w-5" />
              </div>
              <FaExternalLinkAlt className="mt-1 h-4 w-4 text-slate-400" />
            </div>

            <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-950">{cert.name}</h3>
            <p className="mt-3 text-sm font-medium text-slate-700">{cert.issuer}</p>
            <p className="mt-1 text-sm text-slate-500">{cert.date}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Certifications
