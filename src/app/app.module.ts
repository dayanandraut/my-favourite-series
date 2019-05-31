import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for in memory db
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";
// --------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService) // for in memory db
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
