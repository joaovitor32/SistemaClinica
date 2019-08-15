import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoMedicoComponent } from './novo-medico.component';

describe('NovoMedicoComponent', () => {
  let component: NovoMedicoComponent;
  let fixture: ComponentFixture<NovoMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
