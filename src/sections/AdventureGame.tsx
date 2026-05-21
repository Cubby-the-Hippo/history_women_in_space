import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { gameRoutes, gameNodes, type GameRouteKey } from '../data/gameRoutes'
import { useMuseum } from '../context/MuseumContext'

export function AdventureGame() {
  const { unlockArtifact } = useMuseum()
  const [route, setRoute] = useState<GameRouteKey | null>(null)
  const [nodeId, setNodeId] = useState<string | null>(null)
  const [history, setHistory] = useState<string[]>([])

  const currentNode = nodeId ? gameNodes[nodeId] : null

  const startRoute = (key: GameRouteKey) => {
    setRoute(key)
    const start = gameRoutes[key].startId
    setNodeId(start)
    setHistory([start])
  }

  const makeChoice = (nextId: string, artifactId?: string) => {
    const next = gameNodes[nextId]
    if (next?.artifactUnlock) unlockArtifact(next.artifactUnlock)
    if (artifactId) unlockArtifact(artifactId)
    setNodeId(nextId)
    setHistory((h) => [...h, nextId])
  }

  const resetGame = () => {
    setRoute(null)
    setNodeId(null)
    setHistory([])
  }

  if (!route) {
    return (
      <SectionWrapper className="section-padding pt-24">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
              Choose Your Path
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
              Interactive Adventure
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Step into history. Experience the challenges women faced—and the choices
              that shaped aviation and space exploration.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-6">
            {(Object.keys(gameRoutes) as GameRouteKey[]).map((key, i) => {
              const r = gameRoutes[key]
              return (
                <motion.button
                  key={key}
                  onClick={() => startRoute(key)}
                  className="exhibit-card rounded-lg p-6 sm:p-8 text-left group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-gold-500 text-xs uppercase tracking-widest">
                    Option {String.fromCharCode(65 + i)}
                  </span>
                  <h2 className="font-display text-2xl text-white mt-2 group-hover:text-gold-400 transition-colors">
                    {r.title}
                  </h2>
                  <p className="text-slate-400 mt-2 italic">{r.subtitle}</p>
                  <p className="mt-4 text-sm text-gold-400/80">Begin journey →</p>
                </motion.button>
              )
            })}
          </div>
        </div>
      </SectionWrapper>
    )
  }

  if (!currentNode) return null

  return (
    <SectionWrapper className="section-padding pt-24 min-h-screen">
      <motion.div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button onClick={resetGame} className="btn-secondary text-xs">
            ← Choose Different Path
          </button>
          <span className="text-xs text-slate-500">
            Step {history.length} · {gameRoutes[route].title}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.id}
            className="exhibit-card rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            {currentNode.speaker && (
              <div className="bg-navy-800/50 px-6 py-2 border-b border-gold-500/20">
                <span className="text-xs text-gold-500 uppercase tracking-wider">
                  {currentNode.speaker}
                </span>
              </div>
            )}

            <div className="p-6 sm:p-8 text-left">
              <p className="text-lg text-slate-200 leading-relaxed font-light">
                {currentNode.text}
              </p>

              {currentNode.educational && (
                <motion.div
                  className="mt-6 p-4 rounded border-l-2 border-gold-500/50 bg-gold-500/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-gold-500 uppercase tracking-wider mb-2">
                    📚 Historical Context
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {currentNode.educational}
                  </p>
                </motion.div>
              )}

              {currentNode.artifactUnlock && (
                <motion.p
                  className="mt-4 text-sm text-gold-400"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  ✨ Artifact unlocked! Visit the Artifact Gallery to view it.
                </motion.p>
              )}

              {currentNode.isEnding ? (
                <motion.div
                  className="mt-8 pt-6 border-t border-gold-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="font-display text-2xl text-gold-400 mb-2">
                    {currentNode.endingTitle}
                  </h3>
                  <p className="text-slate-300 italic mb-6">
                    {currentNode.endingReflection}
                  </p>
                  <button onClick={resetGame} className="btn-primary">
                    Play Another Path
                  </button>
                </motion.div>
              ) : (
                <div className="mt-8 space-y-3">
                  {currentNode.choices?.map((choice) => (
                    <button
                      key={choice.nextId}
                      onClick={() =>
                        makeChoice(choice.nextId, choice.unlockArtifact)
                      }
                      className="w-full text-left px-5 py-4 rounded border border-gold-500/30 text-slate-200 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all"
                    >
                      {choice.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
