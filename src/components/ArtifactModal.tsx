import { motion, AnimatePresence } from 'framer-motion'
import type { Artifact } from '../types'

interface ArtifactModalProps {
  artifact: Artifact | null
  onClose: () => void
  isUnlocked: boolean
}

export function ArtifactModal({ artifact, onClose, isUnlocked }: ArtifactModalProps) {
  return (
    <AnimatePresence>
      {artifact && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto museum-plaque rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-gold-400 z-10 text-2xl"
              aria-label="Close"
            >
              ×
            </button>
            <div className="relative h-64 sm:h-80">
              <img
                src={artifact.image}
                alt={artifact.title}
                className={`w-full h-full object-cover ${!isUnlocked ? 'blur-sm grayscale' : ''}`}
              />
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-navy-950/70">
                  <p className="text-gold-400 font-display text-xl">🔒 Locked</p>
                  <p className="absolute bottom-4 text-sm text-slate-400">
                    Explore the adventure to unlock
                  </p>
                </div>
              )}
            </div>
            <div className="p-6 sm:p-8 text-left">
              <p className="text-xs text-gold-500 uppercase tracking-widest mb-1">
                Museum Collection
              </p>
              <h2 className="font-display text-3xl text-white mb-2">{artifact.title}</h2>
              <p className="text-sm text-slate-400 mb-4">
                {artifact.date} · {artifact.origin}
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">{artifact.description}</p>
              <div className="border-t border-gold-500/20 pt-4 mt-4">
                <h4 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                  Historical Significance
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{artifact.significance}</p>
              </div>
              <div className="border-t border-gold-500/20 pt-4 mt-4">
                <h4 className="text-gold-400 text-sm uppercase tracking-wider mb-2">
                  Connection to Women in STEM
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{artifact.stemConnection}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
