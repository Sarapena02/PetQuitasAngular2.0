import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-find-by-id',
  templateUrl: './cliente-find-by-id.component.html',
  styleUrls: ['./cliente-find-by-id.component.css']
})
export class ClienteFindByIdComponent {

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
