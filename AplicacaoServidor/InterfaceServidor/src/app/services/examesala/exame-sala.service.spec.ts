import { TestBed } from '@angular/core/testing';

import { ExameSalaService } from './exame-sala.service';

describe('ExameSalaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExameSalaService = TestBed.get(ExameSalaService);
    expect(service).toBeTruthy();
  });
});
