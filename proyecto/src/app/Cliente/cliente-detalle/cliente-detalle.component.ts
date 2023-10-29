import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';


@Component({
    selector: 'app-cliente-detalle',
    templateUrl: './cliente-detalle.component.html',
    styleUrls: ['./cliente-detalle.component.css']
})
export class ClienteDetalleComponent {


    @Input()
    cliente!: Cliente;

    //Inyeccion de dependecias
    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute,
    ){}

    ngOnInit(): void {
        //primero busca el cliente y despues sus mascotas
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.clienteService.findById(id).pipe(
                mergeMap(
                    (data) => {
                        this.cliente = data;
                        return this.clienteService.findMascotas(this.cliente.id);
                    }
                )
            ).subscribe(
                (data) => {
                    this.cliente.mascotas = data
                }
            )
        })

    }
    
}