import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DrogaService } from 'src/app/Services/Droga/droga.service';
import { TratamientoService } from 'src/app/Services/Tratamiento/tratamiento.service';
import { VeterinarioService } from 'src/app/Services/Veterinario/veterinario.service';
import { MascotaService } from 'src/app/services/mascota/mascota.service';



@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  @Output()
  addAdminloginEvent = new EventEmitter<String>();

  mascotasactivas!: number;
  mascotasinactivas!: number;

  veterinariosInactivos!: number;
  veterinariosActivos!: number;

  tratamientosUltimoMes!: number;

  ventasTotales!: number;

  gananciasTotales!: number;

  drogasXtratamiento!: any[];

  

  constructor(
    private mascotaService: MascotaService, 
    private veterinarioService: VeterinarioService, 
    private tratamentoService: TratamientoService,
    private drogaService: DrogaService
  ){}


  ngOnInit(): void {
    this.addAdminloginEvent.emit('admin');

    //Mascotas activas
    this.mascotaService.findAllActivos().subscribe(
      (activos: number) => {
      this.mascotasactivas = activos;      
    })
    //Mascotas inactivas
    this.mascotaService.findAllInactivos().subscribe(
      (inactivos: number) => {
      this.mascotasinactivas = inactivos;
    })

    //Veterinarios activos
    this.veterinarioService.findAllActivos().subscribe(
      (activos: number) => {
      this.veterinariosActivos = activos;
      }
    )
    //Veterinarios inactivos
    this.veterinarioService.findAllInactivos().subscribe(
      (inactivos: number) => {
      this.veterinariosInactivos = inactivos;
      }
    )

    //Tratamientos del ultimo mes
    this.tratamentoService.findAllTratamientosUltimoMes().subscribe(
      (tratamientosUltimoMes: number) => {
      this.tratamientosUltimoMes = tratamientosUltimoMes;
      }
    )

    //Ventas totales
    this.drogaService.ventasTotales().subscribe(
      (ventasTotales: number) => {
        this.ventasTotales = ventasTotales
      }
    )

    //Ganancias totales
    this.drogaService.gananciasTotales().subscribe(
      (gananciasTotales: number) => {
        this.gananciasTotales = gananciasTotales
      }
    )

    //Drogas por tratamiento
    this.tratamentoService.findTratamientosXdrogaUltimoMes().subscribe(
      (drogasXtratamiento: any[]) => {     
        this.drogasXtratamiento = drogasXtratamiento.map(item => ({
          name: item[0], // Nombre del medicamento
          y: item[1],    // Cantidad
        }));  
      }
    )

  }
}
