import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { useMuseum } from '../context/MuseumContext'

export function EndingReflection() {
  const { navigateTo, unlockedArtifacts } = useMuseum()

  return (
    <SectionWrapper className="section-padding pt-24 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gold-500 text-sm uppercase tracking-[0.4em] mb-6">
            Conclusion
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight">
            The Sky Remembers
          </h1>

          <div className="w-16 h-px bg-gold-500 mx-auto mb-8" />

          <p className="text-slate-300 text-lg leading-relaxed mb-6 text-left sm:text-center">
            Women who were once told the cockpit was not for them, the laboratory too
            difficult, the stars too far—these pioneers permanently changed the future of
            STEM. They did not merely participate in history. They rewrote its boundaries.
          </p>

          <p className="text-slate-300 leading-relaxed mb-10 text-left sm:text-center">
            From Bessie Coleman&apos;s defiant loops above cheering crowds to Sally Ride&apos;s
            quiet focus aboard Challenger, from WASP pilots ferrying warplanes to Eileen
            Collins commanding the Space Shuttle—each story is a testament to courage,
            skill, and the refusal to accept exclusion as destiny.
          </p>

          <blockquote className="border-l-4 border-gold-500 pl-6 my-12 text-left sm:mx-auto sm:max-w-xl">
            <p className="font-display text-2xl text-gold-400 italic leading-relaxed">
              &ldquo;The air is the only place free from prejudices. I knew we had no aviators,
              neither men nor women, and I knew the Race needed to be represented along
              the most difficult road a human being can follow.&rdquo;
            </p>
            <cite className="block mt-4 text-slate-400 not-italic text-sm">
              — Bessie Coleman
            </cite>
          </blockquote>

          {unlockedArtifacts.size > 0 && (
            <p className="text-sm text-gold-500/80 mb-8">
              You discovered {unlockedArtifacts.size} artifact
              {unlockedArtifacts.size !== 1 ? 's' : ''} on your journey.
            </p>
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button onClick={() => navigateTo('landing')} className="btn-primary">
              Exit Exhibit
            </button>
            <button onClick={() => navigateTo('adventure')} className="btn-secondary">
              Play Adventure Again
            </button>
          </motion.div>

          <p className="mt-16 text-xs text-slate-600 uppercase tracking-widest">
            Breaking the Sky · Women in Aviation and Space Exploration
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
