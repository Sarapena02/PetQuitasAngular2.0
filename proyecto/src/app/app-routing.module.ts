import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './Admin/dashboard-admin/dashboard-admin.component';
import { LogInAdminComponent } from './Admin/log-in-admin/log-in-admin.component';
import { ClienteDetalleComponent } from './Cliente/cliente-detalle/cliente-detalle.component';
import { FormEditClienteComponent } from './Cliente/form-edit-cliente/form-edit-cliente.component';
import { LogInClienteComponent } from './Cliente/log-in-cliente/log-in-cliente.component';
import { ErrorPageComponent } from './Error/error-page/error-page.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { FormEditMascotaComponent } from './Mascota/form-edit-mascota/form-edit-mascota.component';
import { FormMascotaComponent } from './Mascota/form-mascota/form-mascota.component';
import { MascotaDetalleComponent } from './Mascota/mascota-detalle/mascota-detalle.component';
import { FormEditTratamientoComponent } from './Tratamiento/form-edit-tratamiento/form-edit-tratamiento.component';
import { FormTratamientoComponent } from './Tratamiento/form-tratamiento/form-tratamiento.component';
import { TratamientoAllComponent } from './Tratamiento/tratamiento-all/tratamiento-all.component';
import { TratamientoDetalleComponent } from './Tratamiento/tratamiento-detalle/tratamiento-detalle.component';
import { FormEditVeterinarioComponent } from './Veterinario/form-edit-veterinario/form-edit-veterinario.component';
import { FormVeterinarioComponent } from './Veterinario/form-veterinario/form-veterinario.component';
import { LogInVeterinarioComponent } from './Veterinario/log-in-veterinario/log-in-veterinario.component';
import { VeterinarioDetalleComponent } from './Veterinario/veterinario-detalle/veterinario-detalle.component';
import { VeterinarioTableComponent } from './Veterinario/veterinario-table/veterinario-table.component';
import { TablaMascotasComponent } from './Mascota/tabla-mascotas/tabla-mascotas.component';
import { ClienteFormComponent } from './Cliente/form-cliente/cliente-form.component';
import { ClienteTablaComponent } from './Cliente/tabla-cliente/tabla-cliente.component';

const routes: Routes = [
  { path: 'mascota/find/:id', component: MascotaDetalleComponent },
  { path: 'mascotas/all', component: TablaMascotasComponent },
  { path: 'mascota/add', component: FormMascotaComponent },
  { path: 'mascota/edit/:id', component: FormEditMascotaComponent },
  { path: 'cliente/add', component: ClienteFormComponent },
  { path: 'cliente/edit/:id', component: FormEditClienteComponent },
  { path: 'clientes/all', component: ClienteTablaComponent },
  { path: 'cliente/find/:id', component: ClienteDetalleComponent },
  { path: 'home', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },  
  { path: 'logInCliente', component: LogInClienteComponent },
  { path: 'logInVet', component: LogInVeterinarioComponent },
  { path: 'logInAdmin', component: LogInAdminComponent },
  { path: 'admin/dashboard', component: DashboardAdminComponent },
  { path: 'veterinarios/all', component: VeterinarioTableComponent },
  { path: 'veterinario/add', component: FormVeterinarioComponent },
  { path: 'veterinario/edit/:id', component: FormEditVeterinarioComponent },
  { path: 'veterinario/find/:id', component: VeterinarioDetalleComponent },
  { path: 'tratamiento/add', component: FormTratamientoComponent },
  { path: 'tratamiento/all', component: TratamientoAllComponent },
  { path: 'tratamiento/edit/:id', component: FormEditTratamientoComponent },
  { path: 'tratamiento/find/:id', component: TratamientoDetalleComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
