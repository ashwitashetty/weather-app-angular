import { Component, OnInit } from '@angular/core';
import { RecentsearchService } from 'src/services/recentsearch.service';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent implements OnInit {
  constructor( public recentsearchServices: RecentsearchService) { }

  ngOnInit(): void {
  }
  // removeall(){
  //   localStorage.removeItem('recentfinalkey');
  //   window.location.reload();
  // }
  clearRecentSearch() {
    this.recentsearchServices.clearRecentSearchList();
  }
}
