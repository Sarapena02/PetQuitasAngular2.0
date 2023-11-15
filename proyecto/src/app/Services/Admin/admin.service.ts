import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) 
  { }

  LogIn(user: User): Observable<string>{
    return this.http.post('http://localhost:8090/admin/login', user,{
      responseType: 'text'
    })
  }
}
