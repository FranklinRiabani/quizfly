
import { useState } from "react"

function page() {
    const [materia,setMateria] = useState[
        {
            titulo:"",
            imagen:"",
            visible:"",
            orden:""
        }
    ];

  return (
    <form>
        <input type="text" name="titulo" />
        <input type="text" name="imagen" />
        <input type="text" name="visible" />
        <input type="text" name="orden" />
        <button type="submit">Registrar Materia</button>
    </form>
  )
}

export default page