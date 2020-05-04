import { TestBed } from '@angular/core/testing';

import { ExameRiscoService } from './exame-risco.service';

describe('ExameRiscoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExameRiscoService = TestBed.get(ExameRiscoService);
    expect(service).toBeTruthy();
  });
});
