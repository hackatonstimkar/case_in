import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignregComponent } from './signreg.component';

describe('SignregComponent', () => {
  let component: SignregComponent;
  let fixture: ComponentFixture<SignregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
