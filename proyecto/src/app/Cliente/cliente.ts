import { Mascota } from "../Mascota/mascota"

export interface Cliente{
    id:number
    nombre:string
    celular:string
    correo:string
    cedula:string
    estado:string
    mascotas?: Mascota[]
}