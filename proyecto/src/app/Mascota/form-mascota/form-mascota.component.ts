import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { mergeMap, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/cliente';
import { validUrlValidator } from 'Ts/valid-url.validators';


@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent {

  sendMascota = {} as Mascota

  clientesList!: Cliente[]

  selectedCliente!: Cliente

  formMascota: FormGroup

  cedula!: string

  

  constructor(
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.formMascota = this.formBuilder.group({
      nombre: ['', Validators.required],
      raza: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      enfermedad: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      imagen: ['', [validUrlValidator()]],
      cliente: null,
      estado: 'Activo'
    });
  }

  filterClientes() {
    if (this.cedula && this.cedula.trim() !== '') {
      const searchTerm = this.formMascota.get('cliente')?.value.toLowerCase();
      this.clienteService.findAll().subscribe((data) => {
            this.clientesList = data.filter(cliente =>
                cliente.cedula.toLowerCase().startsWith(searchTerm)
            );
        });
    } else {
        this.clienteService.findAll().subscribe((data) => {
            this.clientesList = data;
        });
    }
}
  

  guardarMascota(){

    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    if(this.formMascota.valid){
      this.clienteService.findByCedula(this.formMascota.get('cliente')?.value).pipe(
        mergeMap((data) => {
          this.sendMascota.nombre = this.formMascota.get('nombre')?.value;
          this.sendMascota.raza = this.formMascota.get('raza')?.value;
          this.sendMascota.edad = this.formMascota.get('edad')?.value;
          this.sendMascota.enfermedad = this.formMascota.get('enfermedad')?.value;
          this.sendMascota.imagen = this.formMascota.get('imagen')?.value;
          this.sendMascota.estado = this.formMascota.get('estado')?.value;
          this.sendMascota.cliente = data
          return this.mascotaService.addMascota(this.sendMascota);
        })
      ).subscribe(
        (data) => {
          this.router.navigate(['/mascotas/all']);
        }
      )
}
}
}
