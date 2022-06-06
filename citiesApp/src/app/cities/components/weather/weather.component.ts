import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Business, BusinessRoot } from '../../models/business';
import { WeatherRoot } from '../../models/weather';
import { CityService } from '../../service/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {

  @Input() city: string;
  weatherRoot: WeatherRoot;
  businesses$: Observable<BusinessRoot | Business[]>;
  isLoading = false;

  constructor(private cityService: CityService) {
    this.cityService.isLoading$.subscribe(res => {
      this.isLoading = res;
    });
  }


  ngOnInit(): void {
    this.businesses$ = this.cityService.getBusiness(this.city)
    let tempCity: any = JSON.parse(localStorage.getItem(this.city))
    if (tempCity) {
      let now = new Date();
      let diffMins = Math.round(((now.getTime() - tempCity.time % 86400000) % 3600000) / 60000);
      if(diffMins < 15){
        this.weatherRoot = tempCity.weather;
        return
      } 
    }
    this.cityService.getActualCity(this.city).subscribe(res => {
      this.weatherRoot = res;
      let now = new Date().getTime();
      localStorage.setItem(this.city, JSON.stringify({ time:now, weather: {...this.weatherRoot}}));
    })
  }

}
