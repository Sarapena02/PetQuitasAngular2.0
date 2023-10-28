import { Mascota } from "../Mascota/mascota"

export interface Cliente{
    id:number
    nombre:string
    celular:string
    correo:string
    cedula:string
    mascotas?: Mascota[]
}