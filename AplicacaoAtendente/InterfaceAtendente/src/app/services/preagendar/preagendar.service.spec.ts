import { TestBed } from '@angular/core/testing';

import { PreagendarService } from './preagendar.service';

describe('PreagendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreagendarService = TestBed.get(PreagendarService);
    expect(service).toBeTruthy();
  });
});
