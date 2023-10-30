import { Component } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tratamientos-mascota-table',
  templateUrl: './tratamientos-mascota-table.component.html',
  styleUrls: ['./tratamientos-mascota-table.component.css']
})
export class TratamientosMascotaTableComponent {

  tratamientoList!: Tratamiento[];

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute,
    private router: Router
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
  redirectToFormulario() {
    this.router.navigate(['/tratamiento/add']);
  }

}
