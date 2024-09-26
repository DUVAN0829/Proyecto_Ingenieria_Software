
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navegacion from "./components/Navegacion"
import Config from "./components/Config"

function App() {

  return (
    <div className="flex h-screen">

      <BrowserRouter>

        <Navegacion />

        <div className="flex-grow">

          <Routes>

          </Routes>

        </div>

      </BrowserRouter>

    </div>
  )
}

export default App
