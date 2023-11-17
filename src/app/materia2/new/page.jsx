"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
//import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    titulo: z.string().min(2, {
      message: "Titulo must be at least 2 characters.",
    }),
    imagen: z.string().min(2, {
        message: "Imagen must be at least 2 characters.",
      }),
  })


function Page() {
    const form = useForm({
        defaultValues: {
          titulo: "",
          imagen: "",
          visible: "",
          orden: "",
        },
      })


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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setMateria({...materia,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setMateria({...materia,[e.target.name]:e.target.value})
    }

    function onSubmit(data) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <Form {...form}>
      <form  className="w-2/3 space-y-6">
        <FormField
          name="titulo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese Titulo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
    <FormField
          name="imagen"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese imagen" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

<FormField
          name="visible"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visible</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese Visible" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

<FormField
          name="orden"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orden</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese orden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    
  )
}

export default Page