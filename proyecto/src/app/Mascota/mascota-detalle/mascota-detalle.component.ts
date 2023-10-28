import { Component, Input } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { Tratamiento } from 'src/app/Tratamiento/tratamiento';

@Component({
  selector: 'app-mascota-detalle',
  templateUrl: './mascota-detalle.component.html',
  styleUrls: ['./mascota-detalle.component.css']
})
export class MascotaDetalleComponent {

  @Input()
  mascota!: Mascota;
  
  tratamientos: Tratamiento[] = []; // Mantén una lista de tratamientos para mostrar los detalles

  constructor(
    private mascotaService: MascotaService,
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.mascotaService.findById(id).subscribe(
        (data) => {
          this.mascota = data;
          
          if (this.mascota && this.mascota.tratamientos && this.mascota.tratamientos.length > 0) {
            // Si la mascota tiene tratamientos asociados, carga los detalles de cada tratamiento.
            for (const tratamiento of this.mascota.tratamientos) {
              this.tratamientoService.findById(tratamiento.id).subscribe(
                (tratamientoData) => {
                  this.tratamientos.push(tratamientoData);
                }
              );
            }
          }
        }
      )
    });
  }
}
