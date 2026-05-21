import { motion } from 'framer-motion'
import { useMemo } from 'react'

export function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      })),
    []
  )

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" />
    </motion.div>
  )
}
