import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-mascotas-activas',
  templateUrl: './mascotas-activas.component.html',
  styleUrls: ['./mascotas-activas.component.css']
})
export class MascotasActivasComponent {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() 
  activos!: number;

  @Input()
  inactivos!: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.initChat();
  }

  private initChat() {    
    
    //Se carga el grafico con los datos pasados
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Mascotas activas vs inactivas'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'mascotas',
        colorByPoint: true,
        data: [{
          name: 'Activos',
          y: this.activos ,
          color: '#8f7193'

        }, {
          name: 'Inactivos',
          y: this.inactivos,
          color: '#c0a0c3'
        }]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  
}


