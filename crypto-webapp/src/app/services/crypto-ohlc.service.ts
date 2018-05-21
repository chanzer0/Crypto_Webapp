import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

export interface OHLC {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

@Injectable()
export class CryptoOhlcService {

  private endpoint = "https://min-api.cryptocompare.com/data/histo";
  private result: any;

  constructor(private http: HttpClient) {
  }

  getOHLC(time: string, fsym: string, tsym: string) {
    console.log(this.endpoint + time + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=3&e=CCCAGG");
    return this.http.get(this.endpoint + 'day' + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=3&e=CCCAGG")
      .map(result => this.result = result);
  }

}