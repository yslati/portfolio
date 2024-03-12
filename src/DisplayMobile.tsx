import { XMarkIcon } from "@heroicons/react/24/outline";
import { switchMobile } from "./features/display/displaySlice";
import { useAppDispatch } from "./app/hooks";
import ImageAlt from "./display/ImageAlt";

export default function DisplayMobile({image}: {image: string}) {

    const dispatch = useAppDispatch();

    const closeMobile = () => {
        dispatch(switchMobile(false))
    }

    return (
        <div style={{backgroundImage: `url(${image})`}} className="w-screen h-screen bg-no-repeat bg-cover relative transition-all duration-300 flex flex-col md:p-8 p-5">
            <XMarkIcon onClick={() => closeMobile()} className=" md:w-10 w-7 text-white ml-auto cursor-pointer" />
            <ImageAlt />
        </div>
    )
}
