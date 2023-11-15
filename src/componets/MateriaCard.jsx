import Link from "next/link"
function MateriaCard({materia}) {
  return (
      <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500">
          <div  >
              <h1>{materia.titulo}</h1>
              <Link href={`/materia/${materia._id}/delete`}>Eliminar</Link>
              <Link href={`/materia/${materia._id}/update`}>Modificar</Link>
          </div>
    </div>
  )
}

export default MateriaCard