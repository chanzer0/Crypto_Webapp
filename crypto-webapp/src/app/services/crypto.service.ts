import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TopTenCoin } from '../models/top-ten-coin';
import { OHLC } from '../models/ohlc';

@Injectable()
export class CryptoService {

  private CoinMarketCap = 'https://api.coinmarketcap.com/v2';
  private CoinApi = 'https://rest.coinapi.io';

  constructor(private http: HttpClient) { }

  GetOHLC(symbol_id: string, period_id: string, limit: string): Observable<OHLC[]> {
    const url = `/v1/ohlcv/${symbol_id}/latest?period_id=${period_id}&limit=${limit}`;
    const headers = new HttpHeaders({
      'X-CoinAPI-Key':  'A348BE64-EC9E-4B9A-B13F-A03343954C51',
      'Accept': 'application/json'
    });
    return this.http.get<OHLC[]>(this.CoinApi + url, { headers: headers });
  }

  GetTop300Coins(): Observable<{data: TopTenCoin[]}> {
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + '/ticker/?limit=300&structure=array');
  }

  /**
   * Returns the top 5 coins by percent_change_24h
   */
  GetGainers(): Observable<{data: TopTenCoin[]}> {
    const url = '/ticker/?start=0&limit=5&sort=percent_change_24h&structure=array';
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + url);
  }

  /**
   * Kinda backwards -- &sort=percent_change_24hr then go to the last results -- start=1690
   */
  GetLosers(): Observable<{data: TopTenCoin[]}> {
    const url = '/ticker/?start=1590&limit=5&sort=percent_change_24h&structure=array';
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + url);
  }

  /**
   * Gets top 10 coins by market cap
   */
  GetTopTenCoins(): Observable<{data: TopTenCoin[]}> {
    const url = '/ticker/?limit=10&structure=array';
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + url);
  }
}
