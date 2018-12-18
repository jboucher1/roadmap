import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadtripDestinationComponent } from './roadtrip-destination.component';

describe('RoadtripDestinationComponent', () => {
  let component: RoadtripDestinationComponent;
  let fixture: ComponentFixture<RoadtripDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadtripDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadtripDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
