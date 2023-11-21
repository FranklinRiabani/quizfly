import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { buttonVariants } from "@/components/ui/button"

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faTrashCan,
    faPenToSquare,faPlus
  } from "@fortawesome/free-solid-svg-icons";




export const feachMaterias=()=>{
   return fetch('http://localhost:3000/api/materia',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Materias(){
    const materias= await feachMaterias();
    console.log(materias);
    return(
        <div>
            <h1 className="text-3xl">Lista de Materias</h1>
            <div className="my-4">
                 <Link href='/materia2/new' className={buttonVariants({ variant: "outline" })} >
                <FontAwesomeIcon icon={faPlus} size="2x" className="mx-2" />   Nueva Materia
            </Link>
            </div>
           

            <div className="grid grid-cols-3 gap-2">
                {
                    materias.map(materia=>(
                        <Card key={materia._id}>
                            <CardHeader>
                                <CardTitle>{materia.titulo}</CardTitle>
                                <CardDescription>Mas de 5000 preguntas en nuestro banco de preguntas.</CardDescription>
                            </CardHeader>
                            <CardFooter className="grid grid-cols-2 grid-flow-row gap-4">
                                        <Link href={`/materia2/${materia._id}/delete`}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Link>
                                        <Link href={`/materia2/${materia._id}/update`}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div> 
        </div>
    )

}