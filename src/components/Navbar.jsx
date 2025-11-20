import React from 'react'
import { Menu, Mail, Linkedin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Research & Projects' },
  { href: '#writing', label: 'Writing & Policy' },
  { href: '#awards', label: 'Awards & Media' },
  { href: '#creative', label: 'Creative' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-white">
            Krishnam Goel
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:krishnam@example.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300/60 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300/60 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
