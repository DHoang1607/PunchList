import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule.forRoot({
          apiKey: environment.googleMapsApiKey
        })
      ],
      declarations: [ MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    component.punchLists = [
      { site: "McDonalds", lat: "51.678418", lng: "7.809007", discipline: "Electrical", status: "Completed"},
      { site: "Discount Tire", lat: "52.678418", lng: "8.809007", discipline: "Plumbing", status: "Canceled"},
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
