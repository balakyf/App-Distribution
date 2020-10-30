import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerTransComponent } from './annuler-trans.component';

describe('AnnulerTransComponent', () => {
  let component: AnnulerTransComponent;
  let fixture: ComponentFixture<AnnulerTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulerTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
