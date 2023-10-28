import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from 'src/app/Veterinario/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }
  
  LogIn(cedulaLog: string, contrasenaLog: string) {
    const body = {
      cedula: cedulaLog,
      contrasenia: contrasenaLog
    };
    return this.http.post('http://localhost:8090/veterinarios/login', body);
  }

  findAll(): Observable<Veterinario[]>{
    return this.http.get<Veterinario[]>("http://localhost:8090/veterinarios/all");
  }

  findById(id:number):Observable<Veterinario>{
    const veterinario = this.http.get<Veterinario>(`http://localhost:8090/veterinarios/find/` + id);
    return veterinario;
  }

  deleteById(id:number){
    return this.http.delete(`http://localhost:8090/veterinarios/delete/` + id).subscribe();
  }

  addMascota(veterinario:Veterinario){
    return this.http.post('http://localhost:8090/veterinarios/agregar',veterinario);
  }

  update(veterinario:Veterinario){
    return this.http.put('http://localhost:8090/veterinarios/update/' + veterinario.id, veterinario );
  }

  findAllActivos(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/veterinarios/cantidad/activos');
  }
  
  findAllInactivos(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/veterinarios/cantidad/inactivos');
  }
 
}
