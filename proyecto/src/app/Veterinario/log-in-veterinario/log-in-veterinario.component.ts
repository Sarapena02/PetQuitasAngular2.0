import { Component, EventEmitter, Output } from '@angular/core';
import { Veterinario } from '../veterinario';
import { Router } from '@angular/router';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
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

    formUser: User = {
      cedula: '',
      contrasenia: ''
    };
    

    login(form: any) {
      this.VeterinarioService.LogIn(this.formUser).subscribe(
        (data: any) => {
          if (data !== null) {
            // Realiza la redirección a la página deseada
            localStorage.setItem('token', String(data));
            this.router.navigate(['/veterinario/home']);
          } else {
            this.errorMessage = 'Cedula o contraseña incorrecta';
          }
        }
      )
    }
    
  
}
