import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-cantidad-tratamientos-tipo',
  templateUrl: './cantidad-tratamientos-tipo.component.html',
  styleUrls: ['./cantidad-tratamientos-tipo.component.css']
})
export class CantidadTratamientosTipoComponent {

  Highcharts = Highcharts;
  chartOptions = {};


  @Input()
  drogasList!: any[];


  ngOnChanges(changes: SimpleChanges): void {  
    this.initChart();
  }


  private initChart() {    
    console.log(this.drogasList);
    //Se carga el grafico con los datos pasados
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column'
      },
      title: {
        text: 'Tratamientos ultimo mes'
      },
      xAxis: {
        title: {
          text: 'Medicamento' // Nombre del eje x
        }
      },
      yAxis: {
        title: {
          text: 'Cantidad' // Nombre del eje y
        }
      },

      plotOptions: {
        column: { // Utilizamos 'column' para gráfico de columnas
          dataLabels: {
            enabled: true, // Habilitar etiquetas de datos
            format: '{point.name}: {point.y}', // Formato personalizado
            color: '#000', // Color del texto
            crop: false,
            overflow: 'none'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false // Desactivar la leyenda
      },
      series: [
        {
          colorByPoint: true,
          data: this.drogasList
        }
      ]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
