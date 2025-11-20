import React, { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

const roles = [
  'Biomedical Engineer',
  'Scientific Philosopher',
  'Public Health AI Researcher',
  'Founder, Airavata Bioengineering',
  'Political Journalist',
  'Filmmaker & Musician',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const prefersReduced = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useEffect(() => {
    if (prefersReduced) return
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200)
    return () => clearInterval(id)
  }, [prefersReduced])

  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80 dark:from-slate-950/70 dark:via-slate-950/60 dark:to-slate-950/80 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 lg:col-span-6 py-24">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600/80 dark:text-slate-300/80">
            He/Him • George S. and Dolores Doré Eccles Scholar
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 dark:text-white">
            Krishnam Goel
          </h1>
          <div className="mt-3 text-lg sm:text-xl text-slate-700 dark:text-slate-200">
            Building combat-ready medtech, AI for public health, and stories that move people.
          </div>
          <div className="mt-6 h-7 overflow-hidden text-sky-700 dark:text-sky-300 font-medium">
            <div className="will-change-transform transition-transform duration-500" style={{ transform: `translateY(-${index * 1.75}rem)` }}>
              {roles.map((r) => (
                <div key={r} className="h-7 flex items-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-600/10 text-sky-800 dark:text-sky-200 border border-sky-600/20">
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow hover:shadow-lg transition-all duration-200">
              Collaborate on research
            </a>
            <a href="#projects" className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-300 text-slate-800 dark:text-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              Explore projects
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <span className="text-sm">Scroll</span>
            <span className="relative inline-flex w-1.5 h-6 rounded-full bg-slate-400/40 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-2 bg-slate-600/80 animate-[scrollDot_1.8s_ease-in-out_infinite]" />
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollDot { 0%{transform: translateY(0)} 50%{transform: translateY(16px)} 100%{transform: translateY(0)} }
      `}</style>
    </section>
  )
}
