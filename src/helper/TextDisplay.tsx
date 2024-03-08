import { EyeIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../app/hooks";
import { resetDisplay, setDisplay } from "../features/display/displaySlice";



export default function TextDisplay({text, image}: {text: string, image:string}) {

  const dispatch = useAppDispatch();

  const selectImage = () => {
    dispatch(setDisplay(image))
  }

  return (
    <span onMouseEnter={() => selectImage()} onMouseLeave={() => dispatch(resetDisplay())} className="rounded-xl border border-my_darkgray hover:border-gray-700 px-3 font-medium text-white inline-flex items-center cursor-pointer bg-my_gray bg-opacity-40 hover:bg-opacity-60 
    transition-all duration-300">
        {text}
        <EyeIcon className="w-5 h-5 ml-2" />
    </span>
  )
}
