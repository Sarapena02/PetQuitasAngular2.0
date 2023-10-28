import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Mascota } from '../mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { Cliente } from 'src/app/Cliente/cliente';
import { validUrlValidator } from 'Ts/valid-url.validators';


@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent {

  sendMascota!: Mascota;

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
    const searchTerm = this.cedula.toLowerCase();
    this.clientesList = this.clientesList.filter(cliente =>
        cliente.cedula.toLowerCase().includes(searchTerm)
    );
}

  ngOnInit(): void {
    //buscar todos los clientes
    this.clienteService.findAll().subscribe(
      (data) => {
        this.clientesList = data
      }
    )
  }
  

  guardarMascota(){
    //primero asigna la mascota al objeto sendMascota, despues realiza el addMascota y redirecciona a la tabla de mascotas
    if(this.formMascota.valid){
    this.sendMascota = this.formMascota.value as Mascota;
    this.mascotaService.addMascota(this.sendMascota).pipe(
      switchMap(() => {
        return this.router.navigate(['/mascotas/all']);
      })
    ).subscribe();
}
}
}
