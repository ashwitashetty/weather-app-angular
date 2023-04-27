
import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from 'src/services/weatherapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cityName: string = 'Udupi';
  cityResults: any = [];
  active = 'active';
  date: any;

  constructor(public weatherAppServices: WeatherAppService) {}

  ngOnInit(): void {
    this.date = new Date();
  }

  handleChange(event: string): void {
    this.weatherAppServices.searchCitiesApi(event).subscribe((cityResults: any) => {
      this.cityResults = cityResults;
    });
  }
  handleCityClick(city: any) {
    this.weatherAppServices.fetchWeatherData(city);
    this.cityResults = [];
  }
}
