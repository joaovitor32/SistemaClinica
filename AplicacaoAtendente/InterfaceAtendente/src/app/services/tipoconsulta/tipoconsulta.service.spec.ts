import { TestBed } from '@angular/core/testing';

import { TipoconsultaService } from './tipoconsulta.service';

describe('TipoconsultaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoconsultaService = TestBed.get(TipoconsultaService);
    expect(service).toBeTruthy();
  });
});
