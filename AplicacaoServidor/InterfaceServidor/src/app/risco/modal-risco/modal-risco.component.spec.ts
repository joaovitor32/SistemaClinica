import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRiscoComponent } from './modal-risco.component';

describe('ModalRiscoComponent', () => {
  let component: ModalRiscoComponent;
  let fixture: ComponentFixture<ModalRiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
