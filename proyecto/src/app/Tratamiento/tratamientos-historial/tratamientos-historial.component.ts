import { Component, Input, OnInit } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/Services/Cliente/cliente.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tratamientos-historial',
  templateUrl: './tratamientos-historial.component.html',
  styleUrls: ['./tratamientos-historial.component.css']
})
export class TratamientosHistorialComponent implements OnInit {

  @Input() tratamiento!: Tratamiento;
  listaTratamientos: Tratamiento[] = [];

  constructor(
    private tratamientoService: TratamientoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    
    this.route.params.pipe(take(1)).subscribe(params => {
      const clienteId = +params['clienteId'];
      const mascotaId = +params['mascotaId'];

      // Llama al servicio para obtener los tratamientos
      this.tratamientoService.getTratamientosMascota(mascotaId).subscribe({
        next: tratamientos => {
          // Muestra los tratamientos en la consola
          console.log('Tratamientos:', tratamientos);
          
          // Asigna los tratamientos a la propiedad del componente
          this.listaTratamientos = tratamientos;
        },
        error: error => {
          // Maneja los errores y muestra en la consola
          console.error('Error al obtener tratamientos:', error);
          // Puedes agregar lógica adicional para manejar el error según tus necesidades
        }
      });
    });
  }
}
