import { Component } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';

@Component({
  selector: 'app-tabla-mascotas',
  templateUrl: './tabla-mascotas.component.html',
  styleUrls: ['./tabla-mascotas.component.css']
})
export class TablaMascotasComponent {

  //atributos
  mascotasList!: Mascota[];

  mascotaEditar!: Mascota;

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

  //busca el id de la mascota y la elimina
  eliminarMascota(mascota: Mascota){
    var index = this.mascotasList.indexOf(mascota);
    this.mascotasList.splice(index, 1);
    this.mascotaService.deleteById(mascota.id);
  }
}
