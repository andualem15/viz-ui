import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { VizMaterialModule } from './theme/viz-material/viz-material.module';
import { HeaderComponent } from './theme/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { VaccineComponent } from './components/categories/vaccine/vaccine.component';
import { HomeComponent } from './components/home/home.component';
import { PentavalentComponent } from './components/viz/pentavalent/pentavalent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VaccineComponent,
    HomeComponent,
    PentavalentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HighchartsChartModule,
    FormsModule,
    VizMaterialModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
