import { Component, EventEmitter, Output } from '@angular/core';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/cliente';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-log-in-cliente',
  templateUrl: './log-in-cliente.component.html',
  styleUrls: ['./log-in-cliente.component.css']
})
export class LogInClienteComponent {

  @Output()
  addClienteloginEvent = new EventEmitter<String>();

  errorMessage: string = '';

  constructor(
    private ClienteService:ClienteService,
    private router: Router,
    ) {
    }

    formUser: User = {
      cedula: '',
      contrasenia: '123'
    };
    
    login(form: any) {
    this.ClienteService.LogIn(this.formUser).subscribe(
      (data: any) => {        
        if (data !== null) {
          // Realiza la redirección a la página deseada
          localStorage.setItem('token', String(data));
          this.addClienteloginEvent.emit('cliente');
          this.router.navigate(['cliente/home']);
        } else {
          this.errorMessage = 'Cedula incorrecta';
        }
      }
      
    )
    
  }

  
}
