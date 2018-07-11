import { Component, OnInit, Input } from '@angular/core';

import { TopTenCoin } from '../../../../models/top-ten-coin';

@Component({
  selector: 'app-top-ten-card',
  templateUrl: './top-ten-card.component.html',
  styleUrls: ['./top-ten-card.component.css']
})
export class TopTenCardComponent implements OnInit {

  @Input() Coin: TopTenCoin; 

  private 

  constructor() { }

  ngOnInit() {
    this.SetDetails();
  }

  SetDetails(){

  }
}
