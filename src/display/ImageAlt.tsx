import { motion } from "framer-motion"

export default function ImageAlt() {
  return (
    <motion.p className="text-white text-center text-xs font-mono font-light lg:mt-4 mt-auto"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, type:"smooth" }}
    >
        Mt. Tamalpais 37.9236° N, 122.5965° W 
    </motion.p>
  )
}
