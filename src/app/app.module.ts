import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PunchListComponent } from './main/punchList/punchList.component';
import { SearchComponent } from './main/punchList/search/search.component';
import { MapComponent } from './main/punchList/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { HelperService } from './main/shared/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    PunchListComponent,
    SearchComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    })
  ],
  providers: [ HelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
