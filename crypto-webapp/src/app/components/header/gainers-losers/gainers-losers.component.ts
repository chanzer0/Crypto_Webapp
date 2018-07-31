import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto.service';
import { TopTenCoin } from '../../../models/top-ten-coin';

@Component({
  selector: 'app-gainers-losers',
  templateUrl: './gainers-losers.component.html',
  styleUrls: ['./gainers-losers.component.css']
})
export class GainersLosersComponent implements OnInit {

  public Gainers: TopTenCoin[];
  public Losers: TopTenCoin[];
  public GainersSelected = true;


  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.GetGainers().subscribe(gainers => {
      console.log(gainers.data);
      this.Gainers = gainers.data;
    }, () => {
      console.log(this.Gainers);
    });

    this.cryptoService.GetLosers().subscribe(losers => {
      this.Losers = losers.data;
    }, () => {
    });
    this.SelectLosers();
  }

  // /**
  //  * Skim out all the 'fake' gainers -- i.e. coins with very low
  //  * market cap or volume that are subject to P&D groups
  //  * @param coins The top 100 'gainers' as returned by GetGainers()
  //  * @returns A pruned list of the 5 top 'real' gainers
  //  */
  // FilterCoins(coins: TopTenCoin[]): TopTenCoin[] {
  //   let filteredCoins = coins.filter(coin => coin.quotes.USD.market_cap > 20000000
  //                                         && coin.quotes.USD.volume_24h > 10000000);
  //   return filteredCoins;
  // }

  SelectGainers(): void {
    this.GainersSelected = true;
  }

  SelectLosers(): void {
    this.GainersSelected = false;
  }
}
