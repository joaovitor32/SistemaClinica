import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreagendarComponent } from './preagendar.component';

describe('PreagendarComponent', () => {
  let component: PreagendarComponent;
  let fixture: ComponentFixture<PreagendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreagendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreagendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
