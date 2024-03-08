import Display from "./Display"
import Infos from "./Infos"

function App() {

  return (
    <div className="w-screen h-screen bg-black flex space-x-24 p-24 justify-between">
      <Infos />
      <Display />
    </div>
  )
}

export default App
