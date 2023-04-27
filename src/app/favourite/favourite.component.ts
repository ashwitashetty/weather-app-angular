import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/services/favourite.service';
import { HomeService } from 'src/services/home.service';

import { WeatherAppService } from 'src/services/weatherapp.service';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favouriteCities: any = [];
  constructor(
    public weatherAppServices: WeatherAppService,
    public homeServices: HomeService,
    public favouriteServices: FavouriteService
  ) {}
  ngOnInit(): void {
    this.favouriteServices.getFavouriteCities();
    let data: any = localStorage.getItem('favouriteCities');
    this.favouriteCities = JSON.parse(data);
  }
  showWeatherDetails(cityData: any) {
    localStorage.setItem('weatherDetails', JSON.stringify(cityData));
    this.homeServices.refresh();
  }

  clearFavouriteCities() {
    this.favouriteServices.clearFavouriteCityList();
  }

  removeFromFavourite(cityData: any) {
    this.favouriteServices.removefromFavouriteList(cityData);
  }
}
