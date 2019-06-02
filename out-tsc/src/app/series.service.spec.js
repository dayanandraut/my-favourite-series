import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
describe('SeriesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SeriesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=series.service.spec.js.map