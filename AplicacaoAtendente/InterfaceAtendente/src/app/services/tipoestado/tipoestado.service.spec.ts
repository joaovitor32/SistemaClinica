import { TestBed } from '@angular/core/testing';

import { TipoestadoService } from './tipoestado.servise';

describe('TipoestadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoestadoService = TestBed.get(TipoestadoService);
    expect(service).toBeTruthy();
  });
});
