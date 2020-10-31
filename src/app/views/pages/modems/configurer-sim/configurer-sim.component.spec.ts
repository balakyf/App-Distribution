import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerSimComponent } from './configurer-sim.component';

describe('ConfigurerSimComponent', () => {
  let component: ConfigurerSimComponent;
  let fixture: ComponentFixture<ConfigurerSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurerSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurerSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
