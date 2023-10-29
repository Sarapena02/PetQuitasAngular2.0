import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/Droga/droga';
import { Mascota } from 'src/app/Mascota/mascota';
import { DrogaService } from 'src/app/Services/Droga/droga.service';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { Veterinario } from 'src/app/Veterinario/veterinario';
import { Tratamiento } from '../tratamiento';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { switchMap } from 'rxjs';

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
    

    if(this.formTratamiento.valid){
      if(this.selectedDroga.unidadesDisponibles>0){
        this.sendTratamiento.fecha = this.formTratamiento.get('fecha')?.value;
      this.sendTratamiento.droga = this.formTratamiento.get('droga')?.value;
      this.sendTratamiento.mascota = this.formTratamiento.get('mascota')?.value;
        this.tratamientoService.addTratamiento(this.sendTratamiento).pipe(     
          switchMap(() => {
            console.log(this.sendTratamiento);
            this.actualizarDroga();
            return this.router.navigate(['/tratamiento/all']);
          })
        ).subscribe();
      }
    }
  }

  actualizarDroga(){
    this.selectedDroga.unidadesDisponibles--;
    this.selectedDroga.unidadesVendidas++;
    this.drogaService.update(this.selectedDroga).subscribe();
  }

  
  
}
