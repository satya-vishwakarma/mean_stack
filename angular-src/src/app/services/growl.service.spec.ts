import { TestBed } from '@angular/core/testing';

import { GrowlService } from './growl.service';

describe('GrowlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrowlService = TestBed.get(GrowlService);
    expect(service).toBeTruthy();
  });
});
