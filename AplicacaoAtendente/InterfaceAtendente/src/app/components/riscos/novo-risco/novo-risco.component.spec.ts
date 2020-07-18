import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRiscoComponent } from './novo-risco.component';

describe('NovoRiscoComponent', () => {
  let component: NovoRiscoComponent;
  let fixture: ComponentFixture<NovoRiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
