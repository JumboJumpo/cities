import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/cities/Napoli', pathMatch: 'full' },
  { path: 'cities', loadChildren: () => import('./cities/module/cities.module').then(m => m.CitiesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
