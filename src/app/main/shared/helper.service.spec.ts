import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelperService = TestBed.get(HelperService);
    expect(service).toBeTruthy();
  });

  it('should have an empty object', () => {
    const emptyObject = {};
    const service: HelperService = TestBed.get(HelperService);
    const result = service.isEmptyObject(emptyObject);
    expect(result).toBeTruthy();
  });
});
