import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validUrlValidator } from 'Ts/valid-url.validators';


@Component({
  selector: 'app-form-edit-veterinario',
  templateUrl: './form-edit-veterinario.component.html',
  styleUrls: ['./form-edit-veterinario.component.css']
})
export class FormEditVeterinarioComponent {
  @Output()
  editMascotaEvent = new EventEmitter<Veterinario>();

  @Input()
  veterinario!: Veterinario;

  veterinarioForm!: FormGroup;

  constructor(
    private veterinarioService: VeterinarioService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.veterinarioForm = this.formBuilder.group({
      id: [null, Validators.required],
      nombre: [null, Validators.required],
      cedula: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      especialidad: [null, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*$')]],
      contrasenia: [null, Validators.required],
      foto: ['', [validUrlValidator()]],
      estado: null
    })
  }

  ngOnInit(): void {
    //busca el veterinario a editar
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.veterinarioService.findById(id).subscribe(
        (data) => {
          this.veterinario = data
          this.veterinarioForm.patchValue({
            id: this.veterinario.id,
            nombre: this.veterinario.nombre,
            cedula: this.veterinario.cedula,
            especialidad: this.veterinario.especialidad,
            contrasenia: this.veterinario.contrasenia,
            foto: this.veterinario.foto,
            estado: this.veterinario.estado
          })
        }
      )
    })
  }

  editarVeterinario(form:any){
    //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de veterinarios
    if(this.veterinarioForm.valid){
      this.veterinarioService.update(this.veterinarioForm.value).pipe(
        switchMap(() => {
          return this.router.navigate(['/veterinarios/all']);
        })
      ).subscribe();
    }
  }
}
