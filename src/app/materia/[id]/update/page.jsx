"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function HomePage ({params}){
return(
    <div>
        <h1>Modificar {params.id}</h1>
    </div>
)
}
export default HomePage