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

  private _loaded: boolean;
  private _title: string;
  private _currency: string;
  private _market: string;
  private _timeframe: string;

  private _OHLC: any;
  private _objectKeys = Object.keys;

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
