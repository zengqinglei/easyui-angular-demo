import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVersionDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: AppVersionDashboardComponent;
  let fixture: ComponentFixture<AppVersionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVersionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVersionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
