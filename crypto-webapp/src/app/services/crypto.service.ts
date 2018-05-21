import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService {

  private endpoint = "https://min-api.cryptocompare.com";
  private ohlc: any;
  private coin_list: any;

  constructor(private http: HttpClient) {
  }

  getOHLC(time: string, fsym: string, tsym: string) {
    console.log("Getting OHCL values for " + fsym + "/" + tsym);
    console.log("from: " + this.endpoint + "/data/histo" + time + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=1&e=CCCAGG");
    return this.http.get(this.endpoint + "/data/histo" + time + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=1&e=CCCAGG")
      .map(result => this.ohlc = result);
  }

  getCoinList(){
    console.log("Getting list of coins");
    console.log("from: " + this.endpoint + "/data/all/coinlist");
    return this.http.get(this.endpoint + "/data/all/coinlist")
      .map(result => this.coin_list = result);
  }

}