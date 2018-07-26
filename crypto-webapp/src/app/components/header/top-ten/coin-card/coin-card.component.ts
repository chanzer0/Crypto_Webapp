import { Component, OnInit, Input } from '@angular/core';
import { TopTenCoin } from '../../../../models/top-ten-coin';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent implements OnInit {

  @Input() coin: TopTenCoin;

  iconFileName: string;

  constructor() { }

  ngOnInit() {
    this.LoadIcon(this.coin.symbol);
  }

  LoadIcon(symbol: string): void {
    this.iconFileName = 'assets/img/icons/' + symbol + '.svg';
  }

}
