import { Component, Input } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veterinario-detalle',
  templateUrl: './veterinario-detalle.component.html',
  styleUrls: ['./veterinario-detalle.component.css']
})
export class VeterinarioDetalleComponent {

  @Input()
  veterinario!: Veterinario

  //Inyeccion de dependecias
  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.veterinarioService.findById(id).subscribe(
        (data) => {
          this.veterinario = data
        }
      )
    })
  }

}
