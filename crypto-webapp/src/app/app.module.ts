import { ChartComponent } from './components/body/chart/chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DxChartModule } from 'devextreme-angular';


import { AppComponent } from './app.component';
import { CryptoService } from './services/crypto.service';
import { HeaderComponent } from './components/header/header.component';
import { TopTenComponent } from './components/header/top-ten/top-ten.component';
import { GainersLosersComponent } from './components/header/gainers-losers/gainers-losers.component';
import { CoinCardComponent } from './components/header/top-ten/coin-card/coin-card.component';
import { CardInfoComponent } from './components/header/top-ten/card-info/card-info.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BodyComponent } from './components/body/body.component';
import { ComboBoxComponent } from './components/shared/combo-box/combo-box.component';
import { DropdownDirective, DropdownMenuDirective,
  DropdownToggleDirective, DropdownAnchorDirective } from './components/shared/dropdown/dropdown.directive';
import { MultiComboBoxComponent } from './components/shared/mutli-combo-box/multi-combo-box.component';
import { BoxComponent } from './components/shared/box/box.component';
import { DropdownConfig } from './components/shared/dropdown/dropdown-config';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopTenComponent,
    GainersLosersComponent,
    CoinCardComponent,
    CardInfoComponent,
    BodyComponent,
    ComboBoxComponent,
    DropdownDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    ChartComponent,
    DropdownAnchorDirective,
    MultiComboBoxComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    DxChartModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    CryptoService,
    DropdownConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
