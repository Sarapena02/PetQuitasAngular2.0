import { Component, OnInit } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tratamientos-historial',
  templateUrl: './tratamientos-historial.component.html',
  styleUrls: ['./tratamientos-historial.component.css']
})
export class TratamientosHistorialComponent implements OnInit {

  listaTratamientos: Tratamiento[] = [];
  nombreMascota: string = ''; // Agrega esta línea

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const clienteId = +params['clienteId'];
      const mascotaId = +params['mascotaId'];

      this.tratamientoService.getTratamientosMascota(mascotaId).subscribe({
        next: tratamientos => {
          this.listaTratamientos = tratamientos;

          // Actualiza el nombre de la mascota si hay tratamientos
          if (tratamientos.length > 0) {
            this.nombreMascota = tratamientos[0].mascota?.nombre || '';
          }
        },
        error: error => {
          console.error('Error al obtener tratamientos:', error);
        }
      });
    });
  }
}
