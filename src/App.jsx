import { Videocard  } from "./component/Videocard"
import {Videogrid} from "./component/Videogrid"
import { Appbar } from "./component/Appbar"


function App() {
  return <div className="bg-black min-h-screen">
    <div><Appbar></Appbar></div>
   <div>
  <Videogrid></Videogrid>

   </div>
  </div>

  
}

export default App
