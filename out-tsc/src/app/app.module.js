import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// for in memory db
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from "./data.service";
// --------------------------------------------------------
// for font awesome
import { AngularFontAwesomeModule } from "angular-font-awesome";
//---------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewSeriesComponent } from './series/view-series/view-series.component';
import { AddSeriesComponent } from './series/add-series/add-series.component';
import { DeleteSeriesComponent } from './series/delete-series/delete-series.component';
import { UpdateSeriesComponent } from './series/update-series/update-series.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ViewSeriesComponent,
                AddSeriesComponent,
                DeleteSeriesComponent,
                UpdateSeriesComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                ReactiveFormsModule,
                AngularFontAwesomeModule,
                HttpClientModule,
                InMemoryWebApiModule.forRoot(DataService) // for in memory db
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map