import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { bibliography } from '../data/bibliography'

export function Bibliography() {
  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Research & References
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Sources & Bibliography
          </h1>
          <p className="text-slate-400">
            This exhibit draws on authoritative archives and museum collections
          </p>
        </header>

        <div className="museum-plaque rounded-lg p-6 sm:p-8">
          <ol className="space-y-6 text-left list-none counter-reset">
            {bibliography.map((entry, i) => (
              <motion.li
                key={entry.id}
                className="relative pl-8 border-b border-gold-500/10 pb-6 last:border-0 last:pb-0"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="absolute left-0 top-0 font-display text-gold-500 text-lg">
                  {i + 1}.
                </span>
                <span className="text-xs text-gold-500/80 uppercase tracking-wider block mb-1">
                  {entry.source}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed font-serif italic">
                  {entry.citation}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          Images courtesy of Unsplash for educational demonstration purposes.
          Historical citations reference official museum and government archives.
        </p>
      </div>
    </SectionWrapper>
  )
}
