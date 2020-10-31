import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierModemComponent } from './modifier-modem.component';

describe('ModifierModemComponent', () => {
  let component: ModifierModemComponent;
  let fixture: ComponentFixture<ModifierModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
