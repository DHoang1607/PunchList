import { Component, OnInit, Input } from '@angular/core';
import { PunchList } from '../model';

@Component({
  selector: 'punchList-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() punchLists: Array<PunchList>;

  centerLat: number;
  centerLng: number;

  clickedMarker(lat: number, lng: number) {
    console.log(`clicked the marker: ${lat}, ${lng}`)
  }

  constructor() { }

  ngOnInit() {
    var punchList = this.punchLists[0];

    this.centerLat = +punchList.lat;
    this.centerLng = +punchList.lng;
  }
}
