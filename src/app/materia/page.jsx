import MateriaCard from "@/componets/MateriaCard";
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
            <Link href='/materia/new'>Nueva Materia</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    materias.map(materia=>(
                        <MateriaCard key={materia._id} materia={materia} />
                    ))
                }
            </div>
            
        </div>
    )

}