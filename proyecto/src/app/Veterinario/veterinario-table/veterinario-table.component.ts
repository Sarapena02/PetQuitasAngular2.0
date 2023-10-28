import { Component } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';

@Component({
  selector: 'app-veterinario-table',
  templateUrl: './veterinario-table.component.html',
  styleUrls: ['./veterinario-table.component.css']
})
export class VeterinarioTableComponent {

  veterinariosList!: Veterinario[];

  constructor(
    private veterinarioService: VeterinarioService
  ){
  }

  
  ngOnInit(): void {
    this.veterinarioService.findAll().subscribe(
      data =>
        this.veterinariosList = data
    )
  }

  eliminarVeterinario(veterinario: Veterinario){
    var index = this.veterinariosList.indexOf(veterinario);
    this.veterinariosList.splice(index, 1);
    this.veterinarioService.deleteById(veterinario.id);
  }

}
