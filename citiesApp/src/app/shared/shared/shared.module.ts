import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { CelsiusPipe } from 'src/app/pipes/celsius.pipe';
import { CardModule, } from 'primeng/card';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderDirective } from '../../directives/loader.directive';


@NgModule({
  declarations: [
    LoaderComponent,
    CelsiusPipe,
    LoaderDirective
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule
  ],
  exports: [
    TabViewModule,
    CardModule,
    CelsiusPipe,
    LoaderComponent,
    LoaderDirective
  ]
})
export class SharedModule { }
