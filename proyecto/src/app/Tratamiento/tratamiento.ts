import { Droga } from "src/app/Droga/droga"
import { Veterinario } from "src/app/Veterinario/veterinario"
import { Mascota } from "src/app/Mascota/mascota"

export interface Tratamiento{
    id:number
    fecha:string
    veterinario?:Veterinario
    mascota?:Mascota
    droga?:Droga
    idDroga?:number
}