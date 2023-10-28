import { Component } from '@angular/core';
import { Droga } from './droga';
import { DrogaService } from '../Services/Droga/droga.service';

@Component({
  selector: 'app-droga',
  templateUrl: './droga.component.html',
  styleUrls: ['./droga.component.css']
})
export class DrogaComponent {

  drogaList!: Droga[];

  constructor(
    private drogaService: DrogaService,
  ){}

  ngOnInit(): void {
    this.drogaService.findAll().subscribe(
      data =>
        this.drogaList = data
    )
  }
}
