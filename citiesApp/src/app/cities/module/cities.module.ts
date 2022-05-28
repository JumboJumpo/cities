import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from '../cities.component';
import { CityService } from '../service/city.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { WeatherComponent } from '../components/weather/weather.component';
import { BusinessCardComponent } from '../components/business-card/business-card.component';




@NgModule({
  declarations: [
    CitiesComponent,
    WeatherComponent,
    BusinessCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CitiesComponent },
      { path: ':city', component: CitiesComponent }
    ])
  ],
  providers: [
    CityService
  ]
})
export class CitiesModule { }
