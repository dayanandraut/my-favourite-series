import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SeriesService } from '../../series.service';
import { Router } from '@angular/router';
var ViewSeriesComponent = /** @class */ (function () {
    function ViewSeriesComponent(seriesService, router) {
        this.seriesService = seriesService;
        this.router = router;
        this.seriesSet = [];
    }
    ViewSeriesComponent.prototype.ngOnInit = function () {
        this.populateSeries();
    };
    ViewSeriesComponent.prototype.populateSeries = function () {
        var _this = this;
        this.seriesService.getSeries().subscribe(function (data) {
            _this.seriesSet = data;
            console.log("Received: " + _this.seriesSet);
        }, function (err) { return console.log("Error occured: " + err.message); });
    };
    ViewSeriesComponent.prototype.navigateToNew = function () {
        this.router.navigate(['/series/add']);
    };
    // deleting series
    ViewSeriesComponent.prototype.deleteSeries = function (id) {
        this.router.navigate(['/series/delete', id]);
    };
    ViewSeriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-series',
            templateUrl: './view-series.component.html',
            styleUrls: ['./view-series.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService, Router])
    ], ViewSeriesComponent);
    return ViewSeriesComponent;
}());
export { ViewSeriesComponent };
//# sourceMappingURL=view-series.component.js.map