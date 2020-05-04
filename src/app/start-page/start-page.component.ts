import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'; 


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  
  canvas: any;
  ctx: any;

  chartTypes = ["pie","doughnut","bar"];
  selectedType="pie";
  
  constructor() {
   }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.loadChart();
  }

  changeChart(){
    this.loadChart();
  }

  loadChart(){
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: this.selectedType,
      data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
              label: '# of Votes',
              data: [1,2,3],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {}
    });
  }
}
