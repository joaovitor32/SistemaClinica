import { TestBed } from '@angular/core/testing';

import { ConsultaParecerService } from './consulta-parecer.service';

describe('ConsultaParecerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaParecerService = TestBed.get(ConsultaParecerService);
    expect(service).toBeTruthy();
  });
});
