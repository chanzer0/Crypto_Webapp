import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { TopTenCoin } from '../../models/top-ten-coin';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public CoinList: TopTenCoin[];
  public SelectedCoin: TopTenCoin;
  public ready = false;

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.GetTop300Coins().subscribe(coins => {
      this.CoinList = coins.data;
    }, err => { console.log(err); }, () => {
      this.SortCoinsByRank();
      this.AddFullName();
      this.ready = true;
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
}
