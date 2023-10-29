import { Component } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tratamientos-mascota-table',
  templateUrl: './tratamientos-mascota-table.component.html',
  styleUrls: ['./tratamientos-mascota-table.component.css']
})
export class TratamientosMascotaTableComponent {

  tratamientoList!: Tratamiento[];

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.tratamientoService.getTratamientosMascota(id).subscribe(data => {
        this.tratamientoList = data;
        console.log(this.tratamientoList);
      });
    })

  }

}
