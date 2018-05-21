import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoOhlcService {

  private endpoint = "https://min-api.cryptocompare.com/data/histo";
  private result: any;

  constructor(private http: HttpClient) {
  }

  getOHLC(time: string, fsym: string, tsym: string) {
    console.log(this.endpoint + time + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=1&e=CCCAGG");
    return this.http.get(this.endpoint + time + "?fsym=" + fsym + "&tsym=" + tsym + "&limit=60&aggregate=1&e=CCCAGG")
      .map(result => this.result = result);
  }

}