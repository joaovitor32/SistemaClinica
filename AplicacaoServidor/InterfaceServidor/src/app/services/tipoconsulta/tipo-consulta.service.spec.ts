import { TestBed } from '@angular/core/testing';

import { TipoConsultaService } from './tipo-consulta.service';

describe('TipoConsultaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoConsultaService = TestBed.get(TipoConsultaService);
    expect(service).toBeTruthy();
  });
});
