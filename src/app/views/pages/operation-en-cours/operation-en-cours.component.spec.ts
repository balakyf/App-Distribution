import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationEnCoursComponent } from './operation-en-cours.component';

describe('OperationEnCoursComponent', () => {
  let component: OperationEnCoursComponent;
  let fixture: ComponentFixture<OperationEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
