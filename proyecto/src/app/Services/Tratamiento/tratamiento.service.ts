import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from 'src/app/Tratamiento/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Tratamiento[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/all');
  }

  findById(id: number): Observable<Tratamiento>{
    return this.http.get<Tratamiento>('http://localhost:8090/tratamientos/find/' + id);
  }

  addTratamiento(tratamiento: Tratamiento): Observable<Tratamiento>{
    return this.http.post<Tratamiento>('http://localhost:8090/tratamientos/agregar', tratamiento);
  }

  deleteById(id: number): Observable<Tratamiento>{
    return this.http.delete<Tratamiento>('http://localhost:8090/tratamientos/delete/' + id);
  }

  findAllTratamientosUltimoMes(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/tratamientos/ultimoMes');
  }


  findTratamientosXdrogaUltimoMes(): Observable<Tratamiento[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorMedicamentoEnelUltimoMes');
  }

  getTratamientoXveterinario(idVeterinario: number): Observable<Tratamiento[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorVeterinario/' + idVeterinario);
  }

  getTratamientosMascota(idMascota: number): Observable<Tratamiento[]>{
    return this.http.get<any[]>('http://localhost:8090/tratamientos/TratamientosPorMascota/' + idMascota);
  }
}
