import { Component, OnInit } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { CryptoOhlcService, OHLC } from '../services/crypto-ohlc.service';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css'],
  providers: [CryptoOhlcService]
})
export class CryptoChartComponent implements OnInit{

  private loaded: boolean;
  private name: string;

  cryptoOHLC: OHLC[];

  constructor(private ohlc:CryptoOhlcService) {
  }

  ngOnInit() {
    this.loaded = false;
  }

  chart(name: string){
    this.cryptoOHLC = this.ohlc.getOHLC();
    this.name = name;
    this.loaded = true;
  }
}
