import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterModemComponent } from './ajouter-modem.component';

describe('AjouterModemComponent', () => {
  let component: AjouterModemComponent;
  let fixture: ComponentFixture<AjouterModemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterModemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterModemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
