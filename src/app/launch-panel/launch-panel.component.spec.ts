import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPanelComponent } from './launch-panel.component';

describe('LaunchPanelComponent', () => {
  let component: LaunchPanelComponent;
  let fixture: ComponentFixture<LaunchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
