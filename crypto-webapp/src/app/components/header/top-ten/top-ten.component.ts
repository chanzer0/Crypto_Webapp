import { Component, OnInit } from '@angular/core';

import { TopTenCoin } from '../../../models/top-ten-coin'
import { CryptoService } from '../../../services/crypto.service';

@Component({
  selector: 'app-top-ten',
  templateUrl: './top-ten.component.html',
  styleUrls: ['./top-ten.component.css']
})
export class TopTenComponent implements OnInit {
  
  public TopTenCoins: TopTenCoin[] = []; 

  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    this.GetTopTenCoins();
  }

  GetTopTenCoins(): void {
    this.cryptoService.getTopTenCoins().subscribe(res => {
      res.data.forEach(x => {
        console.log(x);
      })
    }, err => {
      console.log('ERR! - ' + err);
    }, () => {

    });
  }

}
