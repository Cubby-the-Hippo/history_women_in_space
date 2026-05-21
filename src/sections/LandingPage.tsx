import { motion } from 'framer-motion'
import { useMuseum } from '../context/MuseumContext'
import { AircraftSilhouette, RocketSilhouette } from '../components/Silhouettes'

export function LandingPage() {
  const { navigateTo } = useMuseum()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AircraftSilhouette className="absolute top-20 left-0 w-64 text-gold-500 opacity-30 animate-pulse" />
      <RocketSilhouette className="absolute bottom-20 right-8 w-24 text-gold-500 opacity-20" />
      <AircraftSilhouette className="absolute bottom-32 left-10 w-48 text-gold-500 opacity-15 rotate-12" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p
          className="text-gold-500/80 text-sm sm:text-base uppercase tracking-[0.4em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Virtual Museum Exhibit
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl gold-gradient-text font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Breaking the Sky
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl lg:text-3xl text-slate-300 mt-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Women in Aviation and Space Exploration
        </motion.p>

        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto my-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        <motion.p
          className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Journey through a century of courage, innovation, and barrier-breaking achievement.
          Explore exhibits, walk interactive timelines, and experience history through
          choose-your-own-adventure storytelling.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <button
            onClick={() => navigateTo('intro')}
            className="btn-primary"
          >
            Enter Exhibit
          </button>
          <button
            onClick={() => navigateTo('adventure')}
            className="btn-secondary"
          >
            Start Adventure
          </button>
        </motion.div>

        <motion.p
          className="mt-16 text-xs text-slate-500 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Inspired by the Smithsonian National Air and Space Museum
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll to explore
      </motion.div>
    </section>
  )
}
