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
  private title: string;
  private currency: string;
  private market: string;
  private timeframe: string;

  private crypto_OHLC: any;
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
      console.log(results["Data"]);
      this.crypto_OHLC = results["Data"];
    })

    this.loaded = true;
    this.title = currency + " / " + market;
  }

}
