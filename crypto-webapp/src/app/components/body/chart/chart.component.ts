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

  public ohlc: OHLC[];

  constructor(private cryptoService: CryptoService) { }

  ngOnChanges() {
    this.LoadChartData(this.coin, this.duration);
    console.log(this.ohlc);
  }

  LoadChartData(coin: TopTenCoin, duration: string): void {
    // Get 100 most recent 1d ohlcv of 'coin.symbol' spot price
    this.cryptoService.GetOHLC(this.GetSymbolId(coin), duration, '100').subscribe(ohlc => {
      // Sort them by most recent timestamp
      this.ohlc = ohlc.sort((a, b) => {
        return a.time_period_end > b.time_period_end ? 1 : -1;
      });
    }, err => { }, () => {
      this.AddFriendlyDate(this.ohlc);
    });
  }

  GetSymbolId(coin: TopTenCoin): string {
    return `BITFINEX_SPOT_${coin.symbol.toUpperCase()}_USD`;
  }

  AddFriendlyDate(ohlc: OHLC[]): void {
    ohlc.forEach(data => {
      const options =  { year: '2-digit', month: 'numeric', day: 'numeric' };
      const date = new Date(data.time_period_end).toLocaleDateString('en-us', options);
      Object.defineProperty(data, 'friendly_date', { value: date });
    });
  }

  GetTickInterval(): string {
    if (this.duration.includes('SEC')) {
      return '10000000000';
    }
    if (this.duration.includes('MIN')) {
      return '1000';
    }
    if (this.duration.includes('HRS')) {
      return '250';
    }
    if (this.duration.includes('DAY')) {
      return '125';
    }
    return '1';
  }
}
