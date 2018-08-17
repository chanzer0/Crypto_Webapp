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
  public GainersSelected: boolean;
  public GainersLoaded: boolean;
  public LosersLoaded: boolean;


  constructor(private cryptoService: CryptoService) { }

  ngOnInit() {
    // Load the gainers
    this.GainersLoaded = false;
    this.cryptoService.GetGainers().subscribe(gainers => {
      this.Gainers = gainers.data;
    }, err => { }, () => {
      this.GainersLoaded = true;
    });

    // Load the losers
    this.LosersLoaded = false;
    this.cryptoService.GetLosers().subscribe(losers => {
      this.Losers = losers.data;
    }, err => { }, () => {
      this.LosersLoaded = true;
    });

    // Select the gainers
    this.SelectGainers();
  }

  SelectGainers(): void {
    this.GainersSelected = true;
  }

  SelectLosers(): void {
    this.GainersSelected = false;
  }
}
