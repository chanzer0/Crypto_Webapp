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
  
  private currency = "";
  private market = "";
  private timeframe = "";

  private market_list: string[] = [
    "USD (United States Dollar)"
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
    this.currency = currency.substr(currency.indexOf('(') + 1, (currency.length) - (currency.indexOf('(') + 1));
  }

  updateMarket(market: string) {
    this.market = market.substr(0, market.indexOf(' '));
  }

  updateTimeframe(time: string) {
    this.timeframe = time;
  }

  generateChart() {
    /*
     * If any of the fields have not been set, don't call the API
     */
    if (this.currency.length == 0 || this.market.length == 0 || this.timeframe.length == 0) {
      return;
    }

    /*
     * Convert timeframe to what the api uses
     */
    this.convertTimeframe();
    this._child.chart(this.currency, this.market, this.timeframe)

    /*
     * Reset the fields
     */
    this.currency = "";
    this.market = "";
    this.timeframe = "";
  }

  convertTimeframe() {
    if (this.timeframe === "DAILY"){
      this.timeframe = 'day';
    }
    else if (this.timeframe === "HOURLY"){
      this.timeframe = 'hour';
    }
    else if (this.timeframe === "MINUTE"){
      this.timeframe = 'minute';
    }
    else {
      console.log("Error: timeframe not found or valid")
    }
  }
}
