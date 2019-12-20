import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMessageConsultaComponent } from './display-message-consulta.component';

describe('DisplayMessageConsultaComponent', () => {
  let component: DisplayMessageConsultaComponent;
  let fixture: ComponentFixture<DisplayMessageConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMessageConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMessageConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
