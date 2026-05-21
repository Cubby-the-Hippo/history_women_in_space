import type { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MuseumProvider, useMuseum } from './context/MuseumContext'
import { StarsBackground } from './components/StarsBackground'
import { Navigation } from './components/Navigation'
import { LoadingScreen } from './components/LoadingScreen'
import { LandingPage } from './sections/LandingPage'
import { MuseumIntro } from './sections/MuseumIntro'
import { Timeline } from './sections/Timeline'
import { ExhibitHall } from './sections/ExhibitHall'
import { AdventureGame } from './sections/AdventureGame'
import { ArtifactGallery } from './sections/ArtifactGallery'
import { ModernConnections } from './sections/ModernConnections'
import { Bibliography } from './sections/Bibliography'
import { EndingReflection } from './sections/EndingReflection'
import type { SectionId } from './types'

function ExhibitContent() {
  const { currentSection, isLoading } = useMuseum()

  const sections: Record<SectionId, ReactNode> = {
    landing: <LandingPage />,
    intro: <MuseumIntro />,
    timeline: <Timeline />,
    'exhibit-hall': <ExhibitHall />,
    adventure: <AdventureGame />,
    artifacts: <ArtifactGallery />,
    modern: <ModernConnections />,
    sources: <Bibliography />,
    reflection: <EndingReflection />,
  }

  return (
  <>
      <StarsBackground />
      <Navigation />
      <AnimatePresence mode="wait">
        {!isLoading && (
          <main key={currentSection} className="relative z-10">
            {sections[currentSection]}
          </main>
        )}
      </AnimatePresence>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <MuseumProvider>
      <ExhibitContent />
    </MuseumProvider>
  )
}
