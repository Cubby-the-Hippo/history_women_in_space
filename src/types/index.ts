export type SectionId =
  | 'landing'
  | 'intro'
  | 'timeline'
  | 'exhibit-hall'
  | 'adventure'
  | 'artifacts'
  | 'modern'
  | 'sources'
  | 'reflection'

export interface TimelineEvent {
  year: number
  title: string
  description: string
  image: string
  artifactId?: string
}

export interface ExhibitFigure {
  id: string
  name: string
  years: string
  image: string
  biography: string
  achievements: string[]
  significance: string
  obstacles: string
  stemContribution: string
  artifactId: string
}

export interface Artifact {
  id: string
  title: string
  date: string
  origin: string
  image: string
  description: string
  significance: string
  stemConnection: string
}

export interface GameChoice {
  label: string
  nextId: string
  unlockArtifact?: string
}

export interface GameNode {
  id: string
  route: string
  speaker?: string
  text: string
  educational?: string
  choices?: GameChoice[]
  artifactUnlock?: string
  isEnding?: boolean
  endingTitle?: string
  endingReflection?: string
}

export interface BibliographyEntry {
  id: string
  citation: string
  source: string
}
