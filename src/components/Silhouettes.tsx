export function AircraftSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 35 L50 30 L90 32 L130 28 L170 30 L190 32 L185 35 L170 33 L130 35 L90 38 L50 36 L10 38 Z" opacity="0.15" />
      <path d="M40 30 L80 15 L120 20 L160 18 L180 22 L175 25 L160 22 L120 25 L80 20 L40 32 Z" opacity="0.2" />
      <ellipse cx="100" cy="28" rx="8" ry="4" opacity="0.25" />
    </svg>
  )
}

export function RocketSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 200"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M40 10 L50 80 L45 180 L40 190 L35 180 L30 80 Z" opacity="0.15" />
      <path d="M25 100 L15 140 L20 145 L30 105 Z" opacity="0.1" />
      <path d="M55 100 L65 140 L60 145 L50 105 Z" opacity="0.1" />
      <ellipse cx="40" cy="50" rx="6" ry="8" opacity="0.2" />
    </svg>
  )
}
