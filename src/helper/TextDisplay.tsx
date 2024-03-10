import { EyeIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../app/hooks";
import { resetDisplay, setDisplay, switchMobile } from "../features/display/displaySlice";
import { motion } from "framer-motion";

export default function TextDisplay({text, image}: {text: string, image:string}) {

  const dispatch = useAppDispatch();

  const selectImage = () => {
    dispatch(setDisplay(image))
  }

  const displayMobile = () => {
    if (window.innerWidth < 1024) {
      dispatch(switchMobile(true))
    }
  }

  return (
    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onMouseEnter={() => selectImage()} onMouseLeave={() => dispatch(resetDisplay())} onClick={() => displayMobile()}
    className="select-none rounded-xl border border-my_darkgray hover:border-gray-700 px-3 font-medium text-white inline-flex items-center cursor-pointer bg-my_gray bg-opacity-40 hover:bg-opacity-60">
        {text}
        <EyeIcon className="w-5 h-5 ml-2" />
        
    </motion.span>
  )
}
