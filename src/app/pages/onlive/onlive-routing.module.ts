import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnliveComponent } from './onlive.component';

const routes: Routes = [
  {
    path: '',
    component: OnliveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnliveRoutingModule { }
