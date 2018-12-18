import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadtripDestinationsComponent } from './roadtrip-destinations.component';

describe('RoadtripDestinationsComponent', () => {
  let component: RoadtripDestinationsComponent;
  let fixture: ComponentFixture<RoadtripDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadtripDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadtripDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
