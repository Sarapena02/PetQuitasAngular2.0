import { Component } from '@angular/core';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { Tratamiento } from '../tratamiento';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tratamiento-table',
  templateUrl: './tratamiento-table.component.html',
  styleUrls: ['./tratamiento-table.component.css']
})
export class TratamientoTableComponent {
  tratamientoList: Tratamiento[] = [];
  idVeterinario: number = 0;

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.idVeterinario = params['idVeterinario'];
    });
  }

  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe(data => {
      // Filtra los tratamientos por el ID del veterinario
      this.tratamientoList = data.filter(tratamiento => tratamiento.veterinario && tratamiento.veterinario.id === this.idVeterinario);
    });
  }
  agregarTratamiento(nuevoTratamiento: Tratamiento) {
    this.tratamientoService.addTratamiento(nuevoTratamiento).subscribe(
        (tratamientoAgregado) => {
            this.tratamientoList.push(tratamientoAgregado); // Agrega el tratamiento a la lista
        },
        (error) => {
            console.error('Error al agregar tratamiento:', error);
        }
    );
}
eliminarTratamiento(tratamiento: Tratamiento) {
  this.tratamientoService.deleteById(tratamiento.id).subscribe(
      () => {
          // Elimina el tratamiento de la lista
          const index = this.tratamientoList.indexOf(tratamiento);
          if (index !== -1) {
              this.tratamientoList.splice(index, 1);
          }
      },
      (error) => {
          console.error('Error al eliminar tratamiento:', error);
      }
  );
}

}
