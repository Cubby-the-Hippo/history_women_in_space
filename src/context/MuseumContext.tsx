import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react'
import type { SectionId } from '../types'

interface MuseumContextValue {
  currentSection: SectionId
  navigateTo: (section: SectionId) => void
  unlockedArtifacts: Set<string>
  unlockArtifact: (id: string) => void
  soundEnabled: boolean
  toggleSound: () => void
  isLoading: boolean
  setLoading: (loading: boolean) => void
  visitedSections: Set<SectionId>
}

const MuseumContext = createContext<MuseumContextValue | null>(null)

export function MuseumProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState<SectionId>('landing')
  const [unlockedArtifacts, setUnlockedArtifacts] = useState<Set<string>>(new Set())
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [visitedSections, setVisitedSections] = useState<Set<SectionId>>(
    new Set(['landing'])
  )

  const navigateTo = useCallback((section: SectionId) => {
    setCurrentSection(section)
    setVisitedSections((prev) => new Set([...prev, section]))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const unlockArtifact = useCallback((id: string) => {
    setUnlockedArtifacts((prev) => new Set([...prev, id]))
  }, [])

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev)
  }, [])

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading)
  }, [])

  return (
    <MuseumContext.Provider
      value={{
        currentSection,
        navigateTo,
        unlockedArtifacts,
        unlockArtifact,
        soundEnabled,
        toggleSound,
        isLoading,
        setLoading,
        visitedSections,
      }}
    >
      {children}
    </MuseumContext.Provider>
  )
}

export function useMuseum() {
  const ctx = useContext(MuseumContext)
  if (!ctx) throw new Error('useMuseum must be used within MuseumProvider')
  return ctx
}
