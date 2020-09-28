import { TestBed } from '@angular/core/testing';

import { BricksetService } from './brickset.service';

describe('BricksetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BricksetService = TestBed.get(BricksetService);
    expect(service).toBeTruthy();
  });
});
