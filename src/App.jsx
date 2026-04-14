import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FormCita from "./CrearCita";
import Listado from './Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <FormCita />
      <Listado/>

      
    </>
  )
}

export default App
