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
  public coinIndex: number;

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
      this.coinIndex = 0;
    });
  }

  SelectCoin(direction: number): void {
    if (this.coinIndex === 0 || this.coinIndex === 9) { return; }
    this.coinIndex += direction;
  }

  GetCurrentCoin(): TopTenCoin {
    return this.TopTenCoins[this.coinIndex];
  }

}
