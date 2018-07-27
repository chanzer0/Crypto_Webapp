import { Component, Input } from '@angular/core';
import { TopTenCoin } from '../../../../models/top-ten-coin';
import { CoinData } from '../../../../models/coin-data';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent{

  @Input() CoinDataModel: CoinData;

  constructor() { }

}
