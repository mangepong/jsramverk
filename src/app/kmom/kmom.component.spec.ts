import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmomComponent } from './kmom.component';

describe('KmomComponent', () => {
  let component: KmomComponent;
  let fixture: ComponentFixture<KmomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
