import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoChartComponent } from '../crypto-chart/crypto-chart.component';
import { MarketList } from './market-list';
import { CurrencyList } from './currency-list';

@Component({
  selector: 'app-crypto-dropdown',
  templateUrl: './crypto-dropdown.component.html',
  styleUrls: ['./crypto-dropdown.component.css'],
})
export class CryptoDropdownComponent implements OnInit {

  /*
   * Note that this is my private API key and I would appreciate it if it was only used by me. 
   * The API here is free to use, and easy to sign up and obtain your own API key. Thanks in advance.
   */
  private api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_TIMEFRAME&symbol=SYMBOL&market=MARKET&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  private currency = "";
  private market = "";
  private timeframe = "";

  private market_list: string[];
  private currency_list: string[];


  @ViewChild(CryptoChartComponent) private chart;

  constructor(private Market_List:MarketList, private Currency_List:CurrencyList) { }

  ngOnInit() {
    this.market_list = this.Market_List.getMarketList();
    this.currency_list = this.Currency_List.getCurrencyList();
  }

  updateCurrency(currency: string) {
    this.currency = currency.substr(0, currency.indexOf(' '));
  }

  updateMarket(market: string) {
    this.market = market.substr(0, market.indexOf(' '));
  }

  updateTimeframe(time: string) {
    this.timeframe = time;
  }

  generateAPI_URL() {
    /*
     * If any of the fields have not been set, don't call the API
     */
    if (this.currency.length == 0 || this.market.length == 0 || this.timeframe.length == 0) {
      return;
    }

    /*
     * Replace the API fields with the relevant fields picked by user
     */
    this.api_url = this.api_url.replace("TIMEFRAME", this.timeframe);
    this.api_url = this.api_url.replace("SYMBOL", this.currency);
    this.api_url = this.api_url.replace("MARKET", this.market);
    console.log(this.api_url);

    /*
     * Reset the fields
     */
    this.currency = "";
    this.market = "";
    this.timeframe = "";
    this.api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_TIMEFRAME&symbol=SYMBOL&market=MARKET&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  }
}
