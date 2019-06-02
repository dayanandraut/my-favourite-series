import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Series } from 'src/app/model/series';
import { SeriesService } from 'src/app/series.service';
import { Router } from '@angular/router';
var AddSeriesComponent = /** @class */ (function () {
    function AddSeriesComponent(fb, seriesService, router) {
        this.fb = fb;
        this.seriesService = seriesService;
        this.router = router;
    }
    AddSeriesComponent.prototype.ngOnInit = function () {
        // Creating form
        this.dataForm = this.fb.group({
            title: ['', { updateOn: 'blur', validators: [Validators.required] }],
            favouriteCharacter: ['', { updateOn: 'blur', validators: [Validators.required] }],
            recentlywatched: ['', { updateOn: 'blur', validators: [Validators.required] }],
            rating: ['', { updateOn: 'blur', validators: [Validators.required, Validators.min(0), Validators.max(10)] }],
            favouriteDialogue: ['', { updateOn: 'change', validators: [Validators.required] }]
        });
    };
    AddSeriesComponent.prototype.save = function () {
        var _this = this;
        console.log("Status: " + this.dataForm.valid);
        var series = new Series();
        series.id = null;
        series.title = this.dataForm.get("title").value;
        series.favouriteCharacter = this.dataForm.get("favouriteCharacter").value;
        series.recentlywatched = this.dataForm.get("recentlywatched").value;
        series.rating = this.dataForm.get("rating").value;
        series.favouriteDialogue = this.dataForm.get("favouriteDialogue").value;
        //console.log(series);
        this.seriesService.createSeries(series).subscribe(function (d) {
            console.log("Received:" + JSON.stringify(d));
            _this.router.navigate(['/series']);
        }, function (e) {
            console.log("Error:" + JSON.stringify(e));
            alert("Error: Couldn't be added!");
        });
    };
    AddSeriesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-series',
            templateUrl: './add-series.component.html',
            styleUrls: ['./add-series.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, SeriesService, Router])
    ], AddSeriesComponent);
    return AddSeriesComponent;
}());
export { AddSeriesComponent };
//# sourceMappingURL=add-series.component.js.map