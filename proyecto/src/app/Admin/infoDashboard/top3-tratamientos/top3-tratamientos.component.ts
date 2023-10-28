import { Component } from '@angular/core';
import { Droga } from 'src/app/Droga/droga';
import { DrogaService } from 'src/app/Services/Droga/droga.service';


@Component({
  selector: 'app-top3-tratamientos',
  templateUrl: './top3-tratamientos.component.html',
  styleUrls: ['./top3-tratamientos.component.css']
})
export class Top3TratamientosComponent {

  drogasList!: Droga[];

  displayedColumns: string[] = ['nombre', 'unidades'];

  constructor(
    private drogaService: DrogaService
  ) { }
  ngOnInit(): void {
    this.drogaService.top3Drogas().subscribe(
      data =>
        this.drogasList = data
    )
  }

}
