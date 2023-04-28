import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/services/favourite.service';

@Component({
  selector: 'app-remove-all',
  templateUrl: './remove-all.component.html',
  styleUrls: ['./remove-all.component.css']
})
export class RemoveAllComponent  implements OnInit {

  constructor(public favouriteServices: FavouriteService ) { }

  ngOnInit(): void {
  }
  // removeall(){
  //   // localStorage.removeItem('favData');
    
  //   window.location.reload();
  // }
    clearFavouriteCities() {
    this.favouriteServices.clearFavouriteCityList();
  }
}