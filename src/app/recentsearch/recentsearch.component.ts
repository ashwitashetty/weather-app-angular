import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/services/home.service';
import { RecentsearchService } from 'src/services/recentsearch.service';
import { WeatherAppService } from 'src/services/weatherapp.service';
import { ClearAllComponent } from '../clear-all/clear-all.component';


@Component({
  selector: 'app-recentsearch',
  templateUrl: './recentsearch.component.html',
  styleUrls: ['./recentsearch.component.css'],
})
export class RecentsearchComponent implements OnInit {
  recentSearchCities: any = [];

  constructor(
    public weatherAppServices: WeatherAppService,
    public homeServices: HomeService,
    public recentsearchServices: RecentsearchService,
    public dialog:MatDialog
  ) {}
  ngOnInit(): void {
    this.recentsearchServices.getRecentSearchCities();
    let data: any = localStorage.getItem('recentSearchDetails');
    this.recentSearchCities = JSON.parse(data);
  }

  showWeatherDetails(cityData: any) {
    localStorage.setItem('weatherDetails', JSON.stringify(cityData));
    this.homeServices.refresh();
  }
  addToFavourite(cityData: any) {
    this.recentsearchServices.addtoFavouritefromRecentSearch(cityData);
  }
  removeFromFavourite(cityData: any) {
    this.recentsearchServices.removefromfavouriteinRecentSearchList(cityData);
  }

  // clearRecentSearch() {
  //   this.recentsearchServices.clearRecentSearchList();
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(ClearAllComponent, {
      width: '458px',height:'210px'
    });
  }
}
