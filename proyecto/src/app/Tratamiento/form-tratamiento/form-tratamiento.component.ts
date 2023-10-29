import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/Droga/droga';
import { Mascota } from 'src/app/Mascota/mascota';
import { DrogaService } from 'src/app/Services/Droga/droga.service';
import { MascotaService } from '../../Services/Mascota/mascota.service';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { Veterinario } from 'src/app/Veterinario/veterinario';
import { Tratamiento } from '../tratamiento';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { EMPTY, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-form-tratamiento',
  templateUrl: './form-tratamiento.component.html',
  styleUrls: ['./form-tratamiento.component.css']
})
export class FormTratamientoComponent {

  formTratamiento: FormGroup

  sendTratamiento = {} as Tratamiento;

  drogaList!: Droga[]
  mascotaList!: Mascota[]
  veterinarioList!: Veterinario[]

  selectedDroga!: Droga
  selectedMascota!: Mascota
  selectedVeterinario!: Veterinario

  minDate: string

  idVeterinario!: number
  
  constructor(
    private drogaService: DrogaService,
    private mascotaService: MascotaService,
    private VeterinarioService: VeterinarioService,
    private tratamientoService: TratamientoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.formTratamiento = this.formBuilder.group({
      fecha: '',
      droga: null,
      mascota: null,
      veterinario: null
    })
    this.minDate = new Date().toISOString().split('T')[0];
    this.idVeterinario = localStorage.getItem('idVeterinario') ? Number(localStorage.getItem('idVeterinario')) : 0;


  }

  ngOnInit(): void {
    //buscar todas las drogas
    this.drogaService.findAll().subscribe(
      (data) => {
        this.drogaList = data
      }
    )
    //buscar todas las mascotas
    this.mascotaService.findAll().subscribe(
      (data) => {
        this.mascotaList = data
      }
    )
    //asigna el veterinario con sesion iniciada
    this.VeterinarioService.findById(this.idVeterinario).subscribe(
      (data) => {
        this.sendTratamiento.veterinario = data
      }
    )
  }


  guardarTratamiento(){
    if (this.formTratamiento.valid) {      
      // Se busca la droga que se seleccionó en el formulario
      this.drogaService.findByName(this.formTratamiento.get('droga')?.value).pipe(
        mergeMap((data: Droga) => {
          // Verifica si la propiedad 'unidadesDisponibles' es mayor que 0
            this.sendTratamiento.droga = data;
            this.selectedDroga = data
            console.log(this.selectedDroga);
            
          if (data.unidadesDisponibles > 0) {
            this.actualizarDroga();
            // Se busca la mascota que se seleccionó en el formulario
            return this.mascotaService.findByName(this.formTratamiento.get('mascota')?.value);
          } else {
            // Realiza alguna acción en caso de que 'unidades' sea 0 o menos
            return EMPTY; // Devuelve un observable vacío para interrumpir la cadena de operadores
          }
        })
      ).pipe(
        mergeMap((data: Mascota) => {
          this.sendTratamiento.mascota = data;
          this.sendTratamiento.fecha = this.formTratamiento.get('fecha')?.value;
          // Se añade el tratamiento
          return this.tratamientoService.addTratamiento(this.sendTratamiento);
        })
      ).subscribe(
        () => {
          // Redirecciona a la página de todos los tratamientos
          this.router.navigate(['/tratamiento/all']);
        }
      );
    }
  }

  actualizarDroga(){
    this.selectedDroga.unidadesDisponibles--;
    this.selectedDroga.unidadesVendidas++;
    this.drogaService.update(this.selectedDroga).subscribe();
  }

  
  
}
