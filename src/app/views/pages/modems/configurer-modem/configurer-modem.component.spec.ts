import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerModemComponent } from './configurer-modem.component';

describe('ConfigurerModemComponent', () => {
  let component: ConfigurerModemComponent;
  let fixture: ComponentFixture<ConfigurerModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurerModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurerModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
