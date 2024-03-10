import { useEffect } from "react";
import Display from "./Display"
import DisplayMobile from "./DisplayMobile";
import Infos from "./Infos"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { switchMobile } from "./features/display/displaySlice";

function App() {

  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => state.display.value);
  const isMobile = useAppSelector((state) => state.display.mobileClick);

  
  useEffect(() => {
    window.addEventListener('resize',  () => {
      if (window.innerWidth >= 1024) {
        dispatch(switchMobile(false))
      }
    });
  }, [window.innerWidth])

  if (isMobile && window.innerWidth < 1024)
    return (<DisplayMobile image={image} />)
  return (
    <div className="w-screen h-screen bg-black flex lg:space-x-24 space-x-14 lg:p-24 p-14 justify-between">
      <Infos />
      <Display image={image} />
    </div>
  )
}

export default App
