import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';
// import { ChartSeries } from "ng-apexcharts";

// import {  ChartType, ChartSeries } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-water-usage',
  templateUrl: './water-usage.component.html',
  styleUrls: ['./water-usage.component.scss'],
})
export class WaterUsageComponent implements OnInit {
  chartOptions: ChartOptions = {
    series: [],
    chart: {
      type: 'line',
      height: 350,
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
      },
    },
    dataLabels: undefined,
    grid: undefined,
    stroke: undefined,
    title: undefined,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/water-usage/NFA9149')
    .subscribe((data) => {
      const seriesData: ApexAxisChartSeries[] = [
        { 
            name: 'Water Usage',  
            data: data.data.map(item => ({ x: new Date(item.Timestamp).getTime(), y: item.UsageAmount })) 
        }
    ];
    
    

      this.chartOptions.series = seriesData;
    });
  }
}
