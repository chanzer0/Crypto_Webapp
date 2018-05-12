import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-dropdown',
  templateUrl: './crypto-dropdown.component.html',
  styleUrls: ['./crypto-dropdown.component.css']
})
export class CryptoDropdownComponent implements OnInit {

  /*
   * Note that this is my private API key and I would appreciate it if it was only used by me. 
   * The API here is free to use, and easy to sign up and obtain your own API key. Thanks in advance.
   */
  intraday_api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=EUR&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  daily_api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=CNY&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  weekly_api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  monthly_api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=ZBEjmKdpZAO1LlfQP3Ca";
  first_pair = "";
  second_pair = "";
  timeframe = "";

  constructor() { }

  ngOnInit() {
  }

  updateFirstPair(pair : string){
    this.first_pair = pair;
  }

  updateSecondPair(pair : string){
    this.second_pair = pair;
  }

  updateTimeframe(time : string){
    this.timeframe = time;
  }
}
