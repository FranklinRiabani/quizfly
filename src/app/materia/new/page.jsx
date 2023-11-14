"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [materia,setMateria] = useState(
        {
            titulo:"",
            imagen:"",
            visible:"",
            orden:""
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(materia);

        const res = await fetch('/api/materia',{
            method:'POST',
            body:JSON.stringify(materia)
        })

        const data = await res.json();
        console.log(data);
        router.push('/materia');
        router.refresh();
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setMateria({...materia,[e.target.name]:e.target.value})
    }
  return (
    <form onSubmit={handlerSubmit}>
        <input type="text" name="titulo" onChange={handlerChange}/>
        <input type="text" name="imagen" onChange={handlerChange}/>
        <input type="text" name="visible" onChange={handlerChange}/>
        <input type="text" name="orden" onChange={handlerChange}/>
        <button type="submit">Registrar Materia</button>
    </form>
  )
}

export default page