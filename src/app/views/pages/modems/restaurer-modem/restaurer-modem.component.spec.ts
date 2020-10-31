import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurerModemComponent } from './restaurer-modem.component';

describe('RestaurerModemComponent', () => {
  let component: RestaurerModemComponent;
  let fixture: ComponentFixture<RestaurerModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurerModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurerModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
