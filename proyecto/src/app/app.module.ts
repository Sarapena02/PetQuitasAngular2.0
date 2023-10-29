import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
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
import { TratamientoDetalleComponent } from './Tratamiento/tratamiento-detalle/tratamiento-detalle.component';
import { TratamientoTableComponent } from './Tratamiento/tratamiento-table/tratamiento-table.component';
import { FormEditMascotaComponent } from './Mascota/form-edit-mascota/form-edit-mascota.component';
import { FormMascotaComponent } from './Mascota/form-mascota/form-mascota.component';
import { MascotaDetalleComponent } from './Mascota/mascota-detalle/mascota-detalle.component';
import { TablaMascotasComponent } from './Mascota/tabla-mascotas/tabla-mascotas.component';
import { ErrorPageComponent } from './Error/error-page/error-page.component';
import { DrogaComponent } from './Droga/droga.component';
import { ClienteDetalleComponent } from './Cliente/cliente-detalle/cliente-detalle.component';
import { ClienteFormComponent } from './Cliente/form-cliente/cliente-form.component';
import { FormEditClienteComponent } from './Cliente/form-edit-cliente/form-edit-cliente.component';
import { LogInClienteComponent } from './Cliente/log-in-cliente/log-in-cliente.component';
import { ClienteTablaComponent } from './Cliente/tabla-cliente/tabla-cliente.component';
import { DashboardAdminComponent } from './Admin/dashboard-admin/dashboard-admin.component';
import { LogInAdminComponent } from './Admin/log-in-admin/log-in-admin.component';
import { CantidadTratamientosTipoComponent } from './Admin/infoDashboard/cantidad-tratamientos-tipo/cantidad-tratamientos-tipo.component';
import { GananciasTotalesComponent } from './Admin/infoDashboard/ganancias-totales/ganancias-totales.component';
import { MascotasActivasComponent } from './Admin/infoDashboard/mascotas-activas/mascotas-activas.component';
import { Top3TratamientosComponent } from './Admin/infoDashboard/top3-tratamientos/top3-tratamientos.component';
import { TratamientosUltimoMesComponent } from './Admin/infoDashboard/tratamientos-ultimo-mes/tratamientos-ultimo-mes.component';
import { VentasTotalesComponent } from './Admin/infoDashboard/ventas-totales/ventas-totales.component';
import { VeterinariosActivosComponent } from './Admin/infoDashboard/veterinarios-activos/veterinarios-activos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TratamientosMascotaTableComponent } from './Tratamiento/tratamientos-mascota-table/tratamientos-mascota-table.component';

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
    TratamientoDetalleComponent,
    TratamientoTableComponent,
    FormEditMascotaComponent,
    FormMascotaComponent,
    MascotaDetalleComponent,
    TablaMascotasComponent,
    ErrorPageComponent,
    DrogaComponent,
    ClienteDetalleComponent,
    ClienteFormComponent,
    FormEditClienteComponent,
    LogInClienteComponent,
    ClienteTablaComponent,
    DashboardAdminComponent,
    LogInAdminComponent,
    CantidadTratamientosTipoComponent,
    GananciasTotalesComponent,
    MascotasActivasComponent,
    Top3TratamientosComponent,
    TratamientosUltimoMesComponent,
    VentasTotalesComponent,
    VeterinariosActivosComponent,
    TratamientoTableComponent,
    TratamientosMascotaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
