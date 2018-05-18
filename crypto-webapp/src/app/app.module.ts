import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CryptoDropdownComponent } from './crypto-dropdown/crypto-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';
import { MarketList } from './crypto-dropdown/market-list';
import { CurrencyList } from './crypto-dropdown/currency-list';


@NgModule({
  declarations: [
    AppComponent,
    CryptoDropdownComponent,
    HeaderComponent,
    FooterComponent,
    CryptoChartComponent,
    MarketList
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
