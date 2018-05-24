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
  
  private _currency = "";
  private _market = "";
  private _timeframe = "";

  private timeframe_list: string[] = [
    "Intraday (1min)",
    "Intraday (1hr)",
    "Daily (1d)"
  ];

  private market_list: string[] = [
    "USD (United States Dollar)",
    "BTC (Bitcoin)"
  ];

  private currency_list:string[] = [];
  private objectKeys = Object.keys;

  constructor(private ohcl:CryptoService) { }

  ngOnInit() {
    this.ohcl.getCoinList()
    .subscribe(results => {
      this.currency_list = results["Data"];
      console.log(results["Data"]);
    })
  }

  updateCurrency(currency: string) {
    /* Takes the index at first '(', and substrings from there to the end of the string,
     * which is the length of the original string, minus the index of the first '(' + 1
     */
    let startIndex = currency.indexOf('(') + 1;
    let endIndex  = currency.length - currency.indexOf('(') + 1;
    this._currency = currency.substr(startIndex, endIndex);
  }

  updateMarket(market: string) {
    this._market = market.substr(0, market.indexOf(' '));
  }

  updateTimeframe(time: string) {
    let startIndex = time.indexOf('(') + 1;
    let endIndex  = time.indexOf(')');
    this._timeframe = time.substring(startIndex, endIndex);
  }

  generateChart() {
    //  If any of the fields have not been set, don't call the API
    if (this._currency.length == 0 || this._market.length == 0 || this._timeframe.length == 0) {
      return;
    }

    //  Change timeframe to what the API uses, then call chart() on child component
    this.convertTimeframe();
    this._child.chart(this._currency, this._market, this._timeframe)

    //  Reset the fields
    this._currency = "";
    this._market = "";
    this._timeframe = "";
  }

  convertTimeframe() {
    if (this._timeframe === "1d"){
      this._timeframe = 'day';
    }
    else if (this._timeframe === "1hr"){
      this._timeframe = 'hour';
    }
    else if (this._timeframe === "1min"){
      this._timeframe = 'minute';
    }
    else {
      console.log("Error: timeframe not found or valid")
    }
  }
}
