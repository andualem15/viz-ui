import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ExportingAccessibilityOptions } from 'highcharts/highmaps';

import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

import { DatasetsService } from '../../../services/datasets.service';
@Component({
  selector: 'app-pcv',
  templateUrl: './pcv.component.html',
  styleUrl: './pcv.component.css'
})
export class PcvComponent implements OnInit {
  isLoadingDatasets = true;
  dataSet: any;
  keyVal: any[] = [];

  title = 'viz-ui';
  constructor(
    private DatasetsService: DatasetsService
  ) {

  }
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartOptions: Highcharts.Options = {};
  chartDataValue: any[] = [];

  /* data1 = [70, 63.9, 55.5];
  data2 = [78.8, 76.6, 72.7]; */
  data1: any[] = [];
  data2: any[] = [];
  name1= "Ethiopia";
  
  ngOnInit(): void {

    //throw new Error('Method not implemented.');
    this.DatasetsService.getDatasets(2).subscribe(value => {
      this.dataSet = value;
      this.isLoadingDatasets = false;
      //  var dataVal = JSON.parse(this.dataSet);
      // console.log(this.dataSet);
      for (var i in this.dataSet.datasetvalue) {
        if(this.dataSet.datasetvalue[i].Region == 'Ethiopia')
          this.data1.push(this.dataSet.datasetvalue[i].Coverage);
        else
        this.data2.push(this.dataSet.datasetvalue[i].Coverage);
//        this.keyVal.push([this.dataSet.datasetvalue[i].ISO, parseFloat(this.dataSet.datasetvalue[i].Pentavalent)]);
      }
    });

 
    const d1 = this.data1;
    const d2 = this.data2;
    const fakeFetch = function(data: any){
      return new Promise(function (resolve, reject){
        setTimeout(function(){
          if(data){
            resolve(data)
          }else{
            reject(data)
          }
        }, 3000)
      })
    }

  this.chartOptions = {

    chart: {
      events: {
        load: function(){
          const chart = this
          fakeFetch(d1).then(function(data){
            chart.series[0].setData(data as any);
          }),

          fakeFetch(d2).then(function(data){
            chart.series[1].setData(data as any);
          })
        }
      }
    },
    title: {
      text: "Pneumococcal Conjugate Vaccination (PCV) Coverage"
    },
    xAxis: {
      categories: [
        "PVV 1",
        "PCV 2",
        "PCS 3"
      ]
    },
    yAxis: {
      title: {
        text: "---"
      }
    },
    series: [
      {
        name: this.name1,
        type: "spline",
        data: this.data1
      },
      {
        type: "spline",
        data: this.data2,
        name: "Amhara",
        color: "#3183F5"
      }
    ]
  };

 //console.log(chartOptions);
}
}
