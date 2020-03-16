import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSalaComponent } from './nova-sala.component';

describe('NovaSalaComponent', () => {
  let component: NovaSalaComponent;
  let fixture: ComponentFixture<NovaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
