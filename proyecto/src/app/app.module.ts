import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Landing/landing/landing.component';
import { FormEditVeterinarioComponent } from './Veterinario/form-edit-veterinario/form-edit-veterinario.component';
import { FormVeterinarioComponent } from './Veterinario/form-veterinario/form-veterinario.component';
import { LogInVeterinarioComponent } from './Veterinario/log-in-veterinario/log-in-veterinario.component';
import { VeterinarioDetalleComponent } from './Veterinario/veterinario-detalle/veterinario-detalle.component';
import { VeterinarioTableComponent } from './Veterinario/veterinario-table/veterinario-table.component';
import { FormEditTratamientoComponent } from './Tratamiento/form-edit-tratamiento/form-edit-tratamiento.component';
import { FormTratamientoComponent } from './Tratamiento/form-tratamiento/form-tratamiento.component';
import { TratamientoAllComponent } from './Tratamiento/tratamiento-all/tratamiento-all.component';
import { TratamientoDetalleComponent } from './Tratamiento/tratamiento-detalle/tratamiento-detalle.component';
import { TratamientoTableComponent } from './Tratamiento/tratamiento-table/tratamiento-table.component';
import { FormEditMascotaComponent } from './Mascota/form-edit-mascota/form-edit-mascota.component';
import { FormMascotaComponent } from './Mascota/form-mascota/form-mascota.component';
import { MascotaDetalleComponent } from './Mascota/mascota-detalle/mascota-detalle.component';
import { TablaMascotaComponent } from './Mascota/tabla-mascota/tabla-mascota.component';
import { ErrorPageComponent } from './Error/error-page/error-page.component';
import { DrogaComponent } from './Droga/droga/droga.component';
import { ClienteDetalleComponent } from './Cliente/cliente-detalle/cliente-detalle.component';
import { FormClienteComponent } from './Cliente/form-cliente/form-cliente.component';
import { FormEditClienteComponent } from './Cliente/form-edit-cliente/form-edit-cliente.component';
import { LogInClienteComponent } from './Cliente/log-in-cliente/log-in-cliente.component';
import { TablaClienteComponent } from './Cliente/tabla-cliente/tabla-cliente.component';
import { DashboardAdminComponent } from './Admin/dashboard-admin/dashboard-admin.component';
import { LogInAdminComponent } from './Admin/log-in-admin/log-in-admin.component';
import { CantidadTratamientosTipoComponent } from './Admin/infoDashboard/cantidad-tratamientos-tipo/cantidad-tratamientos-tipo.component';
import { GananciasTotalesComponent } from './Admin/infoDashboard/ganancias-totales/ganancias-totales.component';
import { MascotasActivasComponent } from './Admin/infoDashboard/mascotas-activas/mascotas-activas.component';
import { Top3TratamientosComponent } from './Admin/infoDashboard/top3-tratamientos/top3-tratamientos.component';
import { TratamientosUltimoMesComponent } from './Admin/infoDashboard/tratamientos-ultimo-mes/tratamientos-ultimo-mes.component';
import { VentasTotalesComponent } from './Admin/infoDashboard/ventas-totales/ventas-totales.component';
import { VeterinariosActivosComponent } from './Admin/infoDashboard/veterinarios-activos/veterinarios-activos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FormEditVeterinarioComponent,
    FormVeterinarioComponent,
    LogInVeterinarioComponent,
    VeterinarioDetalleComponent,
    VeterinarioTableComponent,
    FormEditTratamientoComponent,
    FormTratamientoComponent,
    TratamientoAllComponent,
    TratamientoDetalleComponent,
    TratamientoTableComponent,
    FormEditMascotaComponent,
    FormMascotaComponent,
    MascotaDetalleComponent,
    TablaMascotaComponent,
    ErrorPageComponent,
    DrogaComponent,
    ClienteDetalleComponent,
    FormClienteComponent,
    FormEditClienteComponent,
    LogInClienteComponent,
    TablaClienteComponent,
    DashboardAdminComponent,
    LogInAdminComponent,
    CantidadTratamientosTipoComponent,
    GananciasTotalesComponent,
    MascotasActivasComponent,
    Top3TratamientosComponent,
    TratamientosUltimoMesComponent,
    VentasTotalesComponent,
    VeterinariosActivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
