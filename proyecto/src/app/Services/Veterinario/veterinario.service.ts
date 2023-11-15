import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';
import { Veterinario } from 'src/app/Veterinario/veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }
  
  LogIn(user: User): Observable<string> {
    return this.http.post('http://localhost:8090/veterinarios/login', user,
    {
      responseType: 'text'
    });
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

  veterinarioHome(): Observable<Veterinario>{
    return this.http.get<Veterinario>('http://localhost:8090/veterinarios/details');
  }
 
}
