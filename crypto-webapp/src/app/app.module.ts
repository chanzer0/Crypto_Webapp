import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CryptoDropdownComponent } from './crypto-dropdown/crypto-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';
import { DxChartModule } from 'devextreme-angular';
import { CryptoService } from './services/crypto.service';
import { TickerComponent } from './ticker/ticker.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptoDropdownComponent,
    HeaderComponent,
    FooterComponent,
    CryptoChartComponent,
    TickerComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    DxChartModule,
    HttpClientModule
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
