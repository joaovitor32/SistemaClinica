import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesMedicoComponent } from './especialidades-medico.component';

describe('EspecialidadesMedicoComponent', () => {
  let component: EspecialidadesMedicoComponent;
  let fixture: ComponentFixture<EspecialidadesMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
