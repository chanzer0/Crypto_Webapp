import { Component, OnInit } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';
import { CryptoService } from '../services/crypto.service';
import { OHLC } from '../models/ohlc';

@Component({
  selector: 'app-crypto-chart',
  templateUrl: './crypto-chart.component.html',
  styleUrls: ['./crypto-chart.component.css'],
  providers: [CryptoService]
})

export class CryptoChartComponent implements OnInit {

  public _loaded: boolean;
  public _title: string;
  public _currency: string;
  public _market: string;
  public _timeframe: string;

  public _OHLC: any;
  public _objectKeys = Object.keys;

  constructor(private cryptoService: CryptoService) {
  }

  ngOnInit() {
    this._loaded = false;
  }

  chart(currency: string, market: string, timeframe: string) {
    this._currency = currency;
    this._market = market;
    this._timeframe = timeframe;
    this._OHLC = null;

    this.cryptoService.getOHLC(this._timeframe, this._currency, this._market)
    .subscribe(results => {
      this._OHLC = results['Data'];
    });

    this._loaded = true;
    this._title = currency + ' / ' + market;
  }

}
