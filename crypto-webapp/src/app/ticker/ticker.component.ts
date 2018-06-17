import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { TopTenCoin } from '../models/top-ten-coin';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})

export class TickerComponent implements OnInit {

  private top_ten_coins: TopTenCoin[] = [];
  private list: any;

  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getTopTenCoins()
      .subscribe(
        results => {
          const data = results.data;
          Object.keys(results.data).forEach(x => {
            this.top_ten_coins.push(
              new TopTenCoin(data[x].id, data[x].name, data[x].symbol,
                             data[x].rank, data[x].quotes, data[x].last_updated));
          });
        },
        err => {
          console.log(err);
        },
        () => {
          this.top_ten_coins.sort((a, b) => {
            if (a.rank > b.rank) {
              return 1;
            } else {
              return -1;
            }
          });
          this.listCoins();
        }
      );
  }

  listCoins(): void {
    this.top_ten_coins.forEach(coin => {
      console.log(coin);
    });
  }
}
