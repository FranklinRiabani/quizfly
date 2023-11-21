"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

function HomePage ({params}){
    const [newMateria,setNewMateria]=useState({
        titulo:"",
        imagen:"",
        visible:true,
        orden:'1'
    });

    const router = useRouter();
    //const params = useParams();

    const getMateria = async ()=>{
        const res = await fetch(`/api/materia/${params.id}`);
        const materias = await res.json();
        console.log(materias);
        setNewMateria({
            titulo:materias.titulo,
            imagen:materias.imagen,
            visible:materias.visible,
            orden:materias.orden
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newMateria);

        const res = await fetch(`/api/materia/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newMateria)
        })

        const data = await res.json();
        console.log(data);
        router.push('/materia');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la materia ${newMateria.titulo}`)){
            try {
                const res=await fetch(`/api/materia/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/materia');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewMateria({...newMateria,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewMateria({...newMateria,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getMateria()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

    <Form>
        <h1 className="text-3xl">Crear Nueva Materia</h1>
        
        <Input type="email" placeholder="Email" value={newMateria.titulo} />
        
        <Button type="submit">Registrar Materia</Button>
    </Form>
    </div>
    
)
}
export default HomePage