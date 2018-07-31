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

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.GetTop300Coins().subscribe(coins => {
      this.CoinList = coins.data;
    }, () => {
      this.CoinList = this.SortCoinsByRank(this.CoinList);
    });
  }

  SortCoinsByRank(coins: TopTenCoin[]): TopTenCoin[] {
    return coins.sort((a, b) => {
      return a.rank > b.rank ? 1 : -1;
    });
  }

  SetCoin(coin: TopTenCoin): void {
    this.SelectedCoin = coin;
  }
}
