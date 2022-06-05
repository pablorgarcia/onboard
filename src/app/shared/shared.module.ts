import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED } from './shared.constant';

@NgModule({
  declarations: SHARED,
  exports: SHARED,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
