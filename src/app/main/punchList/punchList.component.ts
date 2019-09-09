import { Component, OnInit } from '@angular/core';
import { PunchList } from './model';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../shared/helper.service';



@Component({
  selector: 'app-punchList',
  templateUrl: './punchList.component.html',
  styleUrls: ['./punchList.component.scss']
})
export class PunchListComponent implements OnInit {
  punchLists = Array<PunchList>();

  constructor( private route: ActivatedRoute, public helperService: HelperService ) {}

  ngOnInit() {
    this.getPunchList();

    this.route.queryParams
      .subscribe(params => {
        if(!this.helperService.isEmptyObject(params)) {
          var newList = this.punchLists.filter(punchLists => punchLists.discipline == params.discipline && punchLists.status == params.state);

          this.punchLists = newList;
        }
    });
  }

  getPunchList() {
      this.punchLists = [
        { site: "McDonalds", lat: "51.678418", lng: "7.809007", discipline: "Electrical", status: "Completed"},
        { site: "Discount Tire", lat: "52.678418", lng: "8.809007", discipline: "Plumbing", status: "Canceled"},
        { site: "Walmart", lat: "52.678418", lng: "5.678418", discipline: "Electrical", status: "OnHold"},
        { site: "Target", lat: "51.678418", lng: "5.678418", discipline: "Electrical", status: "OnHold"},
        { site: "Kroger", lat: "51.125543", lng: "5.809007", discipline: "Plumbing", status: "InProgress"},
        { site: "Whataburger", lat: "51.985624", lng: "8.584297", discipline: "FoodService", status: "Completed"}
      ];
  };
}
