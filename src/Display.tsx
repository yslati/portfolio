import ImageAlt from "./display/ImageAlt";


export default function Display({image}: {image: string}) {

  return (
    <div className="w-1/2 h-full pb-10 max-h-full lg:flex flex-col hidden">
        <div className="rounded-4xl border border-gray-800 w-full h-full">
            <img src={image} alt="luffy" className="rounded-4xl object-center h-full w-full transition-all duration-500 " />
        </div>
        <ImageAlt />
    </div>
  )
}
