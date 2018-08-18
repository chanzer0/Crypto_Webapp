import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { TopTenCoin } from '../../../models/top-ten-coin';
import { OHLC } from '../../../models/ohlc';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @Input() coin: TopTenCoin;
  @Input() duration: string;
  @Input() durationAmount: string;

  public ohlc: OHLC[];

  constructor(private cryptoService: CryptoService) { }

  ngOnChanges() {
    this.LoadChartData(this.coin, this.duration, this.durationAmount);
  }

  LoadChartData(coin: TopTenCoin, duration: string, amount): void {
    // Get 100 most recent 1d ohlcv of 'coin.symbol' spot price
    this.cryptoService
    .GetOHLC(duration.toLowerCase().slice(0, duration.length - 1), coin.symbol.toUpperCase(), 'USD', amount).subscribe(ohlc => {
      // Sort them by most recent timestamp
      this.ohlc = ohlc.Data.sort((a, b) => {
        return a.time > b.time ? 1 : -1;
      });
    }, err => { }, () => {
      this.AddFriendlyDate(this.ohlc);
    });
  }

  AddFriendlyDate(ohlc: OHLC[]): void {
    ohlc.forEach(data => {
      const options =  { year: '2-digit', month: 'numeric', day: 'numeric' };
      // * 1000 b/c data.time is in seconds, not ms -- Date constructor needs ms
      const date = new Date(data.time * 1000).toLocaleDateString('en-us', options);
      Object.defineProperty(data, 'friendly_date', { value: date });
    });
  }
}
