import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Coin } from '../models/coin';

@Injectable()
export class CryptoService {

  private cmcEndpoint = 'https://api.coinmarketcap.com/v2';
  private ccEndpoint = 'https://min-api.cryptocompare.com';

  private object: { Data: number[] };

  constructor(private http: HttpClient) {
  }

  getOHLC(time: string, fsym: string, tsym: string) {
    console.log('Getting OHCL values for ' + fsym + '/' + tsym + ' from: ' + this.ccEndpoint + '/data/histo' +
                 time + '?fsym=' + fsym + '&tsym=' + tsym + '&limit=60&aggregate=1&e=CCCAGG');
    return this.http.get(this.ccEndpoint + '/data/histo' + time + '?fsym=' + fsym + '&tsym=' + tsym + '&limit=60&aggregate=1&e=CCCAGG')
      .map(result => result);
  }

  getCoinList(): Observable<{data: Coin[]}> {
    console.log('Getting list of coins from: ' + this.cmcEndpoint + '/listings/');
    return this.http.get<{data: Coin[]}>(this.cmcEndpoint + '/listings/');
  }

  getTopTenCoins(): Observable<{data: Coin[]}> {
    console.log('Getting top ten coins from: ' + this.cmcEndpoint + '/ticker/?limit=10/');
    return this.http.get<{data: Coin[]}>(this.cmcEndpoint + '/ticker/?limit=10/');
  }

}
