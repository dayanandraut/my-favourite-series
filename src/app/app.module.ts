import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// for in memory db
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";
// --------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSeriesComponent } from './series/view-series/view-series.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewSeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // for httpClient Services
    InMemoryWebApiModule.forRoot(DataService) // for in memory db
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
