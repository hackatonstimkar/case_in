
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
///import * as faker from "faker";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  constructor(private http: HttpClient){};
  // @ts-ignore
  @ViewChild('chart')chartRef: ElementRef;
  chartObj: Chart;
  url = 'https://miriteam-case-in.herokuapp.com?volt=186.760133652343&rotate=446.051881095647&pressure=88.1243683902603&vibration=51.498140095345&age=17&model=4';
  data = [5,4,1,8,0,4,5,4,1,8,0,4,5,4,1,8,0,4,5,4,1,8,0,4];
  labels = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
  ngOnInit() {
    this.chartObj = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'voltmeter',
            data: [],
            fill: false,
            borderColor: 'blue',
            backgroundColor: 'blue'
          }
        ]
      },

    });

    setInterval(() => {
      for(let i =0 ; i<this.data.length-1; i++){
        this.data[i]=this.data[i+1];
      }
      this.data[this.data.length-1]=Math.random();
      const d = this.chartObj.data;
      d.labels = this.labels;
      d.datasets[0].data = this.data;
      this.chartObj.update();
    }, 500);
    this.https();
  }
  https(){
    this.http.get(this.url).subscribe(value => {console.log(value); });
  }
}
