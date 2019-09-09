import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchListComponent } from './punchList.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PunchListComponent', () => {
  let component: PunchListComponent;
  let fixture: ComponentFixture<PunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        AgmCoreModule.forRoot({
          apiKey: environment.googleMapsApiKey
      })],
      declarations: [ 
        PunchListComponent,
        SearchComponent,
        MapComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
