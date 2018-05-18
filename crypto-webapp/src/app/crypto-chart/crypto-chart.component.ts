import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css']
})
export class CryptoChartComponent implements OnInit {

  private open: number[];
  private high: number[];
  private low: number[];
  private close: number[];

  constructor() { }

  ngOnInit() {
  }

}
