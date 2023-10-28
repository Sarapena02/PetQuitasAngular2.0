import { Component, Input } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mascota-detalle',
  templateUrl: './mascota-detalle.component.html',
  styleUrls: ['./mascota-detalle.component.css']
})
export class MascotaDetalleComponent {

  @Input()
  mascota!: Mascota

  //Inyeccion de dependecias
  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.mascotaService.findById(id).subscribe(
        (data) => {
          this.mascota = data
        }
      )
    })
  }

}
