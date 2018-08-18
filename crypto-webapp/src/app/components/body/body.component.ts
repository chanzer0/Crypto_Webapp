import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { TopTenCoin } from '../../models/top-ten-coin';
import { OHLC } from '../../models/ohlc';
import { DurationSeconds, DurationMinutes,
  DurationHours, DurationDays } from '../../models/duration';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public CoinList: TopTenCoin[];
  public SelectedCoin: TopTenCoin;
  public OHLC_DataSet: OHLC[];

  public Duration: string;
  public DurationOptions: string[] = [ 'Minutes', 'Hours', 'Days' ];

  public DurationAmount: string;
  public DurationAmountOptions: string[] = [ '100', '200', '300', '400', '500' ];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.GetTop300Coins().subscribe(coins => {
      this.CoinList = coins.data;
    }, err => { }, () => {
      this.SortCoinsByRank();
      this.AddFullName();
    });
  }

  SortCoinsByRank(): void {
    this.CoinList.sort((a, b) => {
      return a.rank > b.rank ? 1 : -1;
    });
  }

  AddFullName(): void {
    this.CoinList.forEach(coin => {
      // Add a 'fullname' property -- e.g. for BTC, "Bitcoin (BTC)" is the fullname
      Object.defineProperty(coin, 'fullname', { value:  coin.name + ` (${coin.symbol})` });
    });
  }

  SetCoin(coin: TopTenCoin): void {
    this.SelectedCoin = coin;
  }

  SetDuration(duration: string): void {
    this.Duration = duration;
  }

  SetDurationAmount(duration: string): void {
    this.DurationAmount = duration;
  }
}
