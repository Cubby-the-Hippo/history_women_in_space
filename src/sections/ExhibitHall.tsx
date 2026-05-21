import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { ExhibitCard } from '../components/ExhibitCard'
import { exhibitFigures } from '../data/exhibits'
import { useMuseum } from '../context/MuseumContext'

export function ExhibitHall() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const { navigateTo } = useMuseum()
  const figure = exhibitFigures.find((f) => f.id === expanded)

  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Main Exhibit Hall
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Pioneers of Flight and Space
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Click any exhibit panel to explore biographies, achievements, and artifacts
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exhibitFigures.map((f, i) => (
            <div key={f.id} onClick={() => setExpanded(f.id)}>
              <ExhibitCard figure={f} index={i} />
            </div>
          ))}
        </div>

        {figure && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setExpanded(null)}
          >
            <motion.div
              className="exhibit-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 sm:p-8 text-left"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <button
                onClick={() => setExpanded(null)}
                className="float-right text-slate-400 hover:text-gold-400 text-2xl"
              >
                ×
              </button>
              <img
                src={figure.image}
                alt={figure.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h2 className="font-display text-3xl text-white">{figure.name}</h2>
              <p className="text-gold-400 mb-4">{figure.years}</p>
              <p className="text-slate-300 mb-6">{figure.biography}</p>

              <h3 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                Achievements
              </h3>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-1">
                {figure.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>

              <h3 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                Historical Significance
              </h3>
              <p className="text-slate-300 mb-4">{figure.significance}</p>

              <h3 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                Obstacles Faced
              </h3>
              <p className="text-slate-300 mb-4">{figure.obstacles}</p>

              <h3 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                STEM Contribution
              </h3>
              <p className="text-slate-300 mb-6">{figure.stemContribution}</p>

              <button
                onClick={() => {
                  setExpanded(null)
                  navigateTo('artifacts')
                }}
                className="btn-primary"
              >
                View Artifact
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}
