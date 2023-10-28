import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-tratamientos-ultimo-mes',
  templateUrl: './tratamientos-ultimo-mes.component.html',
  styleUrls: ['./tratamientos-ultimo-mes.component.css']
})
export class TratamientosUltimoMesComponent {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input()
  label!: string;

  @Input()
  tratamientosUltimoMes!: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.initChart();
  }

  /*ngOnInit(): void {
    console.log(this.tratamientosUltimoMes);
    
    this.initChart();
  }*/

  private initChart() {    
    
    //Se carga el grafico con los datos pasados
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: [10, 15, 20, 18, 22, 25, 23, 30, 28, 35, 32, 28, 34, 38, 35, 40],
        color: '#c0a0c3'
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
