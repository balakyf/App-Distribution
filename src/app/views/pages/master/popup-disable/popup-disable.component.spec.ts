import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDisableComponent } from './popup-disable.component';

describe('PopupDisableComponent', () => {
  let component: PopupDisableComponent;
  let fixture: ComponentFixture<PopupDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
