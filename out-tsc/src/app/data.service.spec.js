import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
describe('DataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data.service.spec.js.map