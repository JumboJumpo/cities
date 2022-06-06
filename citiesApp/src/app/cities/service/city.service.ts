import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LonLat } from '../environment/cities.env';
import { Business, BusinessRoot } from '../models/business';
import { WeatherRoot } from '../models/weather';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class CityService {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
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

  getBusiness(city): Observable<BusinessRoot | Business[]> {
    this.isLoading$.next(true);
    let business = {
      location: city
    }
    const httpParams = new HttpParams({ fromObject: business });
    const httpHeaders = new HttpHeaders({ 'Authorization': 'Bearer ' + environment.yelp, 'Connection': 'keep-alive' });
    return this.http.get<BusinessRoot>(`/api/yelp`, { headers: httpHeaders, params: httpParams }).pipe(tap(res => {
      this.isLoading$.next(false);
      return (res as BusinessRoot).businesses
    })
    );
  }
}


