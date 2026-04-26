import { Link } from 'react-router-dom'
import { motion, useAnimate, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BlurText } from '../components/BlurText'

const PROJECTS = [
  {
    name: 'Meridian',
    tag: 'Fintech · Website',
    img: 'https://placehold.co/1200x675/1a1a1a/333333',
    wide: true,
  },
  {
    name: 'Vault',
    tag: 'SaaS · Rebrand',
    img: 'https://placehold.co/600x600/1a1a1a/333333',
    wide: false,
  },
  {
    name: 'Arkade',
    tag: 'Gaming · Landing page',
    img: 'https://placehold.co/600x600/1a1a1a/333333',
    wide: false,
  },
  {
    name: 'Solaris',
    tag: 'Health · Website',
    img: 'https://placehold.co/1200x675/1a1a1a/333333',
    wide: true,
  },
  {
    name: 'Fern',
    tag: 'E-commerce · Website',
    img: 'https://placehold.co/1200x675/1a1a1a/333333',
    wide: true,
  },
  {
    name: 'Novo',
    tag: 'Fintech · Landing page',
    img: 'https://placehold.co/600x600/1a1a1a/333333',
    wide: false,
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
        project.wide ? 'lg:col-span-2' : 'lg:col-span-1'
      } ${project.wide ? 'aspect-video' : 'aspect-square'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-[11px] font-body font-medium text-white/50 uppercase tracking-[0.12em] mb-2">
          {project.tag}
        </p>
        <p className="font-heading italic text-[1.35rem] text-white leading-tight mb-2">
          {project.name}
        </p>
        <span className="inline-flex items-center gap-1.5 text-[12px] font-body font-light text-white/50">
          View project
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.p
              className="text-[11px] font-body font-medium text-white/25 uppercase tracking-[0.2em] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Selected work
            </motion.p>
            <h1 className="font-heading italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
              <BlurText text="Projects we're" delay={100} />
              <br />
              <BlurText text="proud of" delay={100} className="text-white/40" />
            </h1>
          </div>
          <motion.p
            className="font-body font-light text-white/25 text-[13px] pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {PROJECTS.length} projects
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <motion.div
        className="py-12 text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-heading italic text-[clamp(1.1rem,2vw,1.4rem)] text-white/35">
          Have a project in mind?{' '}
          <Link
            to="/contact"
            className="text-white/60 underline underline-offset-4 decoration-white/20 hover:text-white/90 hover:decoration-white/50 transition-all duration-200"
          >
            Let&apos;s talk
          </Link>
        </p>
      </motion.div>

      <Footer />
    </div>
  )
}
