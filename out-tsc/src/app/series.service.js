import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SeriesService = /** @class */ (function () {
    function SeriesService(httpClient) {
        this.httpClient = httpClient;
        this.serverURL = "http://localhost/api/";
    }
    // api to get all Series
    SeriesService.prototype.getSeries = function () {
        return this.httpClient.get(this.serverURL + "data");
    };
    // api to add new Series
    SeriesService.prototype.createSeries = function (series) {
        return this.httpClient.post("" + (this.serverURL + 'data'), series);
    };
    // api to delete Series
    SeriesService.prototype.deleteSeries = function (id) {
        return this.httpClient.delete(this.serverURL + 'data' + "/" + id);
    };
    // api to get Series by its id
    SeriesService.prototype.getSeriesById = function (id) {
        return this.httpClient.get(this.serverURL + 'data' + "/" + id);
    };
    // api to update Series by id
    SeriesService.prototype.updateSeries = function (series) {
        return this.httpClient.put(this.serverURL + 'data' + "/" + series.id, series);
    };
    SeriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SeriesService);
    return SeriesService;
}());
export { SeriesService };
//# sourceMappingURL=series.service.js.map