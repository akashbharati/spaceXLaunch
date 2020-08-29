import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSatellitesComponent } from './launch-satellites.component';

describe('LaunchSatellitesComponent', () => {
  let component: LaunchSatellitesComponent;
  let fixture: ComponentFixture<LaunchSatellitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchSatellitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchSatellitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
