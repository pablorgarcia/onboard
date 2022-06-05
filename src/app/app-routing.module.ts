import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
/*  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'user',
    loadChildren: './pages/user/user.module#UserModule'
  },*/
  {
    path: '',
    loadChildren: () => import('./pages/onlive/onlive.module').then(m => m.AdminModule)
  },
  {
    path: 'onlive',
    loadChildren: () => import('./pages/onlive/onlive.module').then(m => m.AdminModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
//  canActivate: [AuthGuard],
//  loadChildren: './pages/admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
