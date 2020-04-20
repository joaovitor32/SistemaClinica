import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscosComponent } from './riscos.component';

describe('RiscosComponent', () => {
  let component: RiscosComponent;
  let fixture: ComponentFixture<RiscosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
