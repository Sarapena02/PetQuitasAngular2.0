import {Component} from '@angular/core';
import { Cliente } from 'src/app/Cliente/cliente';
import { ClienteService } from 'src/app/services/Cliente/cliente.service';
import { Router } from '@angular/router';




@Component({
    selector: 'app-cliente-tabla',
    templateUrl: './tabla-cliente.component.html',
    styleUrls: ['./tabla-cliente.component.css']
})
export class ClienteTablaComponent {
    
    clientesList!: Cliente[];
    clienteEditar!: Cliente;

    constructor(
        private clienteService: ClienteService,
    ){}

    ngOnInit(): void {
        this.clienteService.findAll().subscribe(
            data =>
                this.clientesList = data
        )
    }

    eliminarCliente(cliente: Cliente){
        var index = this.clientesList.indexOf(cliente);
        this.clientesList.splice(index, 1);
        this.clienteService.deleteById(cliente.id);
    }

}