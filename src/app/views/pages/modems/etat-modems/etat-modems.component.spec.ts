import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatModemsComponent } from './etat-modems.component';

describe('EtatModemsComponent', () => {
  let component: EtatModemsComponent;
  let fixture: ComponentFixture<EtatModemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatModemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatModemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
