import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LonLat } from '../environment/cities.env';
import { BusinessRoot } from '../models/business';
import { WeatherRoot } from '../models/weather';
import { map } from "rxjs/operators";

@Injectable()
export class CityService {

  actualCity: string = 'Napoli';

  constructor(private http: HttpClient) { }

  getActualCity(city: string) {
    let weather = {
      lat: LonLat[city].lat,
      lon: LonLat[city].lon,
      appid: environment.weather,
      units: 'metric',
      lang: 'it'
    }
    const httpParams = new HttpParams({ fromObject: weather });
    return this.http.get<WeatherRoot>(`https://api.openweathermap.org/data/2.5/weather`, { params: httpParams });
  }

  getBusiness(city) {
    let business = {
      location: city
    }
    const httpParams = new HttpParams({ fromObject: business });
    const httpHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + environment.yelp })
    return this.http.get<BusinessRoot>(`https://api.yelp.com/v3/businesses/search`, { params: httpParams, headers: httpHeaders }).pipe(map((res: BusinessRoot) => { return res.businesses }));
  }
}
function tap(): import("rxjs").OperatorFunction<WeatherRoot, unknown> {
  throw new Error('Function not implemented.');
}

