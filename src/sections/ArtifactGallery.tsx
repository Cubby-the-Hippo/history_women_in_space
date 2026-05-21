import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { ArtifactModal } from '../components/ArtifactModal'
import { artifacts } from '../data/artifacts'
import { useMuseum } from '../context/MuseumContext'
import type { Artifact } from '../types'

export function ArtifactGallery() {
  const { unlockedArtifacts } = useMuseum()
  const [selected, setSelected] = useState<Artifact | null>(null)

  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Museum Collection
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Artifact Gallery
          </h1>
          <p className="text-slate-400">
            {unlockedArtifacts.size} of {artifacts.length} artifacts discovered
          </p>
          <div className="mt-4 h-2 max-w-md mx-auto bg-navy-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-600 to-gold-400"
              initial={{ width: 0 }}
              animate={{
                width: `${(unlockedArtifacts.size / artifacts.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact, i) => {
            const unlocked = unlockedArtifacts.has(artifact.id)
            return (
              <motion.button
                key={artifact.id}
                onClick={() => setSelected(artifact)}
                className="exhibit-card rounded-lg overflow-hidden text-left group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-48">
                  <img
                    src={artifact.image}
                    alt={artifact.title}
                    className={`w-full h-full object-cover transition-all ${
                      unlocked ? 'group-hover:scale-105' : 'blur-sm grayscale'
                    }`}
                  />
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-navy-950/60">
                      <span className="text-2xl">🔒</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gold-500">{artifact.date}</p>
                  <h3 className="font-display text-lg text-white mt-1">
                    {artifact.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {artifact.description}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      <ArtifactModal
        artifact={selected}
        onClose={() => setSelected(null)}
        isUnlocked={selected ? unlockedArtifacts.has(selected.id) : false}
      />
    </SectionWrapper>
  )
}
