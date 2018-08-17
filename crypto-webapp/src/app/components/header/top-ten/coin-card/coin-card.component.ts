import { Component, OnChanges, Input } from '@angular/core';
import { TopTenCoin } from '../../../../models/top-ten-coin';
import { CoinData } from '../../../../models/coin-data';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent implements OnChanges {

  @Input() Coin: TopTenCoin;

  IconFileName: string;
  CoinDataModel: CoinData;

  constructor() { }

  ngOnChanges() {
    this.LoadIcon(this.Coin.symbol);
    this.GenerateCoinData(this.Coin);
  }

  LoadIcon(symbol: string): void {
    this.IconFileName = 'assets/img/svg/color/' + symbol.toLowerCase() + '.svg';
  }

  GenerateCoinData(coin: TopTenCoin): void {
    this.CoinDataModel = {
      Rank: coin.rank,
      Name: coin.name,
      FullName: coin.fullname,
      Symbol: coin.symbol,
      Percentage: coin.quotes.USD.percent_change_24h,
      Price: coin.quotes.USD.price,
      Volume: coin.quotes.USD.volume_24h
    } as CoinData;
  }

}
