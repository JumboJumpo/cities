import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesList } from './environment/cities.env';
import {Location} from '@angular/common';
import { CityService } from './service/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.sass'],
})
export class CitiesComponent implements OnInit {

  activateRoute: string;
  activeIndex: number
  citiesList = CitiesList;
 

  constructor(private router: ActivatedRoute, private location: Location, private cityService: CityService) { 
    this.router.params.subscribe(params => {
      this.activateRoute = params['city'];
      this.cityService.actualCity = this.activateRoute;
    })
  }

  ngOnInit(): void {
    this.selectIndex()
  }

  changeCity(city:any) {
    this.location.replaceState('/cities/' + this.citiesList[city.index]);
    this.activateRoute = this.citiesList[city.index];
    this.cityService.actualCity = this.activateRoute;
  }

  selectIndex() {
    ( !this.activateRoute )? this.activeIndex = 0 : this.activeIndex = this.citiesList.indexOf(this.activateRoute);
  }

}
