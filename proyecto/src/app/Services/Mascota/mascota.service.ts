import { Injectable } from '@angular/core';
import { Mascota } from '../../Mascota/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(
    private http: HttpClient
  ) { }

 

  findAll(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>("http://localhost:8090/mascotas/all");
  }


  findById(id:number):Observable<Mascota>{
    const mascota = this.http.get<Mascota>(`http://localhost:8090/mascotas/find/` + id);
    return mascota;
  }

  deleteById(id:number){
    return this.http.delete(`http://localhost:8090/mascotas/delete/` + id).subscribe();
  }

  addMascota(mascota:Mascota){
    return this.http.post('http://localhost:8090/mascotas/agregar',mascota);
  }

  update(mascota:Mascota){
    return this.http.put('http://localhost:8090/mascotas/update/' + mascota.id, mascota );
  }

  findCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8090/mascotas/cliente/` + id);
  }

  findAllActivos(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/mascotas/cantidad/activos');
  }

  findAllInactivos(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/mascotas/cantidad/inactivos');
  }

  findByName(name: string): Observable<Mascota>{
    return this.http.get<Mascota>("http://localhost:8090/mascotas/findByName/" + name);
  }
}
