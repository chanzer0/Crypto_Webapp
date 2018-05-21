import { Component, OnInit } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { CryptoOhlcService } from '../services/crypto-ohlc.service';
import { OHLC } from '../models/ohlc';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css'],
  providers: [CryptoOhlcService]
})
export class CryptoChartComponent implements OnInit{

  private loaded: boolean;

  private currency: string;
  private market: string;
  private timeframe: string;

  private cryptoOHLC: any;
  private objectKeys = Object.keys;

  constructor(private ohlc:CryptoOhlcService) {
  }

  ngOnInit() {
    this.loaded = false;
  }

  chart(currency: string, market:string, timeframe: string){
    this.currency = currency;
    this.market = market;
    this.timeframe = timeframe; 

    this.ohlc.getOHLC(this.timeframe, this.currency, this.market)
    .subscribe(results => {
      this.cryptoOHLC = results;
      console.log(results);
    })
    this.loaded = true;
    console.log('My object : ' + this.cryptoOHLC);
  }

}
