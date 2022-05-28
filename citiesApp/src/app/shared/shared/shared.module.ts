import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { CelsiusPipe } from 'src/app/pipes/celsius.pipe';
import { CardModule, } from 'primeng/card';



@NgModule({
  declarations: [
    CelsiusPipe
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CardModule,
  ],
  exports: [
    TabViewModule,
    CardModule,
    CelsiusPipe
  ]
})
export class SharedModule { }
