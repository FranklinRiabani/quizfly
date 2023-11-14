import Link from "next/link"
function MateriaCard({materia}) {
  return (
        <Link href={`/materia/${materia._id}`}>
          <div className="bg-gray-700 
                      p-10 
                      mt-5 
                      text-white 
                      rounded-xl 
                      hover:bg-gray-500" >
              <h1>{materia.titulo}</h1>
          </div>
    </Link>
  )
}

export default MateriaCard