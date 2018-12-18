import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadtripListComponent } from './roadtrip-list.component';

describe('RoadtripListComponent', () => {
  let component: RoadtripListComponent;
  let fixture: ComponentFixture<RoadtripListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadtripListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadtripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
