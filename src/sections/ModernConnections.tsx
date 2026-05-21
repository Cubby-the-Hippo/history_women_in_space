import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { useMuseum } from '../context/MuseumContext'

const stats = [
  { value: '16+', label: 'Women who have flown in space (NASA)' },
  { value: '~7%', label: 'Licensed pilots in the U.S. who are women' },
  { value: '28%', label: 'STEM workforce represented by women (approx.)' },
  { value: '100%', label: 'Of humanity that benefits from diverse exploration' },
]

const modernFigures = [
  {
    name: 'Christina Koch',
    role: 'Record-breaking NASA astronaut',
    detail: 'Longest single spaceflight by a woman (328 days)',
  },
  {
    name: 'Jessica Meir',
    role: 'NASA astronaut & marine biologist',
    detail: 'First all-women spacewalk with Christina Koch (2019)',
  },
  {
    name: 'Jeanette Epps',
    role: 'NASA astronaut & aerospace engineer',
    detail: 'International Space Station crew member',
  },
  {
    name: 'Commercial Space Leaders',
    role: 'Engineers & pilots across SpaceX, Blue Origin, and more',
    detail: 'Building the next generation of launch systems',
  },
]

export function ModernConnections() {
  const { navigateTo } = useMuseum()

  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Looking Forward
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Modern Connections
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The story continues. Women today lead missions, design spacecraft, and inspire
            the next generation to reach for the stars.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="exhibit-card rounded-lg p-5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-display text-3xl text-gold-400">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.article
          className="exhibit-card rounded-lg p-6 sm:p-8 text-left mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl text-gold-400 mb-4">
            Women in STEM Today
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Women now serve in every role across aerospace—from mission control to the
            International Space Station, from jet engine design to Mars rover engineering.
            NASA&apos;s Artemis program aims to land the first woman on the Moon. Commercial
            space companies employ thousands of women building the infrastructure of
            humanity&apos;s multi-planetary future.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Yet gender inequality in STEM persists. Women earn fewer engineering degrees
            proportionally, face workplace bias, and leave technical careers at higher rates
            than men. Closing these gaps requires intentional mentorship, inclusive policies,
            and the continued celebration of pioneers who proved what is possible.
          </p>
        </motion.article>

        <h2 className="font-display text-2xl text-white text-center mb-8">
          Voices of Today
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {modernFigures.map((f, i) => (
            <motion.div
              key={f.name}
              className="exhibit-card rounded-lg p-5 text-left"
              initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl text-white">{f.name}</h3>
              <p className="text-gold-500 text-sm">{f.role}</p>
              <p className="text-slate-400 text-sm mt-2">{f.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center p-8 rounded-lg border border-gold-500/30 bg-gold-500/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-xl text-slate-200 italic max-w-2xl mx-auto">
            &ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo;
          </p>
          <p className="text-gold-500 text-sm mt-2">— Eleanor Roosevelt</p>
          <button
            onClick={() => navigateTo('reflection')}
            className="btn-primary mt-8"
          >
            Continue to Reflection
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
