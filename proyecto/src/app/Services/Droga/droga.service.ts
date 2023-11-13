import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Droga } from 'src/app/Droga/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Droga[]>{
    return this.http.get<Droga[]>("http://localhost:8090/drogas/all");
  }

  actualizarDroga(droga:Droga):Observable<Droga>{
    return this.http.put<Droga>("http://localhost:8090/drogas",droga);
  }
  top3Drogas(): Observable<Droga[]>{
    return this.http.get<Droga[]>("http://localhost:8090/drogas/top3");
  }

  ventasTotales(): Observable<number>{
    return this.http.get<number>("http://localhost:8090/drogas/VentasTotales");
  }

  gananciasTotales(): Observable<number>{
    return this.http.get<number>("http://localhost:8090/drogas/GananciasTotales");
  }

  update(droga: Droga){
    return this.http.put("http://localhost:8090/drogas/update/" + droga.id, droga );
  }

  findByName(name: string): Observable<Droga>{
    return this.http.get<Droga>("http://localhost:8090/drogas/findByName/" + name);
  }
}
