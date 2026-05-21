import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useMuseum } from '../context/MuseumContext'

export function LoadingScreen() {
  const { setLoading } = useMuseum()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-16 h-16 border-2 border-gold-500/30 border-t-gold-500 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        className="mt-8 font-display text-2xl text-gold-400 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Breaking the Sky
      </motion.p>
      <motion.p
        className="mt-2 text-sm text-slate-400 tracking-wider uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Preparing Exhibit...
      </motion.p>
    </motion.div>
  )
}
