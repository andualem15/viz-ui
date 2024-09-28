import { Component , OnInit} from '@angular/core';
import Highcharts from 'highcharts/highmaps';
import { ExportingAccessibilityOptions } from 'highcharts/highmaps';

import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);


//import worldMap from '@highcharts/map-collection/custom/world.geo.json';
/* import { worldMap } from '../assets/map/world';
import { amharaZonalMap } from '../assets/map/amhara-zonal-map';

import { DatasetsService } from './services/datasets.service';
import { Datasets } from './services/types';
import { pentavalent } from './services/types'; */

import { DatasetsService } from '../../../services/datasets.service';
import { Datasets, pentavalent } from '../../../services/types';

import { amharaZonalMap } from '../../../../assets/map/amhara-zonal-map';

@Component({
  selector: 'app-pentavalent',
  templateUrl: './pentavalent.component.html',
  styleUrl: './pentavalent.component.css'
})
export class PentavalentComponent implements OnInit {
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

  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.DatasetsService.getDatasets(1).subscribe(value => {
      this.dataSet = value;
      this.isLoadingDatasets = false;
      //  var dataVal = JSON.parse(this.dataSet);
      // console.log(this.dataSet);
      for (var i in this.dataSet.datasetvalue) {
        this.keyVal.push([this.dataSet.datasetvalue[i].ISO, parseFloat(this.dataSet.datasetvalue[i].Pentavalent)]);
      }
    });
 
    const d = this.keyVal;
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
        map: amharaZonalMap,
        events: {
          load: function(){
            const chart = this
            fakeFetch(d).then(function(data){
              chart.series[0].setData(data as any);
            })
          }
        }
      },
      title: {
        text: "Full Pentavalent percentage disparities in the Amhara region"
      },
      subtitle: {
        text:
          'Source map: <a href="http://im.aphi.gov.et">APHI, RDMC</a>'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          alignTo: "spacingBox"
        }
      },
      legend: {
        enabled: true
      },
      credits:
      {
        enabled: false
      },
      exporting: {
        csv:
        {
          annotations:
          {
            itemDelimiter: ";",
            join: false
          },
          columnHeaderFormatter: null,
          dateFormat: "%Y-%m-%d %H:%M:%S",
          decimalPoint: null,
          itemDelimiter: null,
          lineDelimiter: " "
        },
        enabled: true
      },
      colorAxis: {
        min: 0,
        minColor: "#f0a930",
        maxColor: "#a86b02"
      },
      series: [
        {
          type: "map",
          name: "Random data",
          color: "#BCDA55",
          states: {
            hover: {
              color: "#BADA55"
            }
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          },
          allAreas: true,
          data: []
        }
      ]
    };

    //this.chartOptions.series.data = this.keyVal;
    // this.chartOptions.series?[0].push(this.keyVal);
   // console.log(this.keyVal);
    console.log(this.chartOptions);
    this.Highcharts.setOptions(this.chartOptions);
  }



}
