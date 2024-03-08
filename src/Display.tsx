import { useAppSelector } from "./app/hooks"

export default function Display() {

  const image = useAppSelector((state) => state.display.value);

  return (
    <div className="w-1/2 h-full pb-10 max-h-full lg:flex flex-col hidden">
        <div className="rounded-4xl border border-gray-800 w-full h-full">
            <img src={image} alt="luffy" className="rounded-4xl object-center h-full w-full transition-all duration-500 " />
        </div>
        <p className="text-white text-center text-xs font-mono font-light mt-4">
            Mt. Tamalpais 37.9236° N, 122.5965° W | image {image}
        </p>
        
    </div>
  )
}
