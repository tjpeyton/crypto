// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Nebular modules
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// Ngx Chars Module
import { NgxChartsModule } from '@swimlane/ngx-charts';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';

// General components 
import { PeriodPickerComponent } from './general-components/period-picker/period-picker.component';
import { TickerComponent } from './general-components/ticker/ticker.component';

// Nav components
import { TopNavComponent } from './nav/top-nav/top-nav.component';

// Services
import { PriceService } from './service/market-data/price.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    PeriodPickerComponent,
    TickerComponent,
    TopNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxChartsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NgbModule
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
