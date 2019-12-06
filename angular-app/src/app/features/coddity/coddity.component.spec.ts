import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoddityComponent } from './coddity.component';

describe('CoddityComponent', () => {
  let component: CoddityComponent;
  let fixture: ComponentFixture<CoddityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoddityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoddityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
