import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/services/mascota/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validUrlValidator } from 'Ts/valid-url.validators';



@Component({
  selector: 'app-form-edit-mascota',
  templateUrl: './form-edit-mascota.component.html',
  styleUrls: ['./form-edit-mascota.component.css']
})
export class FormEditMascotaComponent {

  @Output()
  editMascotaEvent = new EventEmitter<Mascota>();

  @Input()
  mascota!: Mascota;

  mascotaForm!: FormGroup;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.mascotaForm = this.formBuilder.group({
      id: [null, Validators.required],
      nombre: [null, Validators.required],
      raza: [null, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*$')]],
      edad: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      enfermedad: [null, [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]*$')]],
      imagen: ['', [validUrlValidator()]],
      cliente: null,
      estado: null
    })
  }

  ngOnInit(): void {
    //busca la mascota a editar junto con el cliente asociado a esta
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.mascotaService.findById(id).pipe(
        mergeMap(
          (data) => {
            this.mascota = data;
            return this.mascotaService.findCliente(this.mascota.id);
          }
        )).subscribe(
          (data) => {
            this.mascota.cliente = data
            this.mascotaForm.patchValue({
              id: this.mascota.id,
              nombre: this.mascota.nombre,
              raza: this.mascota.raza,
              edad: this.mascota.edad,
              enfermedad: this.mascota.enfermedad,
              imagen: this.mascota.imagen,
              cliente: this.mascota.cliente,
              estado: this.mascota.estado
            })           
          }
        )
    })
  }

  editarMascota(form:any){
    //Primero realiza el update y una vez que el update se haya realizo entonces redirecciona a la tabla de mascotas
    if(this.mascotaForm.valid){
      this.mascotaService.update(this.mascotaForm.value).pipe(
        switchMap(() => {
          return this.router.navigate(['/mascotas/all']);
        })
      ).subscribe();
    }

  }
}
