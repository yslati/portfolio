import ImageAlt from "./display/ImageAlt";
import { motion } from "framer-motion"

export default function Display({image}: {image: string}) {

  return (
    <div className="w-1/2 h-full pb-10 max-h-full lg:flex flex-col hidden">
      <div className="rounded-4xl border border-gray-800 w-full h-full select-none">
        <motion.img key={image} initial={{ y: 10, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 0.1,
        }}
        src={image} alt="" className="object-cover rounded-4xl h-full w-full transition-all duration-500 " />
      </div>
        <ImageAlt />
    </div>
  )
}
