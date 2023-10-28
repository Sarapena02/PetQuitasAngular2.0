import { Component, Input, OnInit } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veterinario-detalle',
  templateUrl: './veterinario-detalle.component.html',
  styleUrls: ['./veterinario-detalle.component.css']
})
export class VeterinarioDetalleComponent implements OnInit {
  @Input() veterinario!: Veterinario;
  veterinarioId: number = 0; // Variable para almacenar el ID del veterinario

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.veterinarioId = Number(params.get('idVeterinario'));
      this.veterinarioService.findById(this.veterinarioId).subscribe(
        (data) => {
          this.veterinario = data;
        }
      );
    });
  }
}
