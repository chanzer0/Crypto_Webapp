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
  api_url = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_TIMEFRAME&symbol=FIRSTPAIR&market=SECONDPAIR&apikey=ZBEjmKdpZAO1LlfQP3Ca";
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

  chartPairing(){
    if (this.first_pair.length == 0 || this.second_pair.length == 0 || this.timeframe.length == 0){
      return;
    }
    this.api_url = this.api_url.replace("TIMEFRAME", this.timeframe);
    this.api_url = this.api_url.replace("FIRSTPAIR", this.first_pair);
    this.api_url = this.api_url.replace("SECONDPAIR", this.second_pair);
    console.log(this.api_url);

    this.first_pair = "";
    this.second_pair = "";
    this.timeframe = "";
  }
}
