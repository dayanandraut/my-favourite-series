import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// for in memory db
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";
// --------------------------------------------------------
// for font awesome
import {AngularFontAwesomeModule} from "angular-font-awesome";
//---------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSeriesComponent } from './series/view-series/view-series.component';
import { AddSeriesComponent } from './series/add-series/add-series.component';
import { DeleteSeriesComponent } from './series/delete-series/delete-series.component';
import { UpdateSeriesComponent } from './series/update-series/update-series.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewSeriesComponent,
    AddSeriesComponent,
    DeleteSeriesComponent,
    UpdateSeriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for navbar search forms
    ReactiveFormsModule, // for reactive forms
    AngularFontAwesomeModule, //angular font awesome
    HttpClientModule, // for httpClient Services
    InMemoryWebApiModule.forRoot(DataService) // for in memory db
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
