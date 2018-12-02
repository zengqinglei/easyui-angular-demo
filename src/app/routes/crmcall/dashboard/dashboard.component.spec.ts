import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCallDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: CrmCallDashboardComponent;
  let fixture: ComponentFixture<CrmCallDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCallDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCallDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
