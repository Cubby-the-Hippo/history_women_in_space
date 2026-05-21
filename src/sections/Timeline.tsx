import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { timelineEvents } from '../data/timeline'
import { useMuseum } from '../context/MuseumContext'

export function Timeline() {
  const [selected, setSelected] = useState(0)
  const { navigateTo, unlockArtifact } = useMuseum()
  const event = timelineEvents[selected]

  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Interactive Timeline
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white">
            Milestones in the Sky
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {timelineEvents.map((e, i) => (
            <button
              key={e.year}
              onClick={() => setSelected(i)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                selected === i
                  ? 'bg-gold-500/20 text-gold-400 border border-gold-500/50'
                  : 'text-slate-400 border border-slate-700 hover:border-gold-500/30'
              }`}
            >
              {e.year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={event.year}
            className="exhibit-card rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-navy-950/80 px-4 py-2 border border-gold-500/40">
                  <span className="font-display text-3xl text-gold-400">{event.year}</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 text-left flex flex-col justify-center">
                <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">
                  {event.title}
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">{event.description}</p>
                {event.artifactId && (
                  <button
                    onClick={() => {
                      unlockArtifact(event.artifactId!)
                      navigateTo('artifacts')
                    }}
                    className="btn-secondary self-start"
                  >
                    View Related Artifact →
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="hidden lg:block mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold-500/30 -translate-y-1/2" />
          <motion.div className="flex justify-between relative">
            {timelineEvents.map((e, i) => (
              <button
                key={e.year}
                onClick={() => setSelected(i)}
                className="flex flex-col items-center group"
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    selected === i
                      ? 'bg-gold-500 border-gold-500 scale-125'
                      : 'bg-navy-900 border-gold-500/50 group-hover:border-gold-500'
                  }`}
                />
                <span className="mt-2 text-xs text-slate-500 group-hover:text-gold-400">
                  {e.year}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
