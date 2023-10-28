import { Component, EventEmitter, Output } from '@angular/core';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/cliente';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in-cliente',
  templateUrl: './log-in-cliente.component.html',
  styleUrls: ['./log-in-cliente.component.css']
})
export class LogInClienteComponent {

  @Output()
  addClienteloginEvent = new EventEmitter<String>();

  cedulaLog! : string;
  clienteLog!: Cliente;

  constructor(private ClienteService:ClienteService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    
  validarCedula() {
    this.ClienteService.LogIn(this.cedulaLog).subscribe(
      (data: any) => {        
        if (data !== null) {
          //Obtiene el id del cliente
          this.clienteLog = data;
          // Realiza la redirección a la página deseada
          const redirecTo = '/cliente/find/' + this.clienteLog.id;
          this.addClienteloginEvent.emit('cliente');
          this.router.navigate([redirecTo]);
        } else {
          console.log('La respuesta fue nula o indefinida');
          alert("Cedula incorrecta");
        }
      }
      
    )
    
  }

  
}
