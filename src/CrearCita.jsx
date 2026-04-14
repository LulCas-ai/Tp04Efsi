import { useState } from "react"

function FormCita(){

const [Citas, setCitas] = useState([])

const [cita, setCita] = useState({
  Nombre: "",
  Dueno: "",
  Fecha: "",
  Hora: "",
  Sintomas: ""
})

function mantenerCambios(e){
    setCita({
        ...cita,
        [e.target.name]: e.target.value
    })
    console.log("aa")
}

function agregarCita(e){
    e.preventDefault()
    setCitas([...Citas, cita])
}

return (
    <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={agregarCita}>
            <input name="Nombre" onChange={mantenerCambios}/>
            <input name="Dueno" onChange={mantenerCambios}/>
            <input type="date" name="Fecha" onChange={mantenerCambios}/>
            <input type="time" name="Hora" onChange={mantenerCambios}/>
            <textarea name="Sintomas" onChange={mantenerCambios}></textarea>
            <button type="submit">Agregar</button>
        </form>
    </div>
)
}

export default FormCita