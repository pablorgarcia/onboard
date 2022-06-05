import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnliveRoutingModule } from './onlive-routing.module';
import { OnliveComponent } from './onlive.component';


@NgModule({
  declarations: [
    OnliveComponent
  ],
  imports: [
    CommonModule,
    OnliveRoutingModule
  ]
})
export class AdminModule { }
