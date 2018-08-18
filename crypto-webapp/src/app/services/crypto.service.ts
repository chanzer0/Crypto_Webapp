import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TopTenCoin } from '../models/top-ten-coin';
import { OHLC } from '../models/ohlc';

@Injectable()
export class CryptoService {

  private CoinMarketCap = 'https://api.coinmarketcap.com/v2';
  private CryptoCompare = 'https://min-api.cryptocompare.com';

  constructor(private http: HttpClient) { }

  /**
   * Gets OHLC historical data from the CryptoCompare api
   * @param timeframe 'day' or 'hour' or 'minute'
   * @param fsym the crypto in question 'BTC' or 'ETH' or 'LINK'
   * @param tsym the currency to convert to -- 'USD' or 'GBP' or 'BTC' or 'ETH'
   * @param limit # of datapoints ot return -- aka how many "bars"
   */
  GetOHLC(timeframe: string, fsym: string, tsym: string, limit: string): Observable<{Data: OHLC[]}> {
    const url = `/data/histo${timeframe}?fsym=${fsym}&tsym=${tsym}&limit=${limit}`;
    return this.http.get<{Data: OHLC[]}>(this.CryptoCompare + url);
  }

  GetTop300Coins(): Observable<{data: TopTenCoin[]}> {
    const url = '/ticker/?limit=300&structure=array';
    return this.http.get<{data: TopTenCoin[]}>(this.CoinMarketCap + url);
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
