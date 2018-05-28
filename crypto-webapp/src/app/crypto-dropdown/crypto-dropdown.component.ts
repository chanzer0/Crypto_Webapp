import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoChartComponent } from '../crypto-chart/crypto-chart.component';
import { CryptoService } from '../services/crypto.service';

@Component({
  selector: 'app-crypto-dropdown',
  templateUrl: './crypto-dropdown.component.html',
  styleUrls: ['./crypto-dropdown.component.css'],
  providers: [CryptoService]
})
export class CryptoDropdownComponent implements OnInit {

  @ViewChild(CryptoChartComponent) private _child:
    CryptoChartComponent;

  private _objectKeys = Object.keys;
  private _currency = '';
  private _market = '';
  private _timeframe = '';

  private _timeframe_list: string[] = [
    'Intraday (1min)',
    'Intraday (1hr)',
    'Daily (1d)'
  ];

  private _market_list: string[] = [
    'USD (United States Dollar)',
    'BTC (Bitcoin)'
  ];

  private _currency_list: string[] = [];

  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getCoinList()
    .subscribe(results => {
      console.log(results);
      console.log(results['Data']);
      this._currency_list = results['Data'];
    });
  }

  updateCurrency(currency: string) {
    /* Takes the index at first '(', and substrings from there to the end of the string,
     * which is the length of the original string, minus the index of the first '(' + 1
     */
    const startIndex = currency.indexOf('(') + 1;
    const endIndex  = currency.length - currency.indexOf('(') + 1;
    this._currency = currency.substr(startIndex, endIndex);
  }

  updateMarket(market: string) {
    this._market = market.substr(0, market.indexOf(' '));
  }

  updateTimeframe(time: string) {
    const startIndex = time.indexOf('(') + 1;
    const endIndex  = time.indexOf(')');
    this._timeframe = time.substring(startIndex, endIndex);
  }

  generateChart() {
    //  If any of the fields have not been set, don't call the API
    if (this._currency.length === 0 || this._market.length === 0 || this._timeframe.length === 0) {
      return;
    }

    //  Change timeframe to what the API uses, then call chart() on child component
    this.convertTimeframe();
    this._child.chart(this._currency, this._market, this._timeframe);

    //  Reset the fields
    this._currency = '';
    this._market = '';
    this._timeframe = '';
  }

  convertTimeframe() {
    if (this._timeframe === '1d') {
      this._timeframe = 'day';
    } else if (this._timeframe === '1hr') {
      this._timeframe = 'hour';
    } else if (this._timeframe === '1min') {
      this._timeframe = 'minute';
    } else {
      console.log('Error: timeframe not found or valid');
    }
  }
}
