import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SeriesService } from 'src/app/series.service';
import { ActivatedRoute } from '@angular/router';
var DeleteSeriesComponent = /** @class */ (function () {
    function DeleteSeriesComponent(seriesService, actRouter) {
        this.seriesService = seriesService;
        this.actRouter = actRouter;
        this.deleted = false;
    }
    DeleteSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRouter.params.subscribe(function (params) {
            if (params['id']) {
                _this.getSeries(params['id']);
            }
        });
    };
    DeleteSeriesComponent.prototype.getSeries = function (id) {
        var _this = this;
        this.seriesService.getSeriesById(id).subscribe(function (d) {
            _this.series = d;
            _this.deleteSeries(id);
        }, function (e) { return console.log("Error:" + JSON.stringify(e)); });
    };
    DeleteSeriesComponent.prototype.deleteSeries = function (id) {
        var _this = this;
        this.seriesService.deleteSeries(id).subscribe(function (d) { return _this.deleted = true; }, function (e) { return console.log("Error: Could not delete!"); });
    };
    DeleteSeriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-delete-series',
            templateUrl: './delete-series.component.html',
            styleUrls: ['./delete-series.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService, ActivatedRoute])
    ], DeleteSeriesComponent);
    return DeleteSeriesComponent;
}());
export { DeleteSeriesComponent };
//# sourceMappingURL=delete-series.component.js.map