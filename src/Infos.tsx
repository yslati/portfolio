import Heading from "./info/Heading";
import Description from "./info/Description";
import { motion } from "framer-motion";

export default function Infos() {
  return (
    <motion.div className="lg:w-1/2 w-full h-full text-my_gray space-y-6"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type:"smooth" }}
    >
      <Heading />
      <Description />
    </motion.div>
  )
}
