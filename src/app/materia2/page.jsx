import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTrashCan,
    faPenToSquare
  } from "@fortawesome/free-solid-svg-icons";




export const feachMaterias=()=>{
   return fetch('http://localhost:3000/api/materia',{ cache: 'no-store'} )
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
                        <Card>
                            <CardHeader>
                                <CardTitle>{materia.titulo}</CardTitle>
                            </CardHeader>
                            <CardFooter>
                            <div className="space-between">
                                <Link href={`/materia2/${materia._id}/delete`}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                </Link>
                                <Link href={`/materia2/${materia._id}/update`}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                                </Link>
                            </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div> 
        </div>
    )

}