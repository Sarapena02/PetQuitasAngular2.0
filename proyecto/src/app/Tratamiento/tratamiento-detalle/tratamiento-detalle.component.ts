import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { Tratamiento } from '../tratamiento';



@Component({
    selector: 'app-tratamiento-detalle',
    templateUrl: './tratamiento-detalle.component.html',
    styleUrls: ['./tratamiento-detalle.component.css']
})
export class TratamientoDetalleComponent {
    
    @Input()
    tratamiento!: Tratamiento;

    constructor(
        private tratamientoService: TratamientoService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id')); 
            this.tratamientoService.findById(id).subscribe(
                (data) => {
                    this.tratamiento = data
                }
            )
        })
    }
}