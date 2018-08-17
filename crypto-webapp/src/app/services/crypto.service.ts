import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TopTenCoin } from '../models/top-ten-coin';
import { OHLC } from '../models/ohlc';

@Injectable()
export class CryptoService {

  private CoinMarketCap = 'https://api.coinmarketcap.com/v2';
  private CryptoCompare = 'https://min-api.cryptocompare.com';

  constructor(private http: HttpClient) { }

  getOHLC(): Observable<{data: OHLC[]}> {
    // https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=60&aggregate=1&e=CCCAGG
    return this.http.get<{data: OHLC[]}>(this.CryptoCompare + '/data/histoday?fsym=BTC&tsym=USD&limit=60&aggregate=1&e=CCCAGG');
  }

  GetTop300Coins(): Observable<{data: TopTenCoin[]}> {
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + '/ticker/?limit=300&structure=array');
  }

  /**
   * Returns the top 5 coins by percent_change_24h
   */
  GetGainers(): Observable<{data: TopTenCoin[]}> {
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + '/ticker/?start=0&limit=5&sort=percent_change_24h&structure=array');
  }

  /**
   * Kinda backwards -- &sort=percent_change_24hr then go to the last results -- start=1690
   */
  GetLosers(): Observable<{data: TopTenCoin[]}> {
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + '/ticker/?start=1590&limit=5&sort=percent_change_24h&structure=array');
  }

  /**
   * Gets top 10 coins by market cap
   */
  GetTopTenCoins(): Observable<{data: TopTenCoin[]}> {
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + '/ticker/?limit=10&structure=array');
  }
}
