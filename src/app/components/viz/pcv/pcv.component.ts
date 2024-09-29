import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pcv',
  templateUrl: './pcv.component.html',
  styleUrl: './pcv.component.css'
})
export class PcvComponent {
  Highcharts: typeof Highcharts = Highcharts;

  data1 = [70, 63.9, 55.5];
  data2 = [78.8, 76.6, 72.7];
  name1= "Ethiopia";

  chartOptions: Highcharts.Options = {
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

//  console.log(chartOptions);
}
