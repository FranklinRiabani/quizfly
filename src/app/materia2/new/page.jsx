"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import * as z from "zod";
 
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
//import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    titulo: z.string().min(2, {
      message: "Titulo debe teber mas de 2 caracteres.",
    }),
    imagen: z.string().min(2, {
        message: "El campo imagen es obligatorio.",
      }),
  })


function Page() {
    const form = useForm({
        defaultValues: {
          titulo: "",
          imagen: "",
          visible: true,
          orden: 1,
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

   async function onSubmit(data) {
        console.log(data);

        /*e.preventDefault();
        //console.log(materia);

        const res = await fetch('/api/materia',{
            method:'POST',
            body:JSON.stringify(data)
        })

        const materia = await res.json();
        console.log(materia);
        router.push('/materia2');
        router.refresh();

        /*toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data)}</code>
            </pre>
          ),
        })*/

      }
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      
      <Form {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <h1 className="text-3xl">Crear Nueva Materia</h1>
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
                <Input type="file" placeholder="Ingrese imagen" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="visible"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                 La materia sera Visible
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
      <FormField
          name="orden"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orden</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ingrese orden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Registrar Materia</Button>
      </form>
    </Form>
    </div>
    
  )
}

export default Page