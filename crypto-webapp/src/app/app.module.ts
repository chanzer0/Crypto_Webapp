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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopTenComponent,
    GainersLosersComponent
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
