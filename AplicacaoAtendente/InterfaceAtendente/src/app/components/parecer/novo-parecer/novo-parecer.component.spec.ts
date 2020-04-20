import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoParecerComponent } from './novo-parecer.component';

describe('NovoParecerComponent', () => {
  let component: NovoParecerComponent;
  let fixture: ComponentFixture<NovoParecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoParecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoParecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
