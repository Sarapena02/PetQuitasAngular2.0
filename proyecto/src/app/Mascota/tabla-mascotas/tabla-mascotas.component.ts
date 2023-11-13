import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from '../../Services/Mascota/mascota.service';

@Component({
  selector: 'app-tabla-mascotas',
  templateUrl: './tabla-mascotas.component.html',
  styleUrls: ['./tabla-mascotas.component.css']
})
export class TablaMascotasComponent {
  //atributos
  mascotasList!: Mascota[];

  mascotaEditar!: Mascota;

  filtroNombre: string = '';


  //constructor
  constructor(
    private mascotaService: MascotaService
  ){
  }

  //cuando entra en el componenete carga todas las mascotas
  ngOnInit(): void {
    this.mascotaService.findAll().subscribe(
      data =>
        this.mascotasList = data
    )
  }


  //metodos
  buscarMascotas() {
    if (this.filtroNombre) {
      this.mascotasList = this.mascotasList.filter(mascota => {
        return mascota.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
      });
    } else {
      // Si el campo de búsqueda está vacío, restaura la lista original.
      this.mascotaService.findAll().subscribe(
        data => this.mascotasList = data
      );
    }
  }

  //busca el id de la mascota y la elimina
  eliminarMascota(mascota: Mascota){
    var index = this.mascotasList.indexOf(mascota);
    this.mascotasList.splice(index, 1);
    this.mascotaService.deleteById(mascota.id);
  }
}
