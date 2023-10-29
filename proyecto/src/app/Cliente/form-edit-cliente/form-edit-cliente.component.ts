import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import {mergeMap, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';


@Component({
    selector: 'app-form-edit-cliente',
    templateUrl: './form-edit-cliente.component.html',
    styleUrls: ['./form-edit-cliente.component.css']
})
export class FormEditClienteComponent {
    @Output()
    editClienteEvent = new EventEmitter<Cliente>();

    @Input()
    cliente!: Cliente;

    clienteForm!: FormGroup;


    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ){
        this.clienteForm = this.formBuilder.group({
            id: [null, Validators.required],
            nombre: [null, Validators.required],
            celular: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
            correo: [null, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
            cedula: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
            mascotas: null
        });
    }

    ngOnInit(): void {
        //busca la mascota a editar junto con el cliente asociado a esta
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.clienteService.findById(id).pipe(
                mergeMap(
                    (data) => {
                        this.cliente = data
                        return this.clienteService.findMascotas(this.cliente.id);
                    }
                )).subscribe(
                    (data) => {
                        this.cliente.mascotas = data
                        this.clienteForm.patchValue({
                            id: this.cliente.id,
                            nombre: this.cliente.nombre,
                            celular: this.cliente.celular,
                            correo: this.cliente.correo,
                            cedula: this.cliente.cedula,
                            mascotas: this.cliente.mascotas
                        });
                    }
                )
        });
    }   

    editarCliente(form:any){
        //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de clientes
        if(this.clienteForm.valid){            
            this.clienteService.update(this.clienteForm.value).pipe(
                switchMap(() => {
                    return this.router.navigate(['/clientes/all']);
                })
            ).subscribe();
        }
    }
}