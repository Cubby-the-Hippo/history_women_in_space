import { motion } from 'framer-motion'
import type { ExhibitFigure } from '../types'
import { useMuseum } from '../context/MuseumContext'

interface ExhibitCardProps {
  figure: ExhibitFigure
  index: number
}

export function ExhibitCard({ figure, index }: ExhibitCardProps) {
  const { navigateTo, unlockArtifact } = useMuseum()

  return (
    <motion.article
      className="exhibit-card rounded-lg overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => {
        unlockArtifact(figure.artifactId)
        navigateTo('artifacts')
      }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={figure.image}
          alt={figure.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl text-white">{figure.name}</h3>
          <p className="text-gold-400 text-sm">{figure.years}</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 text-left">
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
          {figure.biography}
        </p>
        <ul className="mt-4 space-y-1">
          {figure.achievements.slice(0, 2).map((a) => (
            <li key={a} className="text-xs text-gold-500/90 flex items-start gap-2">
              <span className="text-gold-500 mt-0.5">◆</span>
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-gold-400 uppercase tracking-wider group-hover:underline">
          View artifact →
        </p>
      </div>
    </motion.article>
  )
}
