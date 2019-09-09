import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { PunchListComponent } from '../app/main/punchList/punchList.component';
import { SearchComponent } from './main/punchList/search/search.component';
import { MapComponent } from './main/punchList/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AgmCoreModule.forRoot({
          apiKey: environment.googleMapsApiKey
        })
      ],
      declarations: [
        AppComponent,
        PunchListComponent,
        SearchComponent,
        MapComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Atlas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Atlas');
  });
});
