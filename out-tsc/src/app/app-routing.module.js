import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewSeriesComponent } from './series/view-series/view-series.component';
import { AddSeriesComponent } from './series/add-series/add-series.component';
import { DeleteSeriesComponent } from './series/delete-series/delete-series.component';
import { UpdateSeriesComponent } from './series/update-series/update-series.component';
var routes = [
    { path: "series", component: ViewSeriesComponent },
    { path: "series/add", component: AddSeriesComponent },
    { path: "series/delete/:id", component: DeleteSeriesComponent },
    { path: "series/update/:id", component: UpdateSeriesComponent },
    { path: "", redirectTo: '/series', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map