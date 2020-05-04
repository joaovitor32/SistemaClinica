import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsoComponent } from './new-aso.component';

describe('NewAsoComponent', () => {
  let component: NewAsoComponent;
  let fixture: ComponentFixture<NewAsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
