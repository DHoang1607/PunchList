import { Component, Input, OnInit } from '@angular/core';
import { PunchList } from '../model';

@Component({
  selector: 'punchList-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() punchLists: Array<PunchList>;

  selectedPunchList: PunchList;
  constructor(){ }

  ngOnInit() {
  }

  ngOnChanges() {
    this.selectedPunchList = this.punchLists[0];
  }

  onSelect(punchList: PunchList): void {
    this.selectedPunchList = punchList;
  }
  
  goPrevNext(direction: string) {
    var addition = (direction == "prev") ? -1 : 1;

    var index = this.punchLists.indexOf(this.selectedPunchList);

    var goTo = index + addition;

    if (goTo >= this.punchLists.length) {
      goTo = 0;
    }
    if (goTo < 0) {
      goTo = this.punchLists.length - 1;
    }

    this.selectedPunchList = this.punchLists[goTo];
  }
}







