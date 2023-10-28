import { Component } from '@angular/core';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { Tratamiento } from '../tratamiento';


@Component({
  selector: 'app-tratamiento-table',
  templateUrl: './tratamiento-table.component.html',
  styleUrls: ['./tratamiento-table.component.css']
})
export class TratamientoTableComponent {
  

  tratamientoList!: Tratamiento[];

  constructor(
    private tratamientoService: TratamientoService
  ){}



  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe(
      data =>
        this.tratamientoList = data
    )
  }

  eliminarTratamiento(tratamiento: Tratamiento){
    var index = this.tratamientoList.indexOf(tratamiento);
    this.tratamientoList.splice(index, 1);
    this.tratamientoService.deleteById(tratamiento.id);
  }
}
