import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  @Output()
  addClienteEvent = new EventEmitter<Cliente>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();

  sendCliente!: Cliente;

  formCliente: FormGroup 

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.formCliente = this.formBuilder.group({
      nombre: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      imagen: ''
    });
  }

  guardarCliente() {
    if (this.formCliente.valid) {
      this.sendCliente = this.formCliente.value as Cliente;
      this.clienteService.addCliente(this.sendCliente).pipe(
        switchMap(() => {
          return this.router.navigate(['/clientes/all']);
        })
      ).subscribe();
    } else {
      // Aquí puedes mostrar un mensaje de error y resaltar los campos con errores.
      console.log("Campos no válidos");
    }
  } 
}
