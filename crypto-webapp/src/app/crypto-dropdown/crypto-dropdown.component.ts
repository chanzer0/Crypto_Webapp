import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoChartComponent } from '../crypto-chart/crypto-chart.component';
import { CryptoService } from '../services/crypto.service';
import { Coin } from '../models/coin';

@Component({
  selector: 'app-crypto-dropdown',
  templateUrl: './crypto-dropdown.component.html',
  styleUrls: ['./crypto-dropdown.component.css'],
  providers: [CryptoService]
})
export class CryptoDropdownComponent implements OnInit {

  @ViewChild(CryptoChartComponent) private _child:
    CryptoChartComponent;

  private currency = '';
  private market = '';
  private timeframe = '';
  private coin: Coin;

  private timeframe_list: string[] = [
    'Intraday (1min)',
    'Intraday (1hr)',
    'Daily (1d)'
  ];

  private market_list: string[] = [
    'USD (United States Dollar)',
    'BTC (Bitcoin)'
  ];

  private currency_list: Coin[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getCoinList()
    .subscribe(
      results => {
        results.data.forEach(coin => {
          this.currency_list.push(new Coin(coin.id, coin.name, coin.symbol));
        });
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }

  updateCurrency(currency: Coin) {
    this.currency = currency.name;
    this.coin = currency;
  }

  updateMarket(market: string) {
    this.market = market.substr(0, market.indexOf(' '));
  }

  updateTimeframe(time: string) {
    const startIndex = time.indexOf('(') + 1;
    const endIndex  = time.indexOf(')');
    this.timeframe = time.substring(startIndex, endIndex);
  }

  generateChart() {
    //  If any of the fields have not been set, don't call the API
    if (this.currency.length === 0 ||
        this.market.length === 0 ||
        this.timeframe.length === 0 ||
        !this.coin) {
      return;
    }

    //  Change timeframe to what the API uses, then call chart() on child component
    this.convertTimeframe();
    this._child.chart(this.coin.symbol, this.market, this.timeframe);

    //  Reset the fields
    this.currency = '';
    this.market = '';
    this.timeframe = '';
    this.coin = null;
  }

  convertTimeframe() {
    if (this.timeframe === '1d') {
      this.timeframe = 'day';
    } else if (this.timeframe === '1hr') {
      this.timeframe = 'hour';
    } else if (this.timeframe === '1min') {
      this.timeframe = 'minute';
    } else {
      console.log('Error: timeframe not found or valid');
    }
  }
}
