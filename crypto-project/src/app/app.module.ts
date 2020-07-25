// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Nebular modules
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// General components 
import { PeriodPickerComponent } from './general-components/period-picker/period-picker.component';
import { TickerComponent } from './general-components/ticker/ticker.component';

// Nav components
import { TopNavComponent } from './nav/top-nav/top-nav.component';

// Services
import { PriceService } from './service/market-data/price.service'; 

@NgModule({
  declarations: [
    AppComponent,
    PeriodPickerComponent,
    TickerComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
