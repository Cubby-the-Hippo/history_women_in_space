import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { useMuseum } from '../context/MuseumContext'

const sections = [
  {
    title: 'Historical Context',
    content: `For most of aviation history, the cockpit was considered a masculine domain. When the Wright brothers first achieved powered flight in 1903, societal norms dictated that women's place was on the ground. Yet from the earliest days of flight, courageous women refused to accept these limitations.

In the 1910s and 1920s, pioneers like Harriet Quimby and Bessie Coleman proved that skill—not gender—determined who could fly. World War II created unprecedented demand for pilots, opening doors through the Women Airforce Service Pilots program. The space age brought new frontiers: Sally Ride, Mae Jemison, and Eileen Collins demonstrated that exploration beyond Earth belonged to all humanity.`,
  },
  {
    title: 'Change Over Time',
    content: `The trajectory of women in aviation mirrors broader struggles for equality. In 1920, fewer than 200 American women held pilot licenses. By 1944, over 1,000 WASP had flown military aircraft. In 1983, Sally Ride shattered the ultimate barrier—space itself.

Each generation built on the last. Bessie Coleman's barnstorming inspired Amelia Earhart's Atlantic crossing. WASP ferried the aircraft that male pilots flew in combat. Women astronauts conducted research that advanced medicine, materials science, and our understanding of Earth itself. Progress was never linear, but it was relentless.`,
  },
  {
    title: 'Importance of the Topic',
    content: `Representation in science and exploration matters profoundly. When girls see women in cockpits and space suits, they imagine possibilities for themselves. When society excludes half its talent from technical fields, everyone loses the innovation and perspective that diversity brings.

Women in aviation faced not only gender discrimination but, for women of color, the compounded barriers of racism. Bessie Coleman trained in France because American flight schools refused her. Mae Jemison became the first Black woman in space—a milestone that came decades after the first human spaceflight. Understanding this history means understanding both triumph and the work that remains.`,
  },
  {
    title: 'Modern Relevance',
    content: `Today, women serve as NASA astronauts, commercial airline captains, aerospace engineers, and military pilots. Organizations like the Ninety-Nines, Women in Aviation International, and Sally Ride Science continue the work of inclusion.

Yet challenges persist. Women remain underrepresented in STEM fields. Pay gaps, workplace bias, and lack of mentorship affect careers in aerospace. By studying the women who broke barriers, we honor their legacy and recognize our responsibility to continue opening doors for future generations.`,
  },
]

export function MuseumIntro() {
  const { navigateTo } = useMuseum()

  return (
    <SectionWrapper className="section-padding pt-24">
      <div className="max-w-4xl mx-auto">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gold-500 text-sm uppercase tracking-[0.3em] mb-4">
            Exhibit Introduction
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Welcome to the Exhibit
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A formal introduction to the history of women in aviation and space exploration
          </p>
        </motion.header>

        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              className="exhibit-card rounded-lg p-6 sm:p-8 text-left"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h2 className="font-display text-2xl text-gold-400 mb-4">{section.title}</h2>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button onClick={() => navigateTo('timeline')} className="btn-primary mr-4">
            View Timeline
          </button>
          <button onClick={() => navigateTo('exhibit-hall')} className="btn-secondary">
            Enter Exhibit Hall
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
