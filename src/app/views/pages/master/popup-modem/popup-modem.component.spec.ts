import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModemComponent } from './popup-modem.component';

describe('PopupModemComponent', () => {
  let component: PopupModemComponent;
  let fixture: ComponentFixture<PopupModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
