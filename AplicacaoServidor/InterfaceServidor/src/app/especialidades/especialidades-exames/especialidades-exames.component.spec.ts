import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesExamesComponent } from './especialidades-exames.component';

describe('EspecialidadesExamesComponent', () => {
  let component: EspecialidadesExamesComponent;
  let fixture: ComponentFixture<EspecialidadesExamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialidadesExamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
