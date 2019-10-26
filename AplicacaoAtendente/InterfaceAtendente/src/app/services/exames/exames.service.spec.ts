import { TestBed } from '@angular/core/testing';

import { ExamesService } from './exames.service';

describe('ExamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamesService = TestBed.get(ExamesService);
    expect(service).toBeTruthy();
  });
});
