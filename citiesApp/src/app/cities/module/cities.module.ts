import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from '../cities.component';
import { CityService } from '../service/city.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { WeatherComponent } from '../components/weather/weather.component';
import { BusinessCardComponent } from '../components/business-card/business-card.component';
import { CityGuard } from '../service/city-guard.service';




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
      { path: '', redirectTo: '/cities/Napoli', pathMatch: 'full', component: CitiesComponent },
      { path: ':city', component: CitiesComponent, canActivate: [CityGuard] },
    ])
  ],
  providers: [
    CityService, CityGuard
  ]
})
export class CitiesModule { }
