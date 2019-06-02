import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SeriesService } from 'src/app/series.service';
import { ActivatedRoute } from '@angular/router';
var UpdateSeriesComponent = /** @class */ (function () {
    function UpdateSeriesComponent(fb, seriesService, actRouter) {
        this.fb = fb;
        this.seriesService = seriesService;
        this.actRouter = actRouter;
    }
    UpdateSeriesComponent.prototype.ngOnInit = function () {
    };
    UpdateSeriesComponent.prototype.InitializeForm = function () {
        this.dataForm = this.fb.group({
            id: [this.series.id],
            title: ['', { updateOn: 'blur', validators: [Validators.required] }],
            favouriteCharacter: ['', { updateOn: 'blur', validators: [Validators.required] }],
            recentlywatched: ['', { updateOn: 'blur', validators: [Validators.required] }],
            rating: ['', { updateOn: 'blur', validators: [Validators.required, Validators.min(0), Validators.max(10)] }],
            favouriteDialogue: ['', { updateOn: 'change', validators: [Validators.required] }]
        });
    };
    // gather data for series
    UpdateSeriesComponent.prototype.getSeries = function (id) {
        this.seriesService.getSeriesById(id);
    };
    UpdateSeriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-update-series',
            templateUrl: './update-series.component.html',
            styleUrls: ['./update-series.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, SeriesService, ActivatedRoute])
    ], UpdateSeriesComponent);
    return UpdateSeriesComponent;
}());
export { UpdateSeriesComponent };
//# sourceMappingURL=update-series.component.js.map