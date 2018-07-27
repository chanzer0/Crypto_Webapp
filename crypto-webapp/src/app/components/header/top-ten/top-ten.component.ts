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
    this.cryptoService.getTopTenCoins().subscribe(res => {
      const data = res.data;
      Object.keys(data).forEach(coin => {
        this.TopTenCoins.push(
          new TopTenCoin(
            data[coin].id, 
            data[coin].name, 
            data[coin].symbol,
            data[coin].rank, 
            data[coin].quotes, 
            data[coin].last_updated
          )
        );
      });
    },
    err => {
      console.log('ERR! - ' + err);
    }, 
    () => {
      this.TopTenCoins = this.SortCoinsByRank(this.TopTenCoins);
      console.log(this.TopTenCoins);
      this.CurrentCoin = this.TopTenCoins[0]; // Set BTC as current
    });
  }
  
  SortCoinsByRank(coins: TopTenCoin[]): TopTenCoin[] {
    return coins.sort((a,b) => {
      return a.rank > b.rank ? 1 : -1
    });
  }


  NextCoin(): void {
    let index = this.TopTenCoins.findIndex(coin => coin.id === this.CurrentCoin.id);
    // Pick the next coin, or stay on the last one
    this.CurrentCoin = this.TopTenCoins[index < 9 ? index + 1 : index];
    console.log(this.CurrentCoin);
  }
  PreviousCoin(): void {
    let index = this.TopTenCoins.findIndex(coin => coin.id === this.CurrentCoin.id);
    // Pick the previous coin, or stay on the first one
    this.CurrentCoin = this.TopTenCoins[index > 0 ? index - 1 : index];
    console.log(this.CurrentCoin);
  }

}
