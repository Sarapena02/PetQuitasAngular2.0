import { Component, EventEmitter, Output } from '@angular/core';
import { Veterinario } from '../veterinario';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in-veterinario',
  templateUrl: './log-in-veterinario.component.html',
  styleUrls: ['./log-in-veterinario.component.css']
})
export class LogInVeterinarioComponent {

  @Output()
  addVeterianriologinEvent = new EventEmitter<String>();

  cedulaLog! : string;
  contraseniaLog!: string;
  veterinarioLog!: Veterinario;

  errorMessage: string = '';

  
  constructor(private VeterinarioService:VeterinarioService,
    private router: Router,
    ) {

    }

    validarCedulayContrasenia() {
      this.VeterinarioService.LogIn(this.cedulaLog, this.contraseniaLog).subscribe(
        (data: any) => {
          if (data !== null) {
            // Realiza la redirección a la página deseada
            this.veterinarioLog = data;
            this.addVeterianriologinEvent.emit('veterinario');
            this.router.navigate(['/veterinario/find/' + data.id]);
            localStorage.setItem('idVeterinario', data.id);
          } else {
            this.errorMessage = 'Cedula o contraseña incorrecta';
          }
        }
      )
    }
    
  
}
