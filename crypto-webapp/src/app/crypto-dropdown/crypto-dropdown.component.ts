import { Component, OnInit } from '@angular/core';

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
  private symbol = "";
  private market = "";
  private timeframe = "";

  constructor() { }

  ngOnInit() {
  }

  updateSymbol(symbol : string){
    this.symbol = symbol;
  }

  updateMarket(market : string){
    this.market = market;
  }

  updateTimeframe(time : string){
    this.timeframe = time;
  }

  generateAPI_URL(){
    /*
     * If any of the fields have not been set, don't call the API
     */
    if (this.symbol.length == 0 || this.market.length == 0 || this.timeframe.length == 0){
      return;
    }

    /*
     * Replace the API fields with the relevant fields picked by user
     */
    this.api_url = this.api_url.replace("TIMEFRAME", this.timeframe);
    this.api_url = this.api_url.replace("SYMBOL", this.symbol);
    this.api_url = this.api_url.replace("MARKET", this.market);
    console.log(this.api_url);
    /*
     * Reset the fields
     */
    this.symbol = "";
    this.market = "";
    this.timeframe = "";
  }
}
