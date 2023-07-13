import { Component,Input, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  ngOnInit() {
    this.doughnutChartData.datasets[0].data = this.dataDona;
    this.doughnutChartData.labels = this.doughnutChartLabels;
  }

  @Input() titulo: string = '';
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') dataDona: number[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [100,20,40],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



}
