import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CryptoService {

  private endpoint = 'https://min-api.cryptocompare.com';
  private _ohlc: any;
  private _coin_list: any;

  constructor(private http: HttpClient) {
  }

  getOHLC(time: string, fsym: string, tsym: string) {
    console.log('Getting OHCL values for ' + fsym + '/' + tsym + ' from: ' + this.endpoint + '/data/histo' +
                 time + '?fsym=' + fsym + '&tsym=' + tsym + '&limit=60&aggregate=1&e=CCCAGG');
    return this.http.get(this.endpoint + '/data/histo' + time + '?fsym=' + fsym + '&tsym=' + tsym + '&limit=60&aggregate=1&e=CCCAGG')
      .map(result => this._ohlc = result);
  }

  getCoinList() {
    console.log('Getting list of coins from: ' + this.endpoint + '/data/all/coinlist');
    return this.http.get(this.endpoint + '/data/all/coinlist')
      .map(result => this._coin_list = result);
  }

}
