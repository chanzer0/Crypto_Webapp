import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DxChartModule } from 'devextreme-angular';
import { CryptoService } from './services/crypto.service';
import { HeaderComponent } from './components/header/header.component';
import { TopTenComponent } from './components/header/top-ten/top-ten.component';
import { GainersLosersComponent } from './components/header/gainers-losers/gainers-losers.component';
import { CoinCardComponent } from './components/header/top-ten/coin-card/coin-card.component';
import { CardInfoComponent } from './components/header/top-ten/card-info/card-info.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowCircleLeft, faArrowCircleRight);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopTenComponent,
    GainersLosersComponent,
    CoinCardComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    DxChartModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
