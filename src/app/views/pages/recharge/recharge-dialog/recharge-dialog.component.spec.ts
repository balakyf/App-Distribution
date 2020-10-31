import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeDialogComponent } from './recharge-dialog.component';

describe('RechargeDialogComponent', () => {
  let component: RechargeDialogComponent;
  let fixture: ComponentFixture<RechargeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
