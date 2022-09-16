import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnliveRoutingModule } from './onlive-routing.module';
import { OnliveComponent } from './onlive.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    OnliveComponent
  ],
  imports: [
    CommonModule,
    OnliveRoutingModule,
    ComponentsModule
  ]
})
export class OnliveModule { }
