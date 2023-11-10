import Link from "next/link";

export const feachMaterias=()=>{
   return fetch('http://localhost:3000/api/materia')
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Materias(){
    const {materias}= await feachMaterias();
    console.log(materias);
    return(
        <div>
            <h1>Materias</h1>
            <Link href="/">Inicio</Link>
            {
                materias.map(materia=>(
                    <div  className="bg-gray-700 p-10 mt-5 text-white" key={materia._id}>
                        <h1>{materia.titulo}</h1>
                    </div>
                ))
            }
        </div>
    )

}