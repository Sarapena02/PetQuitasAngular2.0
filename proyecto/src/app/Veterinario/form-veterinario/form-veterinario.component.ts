import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validUrlValidator } from 'Ts/valid-url.validators';


@Component({
  selector: 'app-form-veterinario',
  templateUrl: './form-veterinario.component.html',
  styleUrls: ['./form-veterinario.component.css']
})
export class FormVeterinarioComponent {

  sendVeterinario!: Veterinario;

  formVeterinario!: FormGroup 

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.formVeterinario = this.formBuilder.group({
      nombre: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      especialidad: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*$')]],
      contrasenia: ['', Validators.required],
      foto: ['', [validUrlValidator()]],
      estado: 'Activo'
    });
  }

  guardarVeterinario(){
    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    if(this.formVeterinario.valid){
      this.sendVeterinario = this.formVeterinario.value as Veterinario;
      this.veterinarioService.addMascota(this.sendVeterinario).pipe(
        switchMap(() => {
          return this.router.navigate(['/veterinarios/all']);
        })
      ).subscribe();
    }
}
}
