import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Award, Film, Music2, Layers3, FlaskConical } from 'lucide-react'

export function About() {
  const shouldReduce = useReducedMotion()
  const item = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  const milestones = [
    { title: 'IBRN (EXTRACCT)', desc: 'Surgical telecommunications in Gaza' },
    { title: 'Eccles Scholar', desc: 'George S. and Dolores Doré Eccles Scholar' },
    { title: 'Stanford Research', desc: 'AI for water infrastructure & public health' },
    { title: 'Founder', desc: 'Airavata Bioengineering & GhostManager' },
  ]
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">About</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              Undergraduate in Biomedical Engineering & Philosophy of Science focused on combat clinical care and public health infrastructure. Work spans IBRN’s EXTRACCT project (surgical telecommunications in Gaza), battlefield medtech evaluated by the US Air Force Research Lab, political journalism for the Utah Foundation and Utah House, and AI research at Stanford on water infrastructure and national public health data extrapolation.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative grid gap-4">
              {milestones.map((m, i) => (
                <motion.div key={m.title} variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                  <div className="text-sm text-slate-500 dark:text-slate-400">{m.title}</div>
                  <div className="font-medium text-slate-900 dark:text-slate-100">{m.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { title: 'Stanford University', role: 'Public Health Infrastructure AI Researcher' },
    { title: 'Huntsman Cancer Institute', role: 'Cancer Researcher' },
    { title: 'IBRN (EXTRACCT)', role: 'Scientific Researcher' },
    { title: 'Airavata Bioengineering', role: 'CEO / Founder' },
    { title: 'GhostManager', role: 'Co-Founder (healthcare compliance AI)' },
    { title: 'Freyya', role: 'Head of Wireless Charging for IMDs (Contracted BME)' },
    { title: 'Utah Foundation & Utah House', role: 'Political / Legislative Journalist' },
  ]
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Experience</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1, duration: 0.4 }} className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="text-slate-500 dark:text-slate-400 text-sm">{it.title}</div>
              <div className="mt-1 font-medium text-slate-900 dark:text-slate-100">{it.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const tags = ['All','MedTech','AI & Data','Water & Environment']
  const [filter, setFilter] = React.useState('All')
  const projects = [
    { title: 'Wireless Charging & Data Retrieval of IMDs', tags: ['MedTech'], desc: 'Novel power and telemetry pipeline for implanted medical devices.' },
    { title: 'LLMs for Water Infrastructure Extrapolation', tags: ['AI & Data','Water & Environment'], desc: 'Large language models to infer quality and infrastructure gaps from sparse data.' },
    { title: 'Cyanobacterial Genomics & Toxic Algal Blooms', tags: ['Water & Environment'], desc: 'Genetic signatures linked to bloom dynamics and toxicity risks.' },
  ]
  const filtered = projects.filter(p => filter==='All' || p.tags.includes(filter))
  const [active, setActive] = React.useState(null)
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Research & Projects</h2>
          <div className="flex items-center gap-2">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${filter===t? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white':'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.button key={p.title} onClick={() => setActive(p)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-left p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900 dark:text-slate-100">{p.title}</div>
                <Layers3 className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
              </div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-sky-600/10 text-sky-700 dark:text-sky-300 border border-sky-600/20">{t}</span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-6" onClick={() => setActive(null)}>
            <motion.div onClick={(e)=>e.stopPropagation()} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} className="max-w-2xl w-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{active.title}</div>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{active.desc} Detailed write-up coming soon.</p>
                </div>
                <button onClick={() => setActive(null)} className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export function Writing() {
  const items = [
    { title: 'Great Salt Lake 2024 Report', tag: 'Water Policy' },
    { title: 'Zion Cyanobacteria Article', tag: 'Environment' },
    { title: 'Utah Population & Environment Commentary', tag: 'Urban Growth' },
  ]
  return (
    <section id="writing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Writing & Policy</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href="#" className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-200">
              <div className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">{it.tag}</div>
              <div className="mt-3 font-medium text-slate-900 dark:text-slate-100 group-hover:-translate-y-0.5 transition-transform">{it.title}</div>
              <div className="mt-1 text-sm text-slate-600/90 dark:text-slate-300/90 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">A brief overview and key findings. Full piece coming soon.</div>
              <div className="mt-3 inline-flex items-center gap-1 text-slate-600 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white transition-colors">
                <span className="text-sm">Read more</span>
                <ExternalLink className="w-4 h-4 translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Awards() {
  const items = [
    { title: 'George S. and Dolores Doré Eccles Scholar' },
    { title: 'Science Sterling Scholar' },
    { title: 'Regeneron Biomedical Award' },
    { title: 'Stockholm Junior Water Prize (National Runner-up)' },
  ]
  return (
    <section id="awards" className="py-24 bg-slate-50 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Awards & Media</h2>
        <div className="mt-8 overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-4 snap-x snap-mandatory min-w-max">
            {items.map((it, i) => (
              <motion.div key={it.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="snap-start shrink-0 w-80 p-6 rounded-2xl border border-amber-300/40 bg-gradient-to-b from-white to-amber-50 dark:from-slate-900 dark:to-slate-900/40 relative">
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-amber-400 blur-[2px] animate-pulse" />
                <div className="flex items-center gap-3 text-amber-800 dark:text-amber-300"><Award className="w-5 h-5"/> <span className="font-semibold">{it.title}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Creative() {
  return (
    <section id="creative" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Creative — Music & Film</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2"><Film className="w-5 h-5 text-slate-500"/><span className="font-medium">Film</span></div>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[1,2].map(i => (
                <a key={i} href="#" className="group relative aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur text-slate-900 grid place-items-center shadow group-hover:scale-105 group-hover:shadow-lg transition-all">▶</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2"><Music2 className="w-5 h-5 text-slate-500"/><span className="font-medium">Music</span></div>
            <div className="mt-4 space-y-3">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <div>
                    <div className="font-medium">Track {i}</div>
                    <div className="text-sm text-slate-500">Indian classical fusion</div>
                  </div>
                  <button className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">Play</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Work with me</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Collaborate on research, discuss medtech or public health AI, or commission a film or piece.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="px-4 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">Collaborate on a research project</a>
              <a href="#" className="px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-700">Discuss medtech / AI for public health</a>
              <a href="#" className="px-4 py-2.5 rounded-full border border-slate-300 dark:border-slate-700">Screen a film / commission a piece</a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={(e)=>e.preventDefault()} className="grid gap-3 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <input className="px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700" placeholder="Name"/>
              <input className="px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700" placeholder="Email"/>
              <textarea rows={5} className="px-3 py-2 rounded-md bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700" placeholder="How can I help?"/>
              <button className="mt-2 px-4 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:shadow-lg transition">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
