import { Header } from "./components/Header/Header"
import { Operaciones } from "./layout/Operaciones"
import { Route, Routes } from "react-router"
import { Color } from "./layout/Color"
import { Persona } from "./layout/Persona"
import { Tarea } from "./layout/Tarea"

export const App = () => {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/operaciones' element={<Operaciones/>}/>
      <Route path='/color' element={<Color/>}/>
      <Route path='/persona' element={<Persona/>}/>
      <Route path='/tarea' element={<Tarea/>}/>
    </Routes>
    </>
  )
}


