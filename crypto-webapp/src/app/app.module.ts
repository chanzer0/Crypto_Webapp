import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CryptoDropdownComponent } from './crypto-dropdown/crypto-dropdown.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CryptoChartComponent } from './crypto-chart/crypto-chart.component';
import { DxChartModule } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    CryptoDropdownComponent,
    HeaderComponent,
    FooterComponent,
    CryptoChartComponent,
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    DxChartModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
