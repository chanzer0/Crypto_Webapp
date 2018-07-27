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

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.cryptoService.GetGainers().subscribe(gainers => {
      this.Gainers = gainers.data.filter(coin => {
        if (coin.quotes.USD.market_cap > 2000000 && coin.quotes.USD.volume_24h > 1000) { 
          return coin;
        }
      });
      this.Gainers = this.Gainers.sort((a,b) => {
        return a.quotes.USD.percent_change_24h > b.quotes.USD.percent_change_24h ? 1 : -1;
      });
      this.Gainers = this.Gainers.splice(5);
      
    }, err => {
      console.log(err);
    }, () => {
      console.log(this.Gainers);
    });
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

  LoadGainers() : void {

  }

  LoadLosers(): void {

  }
}
