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
  idVeterinario!: number;

  constructor(
    private tratamientoService: TratamientoService,
  ) {
    this.idVeterinario = localStorage.getItem('idVeterinario') ? Number(localStorage.getItem('idVeterinario')) : 0;
  }

  ngOnInit(): void {        
    this.tratamientoService.getTratamientoXveterinario(this.idVeterinario).subscribe(data => {
      // Filtra los tratamientos por el ID del veterinario
      this.tratamientoList = data;
    });
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
