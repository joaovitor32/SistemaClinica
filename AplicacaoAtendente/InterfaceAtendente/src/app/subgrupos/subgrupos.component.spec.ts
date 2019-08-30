import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgruposComponent } from './subgrupos.component';

describe('SubgruposComponent', () => {
  let component: SubgruposComponent;
  let fixture: ComponentFixture<SubgruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubgruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
