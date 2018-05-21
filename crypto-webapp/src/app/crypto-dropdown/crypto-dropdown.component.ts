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

  constructor(private ohcl:CryptoService) { }

  ngOnInit() {
    this.ohcl.getCoinList()
    .subscribe(results => {
      console.log(results["Data"]);
      console.log(results["Data"]["ZEC"]);
      console.log(results["Data"]["ZEC"]["FullName"]);

      /* Ugly hack to remove the leading and trailing quotation marks in the FullName object */
      this.currency_list.push( JSON.stringify(results["Data"]["ZEC"]["FullName"]).substr(1, ((JSON.stringify(results["Data"]["ZEC"]["FullName"]).length) - 2)));
    })
  }

  updateCurrency(currency: string) {
    /* Takes the index at first '(', and substrings from there to the end of the string,
     * which is the length of the original string, minus the index of the first '(' + 2
     */
    this.currency = currency.substr(currency.indexOf('(') + 1, (currency.length) - (currency.indexOf('(') + 2));
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
    console.log(this.timeframe)
    this.convertTimeframe();
    console.log(this.timeframe)
    this._child.chart(this.currency, this.market, this.timeframe)

    /*
     * Reset the fields
     */
    this.currency = "";
    this.market = "";
    this.timeframe = "";
    console.log(this.timeframe)
  }

  convertTimeframe() {
    switch (this.timeframe) {
      case 'DAILY': {
        this.timeframe = 'day';
      }
      case 'HOURLY': {
        this.timeframe = 'hour'
      }
      case 'MINUTE': {
        this.timeframe = 'minute';
      }
      default: {
        console.log("Something went wrong dawg... check the timeframe")
      }
    }
  }
}
