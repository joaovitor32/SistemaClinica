import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASOComponent } from './aso.component';

describe('ASOComponent', () => {
  let component: ASOComponent;
  let fixture: ComponentFixture<ASOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
