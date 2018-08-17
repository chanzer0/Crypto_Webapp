import { Component, OnInit } from '@angular/core';

import { TopTenCoin } from '../../../models/top-ten-coin';
import { CryptoService } from '../../../services/crypto.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {

  public TopTenCoins: TopTenCoin[] = [];
  public CurrentCoin: TopTenCoin;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.GetTopTenCoins();
  }

  GetTopTenCoins(): void {
    this.cryptoService.GetTopTenCoins().subscribe(coins => {
      this.TopTenCoins = coins.data;
    },
    err => {
      console.log('ERR! - ' + err);
    },
    () => {
      this.AddFullName();
      this.TopTenCoins = this.SortCoinsByRank(this.TopTenCoins);
      this.CurrentCoin = this.TopTenCoins[0]; // Set BTC as current coin
    });
  }

  SortCoinsByRank(coins: TopTenCoin[]): TopTenCoin[] {
    return coins.sort((a, b) => {
      return a.rank > b.rank ? 1 : -1;
    });
  }

  AddFullName(): void {
    this.TopTenCoins.forEach(coin => {
      coin.fullname =  coin.name + ` (${coin.symbol})`;
    });
  }

  NextCoin(): void {
    const index = this.TopTenCoins.findIndex(coin => coin.id === this.CurrentCoin.id);
    // Pick the next coin, or stay on the last one
    this.CurrentCoin = this.TopTenCoins[index < 9 ? index + 1 : index];
  }
  PreviousCoin(): void {
    const index = this.TopTenCoins.findIndex(coin => coin.id === this.CurrentCoin.id);
    // Pick the previous coin, or stay on the first one
    this.CurrentCoin = this.TopTenCoins[index > 0 ? index - 1 : index];
  }

}
