import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useMuseum } from '../context/MuseumContext'
import type { SectionId } from '../types'
import { artifacts } from '../data/artifacts'

const navItems: { id: SectionId; label: string }[] = [
  { id: 'landing', label: 'Home' },
  { id: 'intro', label: 'Introduction' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'exhibit-hall', label: 'Exhibit Hall' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'artifacts', label: 'Artifacts' },
  { id: 'modern', label: 'Today' },
  { id: 'sources', label: 'Sources' },
  { id: 'reflection', label: 'Reflection' },
]

export function Navigation() {
  const { currentSection, navigateTo, unlockedArtifacts, soundEnabled, toggleSound } =
    useMuseum()
  const [menuOpen, setMenuOpen] = useState(false)

  if (currentSection === 'landing') return null

  const handleNav = (id: SectionId) => {
    navigateTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <button
            onClick={() => handleNav('landing')}
            className="font-display text-lg text-gold-400 hover:text-gold-300 transition-colors"
          >
            Breaking the Sky
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider transition-colors rounded-sm ${
                  currentSection === item.id
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-slate-400 hover:text-gold-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              className="text-slate-400 hover:text-gold-400 text-sm p-2"
              title={soundEnabled ? 'Mute ambience' : 'Enable ambience'}
              aria-label={soundEnabled ? 'Mute ambience' : 'Enable ambience'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
            <span className="hidden sm:inline text-xs text-gold-500/80">
              {unlockedArtifacts.size}/{artifacts.length} artifacts
            </span>
            <button
              className="lg:hidden text-gold-400 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="relative bg-navy-900 border-b border-gold-500/20 p-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-wider ${
                    currentSection === item.id ? 'text-gold-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
