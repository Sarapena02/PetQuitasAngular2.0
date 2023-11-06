import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente } from 'src/app/Cliente/cliente';
import { Mascota } from 'src/app/Mascota/mascota';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) 
  { }

  LogIn(user: User): Observable<string>{
    return this.http.post('http://localhost:8090/clientes/login', user,{
      responseType: 'text'
    })
  }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>("http://localhost:8090/clientes/all");
}

findById(id:number):Observable<Cliente>{
    const cliente = this.http.get<Cliente>(`http://localhost:8090/clientes/find/` + id);
    return cliente;
}

deleteById(id:number){
    return this.http.delete(`http://localhost:8090/clientes/delete/` + id).subscribe();
}

addCliente(cliente:Cliente){
    return this.http.post('http://localhost:8090/clientes/agregar',cliente);
}

update(cliente:Cliente){
    return this.http.put('http://localhost:8090/clientes/update/' + cliente.id, cliente );
}

findCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`http://localhost:8090/clientes/cliente/` + id);
}

findMascotas(id:number):Observable<Mascota[]>{
  return this.http.get<Mascota[]>(`http://localhost:8090/clientes/mascotas/` + id);
}

findByCedula(cedula:string):Observable<Cliente>{
  return this.http.get<Cliente>(`http://localhost:8090/clientes/cedula/` + cedula);
}

clienteHome():Observable<Cliente>{
  return this.http.get<Cliente>("http://localhost:8090/clientes/details");
}
  

}
