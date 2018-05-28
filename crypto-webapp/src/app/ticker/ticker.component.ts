import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Coin } from '../models/coin';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  private top_ten_coins: Coin[] = [];

  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getCoinList()
    .subscribe(results => {
      console.log(results.data);
      this.top_ten_coins = results.data;
    });
  }

}
