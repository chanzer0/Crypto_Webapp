import { Component, OnInit, Input } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { TopTenCoin } from '../../../models/top-ten-coin';
import { OHLC } from '../../../models/ohlc';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() coin: TopTenCoin;
  public ohlc: OHLC[];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.getOHLC().subscribe(results => {
      console.log(results);
      this.ohlc = results.data;
    });
  }
}
